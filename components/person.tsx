/** // TODO Family Card Styling
 * - add a tilt effect on hover
 */

// const testPerson = {
//   testLast: "Test",
//   testAdult1: {
//     testFirst: "Test",
//     testPhone: "123-456-7890",
//     testEmail: "test@email.com",
//   },
// };

export function Person({ family }: { family: any }) {
  const { lastName, adult1, adult2, address, children } = family;

  // !! TEST DATA !!

  // return (
  //   <div className="flex flex-col border-4 shadow-lg rounded-xl flex-1 p-2 gap-16">
  //     <div className="flex flex-col w-fit testBorder">
  //       <h2 className="text-4xl testBorder">Last Name</h2>
  //       <h3 className="font-light testBorder">First & First</h3>
  //     </div>
  //     <div className="testBorder">
  //       <p>
  //         {"Address:"}
  //         <div className="px-2">
  //           <p>Street</p>
  //           <p>City, State </p>
  //           <p>Zip</p>
  //         </div>
  //       </p>
  //       <p>First cell: 555-555-5555</p>
  //       <p>Second cell: 555-555-5555</p>
  //       <p>First email: test@email.com</p>
  //       <p>Second email: test@email.com</p>
  //     </div>
  //   </div>
  // );

  // !! REAL DATA !!
  // TODO Just need to add styling and formatting;
  return (
    <div className="infoCard">
      <div className="flex flex-col w-fit testBorder">
        <h2 className="text-4xl testBorder">{lastName}</h2>
        <h3 className="font-light testBorder">
          {adult2
            ? adult1.firstName + " & " + adult2.firstName
            : adult1.firstName}
        </h3>
      </div>
      <div className="testBorder">
        <p>
          {"Address:"}
          <div className="px-2">
            <p>{address.street || "N/A"}</p>
            <p>
              {address.city || "N/A"}, {address.state || "N/A"}
            </p>
            <p>{address.zip || "N/A"}</p>
          </div>
        </p>
        <p>
          {adult1.firstName} cell: {adult1.phone}
        </p>
        {adult2 && (
          <p>
            {adult2.firstName} cell: {adult2.phone}
          </p>
        )}
        <p>
          {adult1.firstName} email: {adult1.email}
        </p>
        {adult2 && (
          <p>
            {adult2.firstName} email: {adult2.email}
          </p>
        )}
        <p>
          Kids:{" "}
          {children &&
            children.map((child: any) => (
              <p key={child.id}>{child.firstName}</p>
            ))}
        </p>
      </div>
    </div>
  );
}
