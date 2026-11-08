import type { Tweet } from "@/app/types/tweet";
import Link from "next/link";

interface TweetDetailsProps {
  params: Promise<{ id: string }>;
}

async function getTweet(id: string): Promise<Tweet> {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  return res.json();
}

export default async function TweetPage({ params }: TweetDetailsProps) {
  const { id } = await params;
  const tweet = await getTweet(id);

  return (
    <main>
      <h1>{tweet.title}</h1>
      <p>{tweet.body}</p>
      <p>
        👍 {tweet.reactions.likes} | 👎 {tweet.reactions.dislikes}
      </p>
      <p>Tags: {tweet.tags.join(", ")}</p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        ← Back to Feed
      </Link>
    </main>
  );
}
