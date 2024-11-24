async function getCatPhoto( ) {
    const url = "https://api.thecatapi.com/v1/images/search"
    try {
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Response status:  ${response.status}`)
        }

        const json = await response.json();
        return await json[0].url
    } catch (error) {
        console.error(error.message)
    }
}

async function makeContentCard(id){
    const catPhotoUrl = await getCatPhoto()
    const card = document.createElement("div")
    card.classList.add("post-container")
    card.setAttribute("id", `${id}`)
    card.innerHTML = ` <h1>Whiskers the Wonder Cat</h1>
    <img src=${catPhotoUrl} id= ${id}>
    `
    return card
    
    

}

window.addEventListener("DOMContentLoaded", async () => {
    
   makeContentCard(1).then((card) => document.body.appendChild(card))

})