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
            <p className="text-gray-700 leading-relaxed">
              These Terms constitute a legal agreement between you ("User," "you," or "your") and HelaPoint ("we," "us," or "our"). We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the updated Terms.
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

          {/* 3. User Accounts */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use certain features of the App, you may need to create an account using a valid email address. You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">3.2 Account Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Keep your login credentials secure</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">3.3 Account Termination</h3>
            <p className="text-gray-700 leading-relaxed">
              You may delete your account at any time by contacting us at <a href="mailto:support@helapoint.com" className="text-blue-600 hover:underline">support@helapoint.com</a> or through the <Link to="/contact" className="text-blue-600 hover:underline">Contact page</Link>. We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          {/* 4. Acceptable Use */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Use the App for any illegal or unauthorized purpose</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Interfere with or disrupt the App's functionality</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the App to store or transmit malicious code</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
            </ul>
          </section>

          {/* 5. Data and Privacy */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data and Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of the App is also governed by our <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>, which describes how we collect, use, and protect your data.
            </p>
            
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">5.1 Your Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of all business data you enter into the App, including product information, transaction records, and customer data. You are responsible for the accuracy and legality of the data you input.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">5.2 Data Backup</h3>
            <p className="text-gray-700 leading-relaxed">
              While the App provides automatic local backups and optional cloud sync, you are responsible for maintaining your own backups. We recommend regularly exporting your data to external storage.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App, including its design, features, code, and content, is owned by HelaPoint and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for its intended purpose.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not copy, modify, distribute, sell, or lease any part of the App without our written permission.
            </p>
          </section>

          {/* 7. Disclaimers */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Disclaimers</h2>
            
            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">7.1 "As Is" Basis</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">7.2 No Guarantee</h3>
            <p className="text-gray-700 leading-relaxed">
              We do not guarantee that the App will be uninterrupted, error-free, or free of viruses or other harmful components. You use the App at your own risk.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, HELAPOINT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Loss of profits, revenue, or business</li>
              <li>Loss of data or data corruption</li>
              <li>Business interruption</li>
              <li>Any other commercial damages or losses</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              This limitation applies regardless of the theory of liability, whether based on contract, tort, negligence, strict liability, or otherwise.
            </p>
          </section>

          {/* 9. Indemnification */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless HelaPoint, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the App, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          {/* 10. Third-Party Services */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              The App may integrate with third-party services (e.g., cloud storage, printers). Your use of such services is subject to their respective terms and policies. We are not responsible for the availability, accuracy, or content of third-party services.
            </p>
          </section>

          {/* 11. Changes to the App */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Changes to the App</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue the App (or any part of it) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the App.
            </p>
          </section>

          {/* 12. Governing Law */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the App shall be resolved through good-faith negotiation or, if necessary, binding arbitration.
            </p>
          </section>

          {/* 13. Severability */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* 14. Contact Information */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:support@helapoint.com" className="text-blue-600 hover:underline">support@helapoint.com</a></p>
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