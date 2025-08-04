'use client';

import { Separator } from "@/components/ui/separator";

const features = [
  {
    title: "Teaching",
    content: `A teacher is the backbone of any educational institute, and teaching at MOHIM encompasses a methodology that is based on creating awareness in the students to understand the fundamentals, application of concepts with accuracy and speed in terms of the requirement of the JEE / NEET entrance examination, blended with the significance of knowledge in their careers. Equal emphasis is also given on teaching the HSC / CBSE - XI th and XII th Standard Board syllabus.`,
  },
  {
    title: "Testing",
    content: `The real test of teaching is verified in the consistent performance of the student in the tests. At MOHIM we have highly scientific testing modules in the form of DOST – [Daily Objective and Subjective Testing], regular weekly long tests and a MEGA test which is a mock JEE / NEET examination at every month end. The results of DOST are posted every day to the parents. The Testing Modules implemented create an environment of positive competitiveness and preparedness.`,
  },
  {
    title: "Counseling",
    content: `A highly demanding course like JEE / NEET critically tests the emotional and academic competency of a student. MOHIM has a specifically designed MCOP – [MOHIM Monthly Counselling Protocol] for students as well as parents. It includes feedback forms and personal Counselling with intervention in terms of health, diet, exercise, emotional and social well-being, peer and parental pressure, academic planning, fear of performance, etc.`,
  },
  {
    title: "Comparative Analysis",
    content: `MOHIM being a Kolhapur-based educational Institute believes in following and strictly adhering to National and International standards in all aspects. The students in MOHIM are guided to register themselves with Excellent testing programs available online, making them aware of their National gradation in terms of the JEE / NEET scores and exam preparedness.`,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-sky-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-800">
          What Makes <span className="text-yellow-500">MOHIM</span> Unique
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Our core pillars drive performance, resilience, and confidence.
        </p>
      </div>

      <div className="max-w-[60rem] mx-auto space-y-10 border-2 border-yellow-500 rounded-3xl p-7">
        {features.map((item, i) => (
          <div key={i} className="relative">
            <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-justify">{item.content}</p>
            {i < features.length - 1 && (
              <div className="mt-8">
                <Separator className="bg-indigo-200 h-0.5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
