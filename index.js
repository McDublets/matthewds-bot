const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!';

var version = '1.0.1';

bot.on("messageUpdate", async(oldMessage, newMessage) => {
    if(oldMessage.content === newMessage.content){
        return;
    }
    var logchannel = bot.channels.get("553677355743313926");
    let logembed = new Discord.RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Edited")
    .addField("Before", oldMessage.content, true)
    .addField("After", newMessage.content, true)
    .setTimestamp()
    logchannel.sendMessage(logembed)
})
bot.on("messageDelete", async message => {
    var logchannel = bot.channels.get("553677355743313926"); 
    let logembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Deleted")
    .addField("Message", message.content, true)
    .setTimestamp()
    logchannel.sendMessage(logembed)
})
,bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('you fools.', { type: "WATCHING"}).catch(console.error);
})

bot.on('guildMemberAdd', member =>{ 
    const channel = member.guild.channels.find(channel => channel.name === "rules");
    if(!channel) return;

    channel.send(`Hey there ${member}, welcome to MatthewD's Server!`);
})

bot.on('message', msg=>{
    if(msg.content.includes('pussy')) 
    msg.delete();
    if(msg.content.includes('dick')) 
    msg.delete();
    if(msg.content.includes('penis')) 
    msg.delete();
    if(msg.content.includes('nigger')) 
    msg.delete();
    if(msg.content.includes('sex')) 
    msg.delete();
    if(msg.content.includes('goddamn')) 
    msg.delete();
    if(msg.content.includes('god damn')) 
    msg.delete();
    if(msg.content.includes('slut'))
    msg.delete();
    if(msg.content.includes('cum')) 
    msg.delete();
    if(msg.content.includes('lmb')) 
    msg.delete();
    if(msg.content.includes('nigga')) 
    msg.delete();
    if(msg.content.includes('anal')) 
    msg.delete();
    if(msg.content.includes('whore')) 
    msg.delete();
    if(msg.content.includes('faggot')) 
    msg.delete();
    if(msg.content.includes('vagina')) 
    msg.delete();
    if(msg.content.includes('shit')) 
    msg.delete();
    if(msg.content.includes('fuck')) 
    msg.delete();
    if(msg.content.includes('ass')) 
    msg.delete();
    if(msg.content.includes('communist')) 
    msg.delete();
    if(msg.content.includes('pos')) 
    msg.delete();
    if(msg.content.includes('lmao')) 
    msg.delete();
    if(msg.content.includes('lmfao')) 
    msg.delete();
    if(msg.content.includes('cunt')) 
    msg.delete();
    if(msg.content.includes('retard')) 
    msg.delete();
    if(msg.content.includes('bitch')) 
    msg.delete();
    if(msg.content.includes('anal')) 
    msg.delete();
    if(msg.content.includes('stfu')) 
    msg.delete();
    if(msg.content.includes('rape')) 
    msg.delete();
    if(msg.content.includes('isis')) 
    msg.delete();

})
bot.on('message', message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case 'info':{
                 message.channel.sendMessage('Version ' + version);
             }
             break;
        case 'clear':
            if(!args[1]) return message.reply('Please define a number of messages to be cleared.')
            if(!message.member.roles.find(r => r.name === "Moderator")) return message.channel.send('YOU AINT AN ADMIN YOU IDIOT!!')
            message.channel.bulkDelete(args[1]);
            return message.reply('Messages cleared!')
            break;
        case 'agree'
             :message.member.addRole('555832403646480395')
             console.log
             console.error
             break;
        case 'bot':
            message.channel.sendMessage('Hay!  I am this servers discord bot, owned and coded entiredly by McDublets for MatthewD.')
            break;
        case 'commands':
            message.channel.sendMessage('Prefix: !.  Commands: commands, bot, agree, info, rules, music.')
            break;
        case 'rules':
            message.channel.sendMessage('Be sensible, show respect for others and for admins.  Watch your language, and do not start drama.  No porn, pornographic comments/jokes, with a 0 tolerance policy.')
            break;
        case 'music':
            message.channel.sendMessage('To use the Rhythm bot, enter "$search (name of song)", then select the song from the list.  You must join the music voice chat first!')
            break;
                
                
    } 
})

bot.login(token);
