
import React from "react";
import { Link } from "react-router-dom";

const FeeStructure = () => {
  const plans = [
    {
      title: "On-Campus Classes",
      subtitle: "Learn in a collaborative classroom environment",
      icon: "🏫",
      features: [
        "Experienced and qualified instructors",
        "AC and multimedia classrooms",
        "Weekly tests and monthly assessments",
        "Regular attendance monitoring",
        "Interactive learning environment",
      ],
    },
    {
      title: "Home Tuition",
      subtitle: "Personalized learning at your convenience",
      icon: "🏠",
      features: [
        "One-on-one individual attention",
        "Qualified and verified tutors",
        "Flexible learning schedules",
        "Personalized study plans",
        "Regular performance evaluation",
      ],
    },
    {
      title: "Online Classes",
      subtitle: "Quality education from anywhere",
      icon: "💻",
      features: [
        "Live interactive online sessions",
        "Experienced subject specialists",
        "Flexible learning opportunities",
        "Digital study resources",
        "Regular tests and progress tracking",
      ],
    },
  ];

  const benefits = [
    {
      icon: "🏆",
      title: "Merit-Based Scholarships",
      description:
        "Outstanding students with excellent academic performance can benefit from special merit-based scholarship opportunities.",
    },
    {
      icon: "🤝",
      title: "Need-Based Scholarships",
      description:
        "We believe financial challenges should never stop talented students from receiving quality education. Need-based scholarships are available for deserving students.",
    },
    {
      icon: "💬",
      title: "Flexible Fee Negotiation",
      description:
        "We offer flexibility in discussing actual fee structures to accommodate different financial situations and learning requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#102F59] px-6 py-24 text-center sm:py-32">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#AA8935]/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"></div>

        <div className=" course-reveal relative mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-[#AA8935]/50 bg-[#AA8935]/20 px-5 py-2 text-sm font-bold tracking-widest text-[#D9BC76]">
            AFFORDABLE EDUCATION FOR EVERYONE
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Affordable, High-Value Plans for Every Student
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Choose the mode that fits your budget and study preferences
            with zero hidden charges and flexible learning opportunities.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-lg bg-[#AA8935] px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#102F59]"
            >
              Contact Our Team →
            </Link>
          </div>
        </div>
      </section>

      {/* LEARNING PLANS */}
      <section className="px-6 py-20">
        <div className=" course-reveal mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#AA8935]">
              OUR LEARNING OPTIONS
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#102F59] sm:text-4xl">
              Flexible Plans, Quality Education
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
              Every student has different learning needs. Choose the
              educational environment that works best for you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-3 hover:border-[#AA8935]/50 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102F59]/5 text-4xl transition duration-300 group-hover:bg-[#AA8935]/15">
                  {plan.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#102F59]">
                  {plan.title}
                </h3>

                <p className="mt-3 min-h-14 leading-7 text-gray-500">
                  {plan.subtitle}
                </p>

                <div className="my-6 h-px bg-gray-100"></div>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-1 font-bold text-[#AA8935]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-[#AA8935] transition hover:gap-4 hover:text-[#102F59]"
                >
                  Discuss Your Plan →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS AND FLEXIBILITY */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#AA8935]">
              FINANCIAL SUPPORT
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#102F59] sm:text-4xl">
              Education Within Everyone's Reach
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-500">
              At Meridian Academy, we believe every deserving student
              deserves access to quality education regardless of their
              financial circumstances.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center transition duration-500 hover:-translate-y-2 hover:border-[#AA8935]/40 hover:bg-white hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#AA8935]/10 text-3xl">
                  {benefit.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#102F59]">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#102F59] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-bold uppercase tracking-widest text-[#D9BC76]">
            LET'S DISCUSS YOUR OPTIONS
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Want to Know More About Our Fee Structure?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
            Every student's requirements are different. Contact our
            admissions team to discuss the actual fee structure,
            scholarship eligibility, and available financial support.
            We are here to help you find the right learning plan.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-lg bg-[#AA8935] px-9 py-4 font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#102F59]"
          >
            Contact Our Team
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>

          <p className="mt-6 text-sm text-gray-400">
            Transparent Discussions • Flexible Options • No Hidden Charges
          </p>
        </div>
      </section>

    </div>
  );
};

export default FeeStructure;
