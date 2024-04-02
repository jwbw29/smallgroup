import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { Person } from "@/components/person";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";

import familyData from "@/public/data/familyData.json";

export default withPageAuthRequired(
  async function Page() {
    //Fetch user data via getSession
    const { roles, loginCount } = await getUserSessionAndRoles();
    //Check if the user is a member
    //Check if the user has authorization
    const isPending = roles.some((role: string) => role === "Pending");

    const notAuthorized = isPending || loginCount <= 1;

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col">
        {" "}
        <Nav />{" "}
        <div className="flex flex-col flex-1 testBorder items-center ">
          <h1 className="text-3xl testBorder text-center my-6">Roster</h1>{" "}
          <div className="flex flex-col testBorder h-fit w-3/4 gap-8 my-6">
            {familyData.map((family, i) => (
              <Person key={i} family={family} />
            ))}
          </div>
        </div>
      </main>
    );
  },
  { returnTo: "/roster" }
);
