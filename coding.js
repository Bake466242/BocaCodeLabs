//write a function that returns the longest string in an array ['Hi', 'Hello', 'Aloha!']

const greetings = ['Hi', 'Hello', 'Aloha!']

let longestGreeting = greetings.sort((a,b) => a.length < b.length ? 1 : -1)[0]

console.log(longestGreeting)

//reduce -- boil an array down to a single value
function longestString(stringArray){
    return stringArray.reduce((accum, elem) => {
    return (elem.length > accum.length) ? elem : accum
}, '')
}
let students = ['Bobby', 'Rebecca', 'Scar', 'Dennis']
console.log(longestString(students))


// function CheckPalindromeLoops(word){
//     //normalize the capitalization
//     const originalWord = word.toUpperCase()
//     //reverse order of the original word
//     const backwardsWord = originalWord.split('').reverse('').join('')
//     console.log({originalWord, backwardsWord})
//     console.log(word, originalWord === backwardsWord )
//     //convert to array
//     //reverse order
//     //convert back to string
//     //return of backwards word === original word 
//     return originalWord === backwardsWord
// }
// CheckPalindromeLoops('Wow')
// CheckPalindromeLoops('Rebecca')

// function CheckPalindromeLoops(word){
//     //normalize the capitalization
//     const originalWord = word.toUpperCase() 
//     let backwardsWord = ''
//    for(let i = word.length - 1; i >= 0; i--){
//     backwardsWord += originalWord[i]
//    }
//     console.log({originalWord, backwardsWord})
//     console.log(word, originalWord === backwardsWord )
//     return originalWord === backwardsWord
// }
// CheckPalindromeLoops('Wow')
// CheckPalindromeLoops('Rebecca')

const myString = 'the quick brown dog jumps over the lazy fox'

function mostFrequentChar(str){
    const ignore = `. ,'"?!`
    const stringArray = str.toUpperCase().split('')
    let uniqueChars = [...new Set(stringArray)]
    //obtain list of unique char in a str
    let freqChar = ''
    let freqCount = 0
    //loop through string counting occurence of each unique character 
    uniqueChars.forEach(char => {
    if(!ignore.includes(char)){
        let thisCharCount = stringArray.filter(el => el === char).length
        if(thisCharCount > freqCount) {
            freqCount = thisCharCount
            freqChar = char
        }
    }
})
    return freqChar
}
console.log(`Most frequent character: "${mostFrequentChar(myString)}"`)