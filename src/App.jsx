import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import './global.css'

const posts = [
  {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/rafcavalheiro.png',
    name: 'Rafael Cavalheiro',
    role: 'Front End Developer'
  },
  content: [
    {type: 'paragraph', content: 'Bom dia'},
    {type: 'paragraph', content: 'Postei novo conteúdo'},
    {type: 'link', content: 'plataformadeensino'},
  ],
  publishedAt: new Date('2022-07-04 20:00:00'),
},

{
  id: 2,
  author: {
    avatarUrl: 'https://cdn.pixabay.com/photo/2018/03/30/02/30/color-dogs-3274248_960_720.png',
    name: 'Trillian Leia',
    role: 'Front End Developer Jr'
  },
  content: [
    {type: 'paragraph', content: 'Bom dia'},
    {type: 'paragraph', content: 'Postei novo conteúdo'},
    {type: 'link', content: 'petcare'},
  ],
  publishedAt: new Date('2022-07-04 21:00:00'),
},

];


export function App() {  

  return (

    <div>
      <Header/>  

      <div className={styles.wrapper}>
      <Sidebar/>

      <main>
        {posts.map(post => {
          return (
            <Post 
              author = {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}
            />
          )
        })}
      </main>
      </div>      
  
    </div>
  )   
}


