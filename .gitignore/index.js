const discord = require("discord.js");

// VARIABLES
const clientDiscord = new discord.Client();
const PREFIX ="<3";

// EVENEMENTS
    // Initialisation
clientDiscord.on("ready", () => {
    console.log("Paré au décollage capitaine !");
});
var majeur=0;
var heart=20;
var delai=86400000;
var ban=[];
var ban2=[];
var ship=[];
var ship1=[];
var ship2=[];

    // Temps commande
clientDiscord.on("message", message => {
    delay="";
    if(message.content.startsWith(PREFIX+"delay")) {
        if(message.member.permissions.hasPermissions('ADMINISTRATOR')) {
            commande=message.content;
            for(var i=7; i<commande.length; i++) {
            delay=delay+commande[i];
            delai=parseFloat(delay)*60000;
            }
            message.delete();
            message.channel.send("C'est noté, vos sbires devront attendre"+delay+" minutes avant de réutiliser une commande :eyes:\n*Ce message s'autodétruira dans 5 secondes*")
            .then(msg => {
                msg.delete(5000);
            });
        }
    }   
});

    // Nombre coeurs
    clientDiscord.on("message", message => {
        coeur="";
        if(message.content.startsWith(PREFIX+"ship")) {
            if(message.member.permissions.hasPermissions('ADMINISTRATOR')) {
                commande=message.content;
                for(var i=6; i<commande.length; i++) {
                coeur=coeur+commande[i];
                heart=parseFloat(coeur);
                }
                message.delete();
                message.channel.send("Mooooooh! Je trouve ça vraiment mignon "+heart+" coeurs pour former un joli couple :heart:")
                .then(msg => {
                    msg.delete(5000);
                });
            }
        }   
    });

    // -18
    clientDiscord.on("message", message => {
        if(message.content.startsWith(PREFIX+"18ans")) {
            if(majeur===0) {
                message.channel.send("⚠️ Attention ⚠️ ! Vous entrez dans une zone -18 ⛔")
                return majeur=1
            }
            if(majeur===1) {
                message.channel.send("Le risque de danger est de nouveau maitrisé, ooouuuf !")
                return majeur=0
            }
        }
    });

    // Choisir deux utilisateurs 
clientDiscord.on("message", message => {
    if(message==PREFIX+"crush" ) {
        for(var i=0; i<ban.length; i+=2) {
        if(message.author.id==ban[i]) {
            date2 = Date.now();
            if(ban[i+1]+delai<date2) {
                ban.splice(i,2);
            }
            else {
                reste = ban[i+1]+delai-date2;
                heure=Math.trunc(reste/3600000);
                reste=reste-3600000*heure;
                minute= Math.trunc(reste/60000);
                message.channel.send("Hey <@"+ message.author.id + "> ! Il te reste "+heure+"h"+minute+"min avant de pouvoir réutiliser la commande. Réattends ton tour comme tout le monde :rage:")
                .then(msg => {
                    msg.delete(7000);
                })
                return
            }
         }
         if(ship.length>=10) {
             ship.splice(0,10);
             ship1.splice(0,10);
             ship2.splice(0.10);

         }
        }
        ban.push(message.author.id);
        date1 = Date.now();
        ban.push(date1);
                /* Test pour l'utilisateur A */
                b=0;
                while(b===0) {
                    c=0;
                    while(c===0) {
                        utilisateurA=message.guild.members.random().user.id;
                        c=1;
                    // On vérifie si l'utilisateur a déjà parlé (et a donc un lastMessageID)
                try {
                    const lastA=message.guild.member(utilisateurA).lastMessage.createdAt;
                    }
                    catch {
                        c=0;
                    }
                }
                    // On récupère le dernier message de l'utilisateur et sa date de création
                lastA=message.guild.member(utilisateurA).lastMessage.createdAt;
                    date=Date.parse(lastA);
                    if(date>Date.now()-1210000000) {
                        b=1;
                    }
        }
        b=0
        /* Test pour l'utilisateur B */
        while(b===0) {
            c=0;
            while(c===0) {
                utilisateurB=message.guild.members.random().user.id;
                c=1;
            // On vérifie si l'utilisateur a déjà parlé (et a donc un lastMessageID)
        try {
            const lastB=message.guild.member(utilisateurB).lastMessage.createdAt;
            }
            catch {
                c=0;
            }
        }
            // On récupère le dernier message de l'utilisateur et sa date de création
        lastB=message.guild.member(utilisateurA).lastMessage.createdAt;
            date=Date.parse(lastB)
            if(date>Date.now()-1210000000) {
                if(utilisateurB!==utilisateurA) {
                b=1;
                }
            }
}
        ship1.push(utilisateurA);
        ship2.push(utilisateurB);
        message.delete();
        message.channel.send("Tiens donc, je verrais bien <@"+ utilisateurA + "> et <@" + utilisateurB + "> ensemble moi, pas vous? :eyes:")
        .then(msg => {
            msg.react('❤');
            msg.react('💔');
            ship.push(msg.id);
        })
    }
});

    // Choisir un utilisateur
    clientDiscord.on("message", message => {
        if(message==PREFIX+"couple") {
            for(var i=0; i<ban2.length; i+=2) {
                if(message.author.id==ban2[i]) {
                    date2 = Date.now();
                    if(ban2[i+1]+delai<date2) {
                        ban2.splice(i,2);
                    }
                    else {
                        reste = ban2[i+1]+delai-date2;
                        heure=Math.trunc(reste/3600000);
                        reste=reste-3600000*heure
                        minute= Math.trunc(reste/60000);
                        message.channel.send("Hey <@"+ message.author.id + "> ! Il te reste "+heure+"h"+minute+"min avant de pouvoir réutiliser la commande. Réattends ton tour comme tout le monde :rage:")
                        .then(msg => {
                            msg.delete(7000);
                        })
                        return
                    }
                 }
                }
            ban2.push(message.author.id);
            date1 = Date.now();
            ban2.push(date1);
            utilisateurA=message.author.id;
            b=0;
            while(b===0) {
                c=0;
                while(c===0) {
                    utilisateurB=message.guild.members.random().user.id;
                    c=1;
                // On vérifie si l'utilisateur a déjà parlé (et a donc un lastMessageID)
            try {
                const lastB=message.guild.member(utilisateurB).lastMessage.createdAt;
                }
                catch {
                    c=0;
                }
            }
                // On récupère le dernier message de l'utilisateur et sa date de création
            lastB=message.guild.member(utilisateurA).lastMessage.createdAt;
                date=Date.parse(lastB)
                if(date>Date.now()-1210000000) {
                    if(utilisateurB!==utilisateurA) {
                    b=1;
                    }
                }
    }
            message.channel.send("<@"+ utilisateurA + ">, je trouve <@" + utilisateurB + "> vraiment parfaite pour toi :point_right: :point_left: ")
            .then(msg => {
                msg.react('❤');
                msg.react('💔');
            }).catch();
        }
    });
