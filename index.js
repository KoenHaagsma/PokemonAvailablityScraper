const { Client, Intents } = require('discord.js');
require('dotenv').config({ path: './.env' });

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const prefix = '!';

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(`${process.env.TOKEN}`);
