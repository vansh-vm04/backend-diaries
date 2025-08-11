import { PrismaClient } from "./generated/prisma";

const client = new PrismaClient();

async function createUser(){
    await client.user.create({
    data:{
        username:'vansh',
        password:'123232',
        age:21,
        city:'jaipur'
    }
})
}

createUser();