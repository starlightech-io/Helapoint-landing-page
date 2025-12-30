# ✅ HelaPoint Email Setup Checklist

Complete this checklist to get your production-ready email system working.

---

## 📦 Part 1: Installation (2 minutes)

### Step 1.1: Install Dependencies
```bash
npm install resend
```
- [ ] Resend package installed
- [ ] No installation errors

### Step 1.2: Verify Package Installation
```bash
npm list resend
```
- [ ] Shows `resend@3.x.x` or higher

---

## 🔑 Part 2: Resend Account Setup (3 minutes)

### Step 2.1: Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Click "Sign Up"
3. Verify your email

- [ ] Account created
- [ ] Email verified
- [ ] Logged into Resend dashboard

### Step 2.2: Get API Key
1. In Resend dashboard, click **API Keys**
2. Click **Create API Key**
3. Name it: "HelaPoint Production"
4. Copy the key (starts with `re_`)

- [ ] API key created
- [ ] API key copied and saved securely
- [ ] Key starts with `re_`

### Step 2.3: Save API Key Securely
**Important:** Save your API key somewhere safe. You won't be able to see it again!

- [ ] API key saved in password manager or secure location

---

## ⚙️ Part 3: Local Configuration (1 minute)

### Step 3.1: Create Environment File
Create `.env.local` file in project root:

```bash
# Create the file
touch .env.local

# Or on Windows:
type nul > .env.local
```

- [ ] `.env.local` file created

### Step 3.2: Add API Key to Environment File
Open `.env.local` and add:

```
RESEND_API_KEY=re_paste_your_actual_key_here
```

- [ ] API key added to `.env.local`
- [ ] No spaces around the `=` sign
- [ ] No quotes around the key
- [ ] File saved

### Step 3.3: Verify .gitignore
Check that `.gitignore` includes:

```
.env.local
.env
```

- [ ] `.env.local` is in `.gitignore`
- [ ] Won't accidentally commit API key

---

## 🧪 Part 4: Local Testing (2 minutes)

### Step 4.1: Start Development Server
```bash
npm run dev
```

- [ ] Server started without errors
- [ ] Accessible at `http://localhost:3000`

### Step 4.2: Test the Form
1. Open browser to `http://localhost:3000`
2. Click any "Request Demo" button
3. Fill out the form with test data:
   - Name: `Test User`
   - Email: Your actual email
   - Phone: `+1234567890`
   - Store Name: `Test Store`
   - Store Type: `Grocery / Mini-mart`
   - Message: `This is a test`
4. Click "Send Demo Request"

- [ ] Modal opens correctly
- [ ] Form accepts input
- [ ] Submit button shows loading state
- [ ] Success message appears
- [ ] Modal closes automatically

### Step 4.3: Verify Emails Received
Check your email inbox:

- [ ] Received confirmation email to your email
- [ ] Email looks professional
- [ ] Links in email work

Check sales@helapoint.com inbox:

- [ ] Received sales notification email
- [ ] Contains all form data
- [ ] Reply-to works correctly

### Step 4.4: Test Error Handling
Submit form with invalid data:

- [ ] Email validation works
- [ ] Required fields enforced
- [ ] Error messages display correctly

---

## 🧪 Part 5: Run Test Script (Optional)

Run the email test script:

```bash
npm run test-email
```

- [ ] Script runs without errors
- [ ] Shows "SUCCESS!" message
- [ ] Test email visible in Resend dashboard

---

## 🚀 Part 6: Production Deployment

### Step 6.1: Choose Deployment Platform

**Option A: Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Option B: Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

- [ ] Deployment platform chosen
- [ ] CLI tool installed

### Step 6.2: Add Environment Variables to Platform

**For Vercel:**
1. Go to project in Vercel dashboard
2. Settings → Environment Variables
3. Add: `RESEND_API_KEY` = `your_api_key`
4. Apply to all environments

**For Netlify:**
1. Go to Site settings
2. Environment variables
3. Add: `RESEND_API_KEY` = `your_api_key`

- [ ] Environment variable added
- [ ] Saved changes

### Step 6.3: Deploy
```bash
# Vercel
vercel --prod

# OR Netlify
netlify deploy --prod
```

- [ ] Deployment started
- [ ] Build completed successfully
- [ ] Deployment URL received

### Step 6.4: Test Production
1. Go to your production URL
2. Submit a test demo request
3. Check emails

- [ ] Production site loads
- [ ] Form submits successfully
- [ ] Emails received

---

## 🎯 Part 7: Domain Configuration (Production Only)

### Step 7.1: Verify Domain in Resend
1. Go to Resend dashboard → **Domains**
2. Click **Add Domain**
3. Enter: `helapoint.com`

