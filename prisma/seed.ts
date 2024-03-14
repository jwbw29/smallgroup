import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here

  // USERS
  // await prisma.user.create({
  //   data: {
  //     username: "jwbw29",
  //     email: "justinbyrd7@gmail.com",
  //     password: "password",
  //   },
  // });

  await prisma.user.update({
    where: { id: "afdc4a20-c405-4da8-9acc-a087879f753b" },
    data: { email: "justin.byrd7@gmail.com" },
  });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  // FAMILY

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
