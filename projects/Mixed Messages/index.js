function selectRandomWord(list){
    randomNumber = Math.floor(Math.random()*list.length)
    return randomNumber
}

function selectRandomMessage(){
    let firstWord = ["A", "The", "One", "Two", "Many"]
    let secondWord = ["a320", "b747", "Dash 8", "Piper Archer", "Antonov 225", "Cessna 172", "Diamond DA42"]
    let thirdWord = ["can", "will", "could", "may"]
    let fourthWord = ["fly", "takeoff", "land", "crash", "taxi"]
    let fifthWord = ["far", "fast", "slow", "short", "wildly", "calmly"]

    console.log(`${firstWord[selectRandomWord(firstWord)]} ${secondWord[selectRandomWord(secondWord)]} ${thirdWord[selectRandomWord(thirdWord)]} ${fourthWord[selectRandomWord(fourthWord)]} ${fifthWord[selectRandomWord(fifthWord)]}.`)
}


selectRandomMessage()