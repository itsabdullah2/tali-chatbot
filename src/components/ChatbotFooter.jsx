import { IoSendSharp } from "react-icons/io5";
import { useDebounce } from "../hooks/useDebounce";
import { useAppState } from "../context/AppContext";
import { postPrompt } from "../services/prompt";
import { useEffect, useRef, useState } from "react";

const ChatbotFooter = () => {
  const {
    promptValue,
    handlePromptChange,
    setPromptValue,
    handleAddMessage,
    messages,
    setIsLoading,
    isLoading,
  } = useAppState();
  const debouncedValue = useDebounce(promptValue, 100);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localTime = new Date().toLocaleString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: userTimeZone,
    });

    const userMessage = {
      id: crypto.randomUUID(),
      content: promptValue,
      role: "user",
      created_at: `${localTime}`,
    };

    // Push user message to the messages state
    handleAddMessage(userMessage);
    setPromptValue("");
    try {
      setIsLoading(true);

      if (!debouncedValue || !promptValue) return;

      const data = await postPrompt(debouncedValue);

      const apiTimestamp = data.created * 1000;
      // Get the user’s timezone automatically
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const localTime = new Date(apiTimestamp).toLocaleString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: userTimeZone,
      });

      const agentRes = {
        id: data.id,
        content: data.choices[0].message.content,
        role: data.choices[0].message.role,
        created_at: `${localTime}`,
      };

      // Push assistant message to the messages state
      handleAddMessage(agentRes);
    } catch (err) {
      console.error("Failed to send prompt");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" flex items-center gap-3">
      <input
        ref={inputRef}
        type="text"
        id="talk-to-agent"
        name="talk-to-agent"
        placeholder="Ask anything"
        className="flex-1 px-3 py-3 rounded-full bg-sky-100 focus:outline-none caret-sky-600"
        value={promptValue}
        onChange={handlePromptChange}
        autoComplete="off"
      />

      <button
        disabled={isLoading}
        className={`${isLoading ? "bg-gray-400" : "bg-sky-500 hover:bg-sky-600 cursor-pointer"} w-12 h-12 flex-center rounded-full text-white duration-200`}
      >
        <IoSendSharp size={20} />
      </button>
    </form>
  );
};

export default ChatbotFooter;
