"use client";

export default function Pagination({
  page,
  setPage,
  totalPages,
}) {

  if (totalPages <= 1) return null;

  const maxVisible = 3;

  const getVisiblePages = () => {
    let start = Math.max(1, page - 1);
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-3 mt-14 flex-wrap">

      {/* PREV */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-xl border border-[#F75270]/40
        text-[#F75270] disabled:opacity-40
        hover:bg-[#F75270]/10 transition"
      >
        Prev
      </button>

      {/* FIRST PAGE */}
      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => setPage(1)}
            className="px-4 py-2 rounded-xl border border-[#F75270]/40
            text-[#F75270] hover:bg-[#F75270]/10 transition"
          >
            1
          </button>

          {visiblePages[0] > 2 && (
            <span className="px-2 text-gray-400">...</span>
          )}
        </>
      )}

      {/* VISIBLE PAGES */}
      {visiblePages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-4 py-2 rounded-xl font-medium transition
          ${
            page === p
              ? "bg-gradient-to-r from-[#F75270] to-[#ff8fa3] text-white shadow-lg"
              : "border border-[#F75270]/40 text-[#F75270] hover:bg-[#F75270]/10"
          }`}
        >
          {p}
        </button>
      ))}

      {/* LAST PAGE */}
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2 text-gray-400">...</span>
          )}

          <button
            onClick={() => setPage(totalPages)}
            className="px-4 py-2 rounded-xl border border-[#F75270]/40
            text-[#F75270] hover:bg-[#F75270]/10 transition"
          >
            {totalPages}
          </button>
        </>
      )}

      {/* NEXT */}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-xl border border-[#F75270]/40
        text-[#F75270] disabled:opacity-40
        hover:bg-[#F75270]/10 transition"
      >
        Next
      </button>

    </div>
  );
}