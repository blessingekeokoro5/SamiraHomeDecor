# Stylera Firebase integration — staging checklist

Confirmed Firebase project ID: `samira-home-decor`.

## Current state
- Firebase configuration and deny-all Firestore rules are staged in the feature branch only.
- **Nothing has been deployed to Firebase or Netlify.**
- The rules intentionally deny all client access. Do not deploy them over a working Firestore app without reviewing existing collections and rules; replacing an existing ruleset could disrupt other features.

## Before deployment
1. Open Firebase Console > project `samira-home-decor`.
2. Verify whether Cloud Firestore is already enabled and whether existing site features depend on its rules. Back up existing Firestore rules first.
3. Verify Authentication > Sign-in method > Email/Password (or the chosen secure provider) and identify the intended owner account UID. Do not commit or share passwords or private keys.
4. Configure Netlify server-side credentials securely. Prefer workload identity or scoped service credentials; never put Admin SDK credentials in public JS, HTML or GitHub.
5. Define a server-side allowlist of admin UIDs, and enforce Firebase ID-token verification on every privileged API endpoint. A client-side role check is not sufficient.
6. Choose an Australia-hosted Firestore location if creating a new database, when available and appropriate. An existing database location cannot be changed in place.
7. Implement public chat and ticket endpoints through rate-limited Netlify functions with validation, spam protections, and customer access tokens.
8. Add visitor consent, data minimisation, retention, deletion and privacy disclosures before analytics activation.
9. Test Firestore rules using the emulator and verify all anonymous and non-admin requests are denied.
10. Test on a preview deployment and verify checkout and existing room-styling workflows still work.

## Planned collections (not yet created)
- `stylera_conversations`: limited customer chat data, created through validated backend.
- `stylera_tickets`: ticket status, assigned agent and minimal customer details.
- `stylera_visitors`: consented, short-retention pseudonymous events.
- `stylera_admin_audit`: restricted operational audit trail.

## Cost controls
- Set a Cloud Billing budget and alerts; budget alerts are not hard spending caps.
- Rate-limit requests and cap AI output and daily request volumes server-side.
- Keep an emergency disable switch for AI and analytics.
