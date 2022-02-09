
import Image from 'next/image'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter();
  return ( 
    <div>
      <div className="container">
        <div className="card">
        <h2 className="title">
            Portfolio Value: <strong className="good">+$94.32</strong>
          </h2>
          <Image src="/graph.png" height="800" width="1200"/>  
        </div>
        <div className="card"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem, voluptate culpa provident odit nisi quasi laudantium minus, modi vero voluptates impedit magnam nemo aspernatur odio laboriosam delectus molestias alias!</div>
        <div className="card">{router.pathname}</div>
        <div className="card">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem, voluptate culpa provident odit nisi quasi laudantium minus, modi vero voluptates impedit magnam nemo aspernatur odio laboriosam delectus molestias alias!</div>
        <div className="card">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem, voluptate culpa provident odit nisi quasi laudantium minus, modi vero voluptates impedit magnam nemo aspernatur odio laboriosam delectus molestias alias!</div>
        <div className="card">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem, voluptate culpa provident odit nisi quasi laudantium minus, modi vero voluptates impedit magnam nemo aspernatur odio laboriosam delectus molestias alias!</div>
        <div className="card">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem, voluptate culpa provident odit nisi quasi laudantium minus, modi vero voluptates impedit magnam nemo aspernatur odio laboriosam delectus molestias alias!</div>
      </div>
    </div>
  )
}
