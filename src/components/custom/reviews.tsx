'use client';

import { Quote } from 'lucide-react';

const reviews = [
  {
    name: 'SOHAM GHEWARI',
    details: 'B.Tech\n (Mechanical Engineering), IIT Indore.\nCurrently working at Danfoss',
    feedback: `My journey with Mohim has been phenomenal.

It not only helped me accomplish my aim but also helped me grow as a human being. Abhishek sir was always optimistic — he made learning fun. Raj sir gave me a flavor for real physics. 

Sandeep sir and Onkar sir supported us managing testing schedules, assignments, and lectures. Perseverance, planning, and the team made all the difference.`,
  },
  {
    name: 'POOJA PANJWANI',
    feedback: `In Mohim, the teachers are extremely cooperative, talented, and friendly. Academics and mental wellness both get equal importance. They ask for feedback after each lecture and weekly sessions for reviews.

Regular testing and OMR marking from the start made me capable of avoiding OMR mistakes.

Even if one student doesn’t understand a concept, they take separate sessions. I secured admission into a top government medical college in Mumbai.`,
  },
  {
    name: 'GRISHMA MEHTA',
    details: 'BS-MS\n IISER Pune.',
    feedback: `I had an amazing experience at Mohim.

Teachers focus intensely on conceptual clarity, helping not just in exams but also in coping with academic pressure.

During times when I felt like giving up, their encouragement motivated me to continue. I learned many concepts while always having a support system to rely on.`,
  },
  {
    name: 'HEMANT PANDITA',
    feedback: `Mohim was like family and will always be. The institute provides an environment where a student gains knowledge, confidence, and personality traits essential for future challenges.

Teachers are approachable and friendly. The modern facilities and thoughtful structure make it an ideal place for learning.`,
  },
  {
    name: 'MAYANK RAJESH SINHA',
    details: 'B.Tech - M.Tech \n(Mechanical Engineering), IIT Kharagpur.\nCurrently working at Linde India Limited',
    feedback: `The past few years at Mohim were some of the most memorable. Teachers prioritized conceptual learning and helped me develop analytical thinking.

Regular mock tests made me very comfortable with exam formats.

The supportive faculty and culture helped me stay motivated, even during the pandemic.`,
  },
  {
    name: 'VAISHNAVI SHRESHTHI',
    feedback: `I had a great journey preparing for 11th and 12th with Mohim Academy. Teachers are intelligent and possess excellent teaching skills, focusing on conceptual clarity and stress handling.

Doubt-solving sessions were key to analyzing mistakes.

Cracking IIT-JEE felt like a dream; thanks to Mohim’s guidance and support in exams like JEE, BITSAT, and CET.`,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-slate-100 text-slate-700 py-20 px-4 p-5">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-indigo-800 tracking-tight">What Our Students Say</h2>
        <p className="text-lg text-gray-500 mt-3">Stories of perseverance, clarity & success.</p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto p-3 sm:p-0">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="relative bg-white p-6 pt-10 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <div className="absolute -top-5 left-6 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-md">
              <Quote className="text-white w-5 h-5" />
            </div>
            <div className="text-gray-700 text-base leading-relaxed mt-2 italic whitespace-pre-line">
              “{review.feedback}”
            </div>
            <div className="mt-4 text-right">
              <p className="font-semibold text-yellow-600">— {review.name}</p>
              {review.details && (
                <p className="text-sm text-gray-500 whitespace-pre-line leading-snug">{review.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
