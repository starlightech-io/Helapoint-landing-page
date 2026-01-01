import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsOfService() {
  const lastUpdated = 'December 2025';
  const effectiveDate = 'December 2025';

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Document */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-500">
            Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">

          {/* 1. Acceptance of Terms */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By downloading, installing, or using the HelaPoint POS mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms constitute a legal agreement between you ("User," "you," or "your") and HelaPoint ("we," "us," or "our"). If you accept these Terms on behalf of an entity, you represent and warrant that you have authority to bind that entity to these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* 2. Description of Service */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              HelaPoint is an offline-first point-of-sale (POS) and inventory management application designed for retail businesses. The App provides:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Sales processing and checkout functionality</li>
              <li>Inventory and product catalog management</li>
              <li>Customer credit tracking and payment recording</li>
              <li>Multi-user access with transaction tracking</li>
              <li>Barcode scanning for product lookup</li>
              <li>Local and cloud data backup</li>
              <li>Receipt generation and printing</li>
              <li>Multi-store business management</li>
            </ul>
          </section>

          {/* 3. License */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subject to your compliance with these Terms, HelaPoint grants you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control for your internal business operations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not copy, modify, distribute, sell, or lease any part of the App without our written permission.
            </p>
          </section>

          {/* 4. User Accounts */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. User Accounts</h2>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">4.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use certain features of the App, you may need to create an account using a valid email address. You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">4.2 Account Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Keep your login credentials secure</li>
              <li>Notify us immediately of any unauthorized access or suspected breach</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">4.3 Account Suspension</h3>
            <p className="text-gray-700 leading-relaxed">
              HelaPoint may suspend or terminate access where required to protect the service, enforce these Terms, or comply with law.
            </p>
          </section>

          {/* 5. Acceptable Use */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Reverse engineer, decompile, or attempt to derive source code</li>
              <li>Interfere with or disrupt the integrity or performance of the App</li>
              <li>Attempt to gain unauthorized access to our systems or other users' data</li>
              <li>Use the App to store or transmit malicious code</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
            </ul>
          </section>

          {/* 6. Data and Privacy */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Data and Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of the App is also governed by our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>, which describes how we collect, use, and protect your data.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">6.1 Your Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of all business data you enter into the App, including product information, transaction records, and customer data. You grant HelaPoint a limited license to use that data solely to provide the service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for the accuracy and legality of the data you input.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">6.2 Data Backup</h3>
            <p className="text-gray-700 leading-relaxed">
              While the App provides automatic local backups and optional cloud sync, you are responsible for maintaining your own backups. We recommend regularly exporting your data to external storage.
            </p>
          </section>

          {/* 7. Payment Terms */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Certain features of the App may require payment. By purchasing a subscription or premium features:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>You agree to pay all applicable fees</li>
              <li>Fees are non-refundable unless otherwise stated</li>
              <li>We may change pricing with reasonable notice</li>
              <li>Subscriptions auto-renew unless canceled before the renewal date</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Payments are processed by third-party payment processors and are subject to their terms and privacy policies. HelaPoint does not store full card numbers on the device. You are responsible for taxes associated with your purchases.
            </p>
          </section>

          {/* 8. Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All rights, title, and interest in and to the App, including all intellectual property rights, are and will remain the exclusive property of HelaPoint or its licensors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The App, including its design, features, code, and content, is protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for its intended purpose only.
            </p>
          </section>

          {/* 9. Third-Party Services */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App may integrate with third-party services (e.g., cloud storage, payment processors, printers). Your use of such services is subject to their respective terms and policies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are not responsible for the availability, accuracy, or content of third-party services.
            </p>
          </section>

          {/* 10. Disclaimers */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Disclaimers</h2>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">10.1 "As Is" Basis</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">10.2 No Guarantee</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not guarantee that the App will be uninterrupted, error-free, or free of viruses or other harmful components. You use the App at your own risk.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">10.3 Data Accuracy</h3>
            <p className="text-gray-700 leading-relaxed">
              While we strive for accuracy in calculations and data handling, you are responsible for verifying transaction amounts, inventory counts, and financial records. HelaPoint is not liable for errors resulting from incorrect data entry or system misconfiguration.
            </p>
          </section>

          {/* 11. Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL HELAPOINT OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Loss of profits, revenue, or business</li>
              <li>Loss of data or data corruption</li>
              <li>Business interruption</li>
              <li>Any other commercial damages or losses</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              HELAPOINT'S AGGREGATE LIABILITY FOR DIRECT DAMAGES ARISING OUT OF OR RELATED TO THESE TERMS WILL NOT EXCEED THE AMOUNTS PAID BY YOU, IF ANY, IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This limitation applies regardless of the theory of liability, whether based on contract, tort, negligence, strict liability, or otherwise.
            </p>
          </section>

          {/* 12. Indemnification */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless HelaPoint, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the App, breach of these Terms, or violation of applicable law or third-party rights.
            </p>
          </section>

          {/* 13. Termination */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may stop using the App at any time. You may also request account deletion by contacting us at <a href="mailto:contact@helapoint.com" className="text-blue-600 hover:underline">contact@helapoint.com</a> or through the <Link to="/contact" className="text-blue-600 hover:underline">Contact page</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              HelaPoint may suspend or terminate your access for violation of these Terms or for any lawful reason.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your license ends and HelaPoint may delete or anonymize your data in accordance with its retention policies. You may export your data before termination if export features are available.
            </p>
          </section>

          {/* 14. Changes to the App */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Changes to the App</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the App (or any part of it) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the App.
            </p>
          </section>

          {/* 15. Changes to Terms */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may modify these Terms from time to time. If changes are material, we will notify you via the App, email, or other reasonable means.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Continued use after notice of material changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* 16. Export & Compliance */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">16. Export & Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              You will comply with all applicable export and re-export control laws and regulations when using the App.
            </p>
          </section>

          {/* 17. Governing Law & Dispute Resolution */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">17. Governing Law & Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are governed by the laws of the jurisdiction where HelaPoint is incorporated, excluding its conflicts of law rules.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these Terms or your use of the App shall be resolved through good-faith negotiation or, if necessary, in the courts located in that jurisdiction, unless you and HelaPoint agree otherwise in writing.
            </p>
          </section>

          {/* 18. Severability */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">18. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* 19. Entire Agreement */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">19. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with the Privacy Policy, constitute the entire agreement between you and HelaPoint regarding your use of the App and supersede any prior agreements.
            </p>
          </section>

          {/* 20. Contact Information */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">20. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:contact@helapoint.com" className="text-blue-600 hover:underline">contact@helapoint.com</a></p>
              <p><strong>Website:</strong> <Link to="/contact" className="text-blue-600 hover:underline">https://helapoint.com/contact</Link></p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} HelaPoint. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
            <span>•</span>
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}