import { Client, Message } from "discord.js";

/**
 * 
 * @param message message de discord
 * @param sidonie client du bot
 */
async function Spy (message:Message, sidonie: Client) {
    if (message.author.bot || message.author.id !== process.env.ADMIN) return;

    if (!message.content.startsWith("sc")) return;

    const args = message.content.trim().slice(3).split(/ +/g);
    if (args[0] === "user") {
        console.log(args)
        const user = eval(`sidonie.users.fetch(${args[1]})`);
        try {
            await message.reply({ embeds: [
                {
                    "color": 0x5587f7,
                    "title": "User info",
                    "description": `\`\`\`\n${user}\n\`\`\``
                }
            ]});
        } catch {
            await message.reply({embeds:[
                {
                    "color": 0xff0000,
                    "title": "User info",
                    "description": "Error: Utilisateur inconnue ou incorrect."
                }
            ]})
        }
    }
};

export default Spy;