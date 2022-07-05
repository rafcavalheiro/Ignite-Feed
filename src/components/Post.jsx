import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from "date-fns/locale/pt-BR"

import styles from "./Post.module.css"
import { Hand } from "phosphor-react"


export function Post({author, publishedAt, content}){
   const publisheDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
   })

   const publisheDateRelativeNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true,
   })

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
            
            <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder="Deixe um comentário"
            />   
            <footer>
                <button type="submit">Publicar</button>
            </footer>          
            </form>
            
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}