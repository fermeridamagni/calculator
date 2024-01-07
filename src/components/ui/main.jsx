export default function Main({
  children,
  id = null,
  classNames = "",
  bgColog = '',
  flexCol = false,
  flexRow = false,
  flexCenter = false,
}) {
  return (
    <main
      id={id}
      className={`w-full min-h-screen animate-fade py-[100px] flex
        ${classNames}
        ${bgColog ? `bg-${bgColog}` : 'bg-gradient-to-r from-white-primary to-gray-primary'}
        ${flexCol ? "flex-col" : null}
        ${flexRow ? "flex-row" : null}
        ${flexCenter ? "justify-center items-center" : null}
      `}
    >
      {children}
    </main>
  );
}
