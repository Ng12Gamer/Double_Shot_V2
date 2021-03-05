const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello")
})

app.listen(3000, () => {
 console.log("yes")
})

const Discord = require('discord.js')
const client = new Discord.Client()
               
client.on("message", message => { 
  if(message.content === "ping") {
    return message.channel.send("pong")
  }

///
  /// Help
    ///
if(message.content === "d!help") {
   let embed = new Discord.MessageEmbed()
  .addField ("Need help with Fun Commands? ```d!helpFun```", "_ _")
  .addField ("Need help with Picture Commands? ```d!helpPictures```", "_ _")
  .addField ("Need help with Moderation Commands? ```d!helpMod```", "_ _")
  .addField ("Want to learn about us? ```d!credit```", "_ _")
  .setColor ("RANDOM")
  .setFooter ('Wow epik help ')
 message.channel.send(embed);
}

  
if(message.content === "d!helpFun") {
  let embed = new Discord.MessageEmbed()
  .setTitle ("Game Commands:")
  .addField ("Dice commands ```d!dice``` ```d!dice2```", "_ _")
  .addField ("Coin flip ```d!flip``` ```d!1-2```", "_ _")
  .addField ("Snakes ```d!snakes``` ```d!1-8```", "_ _")
  .addField ("Have ideas Dm me ```Ng12_Gamer#5424```", "_ _")
  .setColor ("RANDOM")
message.channel.send(embed)
}

if(message.content === "d!helpPictures") {
  let embed = new Discord.MessageEmbed()
  .setTitle ("Picture Commands:")
  .setDescription ("Lets do dis")
  .addField ("To get pic of doggo ```d!doggo```", "_ _")
  .addField ("To get pic of kitty ```d!kitty```", "_ _")
  .addField ("To get meme ```d!meme```", "_ _")
  .setColor ("RANDOM")
  .setFooter ("Bot made with sweat and tears")
message.channel.send(embed)
}
  
if(message.content === "d!helpMod") {
  let embed = new Discord.MessageEmbed()
  .setTitle ("So.. you need help")
  .setDescription ("Well i got ya kid")
  .addField ("Kick ```d!kick @{User}```", "Kick")
  .addField ("Warn ```d!warn @{User}```", "Warn")
  .addField ("Ban ```d!ban @{User}```", "Ban")
  .setColor ("RANDOM")
  .setFooter ("Hope this can help")
message.channel.send(embed)
}
  
if(message.content === "d!credit") {
   let embed = new Discord.MessageEmbed()
  .setTitle ("Credits:")
  .addField ("Created by Ng-12, Mh-10, cwawesome, and Kingili", "_ _")
  .addField ("Want to support us? Check out Ng-12's official youtube channel","[YouTube Channel](https://www.youtube.com/channel/UCtkPaintwPMgy4RBvvdF9wQ)", "_ _")
  .addField ("Created from Feb 23-Now", "I tried my best in such little time")
  .addField ("Thank you to Cawawsome, Mh10, My friends i cant name, and all of you", "_ _")
  .addField ("Thank you all for being so good to this bot", "_ _")
  .setColor ("RANDOM")
  .setFooter ("And thank you for being born")
message.channel.send(embed)
}
  
///
  /// Pic commands
    ///
const got = require('got');
if (message.content.toLowerCase().startsWith("d!doggo", "d!dog")) {
      const memeEmbed = new Discord.MessageEmbed()
      got('https://www.reddit.com/r/dogpictures/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeURL = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;

        memeEmbed.setTitle(`${memeTitle}`)
        memeEmbed.setURL(`${memeURL}`)
        memeEmbed.setImage(memeImage)
        memeEmbed.setColor('RANDOM')
        memeEmbed.setFooter(
        `👍 ${memeUpvotes} |  👎 ${memeDownvotes} |  💬 ${memeNumComments}`
      );
        message.channel.send(memeEmbed)
      })
    }
if (message.content.toLowerCase().startsWith("d!kitty", "d!cat")) {
      const memeEmbed = new Discord.MessageEmbed()
      got('https://www.reddit.com/r/catpictures/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeURL = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;

        memeEmbed.setTitle(`${memeTitle}`)
        memeEmbed.setURL(`${memeURL}`)
        memeEmbed.setImage(memeImage)
        memeEmbed.setColor('RANDOM')
        memeEmbed.setFooter(
        `👍 ${memeUpvotes} |  👎 ${memeDownvotes} |  💬 ${memeNumComments}`
      );

        message.channel.send(memeEmbed)
      })
    } 

