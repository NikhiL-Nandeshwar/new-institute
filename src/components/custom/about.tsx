"use client";

import { GraduationCap, Users, BookOpenCheck, Sparkles, Highlighter, LibraryBig } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-6 h-6 text-indigo-600" />,
    title: "Expert Faculty",
    desc: "Seasoned educators who guide students through both board and competitive exams.",
  },
  {
    icon: <BookOpenCheck className="w-6 h-6 text-indigo-600" />,
    title: "Concept Clarity",
    desc: "Interactive learning methods that ensure every topic is understood deeply.",
  },
  {
    icon: <LibraryBig className="w-6 h-6 text-indigo-600" />,
    title: "Board + Competitive Ready",
    desc: "We prepare students for both school exams and competitive entrances like JEE/NEET with equal focus.",
  },

  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    title: "Personal Mentorship",
    desc: "One-on-one academic and career guidance to shape students’ paths.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
    title: "Holistic Growth",
    desc: "We train for communication, confidence, leadership, and life skills.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 px-4"
    >
      {/* Decorative Blob */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="/institute.png"
            alt="About our institute"
            className="rounded-3xl shadow-2xl border border-slate-200"
          />
        </div>

        {/* Text content */}
        <div>
          <h2 className="text-3xl font-extrabold text-indigo-500 mb-6 leading-tight">
            More than just coaching.<br />
            We shape futures.
          </h2>
          <p className="text-gray-600 text-base mb-8 max-w-md">
            At <strong>Our Academy</strong>, we prepare 11th & 12th students with strong fundamentals, core values, and confidence to succeed in life.
          </p>

          <div className="space-y-6 border-l-2 border-indigo-200 pl-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-indigo-800">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
