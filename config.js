/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['233534163467'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Spacely'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Spacely Bot Mini',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUyZLiOBT8F10hGuMViKiI8YKNDRQGLywTfRC2MAJvSLLBdPDvHaaquvow01Nzk2VFvnyZ+d4PkBeYoilqwOgHKAmuIUPtkTUlAiOgVYcDIqALYsggGAE4IeaGSK5kvwrVLL5bt2J1wWFTdqR0sTFO+9pM7fvEXmb2C3h0QVntUxz9ATCmYtk3xqGhjButPGDfT62+pu7v7jwb74WOvPbyk3dvXPX6Ah4tIsQE58m4PKIMEZhOUeNCTL5GfzDW+yI/sMLJwpL2SXk1UxZzDRcZybFevLq2stjva8m5hsHX6ENMq8AgG04YdsJG3M6ZuVr2eLHwVX7ucTCZ1JVhZVN1Lb7RpzjJUWzHKGeYNV/W3dLnYnpWb07TTNw6PHu9oxxIHSOT03RjZxstXfdcV/Ybi36NuHbwhwVr3Fczovn9PDZ3ZLDpnbZMXmrS4e539v7y4jQhp0W/E3fJR1bO/0f3q+vPopu7DauZuI7zraWuzLyTrk1GB6KyukzXknSVOc7IxK/Rv54Nuo9FZ6ybQr1vmNuZBNOd4Y1XYalUjW45+uW1IQuJKz7pQ1aRP7E8b2eGg3qBv6nKOsTBUSgycha2kdQ7RLdBmnXkNW9op0VjDIvFaS7dNqJiDcwsNuRDZ2OZHo6d3SadL7f86/XOneduYagvz47OqLFjMOo/uoCgBFNGIMNF/ryT+C6Ace2hiCD2lBdAKyGqnceOP9kYXjxlk6a5DvrOPt0NT7lg7NSO7IsrLcgHL6ALSlJEiFIUTzBlBWnmiFKYIApGf3/vghzd2JtxbTmh3wUHTCgL8qpMCxh/uPrxE0ZRUeXMa/JIbw+IgBH3eY0Yw3lCWx2rHJLoiGukHyGjYHSAKUW/OkQExWDESIV+Ta1exK3wQ0HgN9K6D7ogexqCYzACvCBIgtiXBVFWRoLyF/12bWFhWX7LEQNdkD6fKX2ZV2RhKHKyzEvtw/b+8YtgixcjBnFKwQjos83pXnPjsZt5ErMtS10mqp6o4LOhj2S8KS/TpVbZtwWeXmjEjtNk5+3H/TJReL7xwrCYFvkMZw3fy5cv/wACRuB0603mbOCJzSJdkcs8WIpl3UcMH8ZWyQ92AWNOT5svluNJiRs1um+ykLfkkyLOoj6by3J6mgnHGJn2Ogh6te904EpPXtpqMapxhH4vlvCCQndoGVLsFEZiX5h5i+FMkXYzO5XxaTHTTTI9eetyx9faypr0XPccu7mWKcuzcvaCVJPubu/WORY9y585WpBF+ntmnzOTvu8q/ExTa1X7ecDoOfo5bA38b+veiLcJ4x7d3zDel8m/LSlExuoez/0CX8hktvUKK8hur3C7GDJ6TkOoX5xGLCmrJQ48Ht+7oEwhOxQka0coj0mBY9AFpKjayNr5ofhDMV21bWOZmG3nKaRM/RwDH2eIMpiVYNRXBiIv8cpw+PgJeA20sDwHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
