let finalMessage = [];

const messages = {
    zodiac: ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius ','Pisces'],
    personality: ['warm','enthusiastic','creative','adaptable','original'],
    expected: ['Find your soulmate','Progress further in your career','Be traveling to new places','Make new connections'],
    
};

const randomMsg = num =>{
return Math.floor(Math.random() * num)
};

for(let prop in messages){
    let index = randomMsg(messages[prop].length);
 
    switch(prop){
        case 'zodiac':
        finalMessage.push(`Your zodiac sign is ${messages[prop][index]}.`);
        break;
        case 'personality':
        finalMessage.push(`You are very ${messages[prop][index]}.`);
        break;
        case 'expected':
        finalMessage.push(`It is expected that you will: ${messages[prop][index]}`) ;
        break;         
    }
}

let finalOutput = finalMessage.join("\n");

console.log(finalOutput);
