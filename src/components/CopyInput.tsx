import { useState } from "react";

interface Props {
  value: string;
  resetURL: () => void;
}

const LinkInput = ({ value, resetURL }: Props) => {
  // 0 Not Copied, 1 Copied, 2 Reset
  const [copied, setCopied] = useState(0);

  const handleCopy = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("copied", copied);
    if (copied === 0) {
      navigator.clipboard.writeText(value);
      setCopied(1);
    } else if (copied === 1) {
      resetURL();
      setCopied(2);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <div className="h-6 self-center transition-all ease-in">
        {copied === 1 && <p className="text-green-400 animate-bounce-twice">copied to clipboard!</p>}
      </div>
      <form className="flex justify-center w-full" onSubmit={handleCopy}>
        <input
          value={value}
          className={`w-5/6 h-16 rounded-l-xl px-5 bg-gray-400 placeholder:text-black border-y-2 border-l-2 
        disabled:opacity-50
      disabled:cursor-not-allowed
      `}
          readOnly={true}
        />
        <button
          className={`
          px-6 w-fit h-16 rounded-r-xl
        bg-yellow-600 text-white hover:bg-sky-700
          active:shadow-inner active:ring-4 
          active:bg-sky-500 
          border-2 
          `}
        >
          {copied === 0 ? "copy" : copied === 1 ? "new link" : "copied"}
        </button>
      </form>
    </div>
  );
};

export default LinkInput;
