//create a Promise
const myPromise = new Promise((resolve, reject) => {

    const name = "Mateus Abdallah"

    if(name == "Mateus Abdallah"){
        resolve('Find user Mateus Abdallah')
    }
    else{
        reject('Not found the user Mateus Abdallah')
    }
})

myPromise.then((data) => {
    console.log(data)
})

//other thens
const myPromise2 = new Promise((resolve, reject) => {

    const name = "Mateus Abdallah"

    if(name == "Mateus Abdallah"){
        resolve('Find user Mateus Abdallah')
    }
    else{
        reject('Not found the user Mateus Abdallah')
    }
})

myPromise2.then((data) => {
    return data.toUpperCase()
}) .then((stringModify) => {
    console.log(stringModify)
})

//using catch
const myPromise3 = new Promise((resolve, reject) => {

    const name = "Abdallah"

    if(name == "Mateus Abdallah"){
        resolve('Find user Mateus Abdallah')
    }
    else{
        reject('Not found the user Mateus Abdallah')
    }
})

myPromise3.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('Happened an error: ' + error)
})

//solve many promises with all()
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 ok! Timeout')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log("after all()")

//using Promise with race()
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok! Timeout')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

//Fetch request GitHub API

const userName = "mateusAbdallah"

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    },
})
.then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(data)
    console.log(`user name is ${data.name}`)
    console.log(`user id is ${data.id}`)
})
.catch((error) => {
    console.log(`Error: ${error}`)
})