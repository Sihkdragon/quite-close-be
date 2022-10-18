import { PrismaClient } from "@prisma/client";

const getAllUser = () => {
  const prisma = new PrismaClient();

  async function main() {
    await prisma.user.create({
      data: {
        name: "Ida Yani",
        password: "test1123",
      },
    });

    const allUsers = await prisma.user.findMany();

    console.log(allUsers);
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })

    .catch(async (e) => {
      console.error(e);

      await prisma.$disconnect();

      process.exit(1);
    });
};

export { getAllUser };
