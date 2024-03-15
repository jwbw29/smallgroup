import Image from "next/image";
import logo from "@/public/sg_logo.png";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-2 items-center justify-center">
      <div className="flex flex-col items-center testBorder gap-12">
        <Image src={logo} width={200} height={200} alt="Small Group Logo" />
        <a href="/api/auth/login">
          <button className="testBorder w-fit px-12 py-2">Log In</button>
        </a>
      </div>
    </main>
  );
}
