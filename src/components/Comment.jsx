import { HandsClapping, ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/rafcavalheiro.png" alt="" />

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Cavalheiro</strong>
                            <time>Cerca de 1 hora atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom! Parabéns <HandsClapping/> </p>
                </div>

                <footer>
                    <button> <ThumbsUp/> Aplaudir <span>20</span> 
                    
                    </button>
                </footer>
             </div>             
        </div>        
    )
}