import { IoSendSharp } from "react-icons/io5";
import { useDebounce } from "../hooks/useDebounce";
import { useAppState } from "../context/AppContext";
import { postPrompt } from "../services/prompt";
import { useState } from "react";

const ChatbotFooter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { promptValue, handlePromptChange, setPromptValue } = useAppState();
  const debouncedValue = useDebounce(promptValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const data = await postPrompt(debouncedValue);

      console.log(data);
    } catch (err) {
      console.error("Failed to send prompt");
    } finally {
      setIsLoading(false);
      setPromptValue("");
    }

    console.log(debouncedValue);
  };

  if (isLoading) {
    return <div>Message is sending...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className=" flex items-center gap-3">
      <input
        type="text"
        id="talk-to-agent"
        name="talk-to-agent"
        placeholder="Ask anything"
        className="flex-1 px-3 py-3 rounded-full bg-sky-100 focus:outline-none focus:placeholder:opacity-0 placeholder:duration-200 caret-sky-600"
        value={promptValue}
        onChange={handlePromptChange}
      />

      <button className="w-12 h-12 flex-center bg-sky-500 rounded-full text-white hover:bg-sky-600 duration-200 cursor-pointer">
        <IoSendSharp size={20} />
      </button>
    </form>
  );
};

export default ChatbotFooter;
