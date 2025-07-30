/* eslint-disable @next/next/no-img-element */

const About = () => {
  return (
    <section id="about" className="bg-slate-50 text-gray-700 py-8 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image (optional) */}
        <div>
          <img
            src="/institute.png"
            alt="About our institute"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>

        {/* Text content */}
        <div>
  <h2 className="text-3xl font-bold text-gray-800 mb-4">
    About Our Institute
  </h2>
  <p className="text-gray-600 mb-6">
    We are a leading educational institution committed to excellence in learning and personal growth. With expert faculty, modern infrastructure, and a student-first philosophy, we empower learners to reach their full potential.
  </p>
  <p className="text-gray-600 mb-6">
    Our mission is to create a dynamic academic environment where students thrive through innovation, collaboration, and practical skills for real-world success.
  </p>
  <p className="text-gray-600 mb-6">
    From foundational courses to advanced specializations, we offer a comprehensive curriculum designed to meet the needs of today&apos;s fast-evolving industries. Our faculty comprises experienced professionals and passionate educators who mentor students to become confident and competent individuals.
  </p>
  <p className="text-gray-600 mb-6">
    Beyond academics, we emphasize personal development, leadership, and social responsibility. Our campus culture fosters creativity, teamwork, and critical thinking, ensuring our graduates are well-prepared for both higher education and professional careers.
  </p>
  <p className="text-gray-600">
    Whether you&apos;re just starting your journey or looking to enhance your skills, our institute is the place to unlock your potential and shape a successful future.
  </p>
</div>

      </div>
    </section>
  );
};

export default About;
