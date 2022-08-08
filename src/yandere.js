const axios = require('axios')
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('yandere')
        .setDescription('Mengirim gambar dari yandere')
        .addStringOption(Option => Option
            .setName('search')
            .setDescription('Nama Chara / Genre yang dicari')
            .setRequired(true))
        .addIntegerOption(Option => Option
            .setName('jumlah')
            .setDescription('Jumlah gambar yang diinginkan')),
    async execute(interaction) {
        const chara = interaction.options.getString('search')
        const jumlah = interaction.options.getInteger('jumlah')
        var cari = chara.replace(/ /g, '_').toLowerCase()
        try {
            for (var i = 0; i < jumlah; i++) {
                await axios.get('https://yande.re/post.json?limit=5000&tags=' + cari)
                    .then(async response => {
                        const imagecook = new MessageAttachment(response.data[Math.floor(Math.random()*response.data.length)]["jpeg_url"]);
                        await interaction.reply({ attachment: [imagecook] })
                    })
            }
        }
        catch {
            if (text.length == 3) {
                try {
                    for (var i = 0; i < jumlah; i++) {
                        await axios.get('https://yande.re/post.json?limit=5000&tags=' + text[2] + '_' + text[1])
                            .then(async response => {
                                await client.sendFile(from, response.data[Math.floor(Math.random() * response.data.length)]["jpeg_url"], "gambar.jpg")
                            })
                    }
                }
                catch {
                    await client.sendText(from, "Gambar yang anda cari tidak ada atau salah")
                }
            }
            else {
                await client.sendText(from, "Gambar yang anda cari tidak ada atau salah")
            }
        }
    }
}