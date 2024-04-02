import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import ProfileClient from "@/components/user";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";

export default withPageAuthRequired(
  async function Page() {
    //Fetch user data via getSession
    const { roles, loginCount } = await getUserSessionAndRoles();

    //Check if the user has authorization
    const isPending = roles.some((role: string) => role === "Pending");

    const isAuthorized = !isPending || loginCount > 1;

    return isAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col">
        {" "}
        <Nav />
        <div className="flex flex-col flex-1 items-center gap-8">
          <h1 className="text-3xl text-center my-6">Profile</h1>{" "}
          <div className="flex flex-col h-fit w-3/4 gap-8 my-6">
            <ProfileClient />
          </div>
          <div className="flex w-3/4 justify-end">
            <a href="/api/auth/logout">
              <button className="primaryButton">Logout</button>
            </a>
          </div>
        </div>
      </main>
    );
  },
  { returnTo: "/profile" }
);
