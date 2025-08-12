import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser(){
    const user = await client.user.findFirst({
    where:{
        username:'vansh'
    }
})
console.log(user?.city)
}

createUser();