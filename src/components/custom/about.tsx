'use client';

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Flame, Sparkles } from "lucide-react";
import { GraduationCap, Star, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Teaching",
    content: (
      <div className="space-y-3">
        <p>
          A teacher is the backbone of any educational institute, and teaching at <strong>MOHIM</strong> encompasses a methodology that is based on creating awareness in the students to understand the fundamentals, application of concepts with accuracy and speed in terms of the requirement of the JEE/NEET entrance examination, blended with the significance of knowledge in their careers.
        </p>
        <p>
          Equal emphasis is also given on teaching the HSC / CBSE - XI<sup>th</sup> and XII<sup>th</sup> Standard Board syllabus.
        </p>
      </div>
    ),
  },
  {
    title: "Counselling",
    content: (
      <div className="space-y-3">
        <p>
          A highly demanding course like JEE/NEET critically tests the emotional and academic competency of a student.
        </p>
        <p>
          <strong>MOHIM</strong> has a specifically designed MCOP – [MOHIM Monthly Counselling Protocol] for students as well as parents. It includes feedback forms and personal counselling with intervention in terms of health, diet, exercise, emotional and social well-being, peer and parental pressure, academic planning, fear of performance, etc.
        </p>
      </div>
    ),
  },
  {
    title: "Testing",
    content: (
      <div className="space-y-3">
        <p>
          The real test of teaching is verified in the consistent performance of the student in the tests.
        </p>
        <p>
          At <strong>MOHIM</strong> we have highly scientific testing modules in the form of DOST – [Daily Objective and Subjective Testing], regular weekly long tests and a MEGA test which is a mock JEE / NEET examination at every month end.
        </p>
        <p>
          The results of DOST are posted every day to the parents. The Testing Modules implemented create an environment of positive competitiveness and preparedness.
        </p>
      </div>
    ),
  },
  {
    title: "Comparative Analysis",
    content: (
      <div className="space-y-3">
        <p>
          <strong>MOHIM</strong>, being a Kolhapur-based educational institute, believes in following and strictly adhering to National and International standards in all aspects.
        </p>
        <p>
          The students in MOHIM are guided to register themselves with excellent testing programmes available online, making them aware of their national gradation in terms of the JEE / NEET scores and exam preparedness.
        </p>
      </div>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-indigo-50 to-sky-50">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800">
          About <span className="text-yellow-500">MOHIM</span>
        </h2>
        <p className="mt-2 text-indigo-900 text-base sm:text-lg max-w-2xl mx-auto">
          MOHIM is more than preparation—it’s a journey of growth, purpose, and performance.
        </p>
        <Badge
          variant="outline"
          className="text-sm px-4 py-1 mt-3 bg-yellow-100 text-yellow-700 border-yellow-300 mb-4"
        >
          Why MOHIM Stands Out
        </Badge>
      </div>

      {/* MOHIM Overview */}
      <div className="relative max-w-5xl mx-auto rounded-3xl border border-indigo-200 shadow-lg p-6 sm:p-10 mb-16 text-gray-700 text-lg leading-relaxed animate-slide-up-fade bg-white">
        {/* Vertical Accent */}
        <div className="absolute left-0 top-6 bottom-6 w-1 bg-yellow-400 rounded-r-md" />

        {/* Paragraphs */}
        <div className="relative overflow-hidden bg-stone-100 border border-indigo-200 rounded-3xl shadow-xl m-2 sm:p-10 animate-fade-up">
          <div className="space-y-6 p-8 md:p-3  text-justify text-gray-700 text-lg leading-relaxed">
            <p>
              <strong className="text-yellow-500">MOHIM</strong> is a mission-driven institute committed to nurturing young minds for academic excellence and successful careers—especially in Maths and Science. Since 2017, MOHIM has mentored over 800 students, helping them secure admissions into IITs (Kharagpur, Indore, Madras), IISERs, VJTI, ICT Mumbai, AIIMS, and LTMC.
            </p>

            <p>
              Led by IIT alumni, MOHIM offers a robust academic environment with expert teaching, structured testing (DOST & Mega Tests), personalized mentoring, and regular parent engagement. We prepare students for JEE (Advanced/Main), NEET, MHT-CET, BITSAT, and XII Boards—covering CS, IT, Geology, and English.
            </p>

            <p>
              MOHIM emphasizes strong fundamentals, national benchmarks, time management, and wellness—building confident, resilient, and future-ready individuals.
            </p>
          </div>
        </div>


        {/* Closing Line */}
        {/* <div className="mt-6 text-center font-semibold text-indigo-700">
          MOHIM shapes not just toppers, but thinkers, doers, and leaders.
        </div> */}
      </div>

      {/* Feature Blocks */}
      <div className="max-w-5xl mx-auto space-y-12 p-3">
        {features.map((item, i) => (
          <div key={i} className="relative pl-6 border-l-4 border-indigo-300 group">
            <div className="absolute -left-[13px] top-2 w-6 h-6 bg-white border-4 border-indigo-400 rounded-full shadow-sm group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-semibold text-indigo-800 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              {item.title}
            </h3>
            <div className="text-gray-700 text-justify leading-relaxed">{item.content}</div>
            {i < features.length - 1 && (
              <Separator className="my-8 bg-indigo-200 h-0.5 w-3/4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
