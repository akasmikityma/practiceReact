import React,{useState} from 'react'

export default function Home() {
    const [color, setcolor] = useState('slate');
  return (
    <div className={`min-h-screen bg-${color}-600 flex flex-col items-center`}>
      {/* <h1 className='bg-yellow-300'>Let's see</h1> */}
      <div className='flex flex-row justify-center items-center mt-auto mb-5 mx-auto p-3 gap-3 bg-white w-72  rounded-full'>
        <button onClick={() => setcolor('red')} className='rounded-md bg-red-600 text-black p-1 border hover:rounded-none'>Red</button>
        <button onClick={() => setcolor('blue')} className='rounded-md bg-blue-600 text-black p-1 border hover:rounded-none'>Blue</button>
        <button onClick={() => setcolor('green')} className='rounded-md bg-green-600 text-black p-1 border hover:rounded-none'>Green</button>
      </div>
    </div>
  );
}
