const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**PEARL**")
        .setImage("https://lh3.googleusercontent.com/fHV16yJUXaXWgjTrTweUYUYKM-8adUpEmGWr-J6EXMfVFHRI2J4hYju-sTtuOawz2cK2uIe_YMAikA=w1390-h645-rw-no", true)
        .setThumbnail("https://vignette.wikia.nocookie.net/steven-universe/images/3/35/NewPorlfit.png/revision/latest/scale-to-width-down/305?cb=20190124161354")
        .setColor(0x00AE86)
        .addField("Lakapları", `
        *P (Amethyst)
        *Pearlım (Rose Quartz)
        *Pierogi (Amethyst)
        `, true)
        .addField("Silahları", `
        *Güzel Bir Mızrak (Ateş Edebiliyor)
        *Çok Fazla Kılıç (Savaşta Kullanmıyor)
        `, true)
        .addField("Yetenekleri", `
        *Kumları Kontrol Edebilme
        *Bulutları Kontrol Edebilme
        *Hologram Oluşturabilme
        *Taşında Eşya Saklayıp İstediği Zaman Geri Alması
        `, true)
        .addField("Açıklama", `Pearl kristal taşların bir üyesidir. Rose Kuvars'ın/Pink Diamond'un en yakın takipçilerinden ve tek sırdaşıdır. İnci, Rose Kuvars'ın yanında Anadünya'ya karşı olan İsyan'a katılmış ve hayatta kalmış olan son taşlardan biridir. Binlerce yıl daha Dünya'yı kötülüklerden korumaya yardım etmiştir. Rose Kuvars'un ölümünden sonra Rose'un/Pink'in çocuğu Steven Universe'ün bakıcılarından biri olmuştur.`, true)
        .addField("Füzyonları", `
        *Opal = Amethyst + Pearl
        *Rainbow Quartz = Pink/Rose + Pearl
        *Sardonyx = Ruby ve Sapphire (yada Garnet) + Pearl
        *Rainbow Quartz 2.0 = Steven + Pearl
        *Alexandrite = Ruby ve Sapphire (yada Garnet) + Amethyst + Pearl
        *Obsidian = Garnet + Rose/Pink/Steven + Amethyst + Pearl
        `, true)

   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pearl',
  description: 'Pearl hakkında bilgi verir',
  usage: 'pearl'
};
