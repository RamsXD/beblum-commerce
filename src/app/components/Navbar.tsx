import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import { useCartStore } from "@/src/store";

function Navbar() {
  // const useStore = useCartStore();

  return (
    <nav className="fixed top-0 w-full flex py-2 px-8 z-10 justify-between bg-slate-800 text-gray-500 items-center">
      <Link href="/" className="font-bold h-12 flex items-center">
        BeBlum
      </Link>
      <div className="flex items-center gap-8 relative">
        <div className="flex items-center cursor-pointer">
          <Image src="/cesta.png" alt="carrinho" width={30} height={30}></Image>
          <span
            className="bg-teal-500 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center
          absolute top-1 left-5 text-white"
          >
            2
          </span>
        </div>
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
