// 1. Declare an empty array;
const emptyArray = Array()

// 2. Declare an array with more than 5 number of elements
const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18]
console.log(numbers)

// 3. Find the length of your array
console.log(numbers.length)

// 4. Get the first item, the middle item and the last item of the array
console.log('first:', numbers[0])
console.log('middle:', numbers[Math.floor(numbers.length / 2)])
console.log('last:', numbers[numbers.length - 1])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    "hello world!",
    Array(3).fill(1),
    3.14,
    true,
    "this is David Barrera",
    [2, 4, 6]
]
console.log(mixedDataTypes)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log(itCompanies.length)

// 9. Print the first company, middle and last company
console.log('first:', itCompanies[0])
console.log('middle:', itCompanies[Math.floor(itCompanies.length / 2)])
console.log('last:', itCompanies[itCompanies.length - 1])

// 10. Print out each company
itCompanies.forEach(company => console.log(company))

// 11.Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()))

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.slice(0, itCompanies.length - 2).join(', '), 'and', itCompanies[itCompanies.length - 1], 'are big IT companies.')

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes('Yahoo') ?
    console.log('Yahoo is a big IT company.') :
    console.log('Yahoo is not a big IT company.')

// 14. Filter out companies which have more than one 'o' without the filter method
var ooCompanies = []
itCompanies.forEach(company => {
    let count = 0;
    company.split('').forEach(letter => {
        if (letter.toLowerCase() === 'o') count++
    })
    if (count >= 2) ooCompanies.push(company)
})

console.log(ooCompanies)

// 15. Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)

// 16. Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// 19. Slice out the middle IT company or companies from the array
let middle = Math.floor(itCompanies.length / 2)
let even = itCompanies.length % 2 === 0 ? true : false
if (even) {
    console.log(itCompanies.slice(middle - 1, middle + 1))
} else {
    console.log(itCompanies.slice(middle, middle + 1))
}

// 20. Remove the first IT company from the array
console.log(itCompanies.shift())
console.log(itCompanies)

// 21. Remove the middle IT company or companies from the array
middle = Math.floor(itCompanies.length / 2)
even = itCompanies.length % 2 === 0 ? true : false
if (even) {
    itCompanies.splice(middle - 1, 2)
} else {
    itCompanies.splice(middle, 1)
}

console.log(itCompanies)

// 22. Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

// 23. Remove all IT companies
console.log(itCompanies.splice())
