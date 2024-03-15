/** // TODO create table of events like we did users/members */

const testEvent = {
  testAgenda: "Test Event",
  testYear: "2021",
  testSemester: "Fall",
  testDate: "2021-10-10",
  testLocation: "Test Location",
  testGroup: "Test Group",
};

export function EventDetails({ event }: { event: any }) {
  const { agenda, year, semester, date, location, group } = event;
  const {
    testAgenda,
    testYear,
    testSemester,
    testDate,
    testLocation,
    testGroup,
  } = testEvent;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // TODO Just need to add styling and formatting
  return (
    <div className="flex flex-col align-center border-4 shadow-lg rounded-xl flex-1 p-2 gap-12">
      <div className="flex flex-col items-center testBorder">
        <h2 className="text-2xl text-center testBorder">{testAgenda}</h2>
        <h3 className="text-lg font-bold testBorder">{formattedDate}</h3>
      </div>
      <div className="testBorder mx-4">
        {" "}
        <p>
          Who: <span className="font-bold">{testGroup}</span>
        </p>
        <p>
          Where: <span className="font-bold">{testLocation}</span>
        </p>
      </div>
    </div>
  );
}
