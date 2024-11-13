const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_54_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDQzLFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM4LFxuICAgICAgICA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICA3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDI4LFxuICAgICAgICAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUxLFxuICAgICAgICA1LFxuICAgICAgICA3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUzLFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDU1LFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICA5NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkptZ29xSlZSbHdkdTBWbW9UZWNzUWxEYThDeUZxdHlDMjJSeUlnRnBFTWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImYwZWZtQndpVEhDVTZubjltUWgxMWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2Y2NzVhMzktMTVjNy00NjE2LWFmMWEtNTk4NGY1ZDE2OThhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMjEsXG4gICAgICAxMDUsXG4gICAgICAxNDksXG4gICAgICAxNzAsXG4gICAgICAzLFxuICAgICAgMyxcbiAgICAgIDE3NSxcbiAgICAgIDIyNCxcbiAgICAgIDI1MSxcbiAgICAgIDEyNCxcbiAgICAgIDE3MixcbiAgICAgIDYwLFxuICAgICAgMTEsXG4gICAgICAxNjYsXG4gICAgICAxOTAsXG4gICAgICA5NixcbiAgICAgIDQzLFxuICAgICAgNzgsXG4gICAgICAxMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTksXG4gICAgICAxMTYsXG4gICAgICAyNixcbiAgICAgIDIzNSxcbiAgICAgIDEzMyxcbiAgICAgIDczLFxuICAgICAgMjI1LFxuICAgICAgMjE0LFxuICAgICAgMTc1LFxuICAgICAgMjQ1LFxuICAgICAgOTcsXG4gICAgICAxOSxcbiAgICAgIDE2NCxcbiAgICAgIDE1NSxcbiAgICAgIDIwNyxcbiAgICAgIDYxLFxuICAgICAgMTMzLFxuICAgICAgNzUsXG4gICAgICAyMTAsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFg0TVNRRlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDk3MzM0NjI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJtdWhhbW1hZHVtbXVzc2FsbWFoXCIsXG4gICAgXCJsaWRcIjogXCIyMDE1OTM0NTA0NTkyOTk6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDMyaTRRSEVPNm0wcmtHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2WjFiUGVvbEJSR0Fublg4WWJYdGJ1b0xzb01JZ2NrMHd4RVBHRzlSWEVjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJHbzFSVGMyWlFBR1E4dU1UYVpuSWhONVhsZ3hnVGJ0TDVHRXhBdGRrLzRMcDlWNExSRkMxTE42ZE1oQVo3QUNmQjZCRWg2SXJUY3RCZ0hGVWRnTEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNWOUhRS05hc2xCZHFQTUEwRmxuN3I1aXhwMjJwS041NXljOWNjZ1RLNVR6S0pITE9JN0N3QjBGT3dpTXd3S3JxWUFHam9sbXBBdUZSd0FHMmFuU0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDk3MzM0NjI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNDk4ODY3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
