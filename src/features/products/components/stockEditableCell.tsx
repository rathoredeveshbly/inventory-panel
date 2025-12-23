import { useState } from "react";
import { useProductStore } from "../store/productStore";

export function StockEditableCell({ id, stock }: { id: number; stock: number }) {
  const updateStock = useProductStore((s) => s.updateStock);

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(stock);

  const save = () => {
    const next = Number.isFinite(value) ? Math.max(0, value) : stock;
    updateStock(id, next);
    setEditing(false);
  };

  if (editing) {
    return (
      <input
        type="number"
        value={value}
        autoFocus
        className="w-20 border px-2 py-1 rounded"
        onChange={(e) => setValue(Number(e.target.value))}
        onBlur={save}
        onKeyDown={(e) => {
          if (e.key === "Enter") save();
          if (e.key === "Escape") setEditing(false);
        }}
      />
    );
  }

  return (
    <button
      type="button"
      className="underline"
      onClick={() => {
        setValue(stock);
        setEditing(true);
      }}
      title="Click to edit stock"
    >
      {stock}
    </button>
  );
}