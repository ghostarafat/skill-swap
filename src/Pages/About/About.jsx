import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  HeartHandshake,
  Star,
  ArrowRight,
  Globe,
} from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Glass Effect */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-20"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
          </div>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg mb-8 border border-yellow-200"
          >
            <Sparkles className="w-6 h-6 text-yellow-600" />
            <span className="text-yellow-800 font-semibold">
              Learn • Teach • Grow Together
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-700 mb-3 flex items-center justify-center gap-2 leading-tight">
            Welcome to SkillSwap
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The most beautiful local skill-sharing platform where passion meets
            learning. Trade skills, build connections, and grow together — one
            session at a time.
          </p>
        </motion.section>

        {/* Mission & Vision Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Users className="w-14 h-14 text-yellow-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower communities by making skill-sharing simple, joyful, and
              truly human. We believe everyone has something valuable to teach
              and something amazing to learn.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <HeartHandshake className="w-14 h-14 text-orange-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why SkillSwap?
            </h2>
            <ul className="space-y-4 text-gray-600 text-lg">
              {[
                "Verified local experts",
                "Beautiful & intuitive design",
                "Secure bookings",
                "Real community impact",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* How It Works - Timeline Style */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              Works
            </span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 -translate-y-1/2 hidden md:block"></div>

            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Create your profile in seconds",
                icon: Globe,
              },
              {
                step: "2",
                title: "Discover",
                desc: "Find skills near you",
                icon: Sparkles,
              },
              {
                step: "3",
                title: "Book",
                desc: "Choose time & connect",
                icon: ArrowRight,
              },
              {
                step: "4",
                title: "Grow",
                desc: "Learn, teach, repeat!",
                icon: HeartHandshake,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative text-center"
              >
                <div className="bg-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-2xl border-4 border-yellow-400 relative z-10">
                  <item.icon className="w-10 h-10 text-yellow-600" />
                </div>
                <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Ready to Start Swapping Skills?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of learners and teachers who are growing together
            every day.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-yellow-700 text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all"
          >
            Get Started Now
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default About;
