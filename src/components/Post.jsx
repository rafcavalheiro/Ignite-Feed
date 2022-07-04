import { ArrowDown, Hand, HandPointing } from "phosphor-react"
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"


export function Post(props){
    console.log(props)
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <Avatar hasBorder src="https://cdn.pixabay.com/photo/2018/03/30/02/30/color-dogs-3274248_960_720.png" />
                    <div className={styles.authorInfo}>
                        <strong>Trillian Leia</strong>
                        <span>Front-End Developer</span>
                    </div>                
                </div>
                <time title="30 de junho as 11:15h" dateTime="2022-06-30 11:15:30">Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Bom dia  <Hand/>  </p>
                <p>Acabei de postar novo conteúdo na plataforma <ArrowDown/> </p>
                <p> <a href=""> Ignite Feed</a> </p>
                <p> <a href="">#nlw #novoprojeto #dev </a> </p>
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