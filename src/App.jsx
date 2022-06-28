import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export function App() {  

  return (

    <div>

      <Header/>
      
      <Post 
    author="Rafael Cavalheiro" 
    content=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente debitis deleniti rerum libero distinctio similique quisquam inventore hic, earum nihil labore excepturi maiores mollitia reiciendis quae quaerat modi error beatae."
      />

      <Post 
    author="João Vitor" 
    content=" Sou o Corotinho, o seu amiguinho."
      />

      <Post 
    author="Trillian Leia" 
    content=" Se não me der um pedaço de mortadela eu vou cagar no tapete."
      />
  
    </div>
  )   
}


