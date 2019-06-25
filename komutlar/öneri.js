const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "553271648007225388";
	var channelID = "557238760685699073";

	if (!öneri){
		return message.reply("**Öneriyi Yazmayı Unuttun**");
	} else {

		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Mesaj:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)

		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Önerini aldım. **Umarım Küfür Değildir!**");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
  usage: 'öneri <mesaj>'
};
