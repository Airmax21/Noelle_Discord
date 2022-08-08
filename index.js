const { Client, GatewayIntentBits } = require('discord.js')
const dotenv = require('dotenv')
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once('ready', () => {
    console.log('Berhasil login')
})
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return

    const { commandName } = interaction

    switch (commandName) {
        case 'ping':
            await interaction.reply('Pong!')
            break
        case 'help':
            await interaction.reply(
                'Ping = Tes Bot\nUser = Menampilkan Info User\nYandere = Mengirim gambar sesuai chara/genre\nNhentai = Mengirim pdf Nhentai\nAbsen = Absen amikom\nTTS = Pesan suara dari bot\nYT = VC lagu dari youtube'
            )
            break
        case 'user':
            await interaction.reply(`Tag : ${interaction.user.tag}\nID : ${interaction.user.id}\nName : ${interaction.user.username}`)
            break
        case 'yandere':
            
            break
        case 'nhentai':
            break
        case 'absen':
            break
        case 'tts':
            break
        case 'yt':
            break
    }
})
client.login(process.env.TOKEN)