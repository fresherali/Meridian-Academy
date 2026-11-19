
import React from "react";

const ContactUs = () => {
const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const name = formData.get("fullName");
  const phone = formData.get("phone");
  const grade = formData.get("grade");
  const studyMode = formData.get("studyMode");
  const message = formData.get("message");

  // Your academy's WhatsApp number
  const whatsappNumber = "923285872959";

  const whatsappMessage = `
*New Admission Inquiry - Meridian Academy*

*Full Name:* ${name}
*Phone / WhatsApp:* ${phone}
*Student Grade:* ${grade}
*Preferred Study Mode:* ${studyMode}

*Inquiry Details:*
${message}
  `;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
};
  return (
    <main className="overflow-hidden bg-white">

      {/* SECTION 1: PAGE HEADER */}
      <section className="relative bg-[#102F59] px-5 py-20 text-center text-white sm:py-24">
        <div className="  absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#AA8935]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className=" course-reveal relative mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-[#D9BC76]/50 bg-white/10 px-5 py-2 text-sm font-semibold tracking-widest text-[#D9BC76]">
            CONTACT MERIDIAN ACADEMY
          </span>

          <h1 className="mt-7 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Get in Touch with Our{" "}
            <span className="text-[#D9BC76]">
              Academic Advisors
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
            Have questions about admissions, home tutors, or online classes?
            We are here to help!
          </p>
        </div>
      </section>

      {/* SECTION 2: IMAGE + INQUIRY FORM */}
      <section className="px-5 py-20 sm:py-24">
        <div className=" course-reveal mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* LEFT SIDE: IMAGE AND INTRODUCTION */}
          <div className="relative">

            {/* Decorative animated circles */}
            <div className="absolute -left-5 -top-5 h-28 w-28 animate-pulse rounded-full bg-[#AA8935]/20" />
            <div className="absolute -bottom-5 -right-5 h-32 w-32 animate-pulse rounded-full bg-[#102F59]/10" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/services-banner.jpg"
                alt="Students celebrating academic success"
                className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[480px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102F59] via-[#102F59]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 text-white sm:p-10">
                <span className="text-sm font-bold uppercase tracking-widest text-[#D9BC76]">
                  Your Future Starts Here
                </span>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  Let's Make Your Academic Goals a Reality
                </h2>

                <p className="mt-4 max-w-md leading-7 text-gray-200">
                  Connect with our academic team and discover the right
                  learning path for your success.
                </p>
              </div>
            </div>

            {/* Small floating information card */}
            <div className="relative mx-4 -mt-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:mx-8 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#102F59] text-2xl text-white">
                  🎓
                </div>

                <div>
                  <h3 className="font-bold text-[#102F59]">
                    Personalized Academic Guidance
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    On-Campus • Home Tuition • Online Classes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: INQUIRY FORM */}
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-xl sm:p-9">

            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-widest text-[#AA8935]">
                ADMISSIONS & INQUIRIES
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-[#102F59]">
                Send Us an Inquiry
              </h2>

              <p className="mt-3 leading-7 text-gray-500">
                Fill out the form below. Our academic team will be happy
                to guide you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-[#102F59]"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#AA8935] focus:bg-white focus:ring-2 focus:ring-[#AA8935]/20"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-[#102F59]"
                >
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#AA8935] focus:bg-white focus:ring-2 focus:ring-[#AA8935]/20"
                />
              </div>

              {/* Student Grade */}
              <div>
                <label
                  htmlFor="grade"
                  className="mb-2 block text-sm font-semibold text-[#102F59]"
                >
                  Student Grade <span className="text-red-500">*</span>
                </label>

                <select
                  id="grade"
                  name="grade"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-600 outline-none transition focus:border-[#AA8935] focus:bg-white focus:ring-2 focus:ring-[#AA8935]/20"
                >
                  <option value="" disabled>
                    Select student grade
                  </option>
                  <option value="9th Grade">9th Grade</option>
                  <option value="10th Grade">10th Grade</option>
                  <option value="11th Grade">11th Grade</option>
                  <option value="12th Grade">12th Grade</option>
                </select>
              </div>

              {/* Preferred Study Mode */}
              <div>
                <label
                  htmlFor="studyMode"
                  className="mb-2 block text-sm font-semibold text-[#102F59]"
                >
                  Preferred Study Mode <span className="text-red-500">*</span>
                </label>

                <select
                  id="studyMode"
                  name="studyMode"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-600 outline-none transition focus:border-[#AA8935] focus:bg-white focus:ring-2 focus:ring-[#AA8935]/20"
                >
                  <option value="" disabled>
                    Select preferred study mode
                  </option>
                  <option value="On-Campus">On-Campus</option>
                  <option value="Home Tuition">Home Tuition</option>
                  <option value="Online Class">Online Class</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#102F59]"
                >
                  Message / Inquiry Details <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-[#AA8935] focus:bg-white focus:ring-2 focus:ring-[#AA8935]/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#AA8935] px-6 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#102F59] hover:shadow-xl"
              >
                Submit Inquiry
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                Your information will be used to respond to your admission inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 3: DIRECT CONTACT INFORMATION */}
      <section className="bg-gray-50 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#AA8935]">
              GET IN TOUCH
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102F59] sm:text-4xl">
              We're Always Here to Help
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Reach out to us through any of the following channels.
              Our team is ready to assist you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* Address */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102F59] text-3xl transition duration-300 group-hover:bg-[#AA8935]">
                📍
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#102F59]">
                Campus Address
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                123 Street , City ABC, 
              </p>
            </div>

            {/* Phone */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102F59] text-3xl transition duration-300 group-hover:bg-[#AA8935]">
                📞
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#102F59]">
                Phone / WhatsApp
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                +923012345678
              </p>
            </div>

            {/* Email */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102F59] text-3xl transition duration-300 group-hover:bg-[#AA8935]">
                ✉️
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#102F59]">
                Email Address
              </h3>

              <div className="mt-3 space-y-2 text-sm text-gray-500">
                <p>admissions@youracademy.com</p>
                <p>info@youracademy.com</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102F59] text-3xl transition duration-300 group-hover:bg-[#AA8935]">
                ⏰
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#102F59]">
                Working Hours
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Monday – Saturday
                <br />
                9:00 AM – 8:00 PM
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactUs;
