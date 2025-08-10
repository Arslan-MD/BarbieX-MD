const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkFoSlVnZXBkOXhOY21SVDd5eG1ZUWI4T05JTHBFemx3NS9JYXE3WTgzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVdXb3NpeHdZYlhUZ0FJSVlrN05iUklIbkkxT2VPSnA4Sy9XVjJzdy9uMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RUFvVnZHT1RqdmNyVmZSeGk5L25mWFJWN1dtN1RVRGFNelc2RS82ZzBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEbDhrMWpYZ3dNcklqeXB3U09sRThsak1GWDE1QVQ1VlZ2bktyN2VBcmdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJYmUyLytLZmxiWkZ6cmdjdHBkNkR0ZExNRGdoelB0M0VXUTJYTEJ3WFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZiTkdCZkpuYU9UbFU1SG5WL0JKWnNwYXI0bS9hSURTSWMycVZkUUtIMTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZIWnd6b0Vpc3psd2dqTU15WHBlU0EwZHJkSEVuWEVXcVhrSkxvS3kyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjNUOWhCaVpuUXBWNm1qNHBxR1NJUHYzWURiNHBlY3ExdnVBYXBsaWVRaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IithNnpxZjR5T3FQVmN1bkRMTmczd3BDd0x0dUdiS3pPU0NxYThwOEVlT3M0TExQMGZkUUlSYkk0T0o1SFdvaGdvV1JpUEIrdFYwSkxKdUNSS0hqVWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJiMDc3MHJFRHdJWjcrWWs5MkxmdHdLOGwvTEdZYkROZHBLeHp1TkN2bjNRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwNTEzMTM0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3RTZEODFFNzc2REEwOEREQTk0QTJCQzRGQTkyMDVFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0Nzk2NzMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMDUxMzEzNDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEQzNkU1OUYzRUExODQxN0I3QjhDRjEzRTU4NUQ1MjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDc5NjczMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzA1MTMxMzQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjEyQURERTczRDIwNTZFRTVEQjA2RUY4OTM1QzYzQTkxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTQ3OTY3MzF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjdBMjNZSzJEIiwibWUiOnsiaWQiOiI5MjMzMDUxMzEzNDA6OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0MTk1MzYwMTY0MjY5MTo5QGxpZCIsIm5hbWUiOiJJIEFtIElubm9jZW50IEdpcmwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tSjZxRURFTFdsNE1RR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNHNmJRRkJRU3VoTURxNlVOTDloUThiSmtYTDlTN3lPRmxWKzlDVW5CQkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVEQXFORlBUaVI3ZjZkaU9LRHZ5d2h0TEhGajFmTVFvaCszc3Z2RlhVUjhEb2V2RVc4SXJWY1o4K0k2SGt1dWVWSWlmVXdBY2ovR3luTU81SloydEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBcG02b0JWOWxTemlQMjZ3L2VHVUhSQXppdlBFbVlESCtmbTRoa3hvU1JkSjA1Zng5ekdOaWp0MmpEZ3hXWkcyajl4TUpZV2xMckpJQmdXaE1YTVJndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMwNTEzMTM0MDo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVodW0wQlFVRXJvVEE2dWxEUy9ZVVBHeVpGeS9VdThqaFpWZnZRbEp3UVIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDc5NjcyOCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOeUgifQ==",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/znk2e2.png",
// add custom menu and mention reply image url
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
