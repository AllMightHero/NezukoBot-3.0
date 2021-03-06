let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '*[โ๐๐๐๐โ] ๐ธ๐ฝ๐๐ด๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด / ๐ป๐ธ๐ฝ๐บ ๐ณ๐ด ๐๐ฝ ๐๐ธ๐ณ๐ด๐พ ๐ณ๐ด ๐๐พ๐๐๐๐ฑ๐ด*'
await conn.reply(m.chat, `*_โณSแด แดsแดแด แดสแดแดแดsแดษดแดแด Sแด แดแดแดษชแด...โณ_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐๐ด๐ฟ๐๐พ๐ณ๐๐ฒ๐๐พ๐ ๐ณ๐ด ๐ฐ๐๐ณ๐ธ๐พ ๐๐ธ',
body: '๐๐ฎ๐๐พ๐ด๐ธ๐๐ธ๐ฝ',
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/AllMightHero/NezukoBot-3.0`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSize
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
await conn.sendMessage(m.chat, { document: { url: link}, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: m})
}
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
export default handler