# 📧 HelaPoint Email Integration - Quick Setup Guide

This landing page includes **production-ready email functionality** using [Resend](https://resend.com) to send demo requests to `sales@helapoint.com`.

## 🚀 Quick Start (5 minutes)

### 1. Install Resend Package

```bash
npm install resend
# or
yarn add resend
# or
pnpm add resend
```

### 2. Get Your Resend API Key

1. **Sign up** at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Go to **API Keys** → **Create API Key**
3. Copy your API key (starts with `re_`)

### 3. Add Environment Variable

Create a `.env.local` file in your project root:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit this file to git! It's already in `.gitignore`.

### 4. Verify Your Domain (Production Only)

For production, you need to verify your domain in Resend:

1. Go to **Domains** in Resend dashboard
2. Click **Add Domain** and enter `helapoint.com`
3. Add the DNS records they provide to your domain registrar
4. Wait for verification (5-10 minutes)

**For Testing:** You can skip this step and use Resend's test domain.

### 5. Deploy

Deploy to **Vercel** (recommended) or **Netlify**:

```bash
# Vercel
vercel

# Or Netlify
netlify deploy --prod
```

Make sure to add your `RESEND_API_KEY` environment variable in your deployment platform's settings!

## ✅ What's Included

### Two Emails Are Sent Automatically:

1. **Sales Notification Email** → `sales@helapoint.com`
   - Beautiful HTML template with all form data
   - Priority badge for quick identification
   - Direct reply-to customer email

2. **Customer Confirmation Email** → Customer's email
   - Thank you message
   - 24-hour response time guarantee
   - Link back to HelaPoint website

### Features:

✅ Production-ready code (no simulation)
✅ Error handling & validation
✅ Loading states & animations
✅ Mobile responsive
✅ HTML email templates
✅ Email tracking via Resend dashboard
✅ Automatic retry on failure

## 📁 Files You Need

- `/api/send-demo-request.ts` - Serverless function (already created)
- `/components/DemoModal.tsx` - Frontend form (already created)
- `.env.local` - Your API key (you create this)

## 🧪 Testing

### Local Testing:
```bash
npm run dev
```

1. Open your browser to `localhost:3000`
2. Click any "Request Demo" button
3. Fill out the form and submit
4. Check your email!

### Check Logs:
- **Resend Dashboard**: [resend.com/emails](https://resend.com/emails)
- **Browser Console**: For any errors
- **Vercel/Netlify Logs**: For serverless function logs

## 🔧 Customization

### Change Email Addresses:

In `/api/send-demo-request.ts`:

```typescript
to: ['sales@helapoint.com'],  // Change this
from: 'HelaPoint <noreply@helapoint.com>',  // And this
```

### Customize Email Templates:

Edit the HTML in `/api/send-demo-request.ts`:
- Sales notification template (line ~30)
- Customer confirmation template (line ~120)

### Add More Form Fields:

1. Add field to `DemoModal.tsx` form
2. Add field to `formData` state
3. Include in API request
4. Display in email template

## 💰 Pricing

| Tier | Emails/Month | Price |
|------|--------------|-------|
| **Free** | 3,000 | $0 |
| **Pro** | 50,000 | $20 |
| **Enterprise** | Custom | Contact |

For a landing page, the **free tier is usually sufficient**.

## 🔒 Security Notes

- ✅ API key is server-side only (never exposed to browser)
- ✅ Environment variables are encrypted in Vercel/Netlify
- ✅ Server-side validation prevents spam
- ✅ CORS is automatically handled
- ✅ No sensitive data is logged

## ⚡ Deployment Platforms

### Vercel (Recommended)

1. Connect your GitHub repo
2. Add `RESEND_API_KEY` in **Settings → Environment Variables**
3. Deploy!

The `/api/send-demo-request.ts` file automatically becomes a serverless function.

### Netlify

1. Create `netlify.toml`:
```toml
[build]
  functions = "netlify/functions"
```

2. Move API file:
```bash
mkdir -p netlify/functions
mv api/send-demo-request.ts netlify/functions/
```

3. Add environment variable in Netlify dashboard
4. Deploy!

## 📊 Email Tracking

Every sent email is tracked in the Resend dashboard:
- ✅ Delivery status
- ✅ Open rates (optional)
- ✅ Click tracking (optional)
- ✅ Bounce handling
- ✅ Spam reports

## 🐛 Troubleshooting

### "Failed to send email"
- ✅ Check API key is correct
- ✅ Verify environment variable is set
- ✅ Check Resend dashboard for errors
- ✅ Make sure you're not over rate limit

### Emails going to spam
- ✅ Verify your domain in Resend
- ✅ Add SPF, DKIM, DMARC records
- ✅ Avoid spam trigger words
- ✅ Use a professional from address

### API endpoint not found
- ✅ Make sure `/api` folder is in project root
- ✅ Check file name is exactly `send-demo-request.ts`
- ✅ Restart dev server after creating file

## 📞 Support

- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **Resend Discord**: [discord.gg/resend](https://discord.gg/resend)
- **API Reference**: [resend.com/docs/api-reference](https://resend.com/docs/api-reference)

## 🎯 Next Steps

1. Test locally with your API key
2. Customize email templates to match your brand
3. Add domain verification for production
4. Monitor emails in Resend dashboard
5. Consider adding rate limiting for extra security

---

**That's it!** Your HelaPoint landing page now has production-ready email functionality. 🎉

Questions? Check the full deployment guide in `DEPLOYMENT.md`.
