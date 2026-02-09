const UserMessages = ({ messages = [] }) => {
  if (!messages.length) return null;
  return (
    <div className="self-end flex flex-col gap-2">
      {messages.map((mes, idx) => (
        <div
          key={idx}
          className="flex flex-col items-end bg-white max-w-80 w-fit px-3 py-2 rounded-md"
        >
          <p>{mes}</p>
          {/* <span>{mes.created_at}</span> */}
        </div>
      ))}
      {/* <div className="flex flex-col items-end bg-white max-w-80 w-fit px-3 py-2 rounded-md">
        <p className="text-[17px] text-gray-700 font-medium">Hey!</p>
        <span className="text-gray-400 text-sm self-start">07:30</span>
      </div> */}
    </div>
  );
};

export default UserMessages;
