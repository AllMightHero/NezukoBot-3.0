import fs from 'fs'
let handler = async (m, { conn }) => {
conn.reply(m.chat, `*https://github.com/AllMightHero/NezukoBot-3.0*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝚂𝙲𝚁𝙸𝙿𝚃 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙼𝙳',
body: '𝓝𝓮𝔃𝓾𝓴𝓸𝓑𝓸𝓽',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/AllMightHero/NezukoBot-3.0`}}})
}
handler.command = ['sc','script']
handler.help = ['sc']
handler.tags = ['General']
export default handler
