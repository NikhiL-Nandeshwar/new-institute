import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    title: "Full Stack Development",
    description: "Master both frontend and backend technologies with real-world projects.",
  },
  {
    title: "Data Science & AI",
    description: "Learn Python, machine learning, and data analysis with hands-on assignments.",
  },
  {
    title: "Digital Marketing",
    description: "Understand SEO, SEM, content strategies, and social media analytics.",
  },
  {
    title: "Cyber Security",
    description: "Get equipped to protect systems and data from digital threats.",
  },
  {
    title: "UI/UX Design",
    description: "Craft stunning and user-friendly interfaces using Figma, HTML, and CSS.",
  },
  {
    title: "Cloud Computing",
    description: "Deploy and manage applications on AWS, Azure, and Google Cloud.",
  },
];

export default function Courses() {
  return (
    <section id='courses' className="py-16 px-4 bg-sky-50 text-sky-700">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground">Our Programs</h2>
        <p className="text-muted-foreground mt-2">
          Industry-relevant courses designed to build skills and careers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <Card key={index} className="hover:shadow-md transition duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-indigo-700">{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{course.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
