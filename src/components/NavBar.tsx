import Link from "next/link";

const linkStyle = "grid place-items-center font-sans font-semibold text-black hover:text-blue-300 hover:ring-4 text-l bg-white rounded-xl p-2 m-2 w-20 text-center";

const NavBar = () => {
  return (
    <div className="flex foin bg-neutral-800 w-screen h-16 top-0 absolute">
      <Link className={linkStyle} href="/">Home</Link>
      <Link className={linkStyle} href="/all">All links</Link>
    </div>
  );
};

export default NavBar;
