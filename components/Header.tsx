import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header gitagpt"
          src="/Gitagpt.png"
          className="sm:w-12 sm:h-4"
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          GitaGPT.in
        </h1>
      </Link>
    </header>
  );
}
