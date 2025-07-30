import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Sakshi Patil",
    feedback:
      "This institute transformed my career. The guidance and mentorship helped me land my first job in tech.",
  },
  {
    name: "Rohit Deshmukh",
    feedback:
      "Courses are industry-relevant and practical. Loved the hands-on approach from the faculty.",
  },
  {
    name: "Anuja Gokhale",
    feedback:
      "Supportive environment and quality education. The placement assistance is genuinely helpful!",
  },
  {
    name: "Nikhil Sahastrabuddhe",
    feedback:
      "Very flexible and focused on real-world skills. Highly recommend it to any serious learner.",
  },
];

export default function Reviews() {
  return (
    <section id='reviews' className="bg-slate-100 text-slate-700 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">What Our Students Say</h2>
        <p className="text-muted-foreground mt-2">Real stories. Real impact.</p>
      </div>

      <div className="space-y-10 max-w-4xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500"
          >
            <Quote className="absolute -top-4 left-4 text-yellow-500 w-6 h-6 bg-white rounded-full p-1 shadow" />
            <p className="text-gray-700 text-base italic mb-3">“{review.feedback}”</p>
            <p className="text-right font-semibold text-yellow-500">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
