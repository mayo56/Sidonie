import type { EventHandlerParams } from "discord-sucrose";
import SidonieLogger from "../../services/Logger";
import { Logger } from "discord-sucrose";

export default async ({ sucrose }: EventHandlerParams<"ready">) => {
    SidonieLogger.write(`${Logger.date(true)} ${sucrose.user?.username} online !`)

    sucrose.commands.guilds.get("947595989504655472")?.define("guildmemberadd");
};
