let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
Dibuat dengan bahasa javascript via NodeJs

➥ Instagram: instagram.com/Official.kingdoom

〘 Thanks To 〙 
➥ Allah SWT

〘 DONASI 〙 
➥ pulsa : 0851-5657-8924
➥ shopee pay: 0821-3670-1465
➥ ovo: 0822-2662-8673


〘 DIMAS 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

