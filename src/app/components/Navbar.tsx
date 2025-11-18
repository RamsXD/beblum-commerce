import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex py-2 px-8 z-10 justify-between bg-slate-800 text-gray-500 items-center">
      <Link href="/" className="font-bold h-12 flex items-center">
        BeBlum
      </Link>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="border rounded-md border-gray-400 px-3 py-2 cursor-pointer">
              Fazer Login
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navbar;
