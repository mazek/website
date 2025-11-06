# Brevo Newsletter Integration Setup

This document provides instructions for setting up the Brevo newsletter signup functionality on the website.

## Overview

The newsletter integration allows visitors to subscribe to your mailing list directly from the homepage using a Double Opt-In (DOI) flow. This ensures GDPR compliance and better email deliverability by requiring users to confirm their subscription via email.

## Features

- **Double Opt-In (DOI) flow** - Users must confirm subscription via email
- Email validation and error handling
- Duplicate subscriber detection
- Success and error feedback messages
- Responsive design with purple branding
- Bot protection with honeypot field
- GDPR compliant

## Setup Instructions

### 1. Create a Brevo Account

1. Visit [Brevo](https://www.brevo.com/) and create a free account
2. Complete the account verification process

### 2. Get Your API Key

1. Log in to your Brevo dashboard
2. Navigate to **Settings** > **API Keys** or visit: https://app.brevo.com/settings/keys/api
3. Create a new API key with the following permissions:
   - Contacts: Read & Write
4. Copy the generated API key

### 3. Create a Contact List

1. In your Brevo dashboard, go to **Contacts** > **Lists**
2. Create a new list (or use an existing one)
3. Note the List ID (visible in the list details)

### 4. Create a Double Opt-In (DOI) Email Template

This is a **required step** for the DOI flow to work.

1. In your Brevo dashboard, go to **Campaigns** > **Templates** > **Email templates**
2. Click **Create a new template**
3. Choose **Transactional email** template type
4. Design your confirmation email with:
   - A clear message explaining the user needs to confirm their subscription
   - A confirmation button/link (Brevo automatically adds the DOI confirmation URL)
   - Your branding and styling
5. Save the template and note the **Template ID** (visible in the template details or URL)

**Template Example:**

```
Subject: Please confirm your newsletter subscription

Hi there!

Thank you for subscribing to our newsletter. To complete your subscription and start receiving updates, please confirm your email address by clicking the button below:

[Confirm Subscription Button]

If you didn't request this subscription, you can safely ignore this email.

Best regards,
Your Team
```

**Important:** The template must include the DOI confirmation link/button that Brevo provides in the template editor.

### 5. Configure Environment Variables

1. Create a `.env` file in the project root (copy from `.env.example`):

```bash
cp .env.example .env
```

2. Add your Brevo credentials:

```env
BREVO_API_KEY=your_actual_api_key_here
BREVO_LIST_ID=2
BREVO_DOI_TEMPLATE_ID=1
BREVO_REDIRECTION_URL=https://bitropy.io/thank-you
```

Replace the values:
- `your_actual_api_key_here` - Your actual Brevo API key
- `2` - Your actual List ID (if different)
- `1` - Your DOI template ID from step 4
- `https://bitropy.com/thank-you` - URL where users are redirected after confirming (optional)

### 6. Test the Integration

1. Start the development server:

```bash
pnpm dev
```

2. Open your browser and navigate to `http://localhost:4321` (or the displayed port)
3. Scroll to the newsletter section
4. Enter a test email address and click "Subscribe"
5. You should see a message: "Please check your email to confirm your subscription!"
6. Check your email inbox for the DOI confirmation email
7. Click the confirmation link in the email
8. You should be redirected to your configured `BREVO_REDIRECTION_URL`
9. Check your Brevo dashboard to verify the contact was added to the list with "confirmed" status

## File Structure

```
src/
├── components/
│   └── newsletter.astro          # Newsletter signup component
├── pages/
│   ├── api/
│   │   └── newsletter.ts         # API endpoint for Brevo integration
│   └── index.astro               # Main page (includes newsletter)
```

## API Endpoint

**Endpoint:** `POST /api/newsletter`

**Flow Type:** Double Opt-In (DOI)

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response (Success - DOI email sent):**
```json
{
  "success": true,
  "message": "Please check your email to confirm your subscription!"
}
```

**Response (Already Subscribed):**
```json
{
  "success": true,
  "message": "You're already subscribed to our newsletter!"
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Failed to subscribe. Please try again later."
}
```

**DOI Flow:**
1. User submits email through the form
2. API creates a DOI contact in Brevo
3. Brevo sends a confirmation email using your DOI template
4. User clicks the confirmation link in the email
5. User is redirected to your `BREVO_REDIRECTION_URL`
6. Contact is added to your list with "confirmed" status

## Security & Compliance Features

- **Double Opt-In (DOI)** - Ensures GDPR compliance and verified email addresses
- Email validation on client and server side
- Bot protection using honeypot field
- Safe text rendering using `textContent` to prevent XSS
- Error handling for API failures
- Environment variable validation
- Users must explicitly confirm subscription via email

## Customization

### Styling

The newsletter component uses Tailwind CSS classes and can be customized in `src/components/newsletter.astro`:
- Background color: `bg-purple-50`
- Button styling: Uses the Button component
- Text colors: `text-gray-900`, `text-gray-600`, etc.

### Content

Edit the heading and description in `src/components/newsletter.astro`:

```astro
<h2 class="text-3xl font-bold text-gray-900 mb-4">
  Stay Updated
</h2>
<p class="text-lg text-gray-600 mb-8">
  Subscribe to our newsletter for the latest insights...
</p>
```

### List ID

To use a different Brevo contact list, update the `BREVO_LIST_ID` in your `.env` file.

## Troubleshooting

### Newsletter not working
- Verify your `.env` file exists and contains valid credentials
- Check browser console for JavaScript errors
- Check server logs for API errors

### DOI confirmation email not received
- Check spam/junk folder
- Verify the DOI template is properly configured in Brevo
- Ensure `BREVO_DOI_TEMPLATE_ID` matches your template ID
- Check Brevo logs for email delivery issues
- Verify the DOI template has a confirmation button/link

### Contacts not appearing in Brevo
- Remember: With DOI flow, contacts appear only **after** they click the confirmation link
- Check for contacts with "unconfirmed" status in Brevo
- Verify the List ID is correct
- Check API key has "Contacts: Read & Write" permissions
- Log in to Brevo dashboard and check the specific list

### "Newsletter service is not configured" error
- Ensure `BREVO_API_KEY` is set in `.env` file
- Ensure `BREVO_DOI_TEMPLATE_ID` is set in `.env` file
- Restart the development server after adding environment variables

### "Newsletter service is not properly configured" error
- This means `BREVO_DOI_TEMPLATE_ID` is missing or invalid
- Create a DOI template in Brevo (see step 4 above)
- Add the template ID to your `.env` file

## Production Deployment

When deploying to production (Vercel):

1. Add environment variables to your hosting platform:
   - `BREVO_API_KEY` (required)
   - `BREVO_LIST_ID` (required)
   - `BREVO_DOI_TEMPLATE_ID` (required)
   - `BREVO_REDIRECTION_URL` (optional - where users go after confirming)

2. Ensure the API endpoint is accessible at `/api/newsletter`

3. Ensure Astro is configured with `output: "server"` in `astro.config.mjs`

4. Test the newsletter signup after deployment:
   - Submit a test email
   - Check for the DOI confirmation email
   - Click the confirmation link
   - Verify redirection works
   - Verify contact appears in Brevo with "confirmed" status

## Additional Resources

- [Brevo API Documentation](https://developers.brevo.com/)
- [Brevo DOI API Reference](https://developers.brevo.com/reference/createdoicontact)
- [Brevo Node.js SDK](https://github.com/getbrevo/brevo-node)
- [Astro API Routes](https://docs.astro.build/en/core-concepts/endpoints/)
- [GDPR Compliance Guide](https://www.brevo.com/legal/gdpr/)

## Why Double Opt-In (DOI)?

Double Opt-In is considered the best practice for email marketing because:

1. **GDPR Compliance** - Ensures explicit consent from subscribers
2. **Better Deliverability** - Reduces spam complaints and bounces
3. **Higher Quality List** - Only engaged users who truly want to receive emails
4. **Legal Protection** - Proof of consent for regulatory compliance
5. **Brand Trust** - Shows respect for user privacy and preferences

With DOI, you build a more engaged and legally compliant email list.
