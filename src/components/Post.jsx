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
                <p>Bom dia</p>
                <p>Acabei de postar novo conteúdo na plataforma</p>
                <p> <a href=""> --> Ignite Feed</a> </p>
                <p> <a href="">#nlw #novoprojeto #dev </a> </p>
            </div>
        </article>
    )
}