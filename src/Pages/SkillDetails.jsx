import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { Calendar, Clock, MapPin, Star, User, Mail, Tag } from "lucide-react";

function SkillDetails() {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.skillId === parseInt(id));
        setSkill(selected);
      })
      .catch((err) => console.log("Error:", err));
  }, [id]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookSession = (e) => {
    e.preventDefault();
    toast.success("Session booked successfully! We'll contact you soon.");
    e.target.reset();
  };

  if (!skill) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20"
          data-aos="fade-up"
        >
          {/* Hero Section with Image */}
          <div className="relative">
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full h-80 object-cover"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1
                className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-2xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {skill.skillName}
              </h1>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-2 bg-yellow-500/90 px-4 py-2 rounded-full text-sm font-medium">
                  <Tag className="w-4 h-4" />
                  {skill.category}
                </span>
                {skill.slotsAvailable < 5 && (
                  <span className="bg-red-500/90 px-4 py-2 rounded-full text-sm font-medium">
                    Only {skill.slotsAvailable} slots left!
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Details */}
              <div data-aos="fade-right" data-aos-delay="300">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <User className className="w-6 h-6 text-yellow-600" />
                  Provider Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <User className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium">{skill.providerName}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Mail className="w-5 h-5 text-yellow-600" />
                    <span>{skill.providerEmail}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    <span className="text-xl font-bold text-gray-800">
                      {skill.rating}
                    </span>
                    <span className="text-gray-500 ml-2">(Excellent)</span>
                  </div>

                  <div className="flex items-center gap-3 text-2xl font-bold text-green-600">
                    <span>${skill.price}</span>
                    <span className="text-sm text-gray-500 font-normal">
                      / session
                    </span>
                  </div>
                </div>

                <div className="mt-8 p-5 bg-yellow-50 border-2 border-dashed border-yellow-300 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>

              {/* Right: Booking Form */}
              <div data-aos="fade-left" data-aos-delay="400">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                      Book Your Session
                    </h3>

                    <form onSubmit={handleBookSession} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="inline w-4 h-4 mr-1" /> Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="inline w-4 h-4 mr-1" /> Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 rounded-xl hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition duration-300 shadow-lg"
                      >
                        Book Session Now
                      </button>

                      <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Limited slots • Secure booking • Instant confirmation
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div
            className="bg-white rounded-xl p-6 text-center shadow-lg"
            data-aos="flip-up"
          >
            <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h4 className="font-bold text-lg">1 Hour Session</h4>
            <p className="text-gray-600 text-sm mt-2">
              Personalized one-on-one training
            </p>
          </div>
          <div
            className="bg-white rounded-xl p-6 text-center shadow-lg"
            data-aos="flip-up"
            data-aos-delay="100"
          >
            <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h4 className="font-bold text-lg">Online / Offline</h4>
            <p className="text-gray-600 text-sm mt-2">
              Choose your preferred mode
            </p>
          </div>
          <div
            className="bg-white rounded-xl p-6 text-center shadow-lg"
            data-aos="flip-up"
            data-aos-delay="200"
          >
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h4 className="font-bold text-lg">Certified Expert</h4>
            <p className="text-gray-600 text-sm mt-2">
              Learn from industry leaders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetails;
