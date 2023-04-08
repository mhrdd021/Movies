import React from "react"

//Components
import CommentsCart from './commentCart/CommentCart'

const CommentBox = () => {

    const CommentsList = [
      {
        id:1,
        name:"Aria",
        comment:"I think it was a very good movie with a nice ending",
        hour:9,
        like:18,
        dislike:4
      },
      {
        id:2,
        name:"Frank 102",
        comment:"Filming and sound recording were good, but I don't think the story was very interesting",
        hour:9,
        like:4,
        dislike:17
      },
      {
        id:3,
        name:"Setare saeidi",
        comment:"Is it worth seeing??????????",
        hour:9,
        like:46,
        dislike:5
      },
      {
        id:4,
        name:"mehrad",
        comment:"It was a beautiful movie and based on reality! With a little exaggeration",
        hour:9,
        like:9,
        dislike:8
      },
      {
        id:5,
        name:"David Nicolson",
        comment:"Anyone who wants to see a movie and the movie opens should first come and start from this, then go and see any movie he wants. It is the best since it was made until now.",
        hour:9,
        like:21,
        dislike:16
      },
    ]
  
    return (
      <div className='commentBoxContainer text-white w-10/12 mx-auto my-8 rounded-lg py-4 px-3'>
        {
          CommentsList.map((comment , i) => (
            <CommentsCart data={comment} key={i}/>
          ))
        }
      </div>
    )
  }
  
  export default CommentBox