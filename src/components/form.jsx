import axios from "axios";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ShortUrl({ shortUrl, isValidShortUrl }) {
  const [state, setState] = useState({
    value: "",
    copied: false,
  });

  if (isValidShortUrl) {
    return (
      <div className="h-[2.8em] w-[20.3em]">
        <div className="h-[96%] bg-gray-400 flex flex-row justify-between items-center rounded-full indent-4">
          <p className="text-slate-800">{shortUrl}</p>

          <CopyToClipboard
            text={shortUrl}
            onCopy={() => setState({ value: shortUrl, copied: true })}
          >
            <button className="bg-gradient-to-r from-blue-800 to-blue-600 border-2 border-gray-300 text-amber-100 h-full w-[4.2em] rounded-full">
              {state.copied ? <span>copied</span> : <span>copy</span>}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Form = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  async function handleShrinkUrl() {
    if (longUrl.length > 1) {
      const baseUrl = "http://tinyurl.com/api-create.php";

      try {
        const response = await axios.get(`${baseUrl}?url=${longUrl}`);
        const data = await response.data;
        setShortUrl(data);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <div className="space-y-2 flex flex-col items-center">
        <form className="border-gray-500 border-2 rounded-full">
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-[18.3em] h-[2.8em] bg-gray-300 rounded-l-full indent-2 sm:indent-4 sm:w-[21.3em] focus:outline-none"
          />
          <input
            type="button"
            value={"Shrink"}
            onClick={handleShrinkUrl}
            className="w-[5em] h-[2.8em] bg-gradient-to-r text-amber-100 from-blue-800 to-blue-500 rounded-r-full"
          />
        </form>
        <ShortUrl shortUrl={shortUrl} isValidShortUrl={shortUrl.length > 1} />
      </div>
    </>
  );
};

export default Form;
