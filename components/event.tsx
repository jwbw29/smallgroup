/** // TODO create table of events like we did users/members */

// const testEvent = {
//   testAgenda: "Test Event",
//   testYear: "2021",
//   testSemester: "Fall",
//   testDate: "2021-10-10",
//   testLocation: "Test Location",
//   testGroup: "Test Group",
// };

export function EventDetails({ event }: { event: any }) {
  const { name, date, location, group_type } = event;

  // const {
  //   testAgenda,
  //   testYear,
  //   testSemester,
  //   testDate,
  //   testLocation,
  //   testGroup,
  // } = testEvent;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // !! TEST DATA !!
  // return (
  //   <div className="flex flex-col align-center border-4 shadow-lg rounded-xl flex-1 p-2 gap-12">
  //     <div className="flex flex-col items-center ">
  //       <h2 className="text-2xl text-center ">{testAgenda}</h2>
  //       <h3 className="text-lg font-bold ">{formattedDate}</h3>
  //     </div>
  //     <div className=" mx-4">
  //       {" "}
  //       <p>
  //         Who: <span className="font-bold">{testGroup}</span>
  //       </p>
  //       <p>
  //         Where: <span className="font-bold">{testLocation}</span>
  //       </p>
  //     </div>
  //   </div>
  // );

  // !! REAL DATA !!
  return (
    <div className="infoCard">
      <div className="flex flex-col items-start ">
        <h2 className="text-2xl text-left font-bold">{name}</h2>
        <h3 className="text-lg font-light  ">{formattedDate}</h3>
      </div>
      <div className=" mx-4">
        {" "}
        <p>
          Who: <span className="font-bold">{group_type}</span>
        </p>
        <p>
          Where: <span className="font-bold">{location}</span>
        </p>
      </div>
    </div>
  );
}
