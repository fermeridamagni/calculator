export default function Main({
  children,
  id = null,
  classNames = "",
  bgColor = "",
  flexCol = false,
  flexRow = false,
  flexCenter = false,
}) {
  return (
    <main
      id={id}
      className={`w-full min-h-screen animate-fade py-[120px] flex
        ${classNames}
        ${
          bgColor
            ? `bg-${bgColor}`
            : "bg-gradient-to-r from-white_primary to-gray_primary dark:from-black dark:to-black"
        }
        ${flexCol ? "flex-col" : null}
        ${flexRow ? "flex-row" : null}
        ${flexCenter ? "justify-center items-center" : null}
      `}
    >
      {children}
    </main>
  );
}
