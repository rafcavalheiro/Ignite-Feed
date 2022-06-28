import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/rafcavalheiro.png"/>
                <strong>Rafael Cavalheiro</strong>
                <span>Front-End Developer</span>
            </div>

            <footer>            
                <a href="#">
                <PencilLine size={20} />
                Editar seu perfil</a>
            </footer>             
                
        </aside>
        
    )
}