import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
  const fields = client.users.fields;

  const users = await client.users.findMany({});

  console.log(fields.email);
  //   console.log(users);
}

main();
