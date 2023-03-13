import { ActionRowBuilder, Client, Events, StringSelectMenuBuilder, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
import Welcome from "./WelCome";
import Spy from "./spy";

dotenv.config({ path: `${__dirname}/../config/.env` });

const sidonie = new Client({
    intents: Object.keys(GatewayIntentBits) as any,
});

sidonie.on(Events.ClientReady, () => {
    console.log("Sidonie online !");
});

Welcome(sidonie);

sidonie.on("messageCreate", message => {
    Spy(message, sidonie)
})

sidonie.login(process.env.SIDONIE_TOKEN);
