'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const streams = [
  {
    title: 'IIT‑JEE (18‑Month Program)',
    icon: '/icons/IIT_JEE.png',
    description: `An optimized productive course of 18 months with a course schedule of minimum 5 hours of teaching and doubt solving and 1 hour of testing daily under the DOST (Daily Objective and Subjective Testing) six days a week. Accompanied with daily assignments and weekly tests of 180 marks and a IIT Mains/Advanced based Mega‑test of 300 marks every month. An exhaustive schedule of 2500 problems per month, monitored and resolved by a dedicated system of doubt solving and mentoring. The topics would be optimally aligned with the subjective examination preparation of the XII th Board examination.`,
  },
  {
    title: 'NEET (18‑Month Program)',
    icon: '/icons/NEET_LOGO.png',
    description: `NEET students would be mentored with an obligatory math schedule of four months to prepare the base for NEET‑level Physics and Chemistry and would be mentored with a well planned course of 18 months with a course schedule of minimum 5 hours of Teaching and Doubt Solving and 1 hour of Testing daily under the DOST (Daily Objective and Subjective Testing) six days a week accompanied with daily assignment and weekly test of 180 marks and a Mega‑test of 720 marks every month. The course also would involve an allied activity schedule of actual slide preparation with state of art lab equipment, botanical field trips and excursions and regular Seminar Presentations by students.`,
  },
  {
    title: 'XI & XII Board Prep',
    icon: '/icons/mahalogo.png',
    description: `The XI th and XII th standard syllabus would be optimally aligned with the JEE / NEET pattern and covered with essential inputs to prepare the students for the Board Examination with weekly and monthly tests based on the Board pattern and an exhaustive Preliminary Examination Schedule. The college schedules would be facilitated to one day per week according to the respective requirements.`,
  },
  {
    title: 'Foundation (MSAP)',
    icon: '/icons/foundation.png',
    description: `The institute offers a ten month weekend course [Saturday and Sunday based] for VIII, IX, X and XI th standard students designated as MSAP (Math and Science Augmentation Programme) involving a scientifically planned module to create interest in students regarding math and science and develop their essential skills related to IIT JEE and NEET with a mentoring of minimum 100 hours, regular testing and project work designed to involve the students in Science projects to give first hand experience of taking readings, measurements and creating tools and Gadgets. The programme specially involves the alignment with the school syllabus to create comfort and efficiency in students while learning.`,
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
            className="hover:shadow-lg border-l-4 border-indigo-500 transition duration-300"
          >
            <CardHeader className="flex items-center gap-3 bg-sky-50 text-yellow-500 p-4 rounded-t-lg">
              <div className="rounded-full bg-white w-12 h-12 flex items-center justify-center overflow-hidden">
                <Image src={stream.icon} alt={stream.title} width={48} height={48} />
              </div>
              <CardTitle className="text-xl font-semibold">{stream.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
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
