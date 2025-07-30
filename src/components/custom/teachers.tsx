import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teachers = [
  {
    name: "Dr. Anjali Mehta",
    subject: "Artificial Intelligence",
    image: "/teachers/anjali.jpg",
  },
  {
    name: "Mr. Ramesh Kulkarni",
    subject: "Full Stack Development",
    image: "/teachers/ramesh.jpg",
  },
  {
    name: "Ms. Priya Nair",
    subject: "Digital Marketing",
    image: "/teachers/priya.jpg",
  },
  {
    name: "Mr. Arvind Sinha",
    subject: "Cyber Security",
    image: "/teachers/arvind.jpg",
  },
  {
    name: "Ms. Isha Desai",
    subject: "UI/UX Design",
    image: "/teachers/isha.jpg",
  },
  {
    name: "Dr. Rajeev Sharma",
    subject: "Cloud Computing",
    image: "/teachers/rajeev.jpg",
  },
];

export default function Teachers() {
  return (
    <section id='teacher' className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Faculty</h2>
        <p className="text-muted-foreground mt-2">
          A team of industry professionals and academic experts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {teachers.map((teacher, index) => (
          <Card key={index} className="transition hover:shadow-lg">
            <CardHeader className="flex flex-col items-center">
              <div className="w-24 h-24 relative rounded-full overflow-hidden mb-3">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardTitle className="text-lg text-primary text-center">{teacher.name}</CardTitle>
              <p className="text-sm text-muted-foreground text-center">{teacher.subject}</p>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-500 text-center">Over 10 years of teaching and industry experience.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