if (message.content.toLowerCase().startsWith("d!meme")) {
      const memeEmbed = new Discord.MessageEmbed()
      got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeURL = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;

        memeEmbed.setTitle(`${memeTitle}`)
        memeEmbed.setURL(`${memeURL}`)
        memeEmbed.setImage(memeImage)
        memeEmbed.setColor('RANDOM')
        memeEmbed.setFooter(
        `👍 ${memeUpvotes} |  👎 ${memeDownvotes} |  💬 ${memeNumComments}`
      );

        message.channel.send(memeEmbed)
      })
    } 

///
  /// Admin commands
    ///

if(message.content.toLowerCase().startsWith("d!nuke")) {
if (message.member && message.member.hasPermission("ADMINISTRATOR")) {
message.channel.send(`Are You Sure You Want to Nuke This Channel ${message.author}? Type **yes/no**`).then(() => {
const filter = m => message.author.id === m.author.id;
message.channel.awaitMessages(filter, { time: 15000, max: 1, errors: ["time"] }).then(m => {
if(m.first().content.toLowerCase() === "yes") {
const position = message.channel.position;
message.channel.clone().then(createdChannel => {
message.channel.delete();
createdChannel.setPosition(position);
createdChannel.send(`:thumbsup: | Successfully Nuked the Channel, Requested By ${message.author}`)
});
} else {
message.channel.send(`:thumbsup: | Channel Nuke Has Been Cancelled`)
};
}).catch(() => {
message.channel.send(` :thumbsdown:  | You didn't Respond In Time ${message.author}`)
});
});
} else {
message.channel.send(`You Cant Run This Command :thumbsdown:  ${message.author}`)
};
};
  
if (message.content.startsWith("d!kick")) {if (message.member.hasPermission("KICK_MEMBERS")) {
let member = message.mentions.members.first()
if (!member) message.channel.send("Please mention someone")
  else {member.kick().then(mem => {message.channel.send(`Kicked ${mem.user.username}!`)
})}} else {message.reply("You don't have the permission to do that...")}}  if (message.content.startsWith('d!ban')) {if(message.member.hasPermission("BAN_MEMBERS")) {const user = message.mentions.users.first(); if (user) {const member = message.guild.member(user);if (member) {
member
.ban({reason: 'They were bad!',})
.then(() => {message.reply("Successfully banned ${user.tag}");})
.catch(err => {message.reply("I was unable to ban the member");
console.error(err);
});} else {message.reply("That user isn't in this guild!");}} else {message.reply("You didn't mention the user to ban!");}}}
  

  
///
  ///  Make bot say things
    ///
   if(message.content.startsWith(`d!dm`)){
  const whattosend = message.content.slice("".length).trim().split(/ +/);
whattosend.shift().toLowerCase().split(" ")[1]
const member = message.mentions.members.first() ||message.guild.members.cache.get(whattosend[0])
if(!member) return message.channel.send('Provide a user!')
if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
member.send(whattosend.slice(1).join(" "))
}

