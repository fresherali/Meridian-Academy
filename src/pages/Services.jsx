
const services = [
  {
    number: "01",
    icon: "🏫",
    title: "On-Campus Learning",
    description:
      "Traditional classroom education held at our modern campus facilities. Designed for disciplined, interactive group learning.",
    features: [
      "Fully air-conditioned, multimedia-equipped classrooms.",
      "In-person teacher interaction and immediate doubt clearance.",
      "Weekly classroom tests and monthly board-pattern grand exams.",
      "Disciplined atmosphere with active attendance tracking.",
    ],
  },
  {
    number: "02",
    icon: "🏡",
    title: "Home Tuition Service",
    description:
      "Personalized one-on-one tutoring provided by experienced, background-checked instructors right at your home.",
    features: [
      "Customized teaching pace focused on individual student weaknesses.",
      "Strict teacher screening, identity verification, and academic auditing.",
      "Flexible scheduling tailored to the student's daily routine.",
      "Regular progress updates and parent-teacher feedback sessions.",
    ],
  },
  {
    number: "03",
    icon: "💻",
    title: "Interactive Online Classes",
    description:
      "Live streaming lectures supported by modern digital learning tools, providing flexibility to learn from anywhere.",
    features: [
      "HD live interactive sessions with instant Q&A chat.",
      "Recorded lectures available for revision anytime.",
      "Downloadable PDF notes, mind maps, and chapter summaries.",
      "Online self-assessment quizzes and auto-graded mock tests.",
    ],
  },
];

const additionalServices = [
  {
    icon: "📝",
    title: "Exam Preparation Bootcamps",
    description:
      "Intensive past-paper practice and focused revision sessions to help students prepare confidently for board examinations.",
  },
  {
    icon: "🎯",
    title: "Academic Counseling",
    description:
      "One-on-one academic guidance to help students choose the right F.Sc, ICS, and future career pathways.",
  },
];

const Services = () => {
  return (
    <main className="bg-white text-gray-800">

      {/* SECTION 1: HERO BANNER */}

{/* SECTION 1: HERO BANNER */}
<section className="course-reveal bg-white px-6 pt-6 pb-16 md:pt-10 md:pb-24">
  <div className="pt-6 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

    {/* LEFT SIDE: TEXT CONTENT */}
    <div className="text-left">

      <span className="mb-6 inline-block rounded-full border border-[#AA8935]/30 bg-[#AA8935]/10 px-5 py-2 text-sm font-bold tracking-wider text-[#AA8935]">
        OUR EDUCATIONAL SERVICES
      </span>

      <h1 className="text-4xl font-extrabold leading-tight text-[#102F59] md:text-5xl lg:text-6xl">
        Modern Learning Solutions
        <span className="mt-2 block text-[#AA8935]">
          Tailored to Your Needs
        </span>
      </h1>

      <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
        Whether you excel in a classroom, prefer one-on-one attention
        at home, or need flexible online learning, we have the right
        learning model for you.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">

        <a
          href="/contact"
          className="inline-flex items-center rounded-lg bg-[#AA8935] px-7 py-4 font-bold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#102F59]"
        >
          Explore Our Services
          <span className="ml-2">→</span>
        </a>

      </div>

      {/* SMALL HIGHLIGHTS */}
      <div className="mt-10 flex flex-wrap gap-7 border-t border-gray-200 pt-7">

        <div>
          <h3 className="text-xl font-bold text-[#102F59]">
            3+
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Learning Models
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#102F59]">
            Expert
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Instructors
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#102F59]">
            Flexible
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Learning Options
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE: BANNER IMAGE */}
    <div className="mb-12 relative">

      {/* Decorative Background */}
      <div className="absolute -right-4 -top-4 h-32 w-32 rounded-2xl bg-[#AA8935]/50 md:-right-6 md:-top-6" />

      <img
        src="/services-banner.jpg"
        alt="Students learning in a modern classroom"
        className="relative z-10 h-[350px] w-full rounded-2xl object-cover shadow-xl md:h-[480px]"
      />

      {/* Image Bottom Label */}
      <div className="absolute -bottom-5 left-5 z-20 rounded-xl bg-white px-5 py-4 shadow-lg md:left-10">
        <p className="text-sm font-bold text-[#102F59]">
          Learn Your Way
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Classroom • Home • Online
        </p>
      </div>

    </div>

  </div>
</section>


      {/* SECTION 2: SERVICE INTRODUCTION */}
      <section className=" course-reveal px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#AA8935]">
              What We Offer
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#102F59] md:text-4xl">
              Choose Your Way of Learning
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Every student learns differently. That's why we provide
              flexible educational solutions designed to meet different
              learning styles, goals, and schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#AA8935] hover:shadow-xl"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#102F59]/10 text-4xl transition group-hover:bg-[#AA8935]/15">
                    {service.icon}
                  </div>

                  <span className="text-4xl font-bold text-gray-100">
                    {service.number}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-[#102F59]">
                  {service.title}
                </h3>

                <p className="mb-7 leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mb-7 h-px bg-gray-200" />

                <h4 className="mb-5 font-semibold text-[#102F59]">
                  Key Features
                </h4>

                <ul className="mb-8 space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#AA8935]/15 text-xs font-bold text-[#AA8935]">
                        ✓
                      </span>

                      <span className="text-sm leading-6 text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="mt-auto inline-flex items-center gap-2 font-semibold text-[#AA8935] transition hover:gap-3"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUE-ADDED SERVICES */}
      <section className="course-reveal bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#AA8935]">
              Beyond the Classroom
            </span>

            <h2 className="mt-3 text-3xl font-bold text-[#102F59] md:text-4xl">
              Value-Added Academic Services
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              We go beyond regular teaching to support students in their
              examinations, academic decisions, and future goals.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#102F59] text-3xl">
                  {service.icon}
                </div>

                <div>
                  <h3 className="mb-3 text-xl font-bold text-[#102F59]">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="course-reveal bg-[#102F59] px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Learning Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-200">
            Choose the learning model that suits you best. Our team is ready
            to help you take the next step toward academic success.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-[#AA8935] px-9 py-4 font-semibold text-white transition hover:bg-[#92752D]"
          >
            Contact Us Today →
          </a>
        </div>
      </section>

    </main>
  );
};

export default Services;
