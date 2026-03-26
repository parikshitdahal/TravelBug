# Launch Checklist

## Production Environment

Set these environment variables in your hosting provider before launch:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

Optional but recommended:

- `MAIL_TO` for the inbox that should receive booking/contact/custom trip emails
- `SITE_NAME` for the sender name used in outgoing emails

## Pre-Launch Checks

1. Run `npm run build` locally and confirm it passes.
2. Confirm all images/videos used in `public/` load correctly.
3. Verify production environment variables are set.
4. Deploy the current main branch.
5. Open the deployed site and test:
   - `/`
   - `/about`
   - `/destinations`
   - one district page
   - `/packages`
   - one package page
   - `/contacts`
   - `/custom-package`
6. Submit one real booking form.
7. Submit one real contact form.
8. Submit one real custom package request.
9. Confirm the emails arrive in the expected inbox.

## Post-Launch Monitoring

- Check deployment logs for API route errors.
- Watch for SMTP/authentication failures.
- Keep one backup inbox or forwarding rule for missed enquiries.
- Re-test forms after each production change that touches UI or API routes.

## Rollback Plan

1. Re-deploy the previous working production deployment.
2. Re-test all three form flows.
3. Review provider logs before pushing a new fix.
