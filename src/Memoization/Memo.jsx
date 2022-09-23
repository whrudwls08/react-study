import { useState, useEffect } from "react"
import Comments from "./Comments";

const commentList = [
  { title: 'comment1', content: "message1", likes: 1},
  { title: 'comment2', content: "message2", likes: 23},
  { title: 'comment3', content: "message3", likes: 3}
]

export default function Memo(){
  const [comments, setComments] = useState(commentList)
  useEffect(()=>{
    const interval = setInterval(()=>{
      setComments((prevComments)=>[
        ...prevComments,
        {
           title: `${prevComments.length + 1}`, content: "message3", likes: 3
        }
      ])
    }, 1000);

    return (()=>{
      clearInterval(interval)
    })

  })
  return <Comments commentList={comments}/>
}