import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const client = new PrismaClient();

async function main() {
  const users = new Array(100).fill(0).map(() => {
    return {
      email: faker.internet.email(),
      name: faker.internet.username(),
      password_hash: faker.internet.password(),
    };
  });

  await client.users.createMany({
    data: [...users],
  });
}

main().then(() => {
  console.log("seeded");
});
