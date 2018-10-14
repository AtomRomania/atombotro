const Discord = module.require("discord.js");

let ccreator = ("zK1ngHD");

let ccommunity = ("Cea mai tare comunitate!");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
	let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(bicon)
        .addField("Creator-ul bot-ului:", ccreator)
        .addField("Atom Romania RP", ccommunity)


        message.channel.send({embed: embed});
}

module.exports.help = {
	name: "credits"
}