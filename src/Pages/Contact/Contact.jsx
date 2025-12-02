import { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { Mail, User, MessageSquare, Send, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{
          opacity: t.visible ? 1 : 0,
          y: t.visible ? 0 : 20,
          scale: t.visible ? 1 : 0.9,
        }}
        className="bg-white rounded-2xl shadow-2xl p-6 border border-yellow-200 flex items-center gap-4"
      >
        <div className="bg-green-100 p-3 rounded-full">
          <Sparkles className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <p className="font-bold text-gray-800">Message Sent Successfully!</p>
          <p className="text-sm text-gray-600">We'll get back to you soon</p>
        </div>
      </motion.div>
    ));

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Toaster position="top-center" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen px-4 py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden relative"
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg mb-6 border border-yellow-200">
              <Mail className="w-6 h-6 text-yellow-600" />
              <span className="font-semibold text-yellow-800">
                Get in Touch
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-yellow-700 mb-3 flex items-center justify-center gap-2 leading-tight">
              We'd Love to Hear From You
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question, suggestion, or just want to say hi? Drop us a
              message!
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/75 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-3 text-gray-700 font-medium mb-3">
                    <User className="w-5 h-5 text-yellow-600" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 transition-all placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-3 text-gray-700 font-medium mb-3">
                    <Mail className="w-5 h-5 text-yellow-600" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 transition-all placeholder-gray-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-3 text-gray-700 font-medium mb-3">
                    <MessageSquare className="w-5 h-5 text-yellow-600" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-6 py-4 bg-white/70 border border-gray-200 rounded-2xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/20 transition-all placeholder-gray-400 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full flex items-center justify-center gap-3 px-12 py-5 rounded-full font-bold text-lg shadow-2xl transition-all ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-yellow-500 text-white hover:shadow-orange-500/50"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-6 h-6 border-4 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12 text-gray-600"
          >
            We usually reply within{" "}
            <span className="font-bold text-yellow-600">24 hours</span>
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
