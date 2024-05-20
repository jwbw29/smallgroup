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

export async function POST(request: Request) {
  try {
    const newEvent = await request.json();
    const savedEvent = await prisma.event.create({
      data: newEvent,
    });

    return new Response(JSON.stringify(savedEvent), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to save event:", error);
    return new Response(JSON.stringify({ message: "Failed to save event" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
