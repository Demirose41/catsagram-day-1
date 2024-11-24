export const voteButtonHandler = (e) => {
    const scoreElement = document.querySelector("#score")
    let score = Number(scoreElement.innerText)
    const voteType = e.target.id
    if( voteType === 'up-vote') {
        scoreElement.innerText = score + 1
    } else {
        scoreElement.innerText = score - 1
    }

}


export const submitCommentHandler = (e) => {
    const commentSection = document.querySelector("#comments > ul")
    const value = document.querySelector("#comment").value
    if(value){
        const comment = document.createElement("li")
        comment.innerText = value
        commentSection.appendChild(comment)
    }
}

