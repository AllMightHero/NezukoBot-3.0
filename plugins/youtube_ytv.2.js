let limit = 80
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) throw '*[โ๐๐๐๐โ] ๐ธ๐ฝ๐๐ด๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ๐ผ๐ฐ๐ ๐ด๐ป ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด / ๐ป๐ธ๐ฝ๐บ ๐ณ๐ด ๐๐ฝ ๐๐ธ๐ณ๐ด๐พ ๐ณ๐ด ๐๐พ๐๐๐๐ฑ๐ด*'
conn.reply(m.chat, `*_โณSแด แดsแดแด แดสแดแดแดsแดษดแดแด Sแด แด ษชแดแดแด...โณ_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐๐ด๐ฟ๐๐พ๐ณ๐๐ฒ๐๐พ๐ ๐ณ๐ด ๐๐ธ๐ณ๐ด๐พ ๐๐ธ',
body: '๐๐ฎ๐๐พ๐ด๐ธ๐๐ธ๐ฝ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/AllMightHero/NezukoBot-3.0`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSize
if (isLimit) continue
link = await video.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
video = source = link = null
lastError = e
}}
conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'video/mp4', fileName: title + `.mp4`}, {quoted: m})
}
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i
export default handler
