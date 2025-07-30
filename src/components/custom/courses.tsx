import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const streams = [
  {
    title: "Science Stream (PCM / PCB)",
    description:
      "⚛️ Dive into Physics, Chemistry, Maths or Biology — build a strong base for Engineering, Medical, and Research careers.",
  },
  {
    title: "Commerce Stream",
    description:
      "💼 Learn Accountancy, Economics & Business Studies — perfect for CA, CS, and budding entrepreneurs.",
  },
  {
    title: "Arts / Humanities Stream",
    description:
      "📚 Explore History, Political Science & Sociology — ideal for UPSC, writing, and creative fields.",
  },
  {
    title: "JEE / NEET Foundation",
    description:
      "🧠 Early foundation for entrance exams with deep focus on concepts and strategy. Get exam-ready!",
  },
  {
    title: "Skill Development Classes",
    description:
      "🗣️ Sharpen soft skills, computer literacy, and personal effectiveness to succeed beyond academics.",
  },
  {
    title: "Test Series & Mock Exams",
    description:
      "📝 Simulate real exams, analyze performance, and improve weak areas with expert feedback.",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-indigo-800">Courses We Offer</h2>
        <p className="text-gray-600 mt-4 text-lg">
          Tailored learning paths for 11th & 12th students — academic strength meets future focus.
        </p>
      </div>

      <div className="space-y-10 max-w-5xl mx-auto">
        {streams.map((stream, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center md:items-stretch gap-6 group`}
          >
            <div className="w-full md:w-1/2">
              <Card className="border-l-8 border-indigo-500 shadow-md group-hover:scale-[1.02] transition duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-indigo-700 font-semibold flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-indigo-500" />
                    {stream.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{stream.description}</p>
                </CardContent>
              </Card>
            </div>
            <div className="hidden md:block md:w-1/2 h-full">
              {/* Decorative bubble or image */}
              <div className="h-full flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
