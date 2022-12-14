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