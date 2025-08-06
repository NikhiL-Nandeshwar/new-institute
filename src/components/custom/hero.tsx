/* eslint-disable @next/next/no-img-element */
const Hero = () => {
    return (
        <section id="home" className="relative bg-indigo-50 py-20 px-4 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/bg.png"
                    alt="Background"
                    className="w-full h-full md:object-cover object-fill opacity-10 p-2"
                />
                <div className="absolute inset-0 bg-white opacity-30" /> {/* Optional: softens image over bg-indigo-50 */}
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto text-center pt-7">
                <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-indigo-800">
                    Transforming Passion Into Celebration
                </h1>
                <p className="text-gray-500 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Join our institute to gain knowledge, skills, and confidence to succeed in your academic and professional journey.
                </p>
                {/* Download Brochure */}
                <div className="flex justify-center">
                    <a
                        href="/pdf/brochure.pdf"
                        download
                        className="bg-indigo-500 text-white hover:bg-indigo-600 px-6 py-3 rounded-xl text-sm font-medium transition"
                    >
                        📄 Download Brochure
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
