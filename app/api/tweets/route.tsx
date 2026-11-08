interface Tweet {
  id: number;
  user: string;
  content: string;
  timestamp: string;
}

export async function GET() {
  const tweets: Tweet[] = [
    { id: 1, user: "John Doe", content: "Hello Next.js!", timestamp: "2m ago" },
    {
      id: 2,
      user: "Jane Doe",
      content: "Loving React & Next.js!",
      timestamp: "10m ago",
    },
  ];

  return new Response(JSON.stringify(tweets), { status: 200 });
}
