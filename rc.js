let p=fetch("https://api.adviceslip.com/advice")
p.then(response=>{
    console.log(response.ok)
    console.log(response.status)
    return response.json()
}).then(value=>{
    console.log(value);
    let adviceElement = document.getElementById("Advice");
    adviceElement.innerHTML = value.slip.advice;
}).catch(error => {
    console.error("Error fetching advice:", error);
});