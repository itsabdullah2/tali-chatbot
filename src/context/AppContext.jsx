import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [promptValue, setPromptValue] = useState("");
  const [userMessages, setUserMessages] = useState([
    "Hey, How is it going",
    "I'm Looking for help in my app idea, can you help me",
    "My App idea is about a SaaS that helps clinics manage their schedules",
  ]);
  const [agentMessages, setAgentMessages] = useState([
    "It's going great, thanks for asking",
    "I'd be happy to help you with that, what's your app idea?",
    "Yeah! it's a great idea and this kind of ideas the market needs it a lot, would you like to help me in the structure and the tech stack or what would you like to help you with first?",
  ]);

  const handlePromptChange = (e) => {
    setPromptValue(e.target.value);
  };

  const handleAddUserMessages = (message) => {
    setUserMessages((prev) => [...prev, message]);
  };
  const handleAddAgentMessages = (message) => {
    setAgentMessages((prev) => [...prev, message]);
  };

  const values = {
    promptValue,
    userMessages,
    agentMessages,
    // Functions
    setPromptValue,
    handlePromptChange,
    handleAddAgentMessages,
    handleAddUserMessages,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }

  return context;
};
