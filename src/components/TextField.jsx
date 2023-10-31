



const TextField = ({ title, inputRef, value, name, event, type = "text" }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <input
        ref={inputRef}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type={type}
        name={name}
        placeholder={title}
        value={value}
        onChange={event}
      />
    </>
  );
};

export default TextField;
