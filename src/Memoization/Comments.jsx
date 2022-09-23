import CommentItem from "./CommentItem";
import "./CommentItem.css"

export default function Comments({commentList}){
  return(
    <div>
      {commentList.map( comment => <CommentItem
        key={comment.title}
        title={comment.title}
        content={comment.content}
        likes={comment.likes}
      />)}
    </div>
  )
}