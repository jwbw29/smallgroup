import Nav from "@/components/nav";

export default async function Page() {
  // TODO May need to change how the url is constructed

  // Replace these with your actual Auth0 client credentials
  const clientId = process.env.AUTH0_CLIENT_ID;
  const clientSecret = process.env.AUTH0_CLIENT_SECRET;
  const audience = process.env.AUTH0_AUDIENCE;
  const tokenUrl = process.env.AUTH0_TOKEN_URL; //TODO  this most likely isn't the right way to do it -- need to figure out how to send the token (and get a token in the first place)

  const res = await fetch("https://dev-edet26qnl0r7r40m.us.auth0.com/api/v2/");
  const data = await res.json();

  return <p>Data id = {data.name}</p>;

  // return (
  //   <main className="flex flex-col min-h-screen p-2">
  //     <Nav />
  //     <div className="flex flex-1 testBorder justify-center">
  //       <div className="flex flex-col testBorder h-96 w-3/4 gap-8 mt-28 ">
  //         <h1 className="text-3xl testBorder text-center">Next Event</h1>{" "}
  //         <div className="flex flex-col border-4 rounded-xl flex-1 justify-around">
  //           <div className="flex flex-col items-center">
  //             <h2 className="text-4xl">{"{eventName}"}</h2>
  //             <h3 className=" font-bold">{"Date: {date}"}</h3>
  //           </div>
  //           <div className="testBorder mx-4">
  //             <p>{"Who: {guys/girls/all/etc}"}</p>
  //             <p>{"Where: {location}"}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
}
