# ⚡ Quick Start - Email Setup (5 Minutes)

Get your HelaPoint demo request emails working in 5 minutes!

## Step 1: Install Package (30 seconds)

```bash
npm install resend
```

## Step 2: Get API Key (2 minutes)

1. Go to [resend.com](https://resend.com)
2. Sign up (free)
3. Click **API Keys** → **Create API Key**
4. Copy your key (starts with `re_`)

## Step 3: Add Environment Variable (30 seconds)

Create `.env.local` file:

```bash
RESEND_API_KEY=re_paste_your_key_here
```

## Step 4: Test It! (1 minute)

```bash
# Start dev server
npm run dev

# Open browser → Click "Request Demo" → Fill form → Submit
# Check your email! 📧
```

## Step 5: Deploy (1 minute)

```bash
# Deploy to Vercel
vercel

# OR deploy to Netlify
netlify deploy --prod
```

**IMPORTANT:** Add `RESEND_API_KEY` to your deployment platform's environment variables!

---

## ✅ That's It!

Your landing page now sends real emails to `sales@helapoint.com`!

### What You Get:

✅ Sales notification emails
✅ Customer confirmation emails
✅ Beautiful HTML templates
✅ Error handling
✅ Email tracking
✅ Production-ready code

---

## 🔍 Verify It's Working

1. Check [resend.com/emails](https://resend.com/emails) for sent emails
2. Look for emails in your inbox
3. Check spam folder if not in inbox

---

## 🎯 Production Checklist

Before going live:

- [ ] API key added to Vercel/Netlify environment variables
- [ ] Test form submission in production
- [ ] Verify emails arrive at sales@helapoint.com
- [ ] (Optional) Verify domain in Resend for custom emails

---

## 📚 Need More Help?

- **Quick Setup**: `README-EMAIL-SETUP.md`
- **Full Guide**: `DEPLOYMENT.md`
- **Summary**: `EMAIL-IMPLEMENTATION-SUMMARY.md`
- **Test Script**: Run `npx tsx scripts/test-email.ts`

---

## 🐛 Troubleshooting

**Emails not sending?**
1. Check `.env.local` exists and has your API key
2. Restart dev server after adding `.env.local`
3. Check browser console for errors
4. Verify API key at [resend.com/api-keys](https://resend.com/api-keys)

**Still stuck?**
- Check Resend docs: [resend.com/docs](https://resend.com/docs)
- Join Discord: [discord.gg/resend](https://discord.gg/resend)

---

🚀 **Happy Launching!**
