import { PrismaClient } from "@prisma/client";

class baseService {
  protected prisma;
  constructor() {
    this.prisma = new PrismaClient();
  }
}
