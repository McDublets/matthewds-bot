const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NO YOU DONT';

const PREFIX = '!';
var version = '1.0.1';
//Activity
bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('you fools.', { type: "WATCHING"}).catch(console.error);
}
//Log channel
,bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    } 
    (msg.content);{
         const logChannel = bot.channels.get("608707977624551424")
    logChannel.send(`${msg.author.username}: ${msg.content}`)
   
    }
}));
//Log Edits
bot.on("messageUpdate", async(oldMessage, newMessage) => {
    if(oldMessage.content === newMessage.content){
        return;
    }
    var logchannel = bot.channels.get("553677355743313926");
    let logembed = new Discord.RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor(0xFFC300)
    .setDescription("Message Edited")
    .addField("Before", oldMessage.content, true)
    .addField("After", newMessage.content, true)
    .setTimestamp()
    logchannel.sendMessage(logembed)
})
//Log deletes
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
}),
//Welcome message
bot.on('guildMemberAdd', member =>{ 
    const channel = bot.channels.get("613820310256484475");
    if(!channel) return;

    channel.send(`Hey there ${member}, welcome to MatthewD's Server!`);
})
//Commands
bot.on('message', message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case 'info':{
                 message.channel.sendMessage('Version ' + version);
             }
        break;
        case 'clear':
            if(!message.member.roles.get('570712030978506752')) return message.channel.send('YOU AIN\'T AN ADMIN YOU IDIOT!!')
            if(!args[1]) return message.reply('Please define a number of messages to be cleared.')
            message.channel.bulkDelete(args[1]);
            message.delete();
            var embed = new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL)
                .setTitle('Messages Cleared')
                .addField('Cleared by:', message.author.username)
                .setColor("RED")
                .addField('Quantity', args[1])
                .setTimestamp();
            var logChannel = bot.channels.get("553677355743313926");
            logChannel.sendMessage(embed)
        break;
        case 'agree'
             :message.member.addRole('555832403646480395')
             message.delete();
             var embed = new Discord.RichEmbed() 
                .setTitle('User Agreed')
                .addField('User:', message.author.username)
                .setColor(0x2CDB44)
                .setThumbnail(message.author.avatarURL)
                .setTimestamp();
            var logchannel = bot.channels.get("553677355743313926");
            logchannel.sendMessage(embed)
        break;
        case 'bot':
            message.channel.sendMessage('Hay!  I am this servers discord bot, owned and coded entiredly by McDublets for MatthewD.')
        break;
        case 'commands':
            message.channel.sendMessage('Prefix: !  Commands: commands, bot, agree, info, rules, music. Moderator/Admin commands: clear, jail, release.  Admin commands: kick, ban.')
        break;
        case 'rules':
            message.channel.sendMessage('Be sensible, show respect for others and for admins.  Try to keep cursing to a minimum, and do not start drama.  No pornography/pornographic comments/jokes, with a 0 tolerance policy.')
        break;
        case 'music':
            message.channel.sendMessage('To use the Rhythm bot, enter "$search (name of song)", then select the song from the list.  You must join the music voice chat first!')
        break;
        case 'jail':{
            if (!message.member.roles.get('570712030978506752')) return message.channel.send('YOU AIN\'T AN ADMIN YOU IDIOT!!')
            if (!args[1]) return message.reply('Please specify a user to be clinked.')
            const user = message.mentions.users.first();
            const member = message.guild.member(user);
            member.removeRole('555832403646480395')
            member.addRole('580104243923648523')
            var embed = new Discord.RichEmbed()
                .setThumbnail(user.avatarURL)
                .setTitle('Member Jailed')
                .addField('Jailed Member:', user.username)
                .addField('Jailed By:', message.author.username)
                .setColor("RED")
                .setTimestamp();
            var logChannel = bot.channels.get("553677355743313926");
            logChannel.sendMessage(embed)
        }
        break;
        case 'release':{
            if (!message.member.roles.get('570712030978506752')) return message.channel.send('YOU AIN\'T AN ADMIN YOU IDIOT!!')
            if (!args[1]) return message.reply('SPECIFY A DANG USER YOU DUMBY!!')
            message.delete();
            const user = message.mentions.users.first();
            const member = message.guild.member(user);
            member.removeRole('580104243923648523')
            member.addRole('555832403646480395')
            var embed = new Discord.RichEmbed()
                .setThumbnail(user.avatarURL)
                .setTitle('Member Released')
                .addField('Released Member:', user.username)
                .addField('Released By:', message.author.username)
                .setColor(0x2CDB44)
                .setTimestamp();
            var logChannel = bot.channels.get("553677355743313926");
            logChannel.sendMessage(embed)
        }
        break;
        case 'kick': {
            if (!message.member.roles.get('553668232549236737')) return message.channel.send('YOU AIN\'T AN ADMIN YOU IDIOT!!')
            if (!args[1]) return message.reply('Please specify a user to be kicked.')
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.kick('IMA BOT I GOT NO REASON').then(() => {
                        message.channel.sendMessage(`BE GON ${member}`)
                        });
    
                    } else {
                        message.reply("That user ain\'t in the server.")
                    }
                } else {
                    message.reply("That user ain\'t in the server.")
                }
            }
        break;
        case 'ban': {
            if (!message.member.roles.get('553668232549236737')) return message.reply('YOU AIN\'T AN ADMIN YOU IDIOT!!')
            if (!args[1]) return message.reply('Please specify a user to be banned.')
                const user = message.mentions.users.first();
                if (user) {
                    const member = message.guild.member(user);
                    if (member) {
                        member.ban('IMA BOT I GOT NO REASON').then(() => {
                            message.channel.sendMessage(`BE GON FO EVA ${member}`)
                        });
    
                    } else {
                        message.reply("That user ain\'t in the server.")
                    }
                } else {
                    message.reply("That user ain\'t in the server.")
                }
            }
            
        break;
        }})        

bot.login(token);
