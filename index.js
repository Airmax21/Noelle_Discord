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
                'Ping = Tes Bot\nUser = Menampilkan Info User\nYandere = Mengirim gambar sesuai chara/genre\n'
            )
        case 'user':
        case 'yandere':
        case 'nhentai':
        case 'absen':
        case 'tts':
        case 'yt':
        
    }
})
client.login(process.env.TOKEN)