import { PrismaClient } from "@prisma/client";
import familyData from "@/public/data/familyData.json";
import eventData from "@/public/data/eventData.json";
import enneagramData from "@/public/data/enneagramData.json";

const prisma = new PrismaClient();

async function seedFamilies() {
  for (const family of familyData) {
    // Create family
    const createdFamily = await prisma.family.create({
      data: {
        last_name: family.lastName,
      },
    });

    // Seed adults
    for (const adultKey of ["adult1", "adult2"]) {
      if (family[adultKey]) {
        const adult = family[adultKey];
        await prisma.adult.create({
          data: {
            first_name: adult.firstName,
            phone: adult.phone,
            email: adult.email,
            familyId: createdFamily.id,
            // You will need to ensure enneagramId is resolved correctly
            // This might involve querying your enneagram table based on the name or type
          },
        });
      }
    }

    // Seed children
    if (family.children) {
      for (const child of family.children) {
        await prisma.child.create({
          data: {
            first_name: child.firstName,
            // Convert DOB to appropriate format if necessary
            familyId: createdFamily.id,
          },
        });
      }
    }

    // Seed address
    if (family.address) {
      await prisma.address.create({
        data: {
          street: family.address.street,
          city: family.address.city,
          state: family.address.state,
          zip: family.address.zip,
          familyId: createdFamily.id,
        },
      });
    }
  }
}

async function main() {
  try {
    await prisma.$connect();
    await seedFamilies();
    console.log("Seeding completed successfully.");
  } catch (e) {
    console.error("Seeding failed:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
