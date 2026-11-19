
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";

const learningModes = [
  {
    number: "01",
    title: "On-Campus Classes",
    subtitle: "Traditional classroom learning",
    description:
      "Learn in interactive classrooms with instructor guidance, regular assessments, and a focused study environment.",
    features: [
      "Small-batch learning",
      "In-person doubt solving",
      "Weekly board-style tests",
    ],
    button: "Explore Campus Classes",
    href: "#courses",
    isInternal: false,
  },
  {
    number: "02",
    title: "Home Tuition",
    subtitle: "Personalized one-to-one tutoring",
    description:
      "Get individual attention from a tutor who teaches according to your learning pace, schedule, and academic needs.",
    features: [
      "Personalized study plan",
      "Flexible scheduling",
      "Tutor matching based on your needs",
    ],
    button: "Request a Home Tutor",
    href: "/contact",
    isInternal: true,
  },
  {
    number: "03",
    title: "Online Classes",
    subtitle: "Learn from anywhere",
    description:
      "Attend interactive online lessons and get support with your syllabus without travelling to a campus.",
    features: [
      "Live online lessons",
      "Digital notes and practice",
      "Online doubt-solving support",
    ],
    button: "Explore Online Classes",
    href: "/contact",
    isInternal: true,
  },
];

const benefits = [
  {
    number: "01",
    title: "Board-Focused Preparation",
    description:
      "Study with a clear focus on your class syllabus, examination pattern, and board requirements.",
  },
  {
    number: "02",
    title: "Regular Tests & Evaluation",
    description:
      "Track your progress through practice tests, revision, feedback, and areas that need improvement.",
  },
  {
    number: "03",
    title: "Helpful Study Material",
    description:
      "Strengthen your preparation with subject notes, practice questions, and past-paper revision where available.",
  },
  {
    number: "04",
    title: "Qualified Tutors",
    description:
      "Find learning support suited to your class, subjects, goals, and preferred learning mode.",
  },
];

const admissionSteps = [
  {
    number: "01",
    title: "Choose Your Class",
    description: "Select Matric or Intermediate and your current class.",
  },
  {
    number: "02",
    title: "Select a Learning Mode",
    description: "Choose campus classes, home tuition, or online lessons.",
  },
  {
    number: "03",
    title: "Discuss a Demo",
    description: "Contact us to discuss a trial class and your learning needs.",
  },
  {
    number: "04",
    title: "Confirm Admission",
    description: "Review the schedule and fee details before enrolling.",
  },
];

const courses = [
  {
    title: "Class 9",
    description: "Build strong foundations and prepare for board examinations.",
    subjects: "Science and other available subjects",
  },
  {
    title: "Class 10",
    description: "Revise key concepts and strengthen board exam preparation.",
    subjects: "Science and other available subjects",
  },
  {
    title: "Class 11",
    description: "Develop subject knowledge for your Intermediate studies.",
    subjects: "Available subject groups",
  },
  {
    title: "Class 12",
    description: "Prepare for final examinations with revision and practice.",
    subjects: "Available subject groups",
  },
];

