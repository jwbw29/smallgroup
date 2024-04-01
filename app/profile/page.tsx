import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import ProfileClient from "@/components/user";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Page() {
    //Fetch user data via getSession
    const session = await getSession();

    if (!session || !session.user || !session.accessToken) {
      throw new Error(`Requires authentication`);
    }

    const roles = session.user["https://smallgroup.vercel.app/roles"] || [];
    console.log(roles);
    //Check if the user is a member
    const isPending = roles.some((role: string) => role === "Pending");

    return isPending ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col min-h-screen p-2">
        <Nav />
        <div className="flex flex-col flex-1 items-center gap-8">
          <h1 className="text-3xl text-center my-6">Profile</h1>{" "}
          <div className="flex flex-col h-fit w-3/4 gap-8 my-6">
            <ProfileClient />
          </div>
          <div className="flex w-3/4 justify-end">
            <a href="/api/auth/logout">
              <button className="border p-2 px-6 rounded-lg">Logout</button>
            </a>
          </div>
        </div>
      </main>
    );
  },
  { returnTo: "/profile" }
);