- [ ] Domain added to Resend

### Step 7.2: Add DNS Records
Add these records to your domain DNS:

**SPF Record:**
- Type: `TXT`
- Name: `@`
- Value: (provided by Resend)

**DKIM Record:**
- Type: `TXT`
- Name: (provided by Resend)
- Value: (provided by Resend)

**DMARC Record (Optional):**
- Type: `TXT`
- Name: `_dmarc`
- Value: `v=DMARC1; p=none;`

- [ ] SPF record added
- [ ] DKIM record added
- [ ] DMARC record added (optional)
- [ ] DNS changes saved

### Step 7.3: Wait for Verification
Wait 5-10 minutes for DNS propagation

- [ ] Domain verified in Resend dashboard
- [ ] Green checkmark next to domain

### Step 7.4: Update From Email
In `/api/send-demo-request.ts`, change:

```typescript
from: 'HelaPoint <noreply@helapoint.com>'
```

- [ ] From email updated to verified domain
- [ ] Code committed and deployed

---

## ✅ Part 8: Final Verification

### Step 8.1: End-to-End Test
1. Go to production site
2. Submit real demo request
3. Check all emails received

- [ ] Form works in production
- [ ] Sales email received at sales@helapoint.com
- [ ] Customer confirmation received
- [ ] Emails not in spam
- [ ] All links work

### Step 8.2: Check Resend Dashboard
Go to [resend.com/emails](https://resend.com/emails)

- [ ] See sent emails in dashboard
- [ ] Delivery status is "Delivered"
- [ ] No errors or bounces

### Step 8.3: Test Error Scenarios
1. Try submitting with network offline
2. Try with invalid email format
3. Check error messages display

- [ ] Error handling works
- [ ] User-friendly error messages
- [ ] App doesn't crash

---

## 📊 Part 9: Monitoring Setup

### Step 9.1: Set Up Email Alerts
In Resend dashboard, configure alerts for:

- [ ] Failed deliveries
- [ ] High bounce rate
- [ ] Approaching rate limit

### Step 9.2: Monitor Usage
Check Resend dashboard weekly for:

- [ ] Email send volume
- [ ] Delivery rates
- [ ] Bounce rates

---

## 🎉 Part 10: Launch Checklist

Before announcing to the world:

- [ ] All tests passing
- [ ] Emails delivering reliably
- [ ] Error handling tested
- [ ] Mobile responsive
- [ ] Fast load times
- [ ] Analytics tracking (if needed)
- [ ] Legal pages linked (privacy, terms)
- [ ] Contact information correct
- [ ] SSL certificate active (https)
- [ ] Custom domain working

---

## 📝 Documentation Review

Have you reviewed:

- [ ] `QUICK-START.md` - Quick reference
- [ ] `README-EMAIL-SETUP.md` - Detailed setup guide
- [ ] `DEPLOYMENT.md` - Deployment instructions
- [ ] `EMAIL-IMPLEMENTATION-SUMMARY.md` - What was built
- [ ] `.env.example` - Environment variable template

---

## 🔧 Troubleshooting Quick Reference

### Problem: Emails not sending
**Solution:**
1. ✅ Check API key is correct in `.env.local`
2. ✅ Restart dev server
3. ✅ Check browser console for errors
4. ✅ Verify Resend account is active

### Problem: Emails in spam
**Solution:**
1. ✅ Verify domain in Resend
2. ✅ Add SPF/DKIM records
3. ✅ Use verified from address
4. ✅ Avoid spam trigger words

### Problem: API endpoint not found
**Solution:**
1. ✅ Check `/api/send-demo-request.ts` exists
2. ✅ Verify file name is exact
3. ✅ Restart dev server
4. ✅ Check deployment logs

---

## 📞 Support Resources

If you get stuck:

- [ ] Check Resend docs: [resend.com/docs](https://resend.com/docs)
- [ ] Join Resend Discord: [discord.gg/resend](https://discord.gg/resend)
- [ ] Review Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- [ ] Check Netlify docs: [netlify.com/docs](https://netlify.com/docs)

---

## ✨ Completion

### All Done! 🎉

When all items are checked:

- [ ] **Email system is production-ready**
- [ ] **Receiving demo requests at sales@helapoint.com**
- [ ] **Customers receiving confirmations**
- [ ] **Everything monitored and working**

---

**Congratulations!** Your HelaPoint landing page is now live with a professional, production-ready email system! 🚀

**Next Steps:**
1. Share your landing page
2. Start receiving demo requests
3. Follow up with leads promptly
4. Monitor email delivery in Resend dashboard

---

**Date Completed:** _________________

**Completed By:** _________________

**Production URL:** _________________

**Notes:** _________________
