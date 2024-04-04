import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

export default withPageAuthRequired(
  async function Page() {
    //Fetch user data via getSession
    const { roles } = await getUserSessionAndRoles();
    const session = await getSession();
    const user = session?.user; // Add type assertion to ensure session is not null or undefined

    const notAuthorized = roles.length === 0;

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col h-screen">
        {" "}
        <Nav />
        {/* //// MAIN CONTENT */}
        <div className="flex flex-1 justify-center mb-16">
          <div className=" flex flex-col w-3/4 max-w-[750px] gap-16 justify-center">
            {/* //// IMAGE */}
            <div className=" flex items-center justify-center">
              <Image
                src={user?.picture}
                width={250}
                height={250}
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
            {/* //// NAME & EMAIL */}
            <div className=" flex flex-col justify-center items-center gap-4">
              <h1 className="text-4xl">{user?.name}</h1>
              <h3 className="text-sm font-light">{user?.email}</h3>
            </div>
            {/* //// LOGOUT BUTTON */}
            <div className=" flex justify-center">
              <button className="primaryButton">Log Out</button>
            </div>
          </div>
        </div>
      </main>
    );
  },
  { returnTo: "/profile" }
);
