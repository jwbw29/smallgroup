// ** use server side rendering to get data from the server

import Nav from "@/components/nav";
import { Person } from "@/components/person";
import { AuthenticatedRoute } from "@/components/AuthenticatedRoute";

import familyData from "@/public/data/familyData.json";

export default async function Roster() {
  return (
    <AuthenticatedRoute>
      <main className="flex flex-col min-h-screen p-2">
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
    </AuthenticatedRoute>
  );
}
