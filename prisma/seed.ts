import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here

  // USERS
  await prisma.user.create({
    data: {
      username: "jwbw29",
      email: "justinbyrd7@gmail.com",
      password: "Test123!",
    },
  });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  // FAMILY
  await prisma.family.createMany({
    data: [
      {
        last_name: "Byrd",
        address: {
          connect: { id: 1 },
        },
        adults: {
          connect: { id: 1 },
        },
        children: {
          connect: { id: 1 },
        },
      },
      {
        last_name: "Ward",
      },
    ],
  });

  // ENNEAGRAM

  // ADULT

  // CHILD

  // ADDRESS

  // EVENT
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
