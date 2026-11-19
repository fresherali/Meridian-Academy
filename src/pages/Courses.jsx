
import { Link } from "react-router-dom";

const matricTracks = [
  {
    icon: "🔬",
    title: "Science Group",
    description:
      "Build strong concepts in core science subjects with practical explanations and exam-focused preparation.",
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Biology / Computer Science",
      "English",
      "Urdu",
      "Islamiat",
      "Pakistan Studies",
    ],
    color: "blue",
  },
  {
    icon: "📖",
    title: "Arts Group",
    description:
      "Develop a solid understanding of general subjects and elective disciplines.",
    subjects: [
      "General Mathematics",
      "General Science",
      "Computer Science",
      "Elective Subjects",
      "English",
      "Urdu",
      "Islamiat",
      "Pakistan Studies",
    ],
    color: "gold",
  },
];

const intermediateTracks = [
  {
    icon: "🧬",
    title: "F.Sc Pre-Medical",
    description:
      "Prepare for medical studies with strong concepts and an introduction to MDCAT-style preparation.",
    subjects: [
      "Biology",
      "Physics",
      "Chemistry",
      "MDCAT Preparation Base",
    ],
  },
  {
    icon: "⚙️",
    title: "F.Sc Pre-Engineering",
    description:
      "Develop analytical and problem-solving skills for engineering education and ECAT preparation.",
    subjects: [
      "Higher Mathematics",
      "Physics",
      "Chemistry",
      "ECAT Preparation Base",
    ],
  },
  {
    icon: "💻",
    title: "ICS (Computer Science)",
    description:
      "Build your foundation in computing, mathematics, and related technical disciplines.",
    subjects: [
      "Computer Science",
      "Higher Mathematics",
      "Physics",
      "Statistics / Economics",
    ],
  },
  {
    icon: "📊",
    title: "I.Com (Commerce)",
    description:
      "Understand business fundamentals, accounting principles, and commercial studies.",
    subjects: [
      "Principles of Accounting",
      "Principles of Commerce",
      "Economics",
      "Commercial Geography",
      "Business Mathematics",
    ],
  },
  {
    icon: "📚",
    title: "F.A. (Humanities)",
    description:
      "Explore humanities and social sciences through a flexible combination of elective subjects.",
    subjects: [
      "Civics",
      "Education",
      "Economics",
      "Islamic Studies",
      "Sociology",
      "Other Board-Approved Electives",
    ],
  },
];

