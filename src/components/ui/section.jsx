export default function Section({
  children,
  id = null,
  classNames = "",
  bgColog = '',
  flexCol = false,
  flexRow = false,
  flexCenter = false,
}) {
  return (
    <section
      id={id}
      className={`w-full min-h-screen bg-gradient-to-r from-white-primary to-gray-primary flex
        ${classNames}
        ${bgColog ? `bg-${bgColog}` : 'bg-gradient-to-r from-white-primary to-gray-primary'}
        ${flexCol ? "flex-col" : null}
        ${flexRow ? "flex-row" : null}
        ${flexCenter ? "justify-center items-center" : null}
      `}
    >
      {children}
    </section>
  );
}
