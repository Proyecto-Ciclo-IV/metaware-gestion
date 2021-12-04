/*
  Warnings:

  - You are about to drop the column `userId` on the `Avance` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Inscripcion` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Proyecto` table. All the data in the column will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `UserId` to the `Avance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Inscripcion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Proyecto` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Enum_EstadoUser" AS ENUM ('Pendiente', 'Autorizado', 'NoAutorizado');

-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Avance" DROP CONSTRAINT "Avance_userId_fkey";

-- DropForeignKey
ALTER TABLE "Inscripcion" DROP CONSTRAINT "Inscripcion_userId_fkey";

-- DropForeignKey
ALTER TABLE "Proyecto" DROP CONSTRAINT "Proyecto_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Avance" DROP COLUMN "userId",
ADD COLUMN     "UserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Inscripcion" DROP COLUMN "userId",
ADD COLUMN     "UserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Proyecto" DROP COLUMN "userId",
ADD COLUMN     "UserId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Usuario";

-- DropEnum
DROP TYPE "Enum_EstadoUsuario";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "telefono" TEXT,
    "rol" "Enum_Rol" NOT NULL DEFAULT E'Administrador',
    "estado" "Enum_EstadoUser" NOT NULL DEFAULT E'Autorizado',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Proyecto" ADD CONSTRAINT "Proyecto_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avance" ADD CONSTRAINT "Avance_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscripcion" ADD CONSTRAINT "Inscripcion_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
