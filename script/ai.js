const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`ℹ️ | 𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝗌𝗈𝗆𝖾 𝗉𝗋𝗈𝗆𝗉𝗍 𝗈𝗋 𝗌𝗍𝖺𝗍𝖾𝗆𝖾𝗇𝗍 𝖺𝖿𝖾𝗋 𝖺𝗂\n\n𝗘𝗫𝗔𝗠𝗣𝗟𝗘: 𝖺𝗂 𝗐𝗁𝖺𝗍 𝗂𝗌 𝗍𝗁𝖾 𝗏𝖺𝗅𝗎𝖾 𝗈𝖿 𝖾𝖽𝗎𝖼𝖺𝗍𝗂𝗈𝗇?'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`🔎 | 𝗔𝗜 𝗂𝗌 𝖺𝗇𝗌𝗐𝖾𝖾𝗂𝗇𝗀 𝗍𝗈 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇 "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://openaikey.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage("🌟 | 𝗥𝗘𝗦𝗣𝗢𝗡𝗗\n━━━━━━━━━━━━━━━━━━━\n"response, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
