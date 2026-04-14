const SummaryCard = ({ value, label, accent }) => {
  return (
    <div className="bg-white rounded-2xl border border-green-100 shadow-sm px-6 py-5 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow duration-200">
      <span
        className="text-3xl sm:text-4xl font-bold mb-1"
        style={{ color: accent || "#244D3F" }}
      >
        {value}
      </span>
      <span className="text-gray-500 text-sm font-medium leading-tight">{label}</span>
    </div>
  );
};

export default SummaryCard;
