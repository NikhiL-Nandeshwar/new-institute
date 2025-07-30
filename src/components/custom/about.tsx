/* eslint-disable @next/next/no-img-element */

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image (optional) */}
        <div>
          <img
            src="/images/about.jpg"
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
          <p className="text-gray-600">
            Our mission is to create a dynamic academic environment where students thrive through innovation, collaboration, and practical skills for real-world success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
