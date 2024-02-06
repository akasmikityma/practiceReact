import React, { useCallback, useEffect, useState ,useRef} from 'react'

export default function Passgen() {

    const [password, setpassword] = useState('');//initially set to nothing but at the method it gets assigned to something<
    const [Charall, setCharall] = useState(false); //its either set or not ,, so its a boolean value >>
    const [NumberAll, setNumberAll] = useState(false);
    const [length, setlength] = useState(8); // initially set to 8 so the first time the page is mounted it'll show a passwoprd of length 8>>
    const passWordRef = useRef(null);
     
    const copyContent=()=>{
      window.navigator.clipboard.writeText(password);
      passWordRef.current?.select();
    } 

    const passwordGener=useCallback(()=>{
        let pass="";
        let str="abcdefghijklmnopqrstuvstwxwz";
        if(Charall) str+="!@#$%^&*()_+";
        if(NumberAll) str+="0123456789";
        //this is the string now as per the length the loop will iterate and create a random pass
        for(let i=0;i<length;i++){
            let index = Math.floor(Math.random()*str.length+1);
            pass+=str.charAt(index);
        }
       
        setpassword(pass);
        if(pass.length!==0){
            console.log(pass);
           }else{
            console.log(`pass is not generated`)
           }
    },[length,Charall,NumberAll])

    useEffect(()=>{
        passwordGener()
    },[length,Charall,NumberAll]);
    return (
    <div className=' flex min-h-screen bg-slate-600 items-center justify-center'>
      <div className='flex flex-col justify-center items-center border rounded bg-white w-96 h-96 p-4 gap-4'>
      <div className='flex flex-row gap-1'>
      <input type="text" name="pass" id="" readOnly className='bg-sky-200 text-red ml-1 p-1 'value={password} ref={passWordRef}/>
        <button className='rounded bg-yellow-300 p-1' onClick={copyContent}>copy</button>
      </div>
        <input type="range" name="passlength" min={8} max={20} id="" onChange={(e)=>{setlength(e.target.value)}} />
        <input type="checkbox" name="Characters" id="" defaultChecked={Charall} onChange={()=>setCharall((prev)=>!prev)}/>Add_Characters
        <input type="checkbox" name="Numbers" id="" defaultChecked={NumberAll} onChange={()=>setNumberAll((prev)=>!prev)}/>Add_Numbers
      </div>
    </div>
  )
}
