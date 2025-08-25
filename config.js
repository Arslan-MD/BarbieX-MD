const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dMcXdYSUNEQXRrZ3FueTh1dThzL3B6OFdlWFlFT1VobDRxOGppNS9rUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmZWRThNcFMwb2ZSN2JXWHpQY2hxSmlrT0wwaGZmU2tvQndINnN3b3cxTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQmRrOER1Z0ppczR1MWcwbzYydUJYWVFOeTZ1b0h6aExlMFFmWi9aSGxzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2alRSemIxTnVpUFU1WDBUZ0RyaTQ1U05EQWM0QUhIN0Q1cXJ4a0YwUzFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HUlEzN3F4bEFpVFJieUdybmRzdGsrN0VFYTEzOVdlYXFQZGlxZktFbDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBVTJ0Z2NRZ08rOG5xb0tseWdwR0hwQkNjY3R3UWpRZXFTaDgyekFjRGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUNMY3dqTU1PRWxWTG1jU2J0OVFXMDJjZGt1SzltK256Y2x0dzl5N29uQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmI5aU9PK240WHVQREdCcGdWTzQ1NzNEVXhoanErMHZFM2Joem9xR0NsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDeGZiRjZiMkJmQWRVT1B0ZXBjc3VxakZnSllZaEY3b0UrWHJ6VWV0NHdFbmtIbUxzSWpOVVJKQ2lPZ3IzWDNWakZubjNZNWd5bnBLQWxBQnBNeURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IkV2dzRLd1FaMEVwcGdkVmtSR3RZQ252d2ROZHpyMU1aZnlWbDYrUi8zWnM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ2Mzk4NDA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTQwQkE4ODY5OTlBNDAyQ0ZDODMzMjExN0Q5N0Q5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMDQyNzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM0NjM5ODQwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0M0Q0UzNzBCRTEyRjUyMTFFOTlGMEY3NTZBMkFBMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MTA0MjcyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNDYzOTg0MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMxQUU2MzFFNjhGQzMyRjhDRTg1MjJDMTg4NDA0MjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjEwNDI3NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQ2Mzk4NDA0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMDExRjcyRkRGQzg5M0RFQUIyNENEMjc5Nzg4NTQxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYxMDQyNzR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkExREE3U1JUIiwibWUiOnsiaWQiOiI5MjMzNDYzOTg0MDQ6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI1OTE3MTkxNjIzNDc5OToxQGxpZCIsIm5hbWUiOiJOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQU29wOThHRU1tTXNNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrK1BzNHBVMVhuMjllN3k0MWhxZ25FeGcwUVM4WHJXT2J0RDlTWVlhcjNVPSIsImFjY291bnRTaWduYXR1cmUiOiJsNVJjbU1ldlVSVHBKN2l0amJuRG1wZlV5SG5VUjZNT1NDNWVzU0JyNDVnRlNRa3RqMXBtYXFvc0RINlhzakpMclRoOVBqTjBkc1JCdCtTQnZaOTlEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoicU0wbmlTSkFpOFFUdWFyUzJnVXZNVDd1UGg2VzNyYU9PZktpMlljK281RlJPdEdwK3ZXRDJtUjU3TkR1ejQ4NnU4Wk9hMy80b0JtVEp0V0VTMFdEQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNDYzOTg0MDQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmdmo3T0tWTlY1OXZYdTh1Tllhb0p4TVlORUV2RjYxam03US9VbUdHcTkxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxMDQyNjksImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRG9RIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY BarbieX-MD ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "",
// add custom menu and mention reply image url
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/83flwy.mp4",
// add custom menu and mention reply video url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "BarbieX-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "BarbieX-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/znk2e2.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