function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-[680px] scroll-mt-24 items-center overflow-hidden bg-[#102F59] bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#102F59] from-0% via-[#102F59]/95 via-30% via-[#102F59]/55 via-40% to-transparent to-100%" />

        <div className="course-reveal relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Excellence in Education,{" "}
              <span className="text-[#D8B75A]">
                Delivered Your Way.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Master your Matric and Intermediate syllabus with learning
              support designed around your needs. Choose on-campus classes,
              home tuition, or live online lessons.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#AA8935] px-7 py-4 font-bold text-white transition hover:bg-[#8F7128]"
              >
                Enroll Now
                <span className="ml-2" aria-hidden="true">→</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#102F59]"
              >
                Book a Free Demo Class
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-[#E7CC7B]">
                Your Future Starts Here
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-snug text-white">
                The right guidance can make a difference.
              </h2>

              <p className="mt-4 leading-7 text-slate-200">
                Build your understanding, practise consistently, and work
                towards your academic goals with a learning plan that suits
                you.
              </p>

              <a
                href="#how-it-works"
                className="mt-7 inline-flex font-bold text-[#E7CC7B] hover:text-white"
              >
                See how admission works →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING MODES */}
      <section
        id="services"
        className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="course-reveal mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Learning Your Way"
            title="Choose the Way You Learn Best"
            description="Whether you prefer a classroom, individual attention at home, or online lessons, choose the learning mode that fits your routine."
          />

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {learningModes.map((mode) => (
              <article
                key={mode.number}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#AA8935] hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102F59] text-lg font-extrabold text-[#E7CC7B]">
                  {mode.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#102F59]">
                  {mode.title}
                </h3>

                <p className="mt-2 font-semibold text-[#AA8935]">
                  {mode.subtitle}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {mode.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {mode.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-slate-700"
                    >
                      <span className="font-bold text-[#AA8935]" aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {mode.isInternal ? (
                  <Link
                    to={mode.href}
                    className="mt-8 inline-flex items-center font-bold text-[#102F59] hover:text-[#AA8935]"
                  >
                    {mode.button} <span className="ml-2">→</span>
                  </Link>
                ) : (
                  <a
                    href={mode.href}
                    className="mt-8 inline-flex items-center font-bold text-[#102F59] hover:text-[#AA8935]"
                  >
                    {mode.button} <span className="ml-2">→</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="about"
        className="course-reveal scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Support That Keeps You Moving Forward"
            description="Build confidence through structured lessons, regular practice, and guidance that focuses on your academic goals."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm font-extrabold tracking-widest text-[#AA8935]">
                  {benefit.number}
                </p>

                <h3 className="mt-4 text-xl font-bold text-[#102F59]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#102F59] p-8 text-white sm:p-10">
            <h3 className="text-2xl font-bold">
              Preparation aligned with your board
            </h3>

            <p className="mt-3 max-w-3xl leading-7 text-slate-200">
              Tell us which board and subjects you study so we can discuss
              suitable classes and preparation options. Availability depends
              on the subjects and tutors offered by the academy.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="course-reveal scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Simple Admission Process"
            title="Get Started in Four Steps"
            description="Finding the right learning support can be straightforward."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#AA8935] text-lg font-extrabold text-white">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#102F59]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section
        id="courses"
        className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Courses"
            title="Learning for Classes 9 to 12"
            description="Explore academic support for Matric and Intermediate. Contact us to confirm subjects, groups, and current availability."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <article
                key={course.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#AA8935] hover:shadow-lg"
              >
                <span className="inline-block rounded-full bg-[#102F59]/10 px-3 py-1 text-sm font-bold text-[#102F59]">
                  Matric & Intermediate
                </span>

                <h3 className="mt-5 text-2xl font-extrabold text-[#102F59]">
                  {course.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {course.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-[#AA8935]">
                  {course.subjects}
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex font-bold text-[#102F59] hover:text-[#AA8935]"
                >
                  Ask About This Class →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE */}
      <section
        id="fees"
        className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Fee Structure"
            title="Find an Option That Fits Your Needs"
            description="Fees may depend on class level, subjects, tutor requirements, schedule, and learning mode."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Campus Classes",
                description:
                  "For students who prefer learning in a classroom.",
              },
              {
                title: "Home Tuition",
                description:
                  "For students who need individual tutoring at home.",
              },
              {
                title: "Online Classes",
                description:
                  "For students who want to learn remotely.",
              },
            ].map((option) => (
              <article
                key={option.title}
                className="rounded-2xl border border-slate-200 p-7 text-center"
              >
                <h3 className="text-xl font-bold text-[#102F59]">
                  {option.title}
                </h3>

                <p className="mt-3 min-h-14 leading-7 text-slate-600">
                  {option.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex rounded-lg bg-[#102F59] px-5 py-3 font-bold text-white transition hover:bg-[#1A477E]"
                >
                  Request Fee Details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION REMOVED */}
      {/* All inquiry buttons now navigate to the Contact Us page. */}

    </main>
  );
}

export default Home;
