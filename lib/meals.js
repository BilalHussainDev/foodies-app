import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

// Get all meals
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Fetching meals failed.");
  return db.prepare("SELECT * FROM meals").all();
}

// Get single meal details
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// Save new meal image in file system and meal data in db
export async function saveMeal(meal) {
  // create slug from title of meal
  meal.slug = slugify(meal.title, { lower: true });

  // sanitize instructions from cross site scripting acts
  meal.instructions = xss(meal.instructions);

  // get the file extension
  const extension = meal.image.name.split(".").pop();

  // create unique file name
  const fileName = `${meal.slug}.${extension}`;

  // create write stream
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  // convert image to array buffer
  const bufferedImage = await meal.image.arrayBuffer();

  // save image to the file system
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  // save image address in the meal data
  meal.image = `/images/${fileName}`;

  // store meal data in the database
  db.prepare(
    `
      INSERT INTO meals (
        slug,
        title,
        image,
        summary,
        instructions,
        creator,
        creator_email
      ) VALUES (
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
      )
   `
  ).run(meal);
}
