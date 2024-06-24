import Link from "next/link";

export default function MealDetails({ params }) {
  return (
    <>
      <p>{params.mealSlug} Meal Details</p>
      <Link href="/meals">Back</Link>
    </>
  );
}
