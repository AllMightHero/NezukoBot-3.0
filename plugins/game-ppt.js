let handler = async (m, { text, usedPrefix }) => {
let INTROJUEGO = `*๐ท๐พ๐ป๐ฐ ๐๐ป, ๐ด๐๐๐ฐ๐ ๐น๐๐ถ๐ฐ๐ฝ๐ณ๐พ ๐ฐ "๐ฟ๐ธ๐ด๐ณ๐๐ฐ, ๐ฟ๐ฐ๐ฟ๐ด๐ป ๐พ ๐๐ธ๐น๐ด๐๐ฐ"*\n\n*๐พ๐ฟ๐ฒ๐ธ๐พ๐ฝ๐ด๐ ๐ณ๐ธ๐๐ฟ๐พ๐ฝ๐ธ๐ฑ๐ป๐ด๐:*\n*piedra, papel o tijera*\n\n*๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ:*\n*${usedPrefix}ppt tijera*\n\n*- ๐๐๐ด ๐ป๐ฐ๐ ๐พ๐ฟ๐ฒ๐ธ๐พ๐ฝ๐ด๐ ๐ด๐ฝ ๐ผ๐ธ๐ฝ๐๐๐ฒ๐๐ป๐ฐ๐ ๐ฒ๐พ๐ผ๐พ ๐๐ด ๐ธ๐ฝ๐ณ๐ธ๐ฒ๐ฐ ๐ด๐ฝ ๐ด๐ป ๐ด๐น๐ด๐ผ๐ฟ๐ป๐พ*\n\n๐๐ฎ๐๐พ๐ด๐ธ๐๐ธ๐ฝ`
if (!text) throw INTROJUEGO
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*๐ฐ Empate!*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ Puntos +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ Puntos -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ Puntos -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ Tรบ ganas! ๐*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ Tรบ pierdes! โ*\n\n*๐๐ป Usted: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ Puntos -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
