const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (args.join(" ") == "") {
        message.reply("Trebuie sa mentionezi pe cineva! Exemplu: a!avatar @Membru");
        return;
    } else {
        let user = message.mentions.users.first();
        let image = user.displayAvatarURL; 
        let embed = new Discord.RichEmbed()
            .setAuthor(`${user.username}#${user.discriminator}`) 
            .setColor("#0000000") 
            .setImage(image) 
        message.channel.send(embed); 
    }
}
module.exports.help = {
  name: "avatar"
}