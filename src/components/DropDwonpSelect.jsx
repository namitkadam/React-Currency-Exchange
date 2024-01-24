function DropDwonpSelect({
  onChange,
  currencyOptionss = [],
  selectCurrency = "",
  CurrencyDisable = false,
}) {
  return (
    <div className="w-1/2 flex flex-wrap justify-end text-right">
      <p className="text-black/40 mb-2 w-full">Currency Type</p>
      <select
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        onChange={(e) => onChange(e.target.value)}
        disabled={CurrencyDisable}
      >
        {currencyOptionss.map((currency, index) => (
          <option key={`${currency}-${index}`} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDwonpSelect;
