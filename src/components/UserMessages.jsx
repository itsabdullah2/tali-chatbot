import { useMemo } from "react";

const UserMessages = ({ messages }) => {
  if (!messages.length) return null;

  const userMessages = useMemo(() => {
    return messages.filter((mess) => mess.role === "user");
  }, [messages]);

  return (
    <div className="self-end flex flex-col gap-2">
      {userMessages.map((mes) => (
        <div
          key={mes.id}
          className="flex flex-col items-end bg-white max-w-80 w-fit px-3 py-2 rounded-md"
        >
          <p>{mes.content}</p>
          {/* <span>{mes.created_at}</span> */}
        </div>
      ))}
    </div>
  );
};

export default UserMessages;
