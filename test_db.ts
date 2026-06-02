import "dotenv/config"
import { prisma } from "./lib/prisma"

async function main() {
  console.log("Connecting to database...")
  const projects = await prisma.project.findMany({
    include: {
      collaborators: true
    }
  })
  console.log("Success! All projects in DB:")
  console.dir(projects, { depth: null })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
