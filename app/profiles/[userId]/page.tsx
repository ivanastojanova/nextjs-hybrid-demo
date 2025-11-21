import { User } from "@/shared/types";
import { updateUser } from "../../../src/lib/actions";
import UserInteraction from "../../../src/components/UserInteraction";

interface UserDetailPageProps {
  params: Promise<{ userId: string }>;
}

async function getUserData(userId: string): Promise<User> {
  console.log(`[SERVER] Fetching data for user ID: ${userId}`);

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error(`Failed to fetch user data for ID: ${userId}`);

  const user: User = await res.json();

  // Optional: simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return user;
}

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  // Await params to get the actual dynamic values
  const { userId } = await params;

  console.log("[SERVER] userId:", userId);

  if (!userId) {
    return (
      <main style={{ padding: "40px" }}>
        <h1 style={{ color: "red" }}>User Not Found</h1>
        <p>Could not load profile for ID: undefined.</p>
      </main>
    );
  }

  try {
    const user = await getUserData(userId);

    return (
      <main style={{ padding: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "30px" }}>
          User Detail: {user.name}
        </h1>

        <UserInteraction user={user} updateFn={updateUser} />
      </main>
    );
  } catch (error) {
    console.error(error);
    return (
      <main style={{ padding: "40px" }}>
        <h1 style={{ color: "red" }}>User Not Found</h1>
        <p>Could not load profile for ID: {userId}.</p>
      </main>
    );
  }
}
