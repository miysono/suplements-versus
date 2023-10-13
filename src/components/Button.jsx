export default function Button({
  color = "primary",
  type = "button",
  children,
  aditionalStyling = "",
  outlined = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`py-3 mt-5 duration-300 px-4 font-semibold rounded hover:scale-105 ${aditionalStyling} ${
        color === "primary" &&
        !outlined &&
        "text-white bg-green-600 hover:bg-green-700 active:bg-green-800 focus:ring focus:outline-none focus:ring-green-700"
      } ${
        color === "primary" &&
        outlined &&
        "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white hover:scale-105 active:bg-green-800 focus:ring focus:outline-none focus:ring-green-700"
      } ${
        color === "secondary" &&
        !outlined &&
        "text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-800 focus:ring focus:outline-none focus:ring-teal-700"
      } ${
        color === "secondary" &&
        outlined &&
        "border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white hover:scale-105 active:bg-teal-800 focus:ring focus:outline-none focus:ring-teal-700"
      } ${
        color === "danger" &&
        !outlined &&
        "text-white bg-red-600 hover:bg-red-700 active:bg-red-800 focus:ring focus:outline-none focus:ring-red-700"
      } ${
        color === "danger" &&
        outlined &&
        "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:scale-105 active:bg-red-800 focus:ring focus:outline-none focus:ring-red-700"
      }`}
    >
      {children}
    </button>
  );
}
