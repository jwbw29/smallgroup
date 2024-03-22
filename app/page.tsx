import Nav from "@/components/nav";
import { AuthenticatedRoute } from "../components/AuthenticatedRoute";

export default function Page() {
  return (
    // TODO need to route to /login if not logged in
    <AuthenticatedRoute allowedRoles={["Admin", "Member"]}>
      <main className="flex flex-col min-h-screen p-2">
        <Nav />
        <div className="flex flex-1 testBorder justify-center">
          <div className="flex flex-col testBorder h-96 w-3/4 gap-8 mt-28 ">
            <h1 className="text-3xl testBorder text-center">Next Event</h1>{" "}
            <div className="flex flex-col border-4 rounded-xl flex-1 justify-around">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl">{"{eventName}"}</h2>
                <h3 className=" font-bold">{"Date: {date}"}</h3>
              </div>
              <div className="testBorder mx-4">
                <p>{"Who: {guys/girls/all/etc}"}</p>
                <p>{"Where: {location}"}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </AuthenticatedRoute>
  );
}
