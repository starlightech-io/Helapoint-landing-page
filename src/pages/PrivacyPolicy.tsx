import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500">
            Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">

          {/* 1. Introduction */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              HelaPoint ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our mobile point-of-sale application ("HelaPoint POS" or the "App").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using HelaPoint, you agree to the collection and use of information in accordance with this policy. If you do not agree with this policy, please do not use the App.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect the minimum information necessary to provide point-of-sale functionality. All business and customer information entered into the App is owned and controlled by you.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">2.1 Business Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Business name and store details</li>
              <li>Store configuration and settings</li>
              <li>Product catalog (names, prices, categories, barcodes, stock levels)</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">2.2 Transaction Data</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Sales records and transaction history</li>
              <li>Payment methods and amounts</li>
              <li>Receipts and invoices generated</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">2.3 Customer Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Customer names and contact details (that you input)</li>
              <li>Credit balances and payment history</li>
              <li>Due dates for credit payments</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">2.4 User Account Data</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Usernames and authentication credentials for multi-user access</li>
              <li>User roles and permissions</li>
              <li>Activity logs showing which user performed each transaction</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">2.5 Device Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Device type and operating system</li>
              <li>App version</li>
              <li>Crash logs and performance data (for troubleshooting)</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">2.6 Camera Access</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Used solely for barcode scanning functionality</li>
              <li>No images are stored or transmitted</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">2.7 Payment Information</h3>
            <p className="text-gray-700 leading-relaxed">
              We do not store full payment card numbers on the device. Payment processing is handled by third-party processors; only tokenized identifiers or masked card data may be retained per the processor's policies.
            </p>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Provide Core Services:</strong> Process sales, manage inventory, track customer credit, and generate receipts</li>
              <li><strong>Enable Offline Functionality:</strong> Store data locally on your device so you can continue selling during network outages</li>
              <li><strong>Sync Data:</strong> Synchronize your business data across devices when connectivity is available</li>
              <li><strong>Create Backups:</strong> Generate automatic local backups every hour and allow manual exports to your preferred storage</li>
              <li><strong>Multi-User Tracking:</strong> Track sales by individual users to maintain accountability and prevent disputes</li>
              <li><strong>Improve the App:</strong> Analyze crash logs and usage patterns to fix bugs and enhance performance</li>
              <li><strong>Customer Support:</strong> Assist you with technical issues and inquiries</li>
              <li><strong>Security & Compliance:</strong> Detect and prevent fraud or abuse, and comply with applicable laws</li>
            </ul>
          </section>

          {/* 4. Legal Basis & Retention */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Legal Basis & Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Where required by law (such as GDPR), we process personal data based on: performance of a contract to provide services, your consent, or our legitimate business interests.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain personal data only as long as necessary to provide the services, meet legal or regulatory obligations, or resolve disputes.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">Typical Retention Periods</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li><strong>Transaction records:</strong> 3-7 years (for business and tax compliance, depending on jurisdiction)</li>
              <li><strong>Account and profile data:</strong> Until you delete your account or request deletion</li>
              <li><strong>Logs and diagnostics:</strong> 30-90 days unless needed for investigations</li>
            </ul>
          </section>

          {/* 5. Data Storage and Security */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Storage and Security</h2>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">5.1 Local Storage (Offline-First)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              HelaPoint is designed as an offline-first application. Your business data is primarily stored locally on your device using a local database, allowing you to operate without internet connectivity.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">5.2 Cloud Sync</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When enabled and connected to the internet, data syncs to secure cloud servers to enable multi-device access and backup protection. Cloud synchronization is optional and can be disabled within the App.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">5.3 Security Measures</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Data encryption in transit (TLS) and at rest</li>
              <li>Secure authentication for user accounts</li>
              <li>Role-based access controls for multi-user setups</li>
              <li>Automatic local backups every hour</li>
              <li>Manual backup export options to Google Drive, device storage, or other locations</li>
              <li>Access to production systems limited to authorized personnel</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              Please note no system is completely secure. Follow best practices for device and account protection (strong passwords, device lock, restricted access).
            </p>
          </section>

          {/* 6. Data Sharing and Disclosure */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>We do NOT sell your data.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service Providers:</strong> With trusted third-party services that help us operate the App (e.g., cloud hosting, crash reporting), bound by confidentiality agreements</li>
              <li><strong>Legal Requirements:</strong> When required by law, legal process, or government request</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to you</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">6.1 Third-Party Services & Subprocessors</h3>
            <p className="text-gray-700 leading-relaxed mb-2">The App may integrate with:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Payment processors and gateways</li>
              <li>Cloud storage providers (for backups you initiate)</li>
              <li>Bluetooth receipt printers (local connection only)</li>
              <li>Analytics and crash reporting services (anonymized data)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              A current list of subprocessors can be provided on request. Contact us at <a href="mailto:contact@helapoint.com" className="text-blue-600 hover:underline">contact@helapoint.com</a> for details.
            </p>
          </section>

          {/* 7. Cross-Border Transfers */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cross-Border Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If data is synced to servers or third-party services located in other countries, data may be transferred and stored outside your country.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Where applicable, we rely on standard contractual clauses, adequate protection measures, or another lawful basis for such transfers. Contact us if you need specific details about transfers affecting your data.
            </p>
          </section>

          {/* 8. App Permissions */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. App Permissions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">HelaPoint requests the following device permissions:</p>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">8.1 Camera</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Purpose: Barcode scanning for quick product lookup</li>
              <li>Usage: Only activated when you use the scan feature</li>
              <li>Storage: No images are saved or transmitted</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">8.2 Storage</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Purpose: Save local backups and export data</li>
              <li>Usage: Store business data offline, export backups to device storage</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">8.3 Bluetooth</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Purpose: Connect to receipt printers</li>
              <li>Usage: Only when you configure a Bluetooth printer</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">8.4 Internet</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Purpose: Cloud sync, updates, and optional features</li>
              <li>Usage: The App works fully offline; internet is used for syncing when available</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mt-4">
              All permissions are optional for core functionality—you can use HelaPoint offline without granting all permissions.
            </p>
          </section>

          {/* 9. Your Rights */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the following rights regarding your data:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> View all your business data within the App</li>
              <li><strong>Export:</strong> Export your data and backups at any time</li>
              <li><strong>Correction:</strong> Edit or update any information in the App</li>
              <li><strong>Deletion:</strong> Delete your data by clearing App data or uninstalling</li>
              <li><strong>Portability:</strong> Export your data in standard formats for backup or migration</li>
              <li><strong>Restrict/Object:</strong> Where applicable, restrict or object to certain processing</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights or for any data-related requests, contact us at <a href="mailto:contact@helapoint.com" className="text-blue-600 hover:underline">contact@helapoint.com</a>. We will respond in accordance with applicable law (typically within 30 days) and may require additional information to verify your identity.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Where applicable, these rights are provided in accordance with data protection laws such as GDPR and other local privacy regulations.
            </p>
          </section>

          {/* 10. Deletion & Backup */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Deletion & Backup</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you request deletion, we will remove personal data from active systems within a reasonable period.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Backup copies may remain in recovery systems for an additional period and will be deleted according to our backup retention policies or overwritten. If you rely on third-party sync/backup services, you may need to request deletion from those providers as well.
            </p>
          </section>

          {/* 11. Analytics & Opt-Out */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Analytics & Opt-Out</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use analytics and crash reporting tools to improve the app. Where possible, we aggregate or anonymize data.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you prefer not to share analytics, check settings in the App or your system privacy controls to opt out of analytics and diagnostics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The App does not respond to browser "Do Not Track" signals.
            </p>
          </section>

          {/* 12. Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              HelaPoint is a business application not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately at <a href="mailto:contact@helapoint.com" className="text-blue-600 hover:underline">contact@helapoint.com</a>.
            </p>
          </section>

          {/* 13. Changes to This Policy */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Posting the new policy in the App</li>
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Sending a notification through the App (for material changes)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We encourage you to review this Privacy Policy periodically. Continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* 14. Contact Us */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:contact@helapoint.com" className="text-blue-600 hover:underline">contact@helapoint.com</a></p>
              <p><strong>Website:</strong> <Link to="/contact" className="text-blue-600 hover:underline">https://helapoint.com/contact</Link></p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              We will respond to your inquiry within 30 days.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} HelaPoint. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
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