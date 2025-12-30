# HelaPoint Email Integration Deployment Guide

This guide will help you set up the production-ready email functionality for the HelaPoint landing page.

## Prerequisites

- A [Resend](https://resend.com) account (free tier available)
- A deployment platform (Vercel, Netlify, or similar)
- A custom domain for HelaPoint (recommended for production)

## Step 1: Set Up Resend

### 1.1 Create a Resend Account
1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address

### 1.2 Add Your Domain
1. In the Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `helapoint.com`)
4. Add the provided DNS records to your domain registrar:
   - SPF record
   - DKIM record
   - DMARC record (optional but recommended)
5. Wait for verification (usually takes 5-10 minutes)

### 1.3 Get Your API Key
1. Go to **API Keys** in the Resend dashboard
2. Click **Create API Key**
3. Name it "HelaPoint Production" or similar
4. Copy the API key (starts with `re_`)
5. **Important:** Save this key securely - you won't be able to see it again!

## Step 2: Install Dependencies

Add Resend to your project:

```bash
npm install resend
# or
yarn add resend
# or
pnpm add resend
```

## Step 3: Configure Environment Variables

### For Vercel:
1. Go to your project settings in Vercel
2. Navigate to **Environment Variables**
3. Add the following variables:
   - `RESEND_API_KEY`: Your Resend API key from Step 1.3
   - `FROM_EMAIL`: `noreply@helapoint.com` (or your verified domain)
   - `TO_EMAIL`: `sales@helapoint.com`

### For Netlify:
1. Go to **Site settings** → **Environment variables**
2. Add the same variables as above

### For Local Development:
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your actual API key in `.env.local`
3. **Never commit `.env.local` to git!**

## Step 4: Deployment Configuration

### For Vercel (Recommended)
The API route at `/api/send-demo-request.ts` will automatically work as a serverless function.

#### vercel.json (optional):
```json
{
  "functions": {
    "api/send-demo-request.ts": {
      "maxDuration": 10
    }
  }
}
```

### For Netlify
Create a `netlify.toml` file:

```toml
[build]
  functions = "netlify/functions"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

Then move the API file:
```bash
mkdir -p netlify/functions
mv api/send-demo-request.ts netlify/functions/
```

## Step 5: Testing

### Test in Development:
1. Start your dev server:
   ```bash
   npm run dev
   ```
2. Click "Request Demo" on your site
3. Fill out and submit the form
4. Check the console for any errors
5. Check your email (both sales@helapoint.com and the customer email)

### Test in Production:
1. Deploy to your platform
2. Submit a test demo request
3. Verify emails are received at sales@helapoint.com
4. Check Resend dashboard for email logs

## Step 6: Monitoring & Logs

### Resend Dashboard
- View all sent emails at [resend.com/emails](https://resend.com/emails)
- Monitor delivery rates
- Check for bounces or failures

### Platform Logs
- **Vercel**: Check function logs in your project dashboard
- **Netlify**: View function logs in the Netlify UI

## Email Sending Flow

When a user submits the demo request form:

1. **User fills form** → Frontend validates required fields
2. **POST request** → Sends data to `/api/send-demo-request`
3. **Server processes** → Validates data and formats email
4. **Resend API** → Sends two emails:
   - Sales notification to `sales@helapoint.com`
   - Confirmation to customer's email
5. **Success response** → Shows success message to user

## Customization

### Change Email Templates
Edit `/api/send-demo-request.ts` to customize:
- Email subject lines
- HTML templates
- From/To addresses
- Additional fields

### Add Email Analytics
Integrate with your analytics platform by adding tracking parameters to email links.

## Troubleshooting

### Emails not being received
- ✅ Verify domain is confirmed in Resend dashboard
- ✅ Check spam/junk folders
- ✅ Verify environment variables are set correctly
- ✅ Check Resend email logs for errors

### API errors
- ✅ Ensure API key is valid and not expired
- ✅ Check function logs for specific error messages
- ✅ Verify request payload includes all required fields

### Rate Limits
Resend free tier limits:
- 100 emails/day
- 3,000 emails/month

For higher volume, upgrade to a paid plan.

## Security Best Practices

1. **Never expose API key** - Always use environment variables
2. **Validate input** - Server-side validation is already implemented
3. **Rate limiting** - Consider adding rate limiting to prevent abuse
4. **CORS** - Configure allowed origins if needed
5. **Domain verification** - Always use verified domains for sending

## Support

- Resend Documentation: [resend.com/docs](https://resend.com/docs)
- Resend Discord: [discord.gg/resend](https://discord.gg/resend)
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Netlify Support: [netlify.com/support](https://netlify.com/support)

## Cost Estimate

- **Resend Free Tier**: 100 emails/day, 3,000/month - **$0/month**
- **Resend Pro**: 50,000 emails/month - **$20/month**
- **Vercel/Netlify**: Serverless functions included in free tier

For a landing page with moderate traffic, the free tier should be sufficient initially.
