import { createClient } from "redis";

const client = createClient();

async function startServer() {
  try {
    await client.connect();
    console.log("Client connected");
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  await startServer();
  while (1) {
    const response = await client.brPop("submissions", 0);
    console.log(response);
    await new Promise((r) =>
      setTimeout(r, 1000)
    );
    //send to pub-sub
    console.log("Passed");
  }
}

main()