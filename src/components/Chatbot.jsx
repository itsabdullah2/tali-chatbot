import ChatbotHeader from "./ChatbotHeader";
import ChatbotBody from "./ChatbotBody";
import ChatbotFooter from "./ChatbotFooter";

const Chatbot = () => {
  return (
    <div className="bg-white w-full rounded-lg border border-sky-500 h-[calc(100dvh-100px)]">
      <ChatbotHeader />
      <ChatbotBody />
      <ChatbotFooter />
    </div>
  );
};

export default Chatbot;
