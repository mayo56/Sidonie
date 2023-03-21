import { Sucrose } from "discord-sucrose";
import dotenv from "dotenv";
dotenv.config();

Sucrose.build({
    intents: ["Guilds"],
    env: {
        "ext": "ts",
        "source": "src"
    },
    logging: {
        details: true,
        verbose: true
    }
});
