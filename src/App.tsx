

// interface User {
//   id:number,
//   username:string
// }

// type myFunc =(n:number)=>number

// const fib:myFunc =(n)=>{
//   if(n<2) return n
//   return fib(n-1)+(n-2)

// }
// const myNum:number= 30


//   const [count, setCount] = useState<number>(0)
//   const [users, setUsers] = useState<User[]|null>(null)

//   const inputRef = useRef<HTMLInputElement>(null)
//  console.log(inputRef?.current?.value)
// useEffect (()=>{
// console.log("mounting")
// console.log("Users",users)
// return ()=>console.log("unmounting")
// },[users])

// const addTwo = useCallback((e:MouseEvent<HTMLButtonElement>|KeyboardEvent<HTMLButtonElement>):void=>setCount(prev=>prev+2),[])
//<Counter>{(num:number)=><span>Current Count: {num}</span>}</Counter>
// const result=useMemo<number>(()=>fib(myNum),[myNum])


 
    {/* // <h2>{count}</h2>
    // <button onClick={addTwo}>ADD</button>
    // <h2>{result}</h2>
    // <input ref={inputRef} type='text' color='blue'/> */}

 
  //


import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import { useState } from "react"

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )

  return content
}

export default App