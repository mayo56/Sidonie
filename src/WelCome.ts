import { Client, EmbedBuilder } from "discord.js";

function Welcome(sidonie: Client) {
    const channel = sidonie.channels.cache.get("1065760317025566730");
    if (!channel?.isTextBased() || !channel.isThread()) return;
    const embed = new EmbedBuilder();
    sidonie.on("guildMemberAdd", (member) => {
        if (member.user.bot) return;
        member.roles
            .add("947599225364033536")
            .then((m) => {
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

        embed
            .setColor("Red")
            .setTitle("Membre Partie...")
            .setDescription(`${member} (${member.user.tag}) est partie...`)
            .setTimestamp();

        channel.send({ embeds: [embed] });
    });
}

export default Welcome;
