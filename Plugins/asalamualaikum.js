let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
WaAlaikumSalam
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /^(mikum|P|slm|assalamualaikum|asalamualaikum)$/i
handler.command = new RegExp

module.exports = handler