if(message.content.startsWith("d!thank")) {
let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention someone to thank.")
 else{
 message.channel.send(`${victim} Was thanked by ${message.author}!`)
 }
 }

  if(message.content.startsWith("d!8ball")) { 
let replies = [("nah fam."), ("yes! my dad said sure..."), ("Absolutely!"), ("acording to my studies the answer is yes."), ("when i went to school, my teacher said say no to all the dumb questions..."), ("OH HELL NAH!"), ("nasa says sure!"), ("no."), ("yes!"), ("not really..."), ("hell yeah!")]
 message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`) 
}


if(message.content.startsWith('d!say')){
 const whattosay = message.content.slice("".length).trim().split(/ +/);
whattosay.shift().toLowerCase().split(" ")[0]
message.channel.send(whattosay.join(" "))
}
///
  /// invite
    ///

if(message.content === "d!invite") {
  let Invite = new Discord.MessageEmbed()
  .setTitle ("Invite")
  .setDescription ("The invites to the help center and bot link")
  .addField ("Bot Invite Below", "[ClickHere](https://discord.com/oauth2/authorize?client_id=807332546404679710&permissions=8&scope=bot)")
  .addField ("Help center Link Below", "[ClickHere](http://discord.gg/BRyQhrw49Q)", "Help Center) ")
  .setColor ("RANDOM")
  .setFooter ("Epik invites")
message.channel.send(Invite)
}

///
  /// Fun
    ///
    


if (message.content === 'd!pp') {
 let pp = ['=','==','===','====','=====','======','=======','==========','=================','=========================','======' ];
 message.reply(`Your pp is :- 8${pp[Math.floor(Math.random() * pp.length)]}D`
 )}
  
if(message.content === "d!dice") {
  let Dice = ["1", "2", "3", "4", "5", "6"]
message.channel.send(`${Dice[Math.floor(Math.random() *Dice.length)]} is what you got`)
}

if(message.content === "d!dice2") {
  let Dice2 = ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "3-1", "3-2", "3-3", "3-4", "3-5", "3-6", "4-1", "4-2", "4-3", "4-4", "4-5", "4-6", "5-1", "5-2", "5-3", "5-4", "5-5", "5-6", "6-1", "6-2", "6-3", "6-4", "6-5", "6-6", "6-6",
  "6-6", "6-5", "6-4", "6-3", "6-2", "6-1", "5-6", "5-5", "5-4", "5-3", "5-2", "5-1", "4-6", "4-5", "4-4", "4-3", "4-2", "4-1", "3-6", "3-5", "3-4", "3-3", "3-2", "3-1", "2-6", "2-5", "2-4", "2-3", "2-2", "2-1", "1-6", "1-5", "1-4", "1-3", "1-2", "1-1"]
message.channel.send(`${Dice2[Math.floor(Math.random() * Dice2.length)]} is what you got!!!`)
}
  
///
  ///  Soiclas
    ///

if(message.content === "d!kio") {
  let embed = new Discord.MessageEmbed()
  .setTitle("About kio")
  .setDescription("About the main man kio")
  .addField("Kio is a twitch streamer and started streaming at", "E")
  .addField("kio started out on Consel but turned into a Big PC god", "May god he not rage")
  .addField("kio has 551 followers on twitch", "I (ng12) was his 250th")
  .setColor("RANDOM")
  .setFooter("Type d!kioSoicals to see his Soicals")
message.channel.send(embed)
}
  
if(message.content === "d!kioSoicals") {
  let embed = new Discord.MessageEmbed()
  .setTitle ("Kio Soicals")
  .setDescription ("About the man kio himself")
  .setThumbnail ("https://cdn.discordapp.com/attachments/813881601301544991/814064325106991114/unknown.png")
  .addField ("```twitch.tv/evlkio```", "TTV")
  .addField ("```https://twitter.com/Evlkio```", "Twiter")
  .addField ("```https://www.instagram/Evlkio```", "instagram")
  .setColor ("RANDOM")
  .setFooter ("He is bald man")
message.channel.send("embed")
}

if(message.content === "d!ashmichda") {
  let embed = new Discord.MessageEmbed()
  .setTitle ("About ashmichda")
  .setDescription ("About de cool man person")
  .setThumbnail ("https://cdn.discordapp.com/attachments/808405598068015174/814196062289002527/unknown.png")
  .addField ("This person has a reddit, TTV channel, and a spotify acount", "P.S. he like minecraft")
  .addField ("He is good at skyblock", "Epik")
  .addField ("he knows how to de PvP", "so srong")
  .setColor ("RANDOM")
  .setFooter ("He is epik gamer man person")
message.channel.send(embed)
}

if(message.content === "d!cwawesome") {
  let cwawesome = new Discord.MessageEmbed()
  .setTitle ("About the AMAZING man cwawesome")
  .setDescription ("about cwawesome")
  .setThumbnail ("https://cdn.discordapp.com/attachments/813881601301544991/814172676322623498/unknown.png")
  .addField ("cwawesome is a twitch streamer, that has 184 Followers and 7 subscriber", "I was his 100th")
  .addField ("he is very gud at chess", "Amazing.")
  .addField ("cwawesome's twitch --->twitch.tv/cwawesomelive", "GO FOLLOW HIM NOW!.... Or else")
  .addField ("He is a minecraft GOD", "nice")
  .addField ("```https://discord.gg/Ns6PxDnqDc```", "Join his offical server TODAY")
  .setColor ("RANDOM")
  .setFooter ("cwawesome is amazing")
message.channel.send(cwawesome)
}
///
  /// Twitch
    ///

if (message.content === "d!avatar") { 
 let embed = new Discord.MessageEmbed()
.setTitle("YOUR AVATAR!")
.setImage(`${message.author.displayAvatarURL({dynamic : true})}`)
.setColor("PURPLE")
.setFooter(`${message.author.username}`)
message.channel.send(embed);
}
///
  ///  Server/User info
    ///

if (message.content === `d!user-info`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}/nYour Pfp: ${message.displayAvatarURL}`);
}

if (message.content === `d!server-info`) {
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nTotal Roles: alot`);
}

///

///
  /// Bot Token / login
    ///
})
client.login(process.env.'Env bot token');
