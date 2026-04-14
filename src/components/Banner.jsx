const Banner = () => {
  return (
    <section className="bg-white border-b border-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-15 text-center">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#244D3F] leading-tight mb-4 tracking-tight">
          Friends to keep close in your life
        </h1>

        {/* Subheading */}
        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* CTA */}
        <button className="btn bg-[#244D3F] hover:bg-[#1b3c31] text-white border-none px-8 py-3 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200">
          + Add a Friend
        </button>
      </div>
    </section>
  );
};

export default Banner;
