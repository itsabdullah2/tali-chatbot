const AgentMessages = ({ messages }) => {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="self-start flex flex-col gap-2">
      {messages.map((mes) => (
        <div
          key={mes.id}
          className="flex flex-col bg-gray-200 max-w-80 w-fit px-3 py-2 rounded-md"
        >
          <p>{mes.content}</p>
          {/* <span>{mes.created_at}</span> */}
        </div>
      ))}
    </div>
  );
};

export default AgentMessages;
