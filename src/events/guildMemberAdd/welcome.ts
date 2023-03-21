import type { EventHandlerParams } from "discord-sucrose";
import { Logger } from "discord-sucrose"
import SidonieLogger from "../../services/Logger";


export default async ({ args: [member], sucrose }: EventHandlerParams<"guildMemberAdd">) => {
    SidonieLogger.write(`${Logger.date(true)} ${member.user.username} join ${member.guild.name}; bot:${member.user.bot}`)

    if (member.user.bot) return;

    const channel = sucrose.channels.cache.get(`${process.env.WELCOME_CHANNEL}`);

    if (!channel?.isTextBased()) return;

    channel.send({
        embeds: [
            {
                title: "NEW MEMBER",
                description: `${Logger.date(true)} **${member.user.username}** join the server.`,
                author: {
                    name: "System",
                    icon_url: `https://cdn.discordapp.com/avatars/643945264868098049/c6a249645d46209f337279cd2ca998c7.png?size=4096`
                },
                thumbnail: {
                    url: member.displayAvatarURL({ size: 4096, forceStatic: false, extension: "png" })
                },
                color: 0xFF0000
            }
        ]
    })
};