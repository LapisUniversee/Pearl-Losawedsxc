const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("[PEARL] Pufflatılıyor").then(msg => {
        console.log("[PEARL] Pufflatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'pufflat',
  description: 'Pearl"u Pufflatır',
  usage: 'pufflat'
};
