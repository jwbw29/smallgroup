import Nav from "@/components/nav";

type Token = {
  access_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
};

export default async function Page() {
  // TODO May need to change how the url is constructed

  // Replace these with your actual Auth0 client credentials
  const clientId = process.env.AUTH0_CLIENT_ID;
  const clientSecret = process.env.AUTH0_CLIENT_SECRET;
  const audience = process.env.AUTH0_AUDIENCE;
  const tokenUrl = process.env.AUTH0_TOKEN_URL;

  // the above is all logging correctly

  // REQUEST TOKEN
  const tokenResponse = await fetch(tokenUrl as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: clientId as string,
      client_secret: clientSecret as string,
      audience: audience as string,
      grant_type: "client_credentials",
    }),
  });

  // TODO Change to access_token and remove the console.log
  const token: Token = await tokenResponse.json();
  // console.log(token.token_type);

  // use token to make a request to the management API
  const rolesResponse = await fetch((audience as string) + "roles", {
    headers: {
      Authorization: `${token.token_type} ${token.access_token}`,
    },
  });

  const roles = await rolesResponse.json();
  console.log(roles);

  return (
    <p>
      Roles ={" "}
      {roles.map((role) => {
        return <p key={role.id}>{role.name}</p>;
      })}
    </p>
  );

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
