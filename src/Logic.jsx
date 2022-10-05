import { useState } from "react"

export default function Logic(){
  let[score,setScore]=useState(0)
  let[play,setplay]=useState(true)
  let[newarr,setnewArr]=useState([])
  const arr=["q","w","e","r","t","y","i","o","p"]
  let random = arr[Math.floor(Math.random()*arr.length)]
  if(newarr.length==4){
    random=newarr[Math.floor(Math.random()*newarr.length)]
  }
 function handlerandom(){
  
  // random = arr[Math.floor(Math.random()*arr.length)]
  let i =Math.floor(Math.random()*arr.length)
  let guess1=  arr[i]
  let guess2=  arr[i]
  let guess3=  arr[i]
      //  random=newarr[Math.floor(Math.random()*newarr.length)]
  let  randomarr=[random,guess1,guess2,guess3]
  // console.log(random)
   setnewArr(randomarr)
   setplay(false)

 }
 function handlescore(indx){
  console.log(random)
  // console.log(newarr[indx])
   if(newarr[indx]===random)

  setScore(score+1)
  else{
    setScore(score-1) 
  }
 handlerandom()
 }
  
 
  
  return(
    <>
    {/* <button onClick={handlerandom}>generate random</button> */}
    <div className="option">
    <p>score:{score}</p>
    {play?<button onClick={handlerandom}>play</button>:(
        newarr.map((e,indx)=><button key={indx} 
        onClick={()=>handlescore(indx)}>{e}</button>
        )
      )}

    </div>
    </>
  )
}