
// const initState = {count:0,text:""}//5:55hou

// const enum REDUCET_ACTION_TYPE {
//     INCREMENT,
//     DECREMENT,
//     NEW_INPUT,
// }ss
//  type ReducerAction ={
//     type:REDUCET_ACTION_TYPE,
//     payload?:string

//  }
//  const reducer = (state:typeof initState,action:ReducerAction):typeof initState=>{
//     switch(action.type){
//        case REDUCET_ACTION_TYPE.INCREMENT:
//         return {...state,count:state.count+1}
       
//         case REDUCET_ACTION_TYPE.DECREMENT:
//             return {...state,count:state.count-1}
//             case REDUCET_ACTION_TYPE.NEW_INPUT:
//                 return {...state,text:action.payload??""}
//         default:
//             throw new Error()
//     }
//  }
 
// type ChildProps = {
//     children:(num:number) =>ReactNode
// }

// const Counter = ({children}:ChildProps)=>{

// //const [counter , setCounter] = useState<number>(1)
// const [state,dispatch]=useReducer(reducer,initState)

// const increment=()=>dispatch({type:REDUCET_ACTION_TYPE.INCREMENT})
// const decrement =()=>dispatch({type:REDUCET_ACTION_TYPE.DECREMENT})

// const handleTextInput =(e:ChangeEvent<HTMLInputElement>)=>{
// dispatch ({
//     type:REDUCET_ACTION_TYPE.NEW_INPUT,
//     payload:e.target.value
//     <h1>{children(state.count)}</h1>
//     <div>
//     <button onClick={increment}>+</button>
//     <button onClick={decrement}>-</button>
//     </div>
//    <input type="text" onChange={handleTextInput}/>
//    <h2>{state.text}</h2>
//     </>
// })
// }
