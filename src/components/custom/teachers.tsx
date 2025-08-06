import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teachers = [
  {
    name: "Dr. Abhijeet Patil",
    education: "BSc. Microbiology",
    location: "MEM",
    designation: "Founder & Director",
    image: "/Abhijeet.png",
  },
  {
    name: "Mr. Abhishek Nagdev",
    education: "B.E. Civil - [selected for IIT-ROORKEE]",
    location: "BITS PILANI",
    designation: "Founder & Director",
    image: "/Abhishek.png",
  },
  {
    name: "Mr. Saurabh Dhabu",
    education: "B.E. Mechanical Engineering",
    location: "IIT Delhi",
    designation: "",
    image: "",
  },
  {
    name: "Miss. Drushti Daryani",
    education: "B.E. Food Technology - [selected for IIT-Thiruvananthapuram]",
    location: "ICT- Mumbai",
    designation: "",
    image: "",
  },
  {
    name: "Mr. Soham Ghewari",
    education: "B.E. Mechanical Engineering",
    location: "IIT Indore",
    designation: "",
    image: "",
  },
  {
    name: "Mr. Kiran Narkar (Faculty)",
    education: "B.E. Mechanical Engineering, M.E. (Design Engineering)",
    location: "",
    designation: "",
    image: "",
  },
  {
    name: "Mr. Sagar Kadam",
    education: "B.Tech (Civil Environment)",
    location: "",
    designation: "",
    image: "",
  },
  {
    name: "Mr. Deepak Kolhapure",
    education: "MSc. Chemistry",
    location: "",
    designation: "",
    image: "",
  },
  {
    name: "Mr. Vishal Panjwani",
    education: "BDS, MDS",
    location: "",
    designation: "",
    image: "",
  },
];

export default function Teachers() {
  const directors = teachers.filter((t) => t.designation.includes("Director"));
  const others = teachers.filter((t) => !t.designation.includes("Director"));

  const renderDirectorCard = (teacher: typeof teachers[0], index: number) => (
    <Card
      key={index}
      className="group border bg-muted/40 border-indigo-200 hover:shadow-xl transition duration-300 rounded-2xl"
    >
      <CardHeader className="flex flex-col items-center pt-8">
        <div className="w-36 h-36 relative rounded-full overflow-hidden bg-sky-50 ring-4 ring-indigo-100 group-hover:ring-indigo-400 transition duration-300">
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
        <p className="text-gray-700 text-center font-medium mt-1">
          {teacher.education}
        </p>
        {teacher.location && (
          <p className="text-muted-foreground text-sm text-center">{teacher.location}</p>
        )}
        <p className="text-yellow-500 text-lg mt-1">{teacher.designation}</p>
      </CardHeader>
    </Card>
  );

  const renderFacultyCard = (teacher: typeof teachers[0], index: number) => (
    <Card
      key={index}
      className="border bg-muted/40 border-indigo-200 hover:shadow-md transition duration-300 rounded-xl flex flex-col items-center p-5 text-center"
    >
      <CardTitle className="text-lg font-semibold text-indigo-700">
        {teacher.name}
      </CardTitle>
      <p className="text-gray-700 font-medium mt-1">{teacher.education}</p>
      {teacher.location && (
        <p className="text-muted-foreground mt-0.5">{teacher.location}</p>
      )}
    </Card>
  );

  return (
    <section id="teacher" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-indigo-800">Meet Our Faculty</h2>
        <p className="text-muted-foreground mt-3 text-lg">
          Learn from industry leaders and passionate educators.
        </p>
      </div>

      {/* Directors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {directors.map((teacher, index) => renderDirectorCard(teacher, index))}
      </div>

      {/* Other Faculty */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {others.map((teacher, index) => renderFacultyCard(teacher, index))}
      </div>
    </section>
  );
}
