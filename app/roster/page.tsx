import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { Person } from "@/components/person";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import { prisma } from "@/db/client";

// import familyTestData from "@/public/data/familyTestData.json";

async function getFamilyData() {
  const familyData = await prisma.family.findMany({
    orderBy: { last_name: "asc" },
    include: {
      adults: true,
      children: true,
      address: true,
    },
  });
  return familyData;
}

export default withPageAuthRequired(
  async function Page() {
    //// DATABASE ////
    const familyData = await getFamilyData();

    //// Authorization ////
    const { roles } = await getUserSessionAndRoles();
    const notAuthorized = roles.length === 0;

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col items-center">
        {" "}
        <Nav />
        <div className="flex w-3/4 max-w-[750px] mt-6">
          <h1 className="text-3xl text-center my-6">Roster</h1>{" "}
        </div>
        <div className="flex flex-col h-fit w-3/4 max-w-[750px] gap-8 my-6">
          {/* //* REPLACE `familyData` with `familyTestData` to use test data */}
          {familyData.map((family, i) => (
            <Person key={i} family={family} />
          ))}
        </div>
      </main>
    );
  },
  { returnTo: "/roster" }
);
