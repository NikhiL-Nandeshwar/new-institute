const Hero = () => {
    return (
        <section id='home' className="bg-gray-50 py-20 px-4">
            <div className="max-w-7xl mx-auto text-center pt-5">
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6">
                    Empowering Education for a Brighter Future
                </h1>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                    Join our institute to gain knowledge, skills, and confidence to succeed in your academic and professional journey.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/admissions"
                        className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary/90 transition"
                    >
                        Apply Now
                    </a>
                    <a
                        href="/courses"
                        className="border border-gray-300 px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition"
                    >
                        View Courses
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
