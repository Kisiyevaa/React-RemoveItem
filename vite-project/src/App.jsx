import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa"

function App() {

  const [name,setName]=useState('')
  const [surname,setSurname]=useState('')
  const [fin,setFin]=useState('')
  const [userList,setUserList]=useState([])

    const handleSubmit=(e)=>{
        const newUser={
          name,
          surname,
          fin
        }
        setUserList([...userList,newUser])
        setName('')
        setSurname('')
        setFin('')
    }
    function handleClick(fin){
      const newList = userList.filter((item) => item.fin !== fin);
      setUserList(newList);
  
    }
      return(
       <div className='grid grid-cols-2 gap-4  m-5'>
        <div className='border-double border-4 border-indigo-600 p-4 text-center'> 
          <div className='m-3'>
            <input type="text"
            className='border-2 border-sky-600  w-64 p-2'
            placeholder='Adinizi daxil edin'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className='m-3'>
            <input type="text"
            placeholder='Soyadinizi daxil edin'
            className='border-2 border-sky-600 w-64 p-2'
            value={surname}
            onChange={(e)=>setSurname(e.target.value)}
            />
          </div>
          <div className='m-3'>
            <input type="text"
            placeholder='FIN-i daxil edin' 
            className='border-2 border-sky-600  w-64 p-2'
            value={fin}
            onChange={(e)=>setFin(e.target.value)}
            />
          </div>
          <div className='m-3 '>
            <button onClick={handleSubmit}
            className='border-1 border-sky-600  bg-sky-600 text-neutral-50 p-2 px-4 rounded-lg'
            >
              Submit</button>
          </div>
        </div>
        <div>
          {
          !userList.length ? "Melumat daxil edilmeyib":
           
          <table className="border-collapse border border-slate-400 w-[600px] text-center">
            <thead>
             <tr>
              <th className="border border-slate-300"> Ad</th>
              <th className="border border-slate-300">Soyad</th>
              <th className="border border-slate-300">Fin</th>
              <th className="border border-slate-300">Sil</th>
             </tr>
            </thead>
            <tbody>
              {
                userList.map(item=>
                   <tr key={item.fin}>
                    <td className="border border-slate-300">{item.name}</td>
                    <td className="border border-slate-300">{item.surname}</td>
                    <td className="border border-slate-300">{item.fin}</td>
                    <td className="border border-slate-300 text-sky-600"> 
                    <FaTrashAlt onClick={()=>handleClick(item.fin)}/></td>
                   </tr>
              )
              }
            </tbody>
          </table>
          }
        </div>
       </div>
    )
}

export default App
