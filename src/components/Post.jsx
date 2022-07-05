import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/locale/pt-BR"

import styles from "./Post.module.css"
import { Hand } from "phosphor-react"
import { useState } from "react"


export function Post({author, publishedAt, content}){
   const [comments, setComments] = useState([
    'Post bacana'
   ])

   const [newCommentText, setNewCommentText] = useState('')
   
    const publisheDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
   })

   const publisheDateRelativeNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true,
   })

   function handleCreateNewComment(){
    event.preventDefault()

    setComments([...comments, newCommentText]);
    setNewCommentText('');
   }

   function handleNewCommentChange(){
    setNewCommentText(event.target.value);
   }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>                
                </div>
                <time title= {publisheDateFormatted} dateTime={publishedAt.toISOString()}>
                   {publisheDateRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p>{line.content} <Hand/></p>;
                    } else if (line.type == 'link') {
                        return <p><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>
            
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            
            <textarea 
            name="comment"
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
            />  

            <footer>
                <button type="submit">Publicar</button>
            </footer>                      
            </form>
            
            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return <Comment content={comment}/>
                })}
            </div>
        </article>
    )
}