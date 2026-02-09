import ChatbotHeader from "./ChatbotHeader";
import ChatbotBody from "./ChatbotBody";
import ChatbotFooter from "./ChatbotFooter";

const Chatbot = () => {
  return (
    <div className="bg-white w-full rounded-lg border border-sky-500 h-[calc(100dvh-100px)] flex flex-col overflow-hidden p-3">
      <ChatbotHeader />
      <ChatbotBody />
      <ChatbotFooter />
    </div>
  );
};

export default Chatbot;
