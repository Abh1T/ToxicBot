const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js');
const bot = new Discord.Client();

const token = 'NzEzNzIzOTk3OTY3MzUxODQ5.XskRoA.tCa6h7ueAvYSB3uYI3fEL8zOd4I';
const PREFIX = '$';


bot.on('ready', ()=> {
    console.log("ToxicBot is activated");
    bot.user.setStatus('dnd');
    bot.user.setActivity("with Toxicity#4269");
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'ping':
            message.channel.send('nerd stuff');
            break;
        case 'hello':
            message.reply('Don\'t you have better things to do than to talk to a bot?');
            break;
        case 'code':
            message.channel.send('https://github.com/Abh1T');
            break;
        case 'invite':
            message.channel.send('https://discord.com/oauth2/authorize?client_id=713723997967351849&scope=bot&permissions=306248ithub.com/Abh1T');
            break;
        case 'creator':
            message.channel.send('DM Toxicity#4269 about many suggestions or problems with the bot');
            break;
        case 'bot':
            if(args[1] = 'version'){
                message.channel.send('Beta Version 1.0.0')
            }
            break;
        case 'help':
            message.channel.send('List of Commands: $help, $invite, $hello, $ping, $code, $creator, $bot version, $clear, $crab rave');
            break;
        case 'crab':
            if(args[1] = 'rave'){
                 message.channel.send(message.author, {files:'./tenor.gif'});
                break;
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('Wrong Command idiot')
             message.channel.bulkDelete(args[1]);
             break;

    }
})

bot.login(token);
