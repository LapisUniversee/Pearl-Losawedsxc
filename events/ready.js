const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} mızrak ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setGame(`Yeni Telefonu İle`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} Mızrağını Serverin Ortasına Attı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} Serveri yardı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Peridot onardı!`);
};
