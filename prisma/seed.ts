import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
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

  // USERS
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      username: "test_user",
      email: "justinbyrd7@gmail.com",
      password: "Test123!",
    },
  });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  // FAMILY
  await prisma.family.deleteMany({});

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
  await prisma.enneagram.deleteMany({});
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
    ],
  });

  const allEnneagrams = await prisma.enneagram.findMany();
  console.log(allEnneagrams);

  // ADULT
  await prisma.adult.deleteMany({});
  await prisma.adult.createMany({
    data: [
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },
      {
        first_name: "",
        email: "",
        phone: "",
        familyId: ,
        enneagramId: ,
      },

    ]
  })

  // CHILD
    await prisma.child.deleteMany({});
  await prisma.child.createMany({
    data: [
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      },
      {
        first_name: "",
        birth_date: "",
        familyId: ,
      }

    ]
  });

  // ADDRESS
    await prisma.address.deleteMany({});
  await prisma.address.createMany({
    data: [
      {
        street: "",
        city: "",
        state: "",
        zip: "",
        familyId: ,
      },
      {
        street: "",
        city: "",
        state: "",
        zip: "",
        familyId: ,
      },
      {
        street: "",
        city: "",
        state: "",
        zip: "",
        familyId: ,
      },
      {
        street: "",
        city: "",
        state: "",
        zip: "",
        familyId: ,
      },
      {
        street: "",
        city: "",
        state: "",
        zip: "",
        familyId: ,
      },
      {
        street: "",
        city: "",
        state: "",
        zip: "",
        familyId: ,
      },
      {
        street: "",
        city: "",
        state: "",
        zip: "",
        familyId: ,
      },
    ]
  });

  // EVENT
  // CST = UTC-6 Standard
  // CDT = UTC-5 DST
  await prisma.event.deleteMany({});
  await prisma.event.createMany({
    data: [
      {
        name: "Girls Dinner @ 7:30pm",
        year: "2024",
        semester: "Spring",
        date: "2024-03-06T00:00:00-06:00",
        location: "TBD",
        group_type: "Girls",
      },
      {
        name: "Second half of Session 4 (video)",
        year: "2024",
        semester: "Spring",
        date: "2024-03-10T00:00:00-06:00",
        location: "Turners",
        group_type: "All",
      },
      {
        name: "FAMILY - St. Patrick's Day Party",
        year: "2024",
        semester: "Spring",
        date: "2024-03-17T00:00:00-06:00",
        location: "Byrds",
        group_type: "Social",
      },
      {
        name: "First half of Session 5 (pg. 109-126, no video)",
        year: "2024",
        semester: "Spring",
        date: "2024-03-24T00:00:00-06:00",
        location: "Shepherds",
        group_type: "Girls",
      },
      {
        name: "Guys Dinner @ 7:30pm",
        year: "2024",
        semester: "Spring",
        date: "2024-03-27T00:00:00-06:00",
        location: "TBD",
        group_type: "Guys",
      },
      {
        name: "Second half of Session 5 (video)",
        year: "2024",
        semester: "Spring",
        date: "2024-03-31T00:00:00-06:00",
        location: "Turners",
        group_type: "All",
      },
      {
        name: "Girls Dinner @ 5:30pm",
        year: "2024",
        semester: "Spring",
        date: "2024-04-03T00:00:00-06:00",
        location: "TBD",
        group_type: "Girls",
      },
      {
        name: "Boys Night Out, Girls Night In",
        year: "2024",
        semester: "Spring",
        date: "2024-04-07T00:00:00-06:00",
        location: "Byrds/TBD",
        group_type: "Social",
      },
      {
        name: "First half of Session 6 (pg 141-159, no video)",
        year: "2024",
        semester: "Spring",
        date: "2024-04-14T00:00:00-06:00",
        location: "Turners",
        group_type: "Girls",
      },
      {
        name: "Second half of Session 6 (video)",
        year: "2024",
        semester: "Spring",
        date: "2024-04-21T00:00:00-06:00",
        location: "Byrds",
        group_type: "All",
      },
      {
        name: "Food Tour Downtown Como - 5:30pm-8:00pm",
        year: "2024",
        semester: "Spring",
        date: "2024-04-24T00:00:00-06:00",
        location: "TBD",
        group_type: "All",
      },
      {
        name: "First half of Session 7 (pg 173-189, no video)",
        year: "2024",
        semester: "Spring",
        date: "2024-04-28T00:00:00-06:00",
        location: "Shepherds",
        group_type: "Girls",
      },
      {
        name: "Girls Dinner @ 7:30pm",
        year: "2024",
        semester: "Spring",
        date: "2024-05-01T00:00:00-06:00",
        location: "TBD",
        group_type: "Girls",
      },
      {
        name: "Second half of Session 7 (video)",
        year: "2024",
        semester: "Spring",
        date: "2024-05-05T00:00:00-06:00",
        location: "Turners",
        group_type: "All",
      },
      {
        name: "Mother's Day",
        year: "2024",
        semester: "Spring",
        date: "2024-05-12T00:00:00-06:00",
        location: "Off",
        group_type: "Off",
      },
      {
        name: "Wrap up/going into summer plans",
        year: "2024",
        semester: "Spring",
        date: "2024-05-19T00:00:00-06:00",
        location: "Byrds",
        group_type: "All",
      },
      {
        name: "Guys Dinner @ 5:30pm",
        year: "2024",
        semester: "Spring",
        date: "2024-05-29T00:00:00-06:00",
        location: "TBD",
        group_type: "Guys",
      },
      {
        name: "Girls Dinner @ 5:30pm",
        year: "2024",
        semester: "Spring",
        date: "2024-06-05T00:00:00-06:00",
        location: "TBD",
        group_type: "Girls",
      },

      {
        name: "ALL Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-09-10T00:00:00-06:00",
        location: "Byrds",
        group_type: "All",
      },
      {
        name: "Guys Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-09-17T00:00:00-06:00",
        location: "Rutledges",
        group_type: "Guys",
      },
      {
        name: "Girls Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-09-24T00:00:00-06:00",
        location: "Kelsey's",
        group_type: "Girls",
      },
      {
        name: "Social",
        year: "2023",
        semester: "Fall",
        date: "2023-10-01T00:00:00-06:00",
        location: "TBD",
        group_type: "Social",
      },
      {
        name: "ALL Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-10-08T00:00:00-06:00",
        location: "Turners",
        group_type: "All",
      },
      {
        name: "Guys Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-10-15T00:00:00-06:00",
        location: "Byrds",
        group_type: "Guys",
      },
      {
        name: "Girls Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-10-22T00:00:00-06:00",
        location: "Rutledges",
        group_type: "Girls",
      },
      {
        name: "Social - Halloween Party",
        year: "2023",
        semester: "Fall",
        date: "2023-10-29T00:00:00-06:00",
        location: "Byrds",
        group_type: "Social",
      },
      {
        name: "All Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-11-05T00:00:00-06:00",
        location: "Turners",
        group_type: "All",
      },
      {
        name: "Guys Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-11-12T00:00:00-06:00",
        location: "Byrds",
        group_type: "Guys",
      },
      {
        name: "Girls Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-11-19T00:00:00-06:00",
        location: "Kelsey's",
        group_type: "Girls",
      },
      {
        name: "Off",
        year: "2023",
        semester: "Fall",
        date: "2023-11-26T00:00:00-06:00",
        location: "Off",
        group_type: "Off",
      },
      {
        name: "Guys Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-12-03T00:00:00-06:00",
        location: "Rutledges",
        group_type: "Guys",
      },
      {
        name: "Girls Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-12-10T00:00:00-06:00",
        location: "Kelsey's",
        group_type: "Girls",
      },
      {
        name: "ALL Meeting",
        year: "2023",
        semester: "Fall",
        date: "2023-12-17T00:00:00-06:00",
        location: "Turners",
        group_type: "All",
      },
      {
        name: "Off - CHRISTMAS",
        year: "2023",
        semester: "Fall",
        date: "2023-12-24T00:00:00-06:00",
        location: "Off",
        group_type: "Off",
      },
      {
        name: "Off - NEW YEARS",
        year: "2023",
        semester: "Fall",
        date: "2023-12-31T00:00:00-06:00",
        location: "Off",
        group_type: "Off",
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
