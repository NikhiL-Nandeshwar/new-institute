'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const streams = [
  {
    title: 'IIT‑JEE (18‑Month Program)',
    icon: '/icons/IIT_JEE.png',
    description: `An optimized productive course of 18 months with a schedule of minimum 5 hours of teaching and doubt-solving, plus 1 hour of daily testing under DOST (Daily Objective and Subjective Testing) — six days a week. Includes daily assignments, weekly tests of 180 marks, and an IIT Mains/Advanced-based Mega Test of 300 marks every month.

Covers over 2500 problems monthly, with doubt resolution and personal mentoring.Topics are aligned with XII Board preparation for better dual readiness.`,
  },
  {
    title: 'NEET (18‑Month Program)',
    icon: '/icons/NEET_LOGO.png',
    description: `NEET students start with 4 months of math to strengthen their Physics and Chemistry base.The 18-month course includes 5 hours of Teaching & Doubt-Solving and 1 hour of Testing daily under the DOST system — six days a week.
Regular assignments, weekly tests of 180 marks, and a monthly Mega Test of 720 marks ensure rigorous evaluation.

Also features botanical field trips, lab slide preparation, and seminar presentations for holistic science learning.`,
  },
  {
    title: 'XI & XII Board Prep',
    icon: '/icons/mahalogo.png',
    description: `Syllabus of XI & XII is aligned with JEE/NEET patterns to ensure dual preparation.Includes weekly and monthly tests modeled after the Board exam pattern.

Features an exhaustive Preliminary Exam schedule and optimal Board preparation.College attendance is facilitated to one day per week as needed.`,
  },
  {
    title: 'Foundation (MSAP)',
    icon: '/icons/foundation.png',
    description: `A 10-month weekend program (Saturday & Sunday) for students of Classes VIII to XI.MSAP (Math and Science Augmentation Programme) aims to generate interest and build IIT JEE/NEET-oriented skills.

Includes 100+ hours of mentoring, hands-on science project work, testing, and alignment with school syllabus.
Focuses on early conceptual clarity, measurement skills, and basic tool/gadget development.`,
  },
];


export default function Courses() {
  return (
    <section id="courses" className="bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-800">Courses At <span className='text-yellow-500'>MOHIM</span></h2>
        <p className="text-gray-600 mt-4 text-lg">
          Comprehensive academic tracks with full course details.
        </p>
      </div>

      <div className="space-y-8 max-w-5xl mx-auto">
        {streams.map((stream, i) => (
           <Card
            key={i}
            className="hover:shadow-lg border-l-4 border-indigo-300 transition duration-300"
          >
            <CardHeader className="flex items-center gap-3 bg-sky-50 text-yellow-500 p-4 rounded-t-lg">
              <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center overflow-hidden">
                <Image src={stream.icon} alt={stream.title} width={48} height={48} />
              </div>
              <CardTitle className="text-xl font-semibold">{stream.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-8 py-2 bg-white">
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {stream.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
