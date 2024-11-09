import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const result = await prisma.blog.upsert({
    where: { id: '1' },
    update: {},
    create: {
      title: "How to setup the docker on windows",
      author: "Fardeen Mansoori",
      createdAt: new Date(),
      image_public_id: "next-cloudinary-uploads/q3joxrqyjkbnoxlw1n61",
      content: "Here is the youtube video link check it out: https://youtu.be/ZyBBv1JmnWQ?si=wUyZVoh0mFW-jhn6",
    },
  })
  console.log({ result })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })