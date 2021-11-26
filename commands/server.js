const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('stats').setDescription('Replies with server data'),
    async execute(interaction) {
        return interaction.reply(
            `Server name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`,
        );
    },
};
