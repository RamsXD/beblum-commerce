import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex py-2 px-8 z-10 justify-between bg-slate-800 text-gray-500 items-center">
      <Link href="/" className="font-bold h-12 flex items-center">
        BeBlum
      </Link>
    </nav>
  );
}

export default Navbar;
