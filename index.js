const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzIzMzc0MDEwNTMxOTcxMTcy.Xuw35Q.PHCNcoz20zc4BMsG8uZNVTwizOA';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('機器人上線囉!');
})

bot.on('message', msg => {
    if (msg.content === '嗨' || msg.content === '嗨~') {
        msg.reply('嗨，你好啊~ 我是 KID 機器人~');
    }

    let args = msg.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'unity':
            msg.channel.send('Unity 讚啦!');
            break;
        case 'mute':
            let person = msg.guild.member(msg.mentions.members.first() || msg.guild.members.cache.get(args[1]));
            if (!person) return msg.reply("找不到身分!");

            let mainrole = msg.guild.roles.cache.find(r => r.name === "程式");

            person.roles.remove(mainrole.id);
            person.roles.add(mainrole.id);

            msg.channel.send(`@${person.user.tag} 現在是 ${mainrole}`);

    }
})

bot.login(token);