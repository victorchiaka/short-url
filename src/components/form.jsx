import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  async function handleShrinkUrl() {
    const baseUrl = "http://tinyurl.com/api-create.php";

    try {
      const response = await fetch(`${baseUrl}?url=${longUrl}`);
      const data = await response.text();
      setShortUrl(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form className="border-gray-500 border-2 rounded-full">
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="w-[18.3em] h-[2.8em] bg-gray-200 rounded-l-full indent-3 sm:indent-4 sm:w-[21.3em] focus:outline-none"
        />
        <input
          type="button"
          value={"Shrink"}
          onClick={handleShrinkUrl}
          className="w-[5.5em] h-[2.8em] bg-gradient-to-r text-amber-100 from-blue-600 to-blue-400 rounded-r-full"
        />
      </form>
    </div>
  );
};

export default Form;
