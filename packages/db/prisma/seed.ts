import { PrismaClient } from "./.generated/client";

const prisma = new PrismaClient();

async function main() {
  await seedUsers();
}

async function seedUsers() {
  console.log("seeding users...");
  const users = [
    {
      email: "u1@example.com",
      password: "hash",
      name: "U1",
    },
    {
      email: "u2@example.com",
      password: "hash",
      name: "U2",
    },
  ];

  await prisma.user.deleteMany({});
  for (const user of users) {
    await prisma.user.create({ data: user });
  }
}

main().finally(async () => {
  await prisma.$disconnect();
});
