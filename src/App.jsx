import { Post } from './Post'
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Henrique Pires"
        content="Loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
      />
    </>
  )
}
