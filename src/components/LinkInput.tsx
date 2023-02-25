interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setUrl: (value: string) => void;
  error: boolean;
  loading: boolean;
}

const LinkInput = ({handleSubmit, setUrl, error, loading}: Props) => {
  return (
    <form className="flex justify-center w-full" onSubmit={handleSubmit}>
      <input
        placeholder="Paste url here"
        className={`w-5/6 h-16 rounded-l-xl px-5 bg-gray-400 placeholder:text-black border-y-2 border-l-2 
      ${error && "border-red-400"}
      disabled:opacity-50
      disabled:cursor-not-allowed
      `}
        onChange={(e) => setUrl(e.target.value)}
        disabled={loading}
      />
      <button
        className={`px-6 w-fit h-16 rounded-r-xl bg-sky-600 text-white hover:bg-sky-700 active:shadow-inner active:ring-4 active:bg-sky-500 border-2 
      ${error && "border-red-400"}
      disabled:opacity-50
      disabled:cursor-not-allowed
      `}
        disabled={loading}
      >
        submit
      </button>
    </form>
  );
};

export default LinkInput;
