import { HandsClapping, ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}){

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/rafcavalheiro.png"/>

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Cavalheiro</strong>
                            <time title="05 de Julho ás 23:30" dateTime="2022-07-04 23:30:30">Cerca de 1 hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content} <HandsClapping/></p>
                </div>

                <footer>
                    <button> <ThumbsUp/> Aplaudir <span>20</span> 
                    
                    </button>
                </footer>
             </div>             
        </div>        
    )
}