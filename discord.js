const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
function clear(str){
    var ars = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', '); return ars;
}
client.on('message', msg => {
    var mas = clear(msg.content);
    console.log(mas);
  switch (mas.toLowerCase()) {
  case 'кто максим?':
    msg.reply('Максим пидор :*');
    break;
  case 'азнакай!':
         var rofl = Math.floor((Math.random() * 2) + 1);
          if(rofl == 1)
          msg.reply('АЗАНКАЙ!');  
          else 
          msg.reply('Azazashka :D');  
  break;
  case 'face':
          msg.reply('Retard alert!');
  break;
  case 'го': 
          msg.reply('Нахуй?');   
  break;
  case 'псина': 
          msg.reply('< - Шакал ебаный');   
  break; 
  case 'го дота': 
          msg.reply('А может нахуй?');   
  break;
  case 'кто дота': 
          msg.reply('Я бы сказал кто, но не хочу, чтобы ты плакал))0))0))00');   
  break;
  case 'дай админку': 
          msg.reply('только если повафлеришь)000)))');   
  break;
  case 'даун': 
          msg.reply('< - тут только один даун ');   
  break;
  case '!!!play': 
          msg.reply('ТОЛЬКО ГУЧИ ТОЛЬКО ХАРДКОР НАХ');   
  break;
  case 'пашол нахуй бот': 
          msg.reply('Поздравляю ты послал бота, **47 хромосома получена**');   
  break;
  case 'бот': 
          msg.reply('че те');   
  break;
  case 'вилкой в глаз или в жопу раз': 
          msg.reply('жопу твою раз');   
  break;
  case 'иннополис': 
          msg.reply('TOP (Жаль, что я не мею своего мнения и не знаю, что такое "Иннополис")');   
  break;
  case 'давай': 
          msg.reply('Что?');   
  break;
}
});

client.login('NDAyNDk1NTE3MzQwMjA1MDY2.DT5ktw.ti_OPuXPuXe2UHwqL7qWeiXX0mQ');