import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css"

import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {  

  return (

    <div>
      <Header/>  

      <div className={styles.wrapper}>
      <Sidebar/>

      <main>
      <Post 
      author="Rafael Cavalheiro" 
      content=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente debitis deleniti rerum libero distinctio similique quisquam inventore hic, earum nihil labore excepturi maiores mollitia reiciendis quae quaerat modi error beatae."
      />

      <Post 
      author="Rafael Cavalheiro" 
      content=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente debitis deleniti rerum libero distinctio similique quisquam inventore hic, earum nihil labore excepturi maiores mollitia reiciendis quae quaerat modi error beatae."
      />
      </main>
      </div>      
  
    </div>
  )   
}