const CourseCard = ({ course, index }) => {
  return (
    <div
      className="course-reveal group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#AA8935] hover:shadow-2xl"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102F59]/10 text-3xl transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#AA8935]/15">
          {course.icon}
        </div>

        <span className="text-4xl font-extrabold text-gray-100 transition-colors duration-300 group-hover:text-[#AA8935]/30">
          0{index + 1}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-[#102F59] transition-colors duration-300 group-hover:text-[#AA8935]">
        {course.title}
      </h3>

      <p className="mb-6 text-sm leading-7 text-gray-600">
        {course.description}
      </p>

      <div className="mb-5 h-px bg-gray-200" />

      <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#102F59]">
        Subjects & Preparation
      </h4>

      <div className="mb-7 flex flex-wrap gap-2">
        {course.subjects.map((subject, i) => (
          <span
            key={i}
            className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition-all duration-300 hover:bg-[#102F59] hover:text-white"
          >
            {subject}
          </span>
        ))}
      </div>

      <Link
        to="/contact"
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#AA8935] px-5 py-3 text-sm font-bold text-[#AA8935] transition-all duration-300 hover:border-[#102F59] hover:bg-[#102F59] hover:text-white"
      >
        Enquire About This Program
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
};

const Courses = () => {
  return (
    <main className="overflow-hidden bg-white text-gray-800">

      {/* SECTION 1: COURSE CATALOG HEADER */}
      <section className="bg-white px-6 pb-16 pt-10 md:pb-24 md:pt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div className="course-reveal text-left">
            <span className="mb-6 inline-block rounded-full border border-[#AA8935]/30 bg-[#AA8935]/10 px-5 py-2 text-sm font-bold tracking-wider text-[#AA8935]">
              EXPLORE OUR ACADEMIC PROGRAMS
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-[#102F59] md:text-5xl lg:text-6xl">
              Comprehensive Board Syllabus Coverage
              <span className="mt-3 block text-[#AA8935]">
                Grades 9 to 12
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg">
              Structured curriculum designed specifically for
              Matriculation and Intermediate Board Exams. Build strong
              concepts, improve academic performance, and prepare for
              your future with expert guidance.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#matric"
                className="inline-flex items-center rounded-lg bg-[#AA8935] px-7 py-4 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#102F59] hover:shadow-xl"
              >
                Explore Courses →
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg border-2 border-[#102F59] px-7 py-4 font-bold text-[#102F59] transition-all duration-300 hover:-translate-y-1 hover:bg-[#102F59] hover:text-white"
              >
                Get Admission
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-gray-200 pt-7">
              <div>
                <h3 className="text-2xl font-extrabold text-[#102F59]">
                  9th–10th
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Matriculation
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#102F59]">
                  11th–12th
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Intermediate
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#102F59]">
                  Multiple
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Academic Tracks
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="course-reveal relative">
            <div className="absolute -right-4 -top-4 h-32 w-32 rounded-2xl bg-[#AA8935]/15 md:-right-6 md:-top-6" />

            <img
              src="/courses-banner.jpg"
              alt="Students studying academic subjects"
              className="relative z-10 h-[350px] w-full rounded-2xl object-cover shadow-xl transition-transform duration-700 hover:scale-[1.02] md:h-[480px]"
            />

            <div className="absolute -bottom-5 left-5 z-20 rounded-xl bg-white px-5 py-4 shadow-lg md:left-10">
              <p className="font-bold text-[#102F59]">
                Your Future Starts Here
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Learn • Practice • Achieve
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: MATRICULATION PROGRAM */}
      <section id="matric" className="bg-gray-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="course-reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#AA8935]">
              Grades 9 & 10
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#102F59] md:text-4xl">
              Matriculation Program
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Build a strong academic foundation through comprehensive
              coverage of science and general subjects, supported by
              regular assessments and focused exam preparation.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {matricTracks.map((course, index) => (
              <CourseCard
                key={course.title}
                course={course}
                index={index}
              />
            ))}
          </div>

          {/* Matric Inclusions */}
          <div className="course-reveal rounded-2xl bg-[#102F59] p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white">
              What's Included in Matric Preparation?
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-gray-200">
              Our preparation approach focuses on building concepts
              and developing the examination skills students need.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Chapter-wise test series",
                "Board past paper sessions",
                "Numericals practice",
                "Diagrams and labeling practice",
                "Regular performance assessments",
                "Focused exam revision",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-4 text-sm font-medium text-white transition-all duration-300 hover:translate-x-2 hover:bg-[#AA8935]"
                >
                  <span className="text-[#D9BC76]">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: INTERMEDIATE PROGRAM */}
      <section id="intermediate" className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="course-reveal mb-14 text-center">
            <span className="text-sm font-bold uppercase tracking-[3px] text-[#AA8935]">
              Grades 11 & 12
            </span>

            <h2 className="mt-3 text-3xl font-extrabold text-[#102F59] md:text-4xl">
              Intermediate Program
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
              Advanced academic preparation designed to help students
              achieve excellent board examination results and prepare
              for university admission.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {intermediateTracks.map((course, index) => (
              <CourseCard
                key={course.title}
                course={course}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[#102F59] px-6 py-20">
        <div className="course-reveal mx-auto max-w-4xl text-center">

          <span className="inline-block rounded-full border border-[#AA8935]/50 bg-[#AA8935]/15 px-5 py-2 text-sm font-semibold text-[#D9BC76]">
            TAKE THE NEXT STEP
          </span>

          <h2 className="mt-6 text-3xl font-extrabold text-white md:text-4xl">
            Choose the Right Program for Your Future
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-200">
            Not sure which academic track is right for you? Contact
            our team for guidance and find the program that matches
            your educational goals.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center rounded-lg bg-[#AA8935] px-9 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#102F59]"
          >
            Talk to Our Team →
          </Link>

        </div>
      </section>

    </main>
  );
};

export default Courses;
