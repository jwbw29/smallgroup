import Nav from "@/components/nav";
import MembershipPending from "@/components/pending";
import { Person } from "@/components/person";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserSessionAndRoles } from "@/utils/authUtils";
import { prisma } from "@/db/client";

// import familyData from "@/public/data/familyData.json";

async function getData() {
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
    const familyData = await getData();
    console.log("FAMILY DATA: ", familyData);

    //// Authorization ////
    const { roles } = await getUserSessionAndRoles();
    const notAuthorized = roles.length === 0;

    return notAuthorized ? (
      <MembershipPending />
    ) : (
      <main className="flex flex-col">
        {" "}
        <Nav />{" "}
        <div className="flex flex-col flex-1 items-center ">
          <div className="flex w-3/4 max-w-[750px] mt-20">
            <h1 className="text-3xl text-center my-6">Roster</h1>{" "}
          </div>
          <div className="flex flex-col h-fit w-3/4 max-w-[750px] gap-8 my-6">
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
