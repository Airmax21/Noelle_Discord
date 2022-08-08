const { SlashCommandBuilder, Routes } = require('discord.js')
const { REST } = require('@discordjs/rest')
const dotenv = require('dotenv')
dotenv.config()
const commands = [
    new SlashCommandBuilder()
        .setName('help')
        .setDescription('Menampilkan daftar perintah'),
    new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Balas Pong'),
    new SlashCommandBuilder()
        .setName('user')
        .setDescription('Menampilkan info user'),
    new SlashCommandBuilder()
        .setName('nhentai')
        .setDescription('Mengirim pdf dari nhentai')
        .addIntegerOption(Option => Option
            .setName('kode')
            .setDescription('Kode nhentai yang diinginkan')
            .setRequired(true)),
    new SlashCommandBuilder()
        .setName('absen')
        .setDescription('Absen amikom')
        .addStringOption(Option => Option
            .setName('nim')
            .setDescription('Nim yang akan di presensi'))
        .addStringOption(Option => Option
            .setName('kode')
            .setDescription('Kode presensi 5 digit'))
        .addAttachmentOption(Option => Option
            .setName('qr')
            .setDescription('QRCode untuk presensi')),
    new SlashCommandBuilder()
        .setName('tts')
        .setDescription('Kirim vn')
].map(command => command.toJSON())
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)
rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
    .then(() => console.log('Berhasil buat command'))
    .catch(console.error)