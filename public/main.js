import { voteButtonHandler , submitCommentHandler} from './event_handlers.js'

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    // Create Score
    const p = document.createElement("p")
    p.style.fontSize = "20px"
    p.innerHTML = 'Popularity Score: <span id="score">0</span>'

    // Create Buttons Row
    const buttons = createButtons()

    // Create Comments Section
    const commentSection = createCommentSection()

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);
    container.appendChild(p)
    container.appendChild(buttons);
    container.appendChild(commentSection)

    setHandlers();
    fetchImage();
};

export const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

const createButtons = () => {
    // Create Row
    const buttonRow = document.createElement("div")
    buttonRow.style.width = "25%";
    buttonRow.style.display = "flex";
    buttonRow.style.flexDirection = "row";
    buttonRow.style.alignItems = "center";
    buttonRow.style.justifyContent ="space-between";
    buttonRow.style.marginTop = "10px";

    const upVoteButton = document.createElement("button")
    upVoteButton.innerText = "Up Vote"
    upVoteButton.classList.add("button")
    upVoteButton.id = 'up-vote'
    
    const downVoteButton = document.createElement("button")
    downVoteButton.innerText = "Down Vote"
    downVoteButton.classList.add("button")
    downVoteButton.id = "down-vote"
    
    const newKittyButton = document.createElement("button")
    newKittyButton.innerText = "NEW KITTY"
    newKittyButton.classList.add("button")
    newKittyButton.id = "new-kitty"
    

    buttonRow.appendChild(upVoteButton)
    buttonRow.appendChild(newKittyButton)
    buttonRow.appendChild(downVoteButton)

    return buttonRow
}

const createCommentSection = () => {
    const addCommentRow = document.createElement("section")
    addCommentRow.id = 'comment-section'
    addCommentRow.innerHTML = `<p>Comments:</p>
    <input id="comment" type="text" placeholder="Add a comment...">
    <button id="submit-comment">Submit</button>
    <div class="container" id="comments"><ul></ul></div>
    `
    return addCommentRow
}

const setHandlers= () => {
    document.querySelector("#up-vote").addEventListener("click", voteButtonHandler)
    document.querySelector("#down-vote").addEventListener("click", voteButtonHandler)
    document.querySelector("#new-kitty").addEventListener("click", () => {
        fetchImage()
        resetEngagement()
    })
    document.querySelector("#submit-comment").addEventListener("click", submitCommentHandler)
}

const resetEngagement = () =>{
    document.querySelector("#score").innerText = 0
    document.querySelector("#comments").innerHTML = `<ul></ul>`
    document.querySelector("#comment").value = ''
}