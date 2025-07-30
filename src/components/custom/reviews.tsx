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
    <section id="reviews" className="bg-slate-100 text-slate-700 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">What Our Students Say</h2>
        <p className="text-lg text-gray-500 mt-2">Real stories. Real impact.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <div className="absolute -top-5 left-5 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
              <Quote className="text-white w-5 h-5" />
            </div>
            <p className="text-gray-700 text-base leading-relaxed mt-6 italic">
              “{review.feedback}”
            </p>
            <p className="text-right mt-4 font-semibold text-yellow-600">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
