(() => {
  const query = new URLSearchParams(location.search);
  const status = document.getElementById("status");
  const dimensions = document.getElementById("dimensions");
  const apple = document.getElementById("apple");
  const android = document.getElementById("android");
  const product = document.getElementById("product");
  const productLink = document.getElementById("product-link");
  const id = query.get("model");
  const validId = /^[a-z0-9_-]{1,64}$/i;
  const usdz = /^\/ar-models\/[a-z0-9_-]+\.usdz$/i;
  const glb = /^\/ar-models\/[a-z0-9_-]+\.glb$/i;
  const properMeasurement = value => typeof value === "number" && Number.isFinite(value) && value > 0 && value <= 1500;

  if (!id || !validId.test(id)) {
    status.textContent = "Open a product with an available AR model from the Samira Home Decor app.";
    return;
  }

  async function showModel() {
    const response = await fetch("/ar-models.json", { signal: AbortSignal.timeout(12000) });
    if (!response.ok) throw new Error();
    const catalogue = await response.json();
    const model = catalogue?.version === 1 && Array.isArray(catalogue.models) && catalogue.models.find(entry => entry?.id === id);
    if (!model || model.approved !== true || typeof model.productId !== "string" || !validId.test(model.productId) ||
        typeof model.usdz !== "string" || !usdz.test(model.usdz) || typeof model.glb !== "string" || !glb.test(model.glb) ||
        ![model.widthCm, model.depthCm, model.heightCm].every(properMeasurement)) {
      status.textContent = "This AR model is unavailable.";
      return;
    }

    const fallback = new URL("/view-in-my-room.html", location.origin);
    fallback.searchParams.set("model", id);
    fallback.searchParams.set("unavailable", "1");
    dimensions.textContent = model.widthCm + " W × " + model.depthCm + " D × " + model.heightCm + " H cm";
    dimensions.hidden = false;
    productLink.href = "/product.html?id=" + encodeURIComponent(model.productId);
    product.hidden = false;
    if (query.get("unavailable") === "1") {
      status.textContent = "AR couldn’t open on this device. You can still check the product dimensions.";
      return;
    }
    if (apple.relList.supports("ar")) {
      apple.href = model.usdz + "#allowsContentScaling=0";
      apple.hidden = false;
    } else if (/Android/i.test(navigator.userAgent)) {
      const params = new URLSearchParams({
        file: new URL(model.glb, location.origin).href,
        mode: "ar_only",
        resizable: "false",
      });
      android.href = "intent://arvr.google.com/scene-viewer/1.0?" + params +
        "#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;" +
        "S.browser_fallback_url=" + encodeURIComponent(fallback.href) + ";end;";
      android.hidden = false;
    } else {
      status.textContent = "Open this page in Safari on a compatible iPhone or iPad, or in Chrome on an AR-capable Android phone.";
      return;
    }
    status.textContent = "Point your camera at a well-lit floor and follow the placement prompts. Double-check measurements before ordering.";
  }

  showModel().catch(() => {
    status.textContent = "The AR model couldn’t be loaded. Please try again later.";
  });
})();
