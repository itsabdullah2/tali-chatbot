import React from "react";
import UserMessages from "./UserMessages";
import AgentMessages from "./AgentMessages";
import { useAppState } from "../context/AppContext";

const ChatbotBody = () => {
  const bottomRef = React.useRef(null);
  const isFirstLoad = React.useRef(true);

  const { userMessages, agentMessages } = useAppState();

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: isFirstLoad.current ? "smooth" : "auto",
    });

    isFirstLoad.current = false;
  }, []);
  return (
    <div className="flex-1 px-7 bg-gray-100 overflow-auto rounded-lg py-2 mb-4">
      <div className="flex flex-col gap-4">
        <UserMessages messages={userMessages} />
        <AgentMessages messages={agentMessages} />
      </div>

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatbotBody;