clientDiscord.on('messageReactionAdd', messagereaction => {
    for (var i=0; i<ship.length; i++) {
        if(messagereaction.message.id===ship[i]) {
        if(messagereaction.emoji.name==='❤') {
            if(messagereaction.count>=heart){
                messagereaction.message.channel.send("Wow ! Le ship <@"+ship1[i]+"> x " + "<@"+ ship2[i]+ '> semble avoir du succès :smirk::heart:');
                ship.splice(i,1);
            }
        }
    }
}
});

 /*  //Test
clientDiscord.on("message", message => {
    if(message==PREFIX+"test") {
        message.channel.send("Un tacos chef?");
}
});

    //Test
    clientDiscord.on("message", message => {
        if(message==PREFIX+"ban") {
            // Test pour l'utilisateur A 
            b=0;
            while(b===0) {
                console.log("A")
                c=0;
                while(c===0) {
                    utilisateurA=message.guild.members.random().user.id;
                    console.log(utilisateurA)
                    console.log("B "+message.guild.member(utilisateurA).lastMessageID)
                    c=1;
                // On vérifie si l'utilisateur a déjà parlé (et a donc un lastMessageID)
            try {
                const lastA=message.guild.member(utilisateurA).lastMessage.createdAt;
                }
                catch {
                    console.log("BOUM")
                    c=0;
                }
            }
                // On récupère le dernier message de l'utilisateur et sa date de création
                console.log("C")
            lastA=message.guild.member(utilisateurA).lastMessage.createdAt;
            console.log(lastA);
                date=Date.parse(lastA)
                console.log(date)
                console.log(Date.now())
                if(date>Date.now()-1210000000) {
                    console.log("Vrai")
                    b=1;
                }
    }
            console.log(utilisateurA);
            console.log(lastA);
    }
    });

        //Test
        clientDiscord.on("message", message => {
            if(message.content.startsWith(PREFIX+"send")) {
                console.log(message.content);
        }
        });

            //Test
            clientDiscord.on("message", message => {
                if(message.content.startsWith(PREFIX+"reset")) {
                    ban.splice(0,ban.length)
            }
            }); */

vagin="test"
penis="test"
               //Test
               clientDiscord.on("message", message => {
                if(message.content.startsWith(PREFIX+"vagin")) {
                    if(majeur===1) {
                        if(vagin=="test") {
                            console.log(majeur)
                            vagin=message.author.id
                        }
                                else{
                                    return message.channel.send('Ce rôle est déjà pris !')
                                }
                    vagin=message.author.id
                    message.reply("Prêt: 👌")
                    if(penis!=="test") {
                        message.channel.send("<@"+ penis + "> et <@" + vagin + "> s'accouplent, laissons les faire :eyes: ");
                        message.channel.send("👉👌💦");
                        penis="test"
                        vagin="test"
                    }
                }
            }
            });
            clientDiscord.on("message", message => {
                if(message.content.startsWith(PREFIX+"penis")) {
                    if(majeur===1) {
                        if(penis=="test") {
                    penis=message.author.id
                }
                        else{
                           return message.channel.send('Ce rôle est déjà pris !')
                        }
                    message.reply("Prêt: 👉")
                    if(vagin!=="test") {
                        message.channel.send("<@"+ penis + "> et <@" + vagin + "> s'accouplent, laissons les faire :eyes: ");
                        message.channel.send("👉👌💦");
                        penis="test"
                        vagin="test"
                    }
                }
            }
            });

// Connexion
clientDiscord.login(process.env.TOKEN);
