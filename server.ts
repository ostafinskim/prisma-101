import connectDB, { prisma } from "./config/db";

connectDB();

async function main() {
    // Create single user
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'User 101',
    //         email: 'user101@gmail.com',
    //     }
    // })
    // console.log(JSON.stringify(user, null, 2))

    // Create multiple users
    // const users = await prisma.user.createMany({
    //     data: [
    //           {
    //             name: 'User 102',
    //             email: 'user102@gmail.com',
    //           },
    //           {
    //             name: 'User 103',
    //             email: 'user103@gmail.com',
    //           },
    //           {
    //             name: 'User 104',
    //             email: 'user104@gmail.com',
    //           },
    //     ]
    // })
    // console.log(JSON.stringify(users, null, 2))
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })