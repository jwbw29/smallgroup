// seed.ts
import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

const resetDataAndSequences = async () => {
  // Delete records, respecting foreign key dependencies
  await prisma.child.deleteMany({});
  await prisma.adult.deleteMany({});
  await prisma.address.deleteMany({});
  await prisma.family.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.enneagram.deleteMany({});

  // Sequences to reset
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
};

const main = async () => {
  const familyData = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../public/data/familyData.json"),
      "utf-8"
    )
  );

  const eventData = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../public/data/eventData.json"),
      "utf-8"
    )
  );

  const enneagramData = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../public/data/enneagramData.json"),
      "utf-8"
    )
  );

  // Seed Enneagram Types
  for (const enneagram of enneagramData) {
    await prisma.enneagram.create({
      data: enneagram,
    });
  }

  // Seed Families, Adults, and Children
  for (const family of familyData) {
    const createdFamily = await prisma.family.create({
      data: {
        last_name: family.lastName,
        address: {
          create: family.address,
        },
      },
    });

    // Assuming 'adult1' and 'adult2' should be handled similarly
    const adults = [family.adult1, family.adult2].filter(Boolean);
    for (const adult of adults) {
      const enneagramType = await prisma.enneagram.findFirst({
        where: { type: adult.enneagram.primary },
      });

      // Construct the data object conditionally based on enneagramType presence
      let adultData: any = {
        first_name: adult.firstName,
        email: adult.email,
        phone: adult.phone,
        birth_date: adult.dob ? adult.dob : null,
        familyId: createdFamily.id,
      };

      if (enneagramType) {
        adultData.enneagramId = enneagramType.id;
      }

      // Now adultData will only include enneagramId if it's not undefined
      await prisma.adult.create({
        data: adultData,
      });
    }

    for (const child of family.children) {
      await prisma.child.create({
        data: {
          first_name: child.firstName,
          birth_date: child.dob,
          familyId: createdFamily.id,
        },
      });
    }
  }

  // Seed Events
  for (const event of eventData) {
    await prisma.event.create({
      data: {
        name: event.name,
        year: event.year,
        semester: event.semester,
        date: event.date,
        location: event.location,
        group_type: event.group_type,
      },
    });
  }
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// Below here
