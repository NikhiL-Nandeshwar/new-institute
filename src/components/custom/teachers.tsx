import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teachers = [
  {
    name: "Dr. Abhijeet Patil",
    subject: "BSc. Microbiology, MEM",
    designation: "Director",
    image: "/Abhijeet.png",
  },
  {
    name: "Mr. Abhishek Nagdev",
    subject: "B-Tech [BITS PILANI]",
    designation: "Director",
    image: "/Abhishek.png",
  },
  {
    name: "Ms. Priya Nair",
    subject: "Digital Marketing",
    image: "/F.png",
  },
  {
    name: "Mr. Arvind Gaikwad",
    subject: "Cyber Security",
    image: "/M.png",
  },
  {
    name: "Ms. Isha Desai",
    subject: "UI/UX Design",
    image: "/F.png",
  },
  {
    name: "Dr. Rajeev Deol",
    subject: "Cloud Computing",
    image: "/M.png",
  },
];

export default function Teachers() {
  const directors = teachers.filter((t) => t.designation === "Director");
  const others = teachers.filter((t) => t.designation !== "Director");

  const renderCard = (teacher: typeof teachers[0], index: number) => (
    <Card
      key={index}
      className="group border bg-gray-50 border-gray-200 hover:shadow-xl transition duration-300 rounded-2xl"
    >
      <CardHeader className="flex flex-col items-center pt-8">
        <div className="w-32 h-32 relative rounded-full overflow-hidden bg-sky-50 ring-4 ring-indigo-100 group-hover:ring-indigo-400 transition duration-300">
          <Image
            src={teacher.image}
            alt={teacher.name}
            fill
            className="object-cover"
          />
        </div>
        <CardTitle className="mt-4 text-xl font-semibold text-indigo-700 text-center">
          {teacher.name}
        </CardTitle>
        <p className=" text-gray-500 font-semibold text-center">{teacher.subject}</p>
        {teacher.designation && (
          <p className=" text-yellow-600 font-medium mt-0.5">{teacher.designation}</p>
        )}
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <p className=" text-gray-600 text-center leading-relaxed">
          With over a decade of teaching and hands-on industry experience,{" "}
          {teacher.name.split(" ")[0]} brings deep insights and practical knowledge to the classroom.
        </p>
      </CardContent>
    </Card>
  );

  return (
    <section id="teacher" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Faculty</h2>
        <p className="text-gray-500 mt-3 text-lg">
          Learn from industry leaders and passionate educators.
        </p>
      </div>

      {/* Directors in 2-column row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {directors.map((teacher, index) => renderCard(teacher, index))}
      </div>

      {/* Other teachers below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {others.map((teacher, index) => renderCard(teacher, index))}
      </div>
    </section>
  );
}
