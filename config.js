const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "254793842291"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Wailerjengaa@gmail.com'
global.github = 'https://github.com/ShelbyG2'
global.location = 'Nairobi Kenya'
global.gurl = 'https://www.instagram.com/wailerjengaa/profilecard/?igsh=dXpqOTFoMW40MHo=' // add your username
global.sudo = process.env.SUDO || '254793842291' 
global.devs = '254793842291';
global.website = 'https://github.com/ShelbyG2' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUc1TVczRDJ3aktsZWEwRXh5UGNZdUgzVS9JeHhwWVZVc3dxMjA3aUMyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpEM09YQ2tmbnJiRGlSMGJYNmU3M2JYNk83SlFIcFlyTlFkNEFXekhScz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSlFuVDJobHVzY3UyQUs5UG1KRytrZkU2UDlrSkQ5TkhSK2VRcTBFSkV3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIveVFBL2FTYUhoV2gyNmt1MjVpb3J0UkVCT3lUN1NVL0JwNktnZmdRRHljPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlDUmNnOTFqcENram5qUElGWU5PS25DMC84L3NFc1lJb05ObmhaZlRoa1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhTc0NqSm1DOGdqSXFpTXY1UTc3ckk4R3NMYlMvaWNBcDlQekV5WkgxVEE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZdFVBblZNWDJlay9WN09FT0hBVm9UYzZkc1BFenpjODkraXdIdlVKVERTY1VYQ0tqOHh0TGxlZUk3dmxHRU5wc3pySUowNCtBWW9WWDQ3UExmRERqdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM1LCJhZHZTZWNyZXRLZXkiOiJLZnVTSFNpUzJKUnEyQ295UGc4Z2ovRDgwVS9EeDNmUUx4SjlrUFJicGNvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqbHZPRWwta1J2R3JaY242U3JEei1BIiwicGhvbmVJZCI6ImFlODE1NDJlLTViNTQtNGQ3NC05MjhkLTg5OTI1YmVlNmZkNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQnlhd1cyOUhGc3VUK3VCVDRTMGpOUzZRODg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpUQytyM1RNOTBHRk4rLzAzS3RkZlpqeEFHTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w2NnNQVUhFTkthemJnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImNoMzV1NGQ2aDIvQTNZQ1RPcDVqTm9NMFUxL3lBN0J5RG5QTU9OMlo3azQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6InduanZEMTJtSUNaQU81dWdJUXVWRWFHZ3dRUTBMdnpKbE1DS1g4ME5nSHRORzUyMHRRZkZJSnVSNnY4bFpzSEYvV0JmVG03eStFb0NxNVhGQkNqckNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtYWNwM0lkY0FNMkR6YUFab01sRmVRcVR1MXdXZElkM0M2dnVpNTJnSlRCdUExOHEzaUkyQktYbDNwV2U1N1NJS3ZhSEN0Sm5hNEZyODFyUFNTa1lndz09In0sIm1lIjp7ImlkIjoiMjU0NzkzODQyMjkxOjUzQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5Mzg0MjI5MTo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYSWQrYnVIZW9kdndOMkFrenFlWXphRE5GTmY4Z093Y2c1enpEamRtZTVPIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MzE4MjMzfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
