import React, { useMemo } from "react";
import { useAppState } from "../context/AppContext";
import MessagesByRole from "./MessagesByRole";

const ChatbotBody = () => {
  const bottomRef = React.useRef(null);
  const isFirstLoad = React.useRef(true);

  const { messages } = useAppState();

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: isFirstLoad.current ? "smooth" : "auto",
    });

    isFirstLoad.current = false;
  }, [messages]);

  const sortedMessages = useMemo(
    () => messages.sort((a, b) => a.timestamp - b.timestamp),
    [messages],
  );
  return (
    <div className="flex-1 px-7 bg-sky-100 overflow-auto rounded-lg py-2 mb-4">
      <div className="flex flex-col gap-4">
        <MessagesByRole messages={sortedMessages} role="user" />
      </div>

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatbotBody;
