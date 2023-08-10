import { useState } from "react";


export default function Form(){
    
  const [name, setName] = useState("")
  const [rate, setRate] = useState("")
  const [comment, setComment] = useState("")

  const handleForm = (e) =>{
    e.preventDefault()

    if(!name.match(/^[A-Za-z\s]+$/)){
        alert("Your name is using invalid symbols or is empty")
    }

    if(Number(rate) <= 5 && comment.length < 5){
        alert("Let us know why your experience was poor")
    }
  }

  return(
    <form onSubmit={handleForm}>
        <fieldset>
            <label htmlFor="name">Your name: </label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor="rate">Rate your experience: </label>
            <input type="range" min="0" max="10" id="rate" value={rate} onChange={(e) => setRate(e.target.value)}></input>

            <label htmlFor="comment">Leave a comment: </label>
            <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        </fieldset>

        <button type="submit">Submit</button>
    </form>
  )
}