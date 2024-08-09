import { Header } from "./components/Header"
import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit." 
      />
      <Post 
        author="Gabriel Fulano" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit." 
      />
    </div>
  )
}
