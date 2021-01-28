//write a function that returns the longest string in an array ['Hi', 'Hello', 'Aloha!']

const greetings = ['Hi', 'Hello', 'Aloha!']

let longestGreeting = greetings.sort((a,b) => a.length < b.length ? 1 : -1)[0]

console.log(longestGreeting)

//let palindrome = ['heart', 'racecar', 'tissue']

// function findPalindrome(pali) { 
//     return pali.toLowerCase() === pali.toLowerCase()
//     .split()
//     .reverse()
//     .join()
// }

// console.log(findPalindrome('racecar'))

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