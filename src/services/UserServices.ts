import { PrismaClient } from "@prisma/client";

// const getAllUser = () => {
//   const prisma = new PrismaClient();

//   async function main() {
//     await prisma.user.create({
//       data: {
//         name: "Ida Yani",
//         password: "test1123",
//       },
//     });

//     const allUsers = await prisma.user.findMany();

//     console.log(allUsers);
//   }

//   main()
//     .then(async () => {
//       await prisma.$disconnect();
//     })

//     .catch(async (e) => {
//       console.error(e);

//       await prisma.$disconnect();

//       process.exit(1);
//     });
// };

class UserService {
  public static async getUsers(): Promise<any> {
    const prisma = new PrismaClient();
    try {
      const ResultData = await prisma.user.findMany({
        select: {
          name: true,
          password: true,
          user_id: true,
        },
      });
      await prisma.$disconnect();
      return ResultData;
    } catch (error) {
      return "error";
    }
  }
}
export { UserService };
