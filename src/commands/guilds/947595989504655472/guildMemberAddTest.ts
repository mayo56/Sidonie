import { ApplicationCommandType, GuildMember } from "discord.js";
import type { ChatInput } from 'discord-sucrose';

export default <ChatInput>{
    body: {
        name: 'guildmemberadd',
        type: ApplicationCommandType.ChatInput,
        description: 'Simuler l\'arriver d\'un membre'
    },

    exec: async ({ interaction, sucrose }) => {
        if (!interaction.member) return;
        sucrose.emit("guildMemberAdd", interaction.member! as GuildMember);
        
        interaction.reply({ content: "Success !", ephemeral: true})
    }
}