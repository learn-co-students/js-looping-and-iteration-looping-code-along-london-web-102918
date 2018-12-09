function printBadges(name){
    for (let i = 0; i < name.length; i++){
        console.log(`Welcome ${name[i]}! You are employee #${i + 1}.`);
    }
        return name
}

function random(){
    return Math.random()
}

function tailsNeverFails(){
    let x = 0;
    while (random() >= 0.5 ){
        x++
    }
    return `You got ${x} tails in a row!`;
}