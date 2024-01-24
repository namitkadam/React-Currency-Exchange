import React, { useId } from "react";

function Input({ label, amount, onAmountChange, amountDisable = false }) {
  const amountInputId = useId();
  return (
    <div className="w-1/2">
      <label
        htmlFor={amountInputId}
        className="text-black/40 mb-2 inline-block"
      >
        {label}
      </label>
      <input
        id={amountInputId}
        className="outline-none w-full bg-transparent py-1.5"
        type="number"
        placeholder="Amount"
        disabled={amountDisable}
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />
    </div>
  );
}

export default Input;
