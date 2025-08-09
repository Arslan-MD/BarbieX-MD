const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05RTVpSMFVpNkFXQUlvbW9FMms2eHFJaSt5K0Z0cERNMGtrL0pzbk1GMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW9rd0h4MENGZEhWcFJGV0h2TDdJVThqdDZqWnlIRFMxZ0NLZ3F0TmFUTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTENZRC9Jckw3ZlRhNDRmQ0dVSHkxUnZIYldmMmlxWFpLVXU0SzJtTkY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnMUU5ZS9KdnNhZWh5MnJaN2J1RWNBWlA2ZnFvQ1RzcXlVVGVKMUx5VWdVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IRkhZS3VoV21HVm5mbHpzeHNCNjJja1lMNlVZblNmZ3krbXl3ZS96bGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRVQWx0SDQweGVobE4yVEVrVTVhSkNtL0JrNFRwczh6dFlvYmhJY3hraXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEwzR0h0OENjNW05OEVjdXU0UmMyTE9EOTlzYUg3SkNMMTFLQWx2Yjhtcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkpoUmFuOTRtNUFSSWViYlJDK2FjSG5xNGJ4Q3pwNi92YzAyTmp6QkZGMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM1VnRjUFkreEtNV1JKT2xnY3VyR1lFL24ySThkVlhaN0hGWmJLVlRFRFhOV3YxVmVXc3U2SkVYaWY3Z2NXK2RXempReFV0U3VIRUFSSmVFMk1nWWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJMdUxheVlqZWdCZkVPemd3MUdWZTBERUVaMFFmSTlTM205WkNkQm52UTRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM5MjYxNjI2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5QkJCODU5Rjk2MkQ5NDlGODA2NTc0OUU5RDQ0RjU5RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0NzcxNDIzfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzOTI2MTYyNjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEI3MTU4RURGRTBBQUU3MDNDNTQyQ0Y4NDVDQTg4QzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDc3MTQyM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiS0I3VkdRQUUiLCJtZSI6eyJpZCI6IjkyMzM5MjYxNjI2Mzo2MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJhcnNsYW4iLCJsaWQiOiIxNjMwODkwODU0Mjc4OTY6NjBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQall3K29DRU5uZjNzUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKYjQ2bFU0R3UzazlnVzJwbVlqT0hlWUVQamJUa2tRZUVsaFh3T1p5T1hFPSIsImFjY291bnRTaWduYXR1cmUiOiJFK21hdDBNUUtJOUU3VFhCMlYyNFJrdmVaWHIxeTVJYi9ibjdOTDRuOWVaR0Y4RUtUdWt5eGFOVzVsajdtclY1Qno1QSt2K0doR1FkcURKeEh0bE5BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiclZHM0pqcDI1eVpzekpOZyt1RWRwREhwQ0oycGVmUVIrS0tydDBiSkNDWXkxelZvcFg0Z1JnOCtmS3RkMXd5VU9pZ2lNQ2tvN0l4M3RoZ2tCYjVSZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzOTI2MTYyNjM6NjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1crT3BWT0JydDVQWUZ0cVptSXpoM21CRDQyMDVKRUhoSllWOERtY2pseCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0NzcxNDIwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRENhIn0=",
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
