import { useState } from "react";
import BackgroundImg from "./photo/globe-technology-background.avif";

import Input from "./components/Input";
import DropDwonpSelect from "./components/DropDwonpSelect";

import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencInfo = useCurrencyInfo(from);
  const options = Object.keys(currencInfo);

  const convert = () => {
    setConvertedAmount(amount * currencInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url( "${BackgroundImg}")` }}
    >
      <div className="w-full">
        <div className=" w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <div className={`bg-white p-3 rounded-lg text-sm flex`}>
                <Input
                  label="From"
                  amount={amount}
                  onAmountChange={(amount) => setAmount(amount)}
                />
                <DropDwonpSelect
                  currencyOptionss={options}
                  onChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5"></div>
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-400"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <div className={`bg-white p-3 rounded-lg text-sm flex`}>
                <Input label="To" amount={convertedAmount} amountDisable />
                <DropDwonpSelect
                  currencyOptionss={options}
                  onChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                />
              </div>
            </div>
            <button
              type="submit"
              className=" w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-400"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;