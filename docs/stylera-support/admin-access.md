# Stylera owner-only administrator access

Confirmed intended admin Google account: blessingekeokoro5@gmail.com

## Required implementation
- Firebase Authentication Google sign-in for admin UI only.
- On first successful login, record the Firebase Auth UID securely; bind that UID to owner access via server-side configuration or privileged custom claims.
- Backend must verify Firebase ID tokens (signature, issuer, audience, expiry) and require the explicitly allowed UID on every admin API request. Email address alone is not sufficient for authorization.
- Never grant admin privileges merely because a Google account can authenticate.
- No public Firestore client access. Continue deny-all Firestore rules until audited backend APIs and admin roles are tested.
- Prevent admin credentials and service-account keys from appearing in frontend bundles, GitHub or screenshots.
- Restrict OAuth authorized domains to verified staging host(s), then add production host only when ready.
- Add audit logging, short sessions, CSRF protections as appropriate, rate limits and revocation handling.
- Verify signed-out, non-admin and revoked-user access are denied.
- Do not change the live site until explicitly approved.

Status: configuration requirements documented only. Admin login not implemented or deployed.
