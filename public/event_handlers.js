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
