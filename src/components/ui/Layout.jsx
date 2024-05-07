const Layout = ({ maxWidth, children }) => {
  return (
    <div
      className={`
    py-[100px] px-2 ${maxWidth}  mx-auto bg-red-400
    `}
    >
      {children}
    </div>
  );
};
export default Layout;
