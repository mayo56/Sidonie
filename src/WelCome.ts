import { Client, EmbedBuilder } from "discord.js";

function Welcome(sidonie: Client) {
    const channel = sidonie.channels.cache.get("1065760317025566730");
    const embed = new EmbedBuilder();
    sidonie.on("guildMemberAdd", (member) => {
        if (member.user.bot) return;
        member.roles
            .add("947599225364033536")
            .then((m) => {
                if (!channel?.isTextBased()) return;

                embed
                    .setColor("Green")
                    .setTitle("Nouveau Membre !")
                    .setDescription(
                        `${member} (${member.user.tag}) est arrivé sur le server !`
                    )
                    .setTimestamp();

                channel.send({ embeds: [embed] });
            })
            .catch((err) => {
                if (!channel?.isTextBased()) return;

                embed
                    .setColor("Orange")
                    .setTitle("Nouveau Membre !")
                    .setDescription(
                        `${member} (${member.user.tag}) erreur lors de l'arrivé du membre...`
                    )
                    .setTimestamp();

                channel.send({ embeds: [embed] });
            });
    });
    sidonie.on("guildMemberRemove", (member) => {
        if (member.user.bot) return;
        if (!channel?.isTextBased()) return;

        embed
            .setColor("Red")
            .setTitle("Membre Partie...")
            .setDescription(`${member} (${member.user.tag}) est partie...`)
            .setTimestamp();

        channel.send({ embeds: [embed] });
    });
}

export default Welcome;
