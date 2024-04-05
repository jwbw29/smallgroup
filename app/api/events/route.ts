import { prisma } from "@/db/client";

export async function GET() {
  try {
    // Fetch event data from the database
    const eventData = await prisma.event.findMany({
      orderBy: { date: "asc" },
      include: {
        semester: true,
        year: true,
        group: true,
      },
    });

    // Return the fetched event data
    return new Response(JSON.stringify(eventData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Handle any errors
    console.error("Failed to fetch event data:", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch event data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
