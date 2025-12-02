import { motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  MessageCircle,
  UserPlus,
  Calendar,
  Lock,
  User,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I create an account?",
    icon: UserPlus,
    answer:
      "Go to the homepage and click 'Sign Up' → Enter your name, email & password → Click the verification link sent to your email. Your account will be ready in under 1 minute!",
  },
  {
    question: "How to book a skill session?",
    icon: Calendar,
    answer:
      "Visit any mentor's profile → Click 'Book Session' → Choose your preferred date & time → Complete payment. You'll get instant confirmation and the session will be added to your calendar.",
  },
  {
    question: "Login or password issues?",
    icon: Lock,
    answer:
      "On the login page, click 'Forgot Password?' → Enter your email → Check your inbox for the reset link → Set a new password and log in again.",
  },
  {
    question: "How to update my profile?",
    icon: User,
    answer:
      "Go to your dashboard → Click your profile icon → 'Edit Profile' → Update photo, bio, skills, etc. → Hit 'Save Changes' – changes appear instantly to everyone.",
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 px-4 py-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-yellow-100 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-yellow-600" />
            <span className="text-yellow-800 font-semibold">
              Support Center
            </span>
          </div>
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-yellow-700 mb-3">
            We're Here to Help You
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers below. Still need help? Reach out – we're
            available 24/7!
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-yellow-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-yellow-100 rounded-xl">
                      <Icon className="w-7 h-7 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 text-lg leading-relaxed pl-20">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-10 text-center text-white shadow-2xl"
        >
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-xl mb-8 opacity-95">
            Don't worry! Our support team is here for you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@yourapp.com"
              className="inline-flex items-center gap-3 bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              <Mail className="w-6 h-6" />
              Email Us
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        <p className="text-center text-gray-500 mt-12">
          © 2025 YourApp • Always by your side
        </p>
      </div>
    </motion.div>
  );
};

export default Support;
