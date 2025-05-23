export default function Header({ month, onPrev, onNext }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <button 
        onClick={onPrev}
        aria-label="Previous Month"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        &#8592;
      </button>
      <h2 className="text-xl font-bold">
        {month.format('MMMM YYYY')}
      </h2>
      <button 
        onClick={onNext}
        aria-label="Next Month"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        &#8594;
      </button>
    </div>
  );
}
