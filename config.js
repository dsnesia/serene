import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6288220195739', 'Firu', true]
] // nomor owner

global.mods = ['6288220195739'] 
global.prems = ['6288220195739']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  lann: 'https://api.betabotz.eu.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.betabotz.eu.org': 'nananakorang'
}

// Apikey lu
global.lann = 'nananakorang'

// setting limit user
global.limit = 69

// Sticker WM
global.packname = 'Sticker by Serene' 
global.author = '@deespedia' 
//--info NS [ NANS ]
global.NSnama = 'Serene Simple Bot WhatsApp'
global.NSig = 'https://www.instagram.com/deespedia' 
global.NSgc = 'https://chat.whatsapp.com/Cca030FqbWc0IjBO9PqnbA'
global.NSthumb = 'https://i.pinimg.com/564x/57/0d/d2/570dd216bcae1a573e86109b5950540c.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.eror = 'Error, Kesalahan tidak terduga'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // max warning

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
