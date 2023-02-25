import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: Props) => {
  return (
    <div
      className={`
      h-screen w-screen
      bg-gradient-to-br from-purple-700 via-black to-cyan-600
      ${className}
      `}
    >
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
