'use client';

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";
import { GraduationCap, Star, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Teaching",
    content:
      "A teacher is the backbone of any educational institute, and teaching at MOHIM encompasses a methodology that is based on creating awareness in the students to understand the fundamentals, application of concepts with accuracy and speed in terms of the requirement of the JEE / NEET entrance examination, blended with the significance of knowledge in their careers. Equal emphasis is also given on teaching the HSC / CBSE - XI th and XII th Standard Board syllabus.",
  },
  {
    title: "Testing",
    content:
      "The real test of teaching is verified in the consistent performance of the student in the tests. At MOHIM we have highly scientific testing modules in the form of DOST – [Daily Objective and Subjective Testing], regular weekly long tests and a MEGA test which is a mock JEE / NEET examination at every month end. The results of DOST are posted every day to the parents. The Testing Modules implemented create an environment of positive competitiveness and preparedness.",
  },
  {
    title: "Counseling",
    content:
      "A highly demanding course like JEE / NEET critically tests the emotional and academic competency of a student. MOHIM has a specifically designed MCOP – [MOHIM Monthly Counselling Protocol] for students as well as parents. It includes feedback forms and personal Counselling with intervention in terms of health, diet, exercise, emotional and social well-being, peer and parental pressure, academic planning, fear of performance, etc.",
  },
  {
    title: "Comparative Analysis",
    content:
      "MOHIM being a Kolhapur-based educational Institute believes in following and strictly adhering to National and International standards in all aspects. The students in MOHIM are guided to register themselves with Excellent testing programs available online, making them aware of their National gradation in terms of the JEE / NEET scores and exam preparedness.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-14 px-6 bg-gradient-to-br from-white via-indigo-50 to-sky-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-4">
        <Badge
          variant="outline"
          className="text-sm px-4 py-1 bg-yellow-100 text-yellow-700 border-yellow-300 mb-4"
        >
          Why MOHIM Stands Out
        </Badge>
        {/* <h2 className="md:text-4xl text-4xl font-extrabold text-indigo-800 leading-tight">
          Education That Matters
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          MOHIM is not just about preparation; it&apos;s a transformation journey built with precision, care, and performance at its core.
        </p> */}
      </div>

      {/* Overview Paragraph */}
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-white via-sky-50 to-indigo-50 border border-indigo-100 shadow-xl rounded-3xl p-10 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-800">About <span className="text-yellow-500">MOHIM</span></h2>
          <p className="text-gray-500 text-base mt-2">          
            MOHIM is more than preparation—it&apos;s a journey of growth, purpose, and performance
          </p>
        </div>

        <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
          <div className="flex items-start gap-4">
            {/* <GraduationCap className="text-yellow-500 w-6 h-6 mt-1" /> */}
            <p className="text-justify">
              <strong className="text-yellow-500">MOHIM</strong> is a mission-driven institute dedicated to inspiring, mentoring, and nurturing young minds toward academic excellence and vibrant careers—especially in Maths and Science. Since 2017, we’ve mentored over 800 aspirants with success stories in IITs (Kharagpur, Indore, Madras), IISERs, VJTI, ICT Mumbai, AIIMS, and LTMC.
            </p>
          </div>

          <div className="flex items-start gap-4">
            {/* <Users className="text-yellow-500 w-6 h-6 mt-1" /> */}
            <p className="text-justify">
              Led by IIT alumni, MOHIM blends expert teaching with structured testing methods like DOST & Mega Tests. We offer a well-rounded environment with personal mentoring, individual counseling, and regular parent feedback. Students are prepared for JEE (Adv/Main), NEET, MHT-CET, BITSAT, and XII Boards—including CS, IT, Geology, and English.
            </p>
          </div>

          <div className="flex items-start gap-4">
            {/* <ShieldCheck className="text-yellow-500 w-6 h-6 mt-1" /> */}
            <p className="text-justify">
              We go beyond academics—focusing on fundamentals, national-level standards, wellness, and time management. MOHIM shapes students into confident, future-ready individuals.
            </p>
          </div>
        </div>
      </div>


      {/* Feature Blocks */}
      <div className="max-w-5xl mx-auto space-y-12">
        {features.map((item, i) => (
          <div key={i} className="relative pl-6 border-l-4 border-indigo-300 group">
            <div className="absolute -left-[13px] top-2 w-6 h-6 bg-white border-4 border-indigo-400 rounded-full shadow-sm group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-semibold text-indigo-800 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              {item.title}
            </h3>
            <p className="text-gray-700 text-justify leading-relaxed">
              {item.content}
            </p>
            {i < features.length - 1 && (
              <Separator className="my-8 bg-indigo-200 h-0.5 w-3/4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
