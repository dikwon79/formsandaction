import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function test() {
  const user = await db.user.create({
    data: {
      username: "test",
      password: "12345",
      email: "test@example.com",
      bio: "This is a test user",
    },
  });
  console.log(user);
}

test();

export default db;
