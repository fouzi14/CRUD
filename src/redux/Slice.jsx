import { createSlice } from "@reduxjs/toolkit";


export const postSlice = createSlice({
    name : 'posts',
    initialState : {
        posts : []
    },
    reducers : {
        addpost : (state , action)=>{
            state.posts.push(action.payload)
        },
        deletepost : (state , action)=>{
            state.posts = state.posts.filter(post=>post.id != action.payload.id )
        },
        editpost : (state , action)=>{
            state.posts.map(post=>{
                if(post.id == action.payload.id){
                    post.name = action.payload.name
                    post.desc = action.payload.desc

                }
            })
        }


    }
})



export const {addpost,deletepost,editpost}=postSlice.actions
export default postSlice.reducer
