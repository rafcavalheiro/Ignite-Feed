import { ArrowDown, Hand, HandPointing } from "phosphor-react"
import styles from "./Post.module.css"

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/rafcavalheiro.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Rafael Cavalheiro</strong>
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
            
        </article>
    )
}