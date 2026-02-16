import { useAppState } from "../context/AppContext";
import ReplyingIndicator from "./ReplyingIndicator";
import ReactMarkDown from "react-markdown";

const MessagesByRole = ({ messages }) => {
  const { isLoading } = useAppState();

  return (
    <div className={`flex flex-col gap-5`}>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`${msg.role === "user" ? "self-end" : "self-start"}`}
        >
          <div
            className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"} bg-white rounded-md py-1 px-4 w-fit`}
          >
            <div className="">
              <ReactMarkDown>{msg.content}</ReactMarkDown>
            </div>
            <span className="text-sm text-gray-300">{msg.created_at}</span>
          </div>
        </div>
      ))}

      {isLoading && <ReplyingIndicator />}
    </div>
  );
};

export default MessagesByRole;
