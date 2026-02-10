import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const AppStateProvider = ({ children }) => {
  const [promptValue, setPromptValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptChange = (e) => {
    setPromptValue(e.target.value);
  };

  const handleAddMessage = (message) => {
    setMessages((prev) => [
      ...prev,
      {
        id: message.id,
        content: message.content,
        role: message.role,
        created_at: message.created_at,
        timestamp: Date.now(),
      },
    ]);
  };

  const values = {
    promptValue,
    messages,
    isLoading,
    // Functions
    setPromptValue,
    handlePromptChange,
    handleAddMessage,
    setIsLoading,
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
