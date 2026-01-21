import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Globe, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Our Commitment to Privacy",
      content: "Bitnextro Solutions Pvt Ltd (\"we\", \"our\", \"us\") respects your privacy and is committed to protecting the personal information of users who visit our website or contact us for services."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information We Collect",
      content: "We may collect personal information such as name, phone number, email address, company name, and other details that you voluntarily provide through contact forms, calls, emails, or WhatsApp communication. We may also collect non-personal technical information including IP address, browser type, device details, and website usage data to improve our website performance and user experience."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: "The information collected is used to respond to enquiries, provide IT services, share quotations, offer support, and communicate regarding our products and services."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Information Sharing",
      content: "Bitnextro Solutions Pvt Ltd does not sell, rent, or trade your personal information to any third party for marketing or commercial purposes. Your information may be shared only with trusted service providers such as website hosting, email, or communication platforms, strictly for business operations and service delivery."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cookies and Tracking",
      content: "Our website may use cookies to analyze traffic and enhance user experience. You can choose to disable cookies through your browser settings if you prefer."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      content: "We take reasonable security measures to protect your information from unauthorized access, misuse, loss, or disclosure, though no online transmission is completely secure."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Third-Party Links",
      content: "Our website may contain links to third-party platforms such as WhatsApp, Google Maps, or social media sites, and we are not responsible for their privacy practices."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Your Rights",
      content: "You have the right to request access, correction, or deletion of your personal data by contacting us directly, subject to applicable legal requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-blue-100 text-center max-w-2xl mx-auto text-sm sm:text-base">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Last Updated */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 sm:p-6 mb-8">
          <p className="text-slate-600 text-sm sm:text-base">
            <span className="font-semibold text-slate-800">Last Updated:</span> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  {section.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Policy Updates Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 sm:p-8 mt-8">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">
            Policy Updates
          </h3>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            This Privacy Policy may be updated from time to time, and any changes will be posted on this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg p-6 sm:p-8 mt-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6" />
            <h3 className="text-xl sm:text-2xl font-semibold">
              Questions or Concerns?
            </h3>
          </div>
          <p className="text-slate-300 mb-4 text-sm sm:text-base">
            If you have any questions about this Privacy Policy or wish to exercise your rights regarding your personal data, please contact us:
          </p>
          <div className="bg-slate-700/50 rounded-lg p-4 inline-block">
            <p className="font-semibold text-lg mb-1">Bitnextro Solutions Pvt Ltd</p>
            <a 
              href="mailto:support@bitnextro.com" 
              className="text-blue-300 hover:text-blue-200 transition-colors text-sm sm:text-base inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              support@bitnextro.com
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}