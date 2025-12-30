# 📧 HelaPoint Email Setup - EmailJS Integration

## ⚡ Quick Setup (5 Minutes)

Your HelaPoint landing page uses **EmailJS** for client-side email sending. This is perfect for static sites and works without a backend!

---

## Step 1: Create EmailJS Account (2 minutes)

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **Sign Up** (it's free!)
3. Verify your email address

---

## Step 2: Create Email Service (2 minutes)

### 2.1 Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (easiest for testing)
   - **Outlook**
   - **SendGrid**
   - **Mailgun**
   - Or any other provider

4. Click **Connect Account** and authorize
5. **Copy your Service ID** (e.g., `service_abc123`)

### 2.2 Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Template Name: `helapoint_demo_request`
4. Use this template:

**Subject:**
```
New Demo Request from {{from_name}} - {{store_name}}
```

**Content (HTML):**
```html
<h2>New Demo Request</h2>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Store Name:</strong> {{store_name}}</p>
<p><strong>Store Type:</strong> {{store_type}}</p>
<p><strong>Message:</strong><br>{{message}}</p>

<hr>
<p>This email was sent from the HelaPoint landing page.</p>
```

5. **To Email:** `sales@helapoint.com`
6. **From Name:** `{{from_name}}`
7. **Reply To:** `{{from_email}}`
8. Click **Save**
9. **Copy your Template ID** (e.g., `template_xyz789`)

---

## Step 3: Get Your Public Key (30 seconds)

1. Go to **Account** → **General**
2. Find **Public Key**
3. **Copy it** (e.g., `aB1cD2eF3gH4`)

---

## Step 4: Add EmailJS to Your Site (1 minute)

### Option A: Add Script Tag to HTML
Add this to your `index.html` file, just before `</body>`:

```html
<script type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
  (function(){
    emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Replace with your public key
  })();
</script>
```

### Option B: Install npm Package
```bash
npm install @emailjs/browser
```

Then in your `main.tsx` or `index.tsx`:
```typescript
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY_HERE');
```

---

## Step 5: Configure DemoModal (30 seconds)

Open `/components/DemoModal.tsx` and replace these values (around line 23-25):

```typescript
const serviceId = 'service_abc123';  // Your Service ID
const templateId = 'template_xyz789'; // Your Template ID  
const publicKey = 'aB1cD2eF3gH4';    // Your Public Key
```

---

## Step 6: Test It! (1 minute)

```bash
npm run dev
```

1. Open your browser
2. Click **Request Demo**
3. Fill out the form
4. Submit!
5. Check `sales@helapoint.com` inbox 📧

---

## ✅ That's It!

Your emails will now be sent via EmailJS!

### What You Get:
- ✅ Real email delivery
- ✅ No backend needed
- ✅ Free tier: 200 emails/month
- ✅ Email tracking in dashboard
- ✅ Works on any hosting (Vercel, Netlify, GitHub Pages)

---

## 🎯 Free Tier Limits

| Feature | Free Plan |
|---------|-----------|
| Emails/month | 200 |
| Email services | 2 |
| Templates | Unlimited |
| Cost | **$0** |

For most landing pages, this is plenty!

---

## 📊 Monitor Emails

Check sent emails in your EmailJS dashboard:
- [EmailJS Email History](https://dashboard.emailjs.com/admin/history)

You can see:
- Delivery status
- Timestamp
- Email content
- Errors (if any)

---

## 🔧 Troubleshooting

### Emails Not Sending?
1. ✅ Check Service ID, Template ID, and Public Key are correct
2. ✅ Verify EmailJS script is loaded (check browser console)
3. ✅ Check email service is connected in dashboard
4. ✅ Look for errors in EmailJS dashboard

### Gmail Blocking Emails?
1. ✅ Enable "Less secure app access" in Gmail settings
2. ✅ Or use an App Password
3. ✅ Or switch to SendGrid/Mailgun

### Hitting Rate Limits?
- Upgrade to paid plan ($7/month for 1,000 emails)
- Or use multiple email services

---

## 🚀 Alternative: Mailto Fallback

If you prefer not to set up EmailJS, the form will automatically fall back to opening the user's email client with pre-filled data. This works out of the box!

Just submit the form and it will open your default email app.

---

## 💡 Tips

1. **Test thoroughly** before launching
2. **Monitor your quota** in EmailJS dashboard
3. **Set up email notifications** in EmailJS for failed sends
4. **Use a professional email** for replies (not Gmail)
5. **Enable reCAPTCHA** in EmailJS to prevent spam

---

## 📚 Resources

- **EmailJS Docs:** [docs.emailjs.com](https://www.emailjs.com/docs/)
- **Email Templates Guide:** [docs.emailjs.com/user-guide/template/](https://www.emailjs.com/docs/user-guide/template/)
- **Troubleshooting:** [docs.emailjs.com/faq/](https://www.emailjs.com/docs/faq/)

---

## 🎉 You're Done!

Your HelaPoint landing page now has working email functionality!

Questions? Check the [EmailJS documentation](https://www.emailjs.com/docs/) or their support forum.

🚀 **Happy Launching!**
