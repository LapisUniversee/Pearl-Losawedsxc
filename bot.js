const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('guildBanAdd' , (guild, user) => {
  let banlananlar = guild.channels.find('name', 'banlananlar');
  if (!banlananlar) return;
  banlananlar.send('https://gph.is/1JbRktc **Böcek temizleme vakti!** '+ user.username +' **Galiba bana karşı gelmişsin** :fist: :writing_hand:  :spy:' );
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
      msg.reply('As');
}
  if (msg.content.toLowerCase() === 'pearl') {
      msg.reply('Efendim?');
}
  if (msg.content === 'Rose') {
      msg.reply('Lütfen bu konudan bağsetme!');
}
  if (!msg.content.startsWith(prefix)) {
    return;
}
  if (msg.content.toLowerCase() === prefix + 'pearl kimdir') {
      msg.reply('İnci, Kristal Taşlar"ın üyelerindendir. Rose Kuvars"ın en yakın takipçilerinden ve tek sırdaşıdır. İnci, Rose Kuvars"ın yanında Anadünya"ya karşı olan İsyana katılmış ve hayatta kalmış olan son taşlardan biridir. Binlerce yıl daha Dünya"yı kötülüklerden korumaya yardım etmiştir. Rose Kuvars"un vefatından sonra Rose"un çocuğu Steven Kuvars Universe"ün bakıcılarından biri olmuştur.');
}
if (!msg.content.startsWith(prefix)) {
  return;
}
if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.reply('sa = selamlaşma')
    msg.reply('pearl = Seslenme')
    msg.reply('.pearl kimdir = pearl hakkında bilgi')
    msg.reply('.kristal taşlar hakkında')
    msg.reply('.yaz (yönetici komutu) = pearl istediğini yazar')
}
if (!msg.content.startsWith(prefix)) {
  return;
}
if (msg.content.toLowerCase() === prefix + 'kristal taşlar hakkında') {
    msg.reply('Dünya"yı kurtaran taşlar')
}

});

client.on("guildMemberAdd", member => {

      var channel = member.guild.channels.find("name", "yeni-üyeler");
      if(!channel) return;

      var role = member.guild.roles.find("name", "Üyeler");
      if(!role) return;

      member.addRole(role);
      channel.send(member + "  Artık Bir Kristal Taş!");
      member.send('Selam,Değerli **' + username + '** Artık Sende Bir Kristal Taşsın. Kafana Göre Takıl. https://gph.is/1KZUmbi :wink:')
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
