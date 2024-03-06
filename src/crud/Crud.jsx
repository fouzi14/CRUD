import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addpost, deletepost, editpost } from '../redux/Slice'

export default function Crud() {
    const [name , setName] = useState('')
    const [desc , setDesc] = useState('')

    const [editname , setEditName] = useState('')
    const [editdesc , setEditDesc] = useState('')

    const [edit , setEdit] = useState(false)
    const [id , setId] = useState(null)

    const dispatch = useDispatch()
    const posts = useSelector(state=>state.posts.posts)
  return (
    <div className=' w-full '>
        <div className=' text-white bg-black p-4 flex justify-center font-semibold text-xl'>Crud Application using redux  </div>
        <div className=' p-5 flex justify-center'>
            <input className=' border-solid border-2 border-black outline-none mr-2 '
             type="text" 
             onChange={(e)=>setName(e.target.value)}
             />
            <input className=' border-solid border-2 border-black outline-none '
             type="text" 
             onChange={(e)=>setDesc(e.target.value)}
             />
            {name.length > 0 && desc.length > 0 ?
            <button
            onClick={()=>dispatch(addpost({id:posts.length + 1 ,name,desc}))}
            className=' bg-slate-500 ml-2 px-2 rounded-lg'>Add Post</button> : 
            'remplir name and desc'}
        </div>
       {posts.length > 0 ?
       posts.map(post=> <div className=' mb-2 border-solid border-2 border-black mx-20 flex flex-col text-center '>
       <div className=' flex flex-col'>
       <span className=' text-xl font-medium'>{post.name}</span>
       <span className=' text-xl font-medium'>{post.desc}</span>
       </div>
       <div className=' my-5'>
       <button onClick={()=>{ setEdit(true)
                                setId(post.id)}} className=' bg-slate-500 mx-5 w-20 rounded-lg'>Edit</button>
       <button onClick={()=>dispatch(deletepost({id:post.id}))} className=' bg-slate-500 mx-5 w-20 rounded-lg'>Delete</button>
       </div>
       
        {edit && id == post.id && (
            
       <div className=' p-5 flex justify-center'>
            <input className=' border-solid border-2 border-black outline-none mr-2 '
             type="text" 
             onChange={(e)=>setEditName(e.target.value)}
             />
            <input className=' border-solid border-2 border-black outline-none '
             type="text" 
             onChange={(e)=>setEditDesc(e.target.value)}
             />
            <button
            onClick={()=>{dispatch(editpost({id:post.id , name : editname , desc:editdesc }))
                        setEdit(false)}}
            className=' bg-slate-500 ml-2 px-2 rounded-lg'>Edit Post</button>
        </div>

        ) }


       </div>)
    :
        <div className=' flex justify-center'>there is not found</div> }
    </div>
  )
}
