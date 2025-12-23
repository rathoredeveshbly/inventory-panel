export function Pagination({
  page,
  totalPages,
  onChange,
  maxVisible = 5, // how many numbers around current page
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
  maxVisible?: number;
}) {
  if (totalPages <= 1) return null;

  const half = Math.floor(maxVisible / 2);

  let start = Math.max(1, page - half);
  let end = Math.min(totalPages, page + half);

  // adjust window if near edges
  if (page <= half) {
    end = Math.min(totalPages, maxVisible);
  }

  if (page + half > totalPages) {
    start = Math.max(1, totalPages - maxVisible + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {start > 1 && (
        <>
          <button
            onClick={() => onChange(1)}
            className="px-3 py-1 border rounded"
          >
            1
          </button>
          {start > 2 && <span className="px-1">...</span>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 border rounded ${
            page === p ? "bg-black text-white" : ""
          }`}
        >
          {p}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="px-1">...</span>}
          <button
            onClick={() => onChange(totalPages)}
            className="px-3 py-1 border rounded"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
