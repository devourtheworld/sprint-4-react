function getPromise(delay, message){
    return new Promise (resolve => setTimeout(resolve(message), delay));
}

console.log(getPromise(5, "5 seconds"));