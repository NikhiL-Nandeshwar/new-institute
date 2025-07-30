/* eslint-disable @next/next/no-img-element */
const Hero = () => {
    return (
        <section id="home" className="relative bg-indigo-50 py-20 px-4 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-white opacity-30" /> {/* Optional: softens image over bg-indigo-50 */}
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto text-center pt-7">
                <h1 className="text-4xl font-semibold mb-6 text-indigo-500">
                    Empowering Education for a Brighter Future
                </h1>
                <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
                    Join our institute to gain knowledge, skills, and confidence to succeed in your academic and professional journey.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/admissions"
                        className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-xl text-sm font-medium transition"
                    >
                        Apply Now
                    </a>
                    <a
                        href="#courses"
                        className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl text-sm font-medium hover:bg-indigo-100 transition"
                    >
                        View Courses
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
