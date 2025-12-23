export function ProductStatusBadge({ stock }: { stock: number }) {
  return (
    <span className={`px-2 py-1 rounded text-white text-xs ${stock > 0 ? "bg-green-600" : "bg-red-600"}`}>
      {stock > 0 ? "In Stock" : "Out of Stock"}
    </span>
  );
}
