const commands = {}
commands['help'] = {
    calls: ['h','help','commands'],
    discord: true,
    mpp: true,
    description: 'Shows info about the command, shows the list of commands if no command is entered.',
    category: 'basic',
    minRank: 0,
    runCommand: function (data) {
        help(data)
    }
}
commands['about'] = {
    calls: ['about'],
    discord: true,
    mpp: true,
    description: 'Displays information about this bot.',
    category: 'basic',
    minRank: 0,
    runCommand: function (data) {
        about(data)
    }
}
commands['ping'] = {
    calls: ['ping'],
    discord: true,
    mpp: true,
    description: 'Gets the response time of the bot displayed in milliseconds',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
        ping(data)
    }
}
commands['whois'] = {
    calls: ['whois','who'],
    discord: true,
    mpp: true,
    description: 'Displays info about the specified user, no user specified displays info about you.',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
        who(data)
    }
}
commands['test'] = {
    calls: ['test'],
    discord: true,
    mpp: true,
    description: 'This is a test command, only for testing purposes.',
    category: 'basic',
    minRank: 0,
    runCommand: function (data) {
        test(data)
    }
}
commands['whatsup'] = {
    calls: ['whatsup','whatup'],
    discord: true,
    mpp: true,
    description: 'Really? Do you really need to ask this question?',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
        whatsup(data)
    }
}
commands['discord'] = {
    calls: ['discord','invite','server'],
    discord: true,
    mpp: true,
    description: "Displays the invite link to Khorne Bot's official Discord server.",
    category: 'basic',
    minRank: 0,
    runCommand: function (data) {
        discordInv(data)
    }
}
commands['shop'] = {
    calls: ['shop'],
    discord: true,
    mpp: true,
    description: 'Displays the shop menu.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
        displayShopMenu(data)
    }
}
commands['balance'] = {
    calls: ['balance','bal','inventory','inv','items'],
    discord: true,
    mpp: true,
    description: 'Displays your balance and inventory.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
        balance(data)
    }
}
commands['buy'] = {
    calls: ['buy'],
    discord: true,
    mpp: true,
    description: 'Buys the specified item in the specified quantity assuming you have sufficient funds.\nUsage: -buy [item amount] [item]',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
        buyItem(data)
    }
}
commands['sell'] = {
    calls: ['sell'],
    discord: true,
    mpp: true,
    description: 'Sells back the specified item back to the shop assuming you have sufficient amount of the item your trying to sell.\nUsage: -sell [item amount] [item]',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
        sellItem(data)
    }
}
commands['work'] = {
    calls: ['work','job'],
    discord: true,
    mpp: true,
    description: 'Do a job to make some quick cash.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
        work(data)
    }
}
commands['kill'] = {
    calls: ['kill'],
    discord: true,
    mpp: true,
    description: 'Kills the player specified.',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
        kill(data)
    }
}
commands['slap'] = {
    calls: ['slap'],
    discord: true,
    mpp: true,
    description: 'Slaps the player specified.',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
        slap(data)
    }
}
commands['hug'] = {
    calls: ['hug'],
    discord: true,
    mpp: true,
    description: 'Hugs the player specified.',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
        hug(data)
    }
}
commands['kiss'] = {
    calls: ['kiss'],
    discord: true,
    mpp: true,
    description: 'Kisses the player specified.',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
        kiss(data)
    }
}
commands['bonk'] = {
    calls: ['bonk'],
    discord: true,
    mpp: true,
    description: 'Bonks the player specified.',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
        bonk(data)
    }
}
commands['say'] = {
    calls: ['say'],
    discord: true,
    mpp: true,
    description: 'Says the text specified.',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
        say(data)
    }
}
commands['boop'] = {
    calls: ['boop'],
    discord: true,
    mpp: true,
    description: 'Boops the player specified.',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
        boop(data)
    }
}
commands['ban'] = {
    calls: ['ban'],
    discord: true,
    mpp: false,
    description: 'Bans the specified user from the server assuming you and the bot has the required permissions.\nUsage: -ban [id] [time] [reason(optional)]\nExample ban for 1 week: -ban 1234 1w this is an example ban',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
        ban(data)
    }
}
commands['kick'] = {
    calls: ['kick'],
    discord: true,
    mpp: false,
    description: 'Kicks the specified user from the server assuming you and the bot have the required permissions.\nUsage: -kick [id] [reason(optional)]\nExample: -kick 1234 you are annoying',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
        kick(data)
    }
}
commands['timeout'] = {
    calls: ['timeout','mute'],
    discord: true,
    mpp: false,
    description: 'Timeouts the specified user for a specified period of time assuming you and the bot have the required permissions.',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
        timeout(data)
    }
}
commands['setrank'] = {
    calls: ['setrank','rankset'],
    discord: true,
    mpp: true,
    description: 'Sets the rank of the user specified.',
    category: 'utility',
    minRank: 3,
    runCommand: function (data) {
        setRank(data)
    }
}
commands['restart'] = {
    calls: ['restart','rr'],
    discord: true,
    mpp: true,
    description: 'Restarts the entire bot client.',
    category: 'utility',
    minRank: 4,
    runCommand: function (data) {
        restart(data)
    }
}
commands['js'] = {
    calls: ['javascript','java','js','console','terminal'],
    discord: true,
    mpp: true,
    description: 'The JavaScript Console',
    category: 'utility',
    minRank: 4,
    runCommand: function (data) {
        js(data)
    }
}
commands['quit'] = {
    calls: ['quit','end','destroy','alt-f4','altf4'],
    discord: true,
    mpp: true,
    description: 'Ends the current discord client and kills the bot.',
    category: 'utility',
    minRank: 4,
    runCommand: function (data) {
      quit(data)
    }
}
commands['claim'] = {
    calls: ['claim','daily'],
    discord: true,
    mpp: true,
    description: 'Claim your daily income!',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
      claim(data)
    }
}
commands['amongus'] = {
    calls: ['amongus','imposter','sussy','sus'],
    discord: true,
    mpp: true,
    description: 'Who is the imposter? ඞ',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
      amongus(data)
    }
}
commands['sayrawr'] = {
    calls: ['sayrawr','rawr'],
    discord: true,
    mpp: true,
    description: 'rawr :3',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
      sayrawr(data)
    }
}
commands['hex'] = {
    calls: ['hex','tohex','texttohex'],
    discord: true,
    mpp: true,
    description: 'Turns the inputed text into hexadecimal',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
      textToHex(data)
    }
}
commands['bin'] = {
    calls: ['bin','tobin','texttobin'],
    discord: true,
    mpp: true,
    description: 'Turns the inputed text into binary',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
      textToBin(data)
    }
}
commands['oct'] = {
    calls: ['oct','tooct','texttooct',],
    discord: true,
    mpp: true,
    description: 'Turns the inputed text into octal',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
      textToOctal(data)
    }
}
commands['weather'] = {
    calls: ['weather'],
    discord: true,
    mpp: true,
    description: 'Gets the current weather of the place inputted.',
    category: 'fun',
    minRank: 0,
    runCommand: function (data) {
      getWeather(data)
    }
}
commands['setdesc'] = {
    calls: ['setdesc','desc','setdescription','description'],
    discord: true,
    mpp: true,
    description: 'Sets your description shown by using the -who command.',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
      setDesc(data)
    }
}
commands['log'] = {
    calls: ['log','chop'],
    discord: true,
    mpp: true,
    description: 'Start chopping wood.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
      logging(data)
    }
}
commands['selllogs'] = {
    calls: ['selllogs','sellwood','sellalllogs','sellallwood'],
    discord: true,
    mpp: true,
    description: 'Sells all of your logs currently in your inventory.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
      sellLogs(data)
    }
}
commands['millwood'] = {
    calls: ['sawmillwood','millwood'],
    discord: true,
    mpp: true,
    description: 'Uses your sawmil to mill wood into planks.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
      millWood(data)
    }
}
commands['sellplanks'] = {
    calls: ['sellplanks','sellplank','sellallplanks','sellallplank'],
    discord: true,
    mpp: true,
    description: 'Sells all of your planks currently in your inventory.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
      sellPlanks(data)
    }
}
commands['stockinfo'] = {
    calls: ['stockinfo', 'getstockinfo'],
    discord: true,
    mpp: false,
    description: 'Gets the information on the stock inputted.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
      displayStockInfo(data)
    }
}
commands['buystock'] = {
    calls: ['buystock', 'buystocks'],
    discord: true,
    mpp: false,
    description: 'Buys the amount specified of the specified stock assuming you have enough money to buy it.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
        buyStock(data)
    }
}
commands['sellstock'] = {
    calls: ['sellstock', 'sellstocks'],
    discord: true,
    mpp: false,
    description: 'Sells the amount specified of the specified stock assuming you have enough stocks to sell.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
        sellStock(data)
    }
}
commands['stockbal'] = {
    calls: ['stockbal', 'stockinv'],
    discord: true,
    mpp: false,
    description: 'Shows your stock inventory.',
    category: 'economy',
    minRank: 0,
    runCommand: function (data) {
        stockBalance(data)
    }
}
commands['buffer'] = {
    calls: ['buffer','clearbuffer','bufferclear'],
    discord: false,
    mpp: true,
    description: 'Clears the buffer.',
    category: 'utility',
    minRank: 0,
    runCommand: function (data) {
      clearBuffer(data)
    }
}
commands['getcrown'] = {
    calls: ['getcrown','crown','crownme','getchown','chown','chownme'],
    discord: false,
    mpp: true,
    description: 'Hands the crown to you as long as you are of required rank.',
    category: 'utility',
    minRank: 3,
    runCommand: function (data) {
      getcrown(data)
    }
}
commands['kickban'] = {
    calls: ['kickban','kban','kickb'],
    discord: false,
    mpp: true,
    description: 'Kickbans the specified id for the specified amount of time in minutes.',
    category: 'utility',
    minRank: 2,
    runCommand: function (data) {
      kickban  (data)
    }
}
commandList = [];
commandList['command'] = {"desc":"description","category":"category","discord":"on discord?","mpp":"on mpp?"}
for (var command in commands) {
    if (commands[command].minRank >= 3) {
        return;
    } else {
        commandList[command].desc = commands[command].description;
        commandList[command].category = commands[command].category;
        commandList[command].discord = commands[command].discord;
        commandList[command].mpp = commands[command].mpp;
    };
};
console.log(commandList)