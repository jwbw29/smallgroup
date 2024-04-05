import { prisma } from "@/db/client";
import { config } from "dotenv";

config({ path: ".env.local" });

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.event.deleteMany({});
  await prisma.semester.deleteMany({});
  await prisma.year.deleteMany({});
  await prisma.group.deleteMany({});
  await prisma.address.deleteMany({});
  await prisma.child.deleteMany({});
  await prisma.adult.deleteMany({});
  await prisma.enneagram.deleteMany({});
  await prisma.family.deleteMany({});

  const sequences = [
    "Family_id_seq",
    "Enneagram_id_seq",
    "Adult_id_seq",
    "Child_id_seq",
    "Address_id_seq",
    "Event_id_seq",
  ];

  for (const seq of sequences) {
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE "${seq}" RESTART WITH 1;`);
  }

  // FAMILY
  await prisma.family.createMany({
    data: [
      {
        last_name: "Allen",
      },
      {
        last_name: "Byrd",
      },
      {
        last_name: "Kleinhesselink",
      },
      {
        last_name: "Loethen",
      },
      {
        last_name: "Rutledge",
      },
      {
        last_name: "Shepherd",
      },
      {
        last_name: "Turner",
      },
    ],
  });
  const allFamily = await prisma.family.findMany();
  console.log(allFamily);

  // ENNEAGRAM
  await prisma.enneagram.createMany({
    data: [
      {
        type: "1",
        name: "The Reformer",
        url: "https://www.enneagraminstitute.com/type-1/",
      },
      {
        type: "2",
        name: "The Helper",
        url: "https://www.enneagraminstitute.com/type-2/",
      },
      {
        type: "3",
        name: "The Achiever",
        url: "https://www.enneagraminstitute.com/type-3/",
      },
      {
        type: "4",
        name: "The Individualist",
        url: "https://www.enneagraminstitute.com/type-4/",
      },
      {
        type: "5",
        name: "The Investigator",
        url: "https://www.enneagraminstitute.com/type-5/",
      },
      {
        type: "6",
        name: "The Loyalist",
        url: "https://www.enneagraminstitute.com/type-6/",
      },
      {
        type: "7",
        name: "The Enthusiast",
        url: "https://www.enneagraminstitute.com/type-7/",
      },
      {
        type: "8",
        name: "The Challenger",
        url: "https://www.enneagraminstitute.com/type-8/",
      },
      {
        type: "9",
        name: "The Peacemaker",
        url: "https://www.enneagraminstitute.com/type-9/",
      },
      {
        type: "0",
        name: "Unknown",
        url: "https://www.enneagraminstitute.com",
      },
    ],
  });
  const allEnneagrams = await prisma.enneagram.findMany();
  console.log(allEnneagrams);

  // ADULT
  await prisma.adult.createMany({
    data: [
      {
        first_name: "Kelsey",
        email: "siscok@health.missouri.edu",
        phone: "5734764400",
        birth_date: "1989-03-07T00:00:00-06:00",
        familyId: 1,
        enneagramId: 10,
      },
      {
        first_name: "Justin",
        email: "justin.byrd7@gmail.com",
        phone: "5733019718",
        birth_date: "1989-09-10T00:00:00-06:00",
        familyId: 2,
        enneagramId: 9,
      },
      {
        first_name: "Jacqueline",
        email: "jacquelinepbyrd@gmail.com",
        phone: "5734897960",
        birth_date: "1990-09-06T00:00:00-06:00",
        familyId: 2,
        enneagramId: 2,
      },
      {
        first_name: "Paden",
        email: "padenkleinhesselink@gmail.com",
        phone: "7124411745",
        birth_date: "1990-09-06T00:00:00-06:00",
        familyId: 3,
        enneagramId: 9,
      },
      {
        first_name: "Mattie",
        email: "Martha.bradley16@gmail.com",
        phone: "5736310620",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 3,
        enneagramId: 10,
      },
      {
        first_name: "Kyle",
        email: "kyleloethen@me.com",
        phone: "3108693855",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 4,
        enneagramId: 3,
      },
      {
        first_name: "Madison",
        email: "madisonloethen@gmail.com",
        phone: "3145911238",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 4,
        enneagramId: 5,
      },
      {
        first_name: "Caleb",
        email: "calebarutledge@gmail.com",
        phone: "4172527404",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 5,
        enneagramId: 8,
      },
      {
        first_name: "Josie",
        email: "josiehalen@gmail.com",
        phone: "6603468500",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 5,
        enneagramId: 9,
      },
      {
        first_name: "Kaelob",
        email: "kaelob.shepherd@gmail.com",
        phone: "5732596808",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 6,
        enneagramId: 3,
      },
      {
        first_name: "Amy",
        email: "ashepherd908@gmail.com",
        phone: "6302006688",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 6,
        enneagramId: 2,
      },
      {
        first_name: "Sam",
        email: "Samuel.turner@turneragsolutions.com",
        phone: "5738640773",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 7,
        enneagramId: 3,
      },
      {
        first_name: "Samantha",
        email: "shgibson@live.com",
        phone: "6603290974",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 7,
        enneagramId: 6,
      },
    ],
  });

  // CHILD
  await prisma.child.createMany({
    data: [
      {
        first_name: "Jace",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 1,
      },
      {
        first_name: "Jett",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 1,
      },
      {
        first_name: "Jaelyn",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 1,
      },
      {
        first_name: "Henry",
        birth_date: "2019-10-22T00:00:00-06:00",
        familyId: 2,
      },
      {
        first_name: "Landry",
        birth_date: "2021-01-21T00:00:00-06:00",
        familyId: 2,
      },
      {
        first_name: "Millie",
        birth_date: "2023-08-02T00:00:00-06:00",
        familyId: 2,
      },
      {
        first_name: "Scottie",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 3,
      },
      {
        first_name: "Reese",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 4,
      },
      {
        first_name: "Everly",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 4,
      },
      {
        first_name: "Evangeline",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 5,
      },
      {
        first_name: "Odette",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 5,
      },
      {
        first_name: "Luke",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 6,
      },
      {
        first_name: "Liam",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 6,
      },
      {
        first_name: "Sterling",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 7,
      },
      {
        first_name: "Sutton",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 7,
      },
      {
        first_name: "Baby Turner",
        birth_date: "1900-01-01T00:00:00-06:00",
        familyId: 7,
      },
    ],
  });

  // ADDRESS
  await prisma.address.createMany({
    data: [
      {
        street: "5603 Button Buck Cir",
        city: "Columbia",
        state: "MO",
        zip: "65202",
        familyId: 1,
      },
      {
        street: "16475 Talladega Dr",
        city: "Ashland",
        state: "MO",
        zip: "65010",
        familyId: 2,
      },
      {
        street: "260 County Road 430",
        city: "Fayette",
        state: "MO",
        zip: "65248",
        familyId: 3,
      },
      {
        street: "404 Renee Dr",
        city: "Ashland",
        state: "MO",
        zip: "65010",
        familyId: 4,
      },
      {
        street: "16240 Talladega Dr",
        city: "Ashland",
        state: "MO",
        zip: "65010",
        familyId: 5,
      },
      {
        street: "16280 Talladega Dr",
        city: "Ashland",
        state: "MO",
        zip: "65010",
        familyId: 6,
      },
      {
        street: "UNKNOWN",
        city: "Ashland",
        state: "MO",
        zip: "65010",
        familyId: 7,
      },
    ],
  });

  await prisma.semester.createMany({
    data: [
      { semester_name: "Spring" },
      { semester_name: "Summer" },
      { semester_name: "Fall" },
      { semester_name: "Winter" },
    ],
  });

  await prisma.year.createMany({
    data: [
      { year: "2023" },
      { year: "2024" },
      { year: "2025" },
      { year: "2026" },
      { year: "2027" },
      { year: "2028" },
    ],
  });

  await prisma.group.createMany({
    data: [
      { group_type: "All" },
      { group_type: "Guys" },
      { group_type: "Girls" },
      { group_type: "Social" },
      { group_type: "Off" },
    ],
  });

  // EVENT
  // CST = UTC-6 Standard
  // CDT = UTC-5 DST
  await prisma.event.createMany({
    data: [
      {
        name: "Girls Dinner @ 7:30pm",
        date: "2024-03-06T00:00:00-06:00",
        location: "TBD",
        semesterId: 1,
        groupId: 3,
        yearId: 2,
      },
      {
        name: "Second half of Session 4 (video)",
        date: "2024-03-10T00:00:00-06:00",
        location: "Turners",
        semesterId: 1,
        groupId: 1,
        yearId: 2,
      },
      {
        name: "FAMILY - St. Patrick's Day Party",
        date: "2024-03-17T00:00:00-06:00",
        location: "Byrds",
        semesterId: 1,
        groupId: 4,
        yearId: 2,
      },
      {
        name: "First half of Session 5 (pg. 109-126, no video)",
        date: "2024-03-24T00:00:00-06:00",
        location: "Shepherds",
        semesterId: 1,
        groupId: 3,
        yearId: 2,
      },
      {
        name: "Guys Dinner @ 7:30pm",
        date: "2024-03-27T00:00:00-06:00",
        location: "TBD",
        semesterId: 1,
        groupId: 2,
        yearId: 2,
      },
      {
        name: "Second half of Session 5 (video)",
        date: "2024-03-31T00:00:00-06:00",
        location: "Turners",
        semesterId: 1,
        groupId: 1,
        yearId: 2,
      },
      {
        name: "Girls Dinner @ 5:30pm",
        date: "2024-04-03T00:00:00-06:00",
        location: "TBD",
        semesterId: 1,
        groupId: 3,
        yearId: 2,
      },
      {
        name: "Boys Night Out, Girls Night In",
        date: "2024-04-07T00:00:00-06:00",
        location: "Byrds/TBD",
        semesterId: 1,
        groupId: 4,
        yearId: 2,
      },
      {
        name: "First half of Session 6 (pg 141-159, no video)",
        date: "2024-04-14T00:00:00-06:00",
        location: "Turners",
        semesterId: 1,
        groupId: 3,
        yearId: 2,
      },
      {
        name: "Second half of Session 6 (video)",
        date: "2024-04-21T00:00:00-06:00",
        location: "Byrds",
        semesterId: 1,
        groupId: 1,
        yearId: 2,
      },
      {
        name: "Food Tour Downtown Como - 5:30pm-8:00pm",
        date: "2024-04-24T00:00:00-06:00",
        location: "TBD",
        semesterId: 1,
        groupId: 1,
        yearId: 2,
      },
      {
        name: "First half of Session 7 (pg 173-189, no video)",
        date: "2024-04-28T00:00:00-06:00",
        location: "Shepherds",
        semesterId: 1,
        groupId: 3,
        yearId: 2,
      },
      {
        name: "Girls Dinner @ 7:30pm",
        date: "2024-05-01T00:00:00-06:00",
        location: "TBD",
        semesterId: 1,
        groupId: 3,
        yearId: 2,
      },
      {
        name: "Second half of Session 7 (video)",
        date: "2024-05-05T00:00:00-06:00",
        location: "Turners",
        semesterId: 1,
        groupId: 1,
        yearId: 2,
      },
      {
        name: "Mother's Day",
        date: "2024-05-12T00:00:00-06:00",
        location: "Off",
        semesterId: 1,
        groupId: 5,
        yearId: 2,
      },
      {
        name: "Wrap up/going into summer plans",
        date: "2024-05-19T00:00:00-06:00",
        location: "Byrds",
        semesterId: 1,
        groupId: 1,
        yearId: 2,
      },
      {
        name: "Guys Dinner @ 5:30pm",
        date: "2024-05-29T00:00:00-06:00",
        location: "TBD",
        semesterId: 1,
        groupId: 2,
        yearId: 2,
      },
      {
        name: "Girls Dinner @ 5:30pm",
        date: "2024-06-05T00:00:00-06:00",
        location: "TBD",
        semesterId: 1,
        groupId: 3,
        yearId: 2,
      },

      {
        name: "ALL Meeting",
        date: "2023-09-10T00:00:00-06:00",
        location: "Byrds",
        semesterId: 3,
        groupId: 1,
        yearId: 1,
      },
      {
        name: "Guys Meeting",
        date: "2023-09-17T00:00:00-06:00",
        location: "Rutledges",
        semesterId: 3,
        groupId: 2,
        yearId: 1,
      },
      {
        name: "Girls Meeting",
        date: "2023-09-24T00:00:00-06:00",
        location: "Kelsey's",
        semesterId: 3,
        groupId: 3,
        yearId: 1,
      },
      {
        name: "Social",
        date: "2023-10-01T00:00:00-06:00",
        location: "TBD",
        semesterId: 3,
        groupId: 4,
        yearId: 1,
      },
      {
        name: "ALL Meeting",
        date: "2023-10-08T00:00:00-06:00",
        location: "Turners",
        semesterId: 3,
        groupId: 1,
        yearId: 1,
      },
      {
        name: "Guys Meeting",
        date: "2023-10-15T00:00:00-06:00",
        location: "Byrds",
        semesterId: 3,
        groupId: 2,
        yearId: 1,
      },
      {
        name: "Girls Meeting",
        date: "2023-10-22T00:00:00-06:00",
        location: "Rutledges",
        semesterId: 3,
        groupId: 3,
        yearId: 1,
      },
      {
        name: "Social - Halloween Party",
        date: "2023-10-29T00:00:00-06:00",
        location: "Byrds",
        semesterId: 3,
        groupId: 4,
        yearId: 1,
      },
      {
        name: "All Meeting",
        date: "2023-11-05T00:00:00-06:00",
        location: "Turners",
        semesterId: 3,
        groupId: 1,
        yearId: 1,
      },
      {
        name: "Guys Meeting",
        date: "2023-11-12T00:00:00-06:00",
        location: "Byrds",
        semesterId: 3,
        groupId: 2,
        yearId: 1,
      },
      {
        name: "Girls Meeting",
        date: "2023-11-19T00:00:00-06:00",
        location: "Kelsey's",
        semesterId: 3,
        groupId: 3,
        yearId: 1,
      },
      {
        name: "Off",
        date: "2023-11-26T00:00:00-06:00",
        location: "Off",
        semesterId: 3,
        groupId: 5,
        yearId: 1,
      },
      {
        name: "Guys Meeting",
        date: "2023-12-03T00:00:00-06:00",
        location: "Rutledges",
        semesterId: 3,
        groupId: 2,
        yearId: 1,
      },
      {
        name: "Girls Meeting",
        date: "2023-12-10T00:00:00-06:00",
        location: "Kelsey's",
        semesterId: 3,
        groupId: 3,
        yearId: 1,
      },
      {
        name: "ALL Meeting",
        date: "2023-12-17T00:00:00-06:00",
        location: "Turners",
        semesterId: 3,
        groupId: 1,
        yearId: 1,
      },
      {
        name: "Off - CHRISTMAS",
        date: "2023-12-24T00:00:00-06:00",
        location: "Off",
        semesterId: 3,
        groupId: 5,
        yearId: 1,
      },
      {
        name: "Off - NEW YEARS",
        date: "2023-12-31T00:00:00-06:00",
        location: "Off",
        semesterId: 3,
        groupId: 5,
        yearId: 1,
      },
    ],
  });

  const allEvents = await prisma.event.findMany();
  console.log(allEvents);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
