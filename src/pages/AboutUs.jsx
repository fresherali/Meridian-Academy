
import React from "react";

const AboutUs = () => {
  const coreValues = [
    {
      number: "01",
      title: "Board Exam Specialization",
      description:
        "We have deep expertise in FBISE, Punjab Boards, and regional board syllabus patterns, helping students prepare confidently for their examinations.",
      icon: "🎯",
    },
    {
      number: "02",
      title: "Student-Centric Approach",
      description:
        "We tailor our teaching methods to suit individual learning speeds across On-Campus, Home Tuition, and Online learning formats.",
      icon: "🎓",
    },
    {
      number: "03",
      title: "Integrity & Safety",
      description:
        "We carefully vet our home tutors to ensure safety, reliability, and accountability, giving parents greater peace of mind.",
      icon: "🛡️",
    },
  ];

  const subjects = [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "Computer Science",
  ];

  return (
    <main className="overflow-hidden bg-white">

      {/* SECTION 1: OUR STORY & MISSION */}
      <section className="  relative bg-[#102F59] px-5 py-20 text-white sm:py-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#AA8935]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className=" course-reveal relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full border border-[#D9BC76]/50 bg-white/10 px-5 py-2 text-sm font-semibold tracking-widest text-[#D9BC76]">
              ABOUT MERIDIAN ACADEMY
            </span>

            <h1 className="mt-7 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Empowering Matric & Intermediate Students Toward{" "}
              <span className="text-[#D9BC76]">
                Academic Excellence
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg">
              We believe every student deserves access to quality education,
              dedicated guidance, and the confidence to achieve academic success.
            </p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/15">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#AA8935] text-2xl">
                🎯
              </div>

              <h2 className="text-2xl font-bold text-[#D9BC76]">
                Our Mission
              </h2>

              <p className="mt-4 leading-8 text-gray-200">
                To make high-quality, exam-focused education accessible to
                every student through flexible learning modes—improving
                academic performance and building confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/15">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#AA8935] text-2xl">
                🌟
              </div>

              <h2 className="text-2xl font-bold text-[#D9BC76]">
                Our Vision
              </h2>

              <p className="mt-4 leading-8 text-gray-200">
                To become the premier academic hub recognized for producing
                board exam toppers across Matriculation and Intermediate levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY WE STAND OUT */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="text-sm font-bold tracking-widest text-[#AA8935]">
              OUR CORE VALUES
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102F59] sm:text-4xl">
              Why We Stand Out
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Our commitment to quality education, personalized learning,
              and student safety makes us a trusted learning partner.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div
                key={value.number}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#AA8935]/40 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#102F59] text-2xl transition duration-300 group-hover:bg-[#AA8935]">
                    {value.icon}
                  </div>

                  <span className="text-4xl font-extrabold text-gray-100">
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#102F59]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {value.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-[#AA8935] transition-all duration-300 group-hover:w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP & FACULTY */}
      <section className="bg-gray-50 px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <span className="text-sm font-bold tracking-widest text-[#AA8935]">
              LEADERSHIP & FACULTY
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102F59] sm:text-4xl">
              Learn From Experienced Educators
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Meridian Academy, our experienced faculty is dedicated to
              helping students understand concepts, strengthen their academic
              foundations, and prepare effectively for board examinations.
            </p>

            <div className="mt-8 rounded-xl border-l-4 border-[#AA8935] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#102F59]">
                Experienced Faculty
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Qualified teachers with years of experience in board exam
                preparation, focused on delivering effective lessons and
                helping students achieve their academic goals.
              </p>
            </div>

            <div className="mt-5 rounded-xl border-l-4 border-[#AA8935] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#102F59]">
                Dedicated Mentors
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Our subject matter experts provide focused guidance in
                important Matric and Intermediate subjects.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full bg-[#102F59]/5 px-4 py-2 text-sm font-semibold text-[#102F59]"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border-2 border-[#AA8935]" />

            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl bg-[#102F59] p-8 text-center shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#102F59] via-[#163D6B] to-[#AA8935]/60" />

              <div className="relative">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#D9BC76] bg-white/10 text-5xl">
                  🎓
                </div>

                <h3 className="mt-8 text-3xl font-extrabold text-white">
                  Inspiring Students
                </h3>

                <p className="mx-auto mt-4 max-w-sm leading-7 text-gray-200">
                  Building knowledge, confidence, and a stronger foundation
                  for every student's academic future.
                </p>

                <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#D9BC76]" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: OUR MENTORING APPROACH */}
      <section className="bg-[#102F59] px-5 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-sm font-bold tracking-widest text-[#D9BC76]">
            OUR COMMITMENT
          </span>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Guiding Students Toward a Brighter Future
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-200">
            We believe education is more than preparing for examinations.
            It is about building confidence, encouraging curiosity, and
            developing the skills students need to succeed.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex items-center rounded-lg bg-[#AA8935] px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#D9BC76] hover:text-[#102F59]"
          >
            Start Your Learning Journey →
          </a>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
