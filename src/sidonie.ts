import { Client, Events } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../config/.env` });
const sidonie = new Client({
    intents: 3243772,
});

sidonie.on(Events.ClientReady, () => {
    console.log("Sidonie online !");
});

sidonie.login(process.env.SIDONIE_TOKEN);
