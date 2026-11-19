
function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p
        className={`mb-3 text-sm font-bold uppercase tracking-[0.2em] ${
          light ? "text-[#D8B75A]" : "text-[#AA8935]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-[#102F59]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            light ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
