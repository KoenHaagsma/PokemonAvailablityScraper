require('dotenv').config('../.env');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { fetchData } = require('../static/fetch');
const weatherURL = `api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.API_KEY}`;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Replies with weather information')
        .addStringOption((option) => option.setName('input').setDescription('Enter a string')),
    async execute(interaction) {
        const weatherData = fetchData(weatherURL);

        return interaction.reply(`test text:${weatherData}`);
    },
};
