import Image from "next/image";
import Logo from "@/public/sg_logo.png";
import RefreshButton from "./refreshButton";

export default function MembershipPending() {
  return (
    <main className="flex flex-col min-h-screen p-2">
      <nav className="  p-4 py-12">
        <Image src={Logo} width={100} height={100} alt="logo" />
      </nav>
      <div className="flex flex-1   justify-center">
        <div className="flex flex-col my-20   gap-8 max-w-[500px] px-8">
          <div className=" ">
            <h1 className="text-4xl text-blue-950 ">Approval Pending</h1>
          </div>
          <div className=" ">
            <p className="text-lg text-blue-950">
              Your membership is pending approval. Once approved, you can
              refresh this page.
            </p>
          </div>
          <div className="flex items-center justify-end mt-16 gap-2">
            <a href="/api/auth/logout">
              <button className="secondaryButton">Logout</button>
            </a>{" "}
            <RefreshButton />
          </div>
        </div>
      </div>
    </main>
  );
}
