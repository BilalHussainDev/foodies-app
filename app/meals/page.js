import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>Meal Page</h1>
      <p>
        <Link href="/meals/meal-1">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">Meal 2</Link>
      </p>
      <p>
        <Link href="/">Back to Home</Link>
      </p>
    </>
  );
}