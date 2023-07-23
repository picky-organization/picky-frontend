import React from 'react'

type PostProps={
    params:{
        postId:string;
    }
}

const fetcPost=async(postId:string)=>{
    const res=await fetch(`https://dummyjson.com/posts/${postId}`)
    const post=await res.json();
    return post 
}

export default async function PostId({params:{postId}}:PostProps) {
  const post = await fetcPost(postId)
  console.log('post',post)
  return (
    <div>
    <h2 className='text-lg font-medium'>
      {post?.title}
    </h2>
    <div>카테고리</div>
    <div>상태</div>
    <ul className='flex justify-between'>
        {post?.tags?.map((tag:string,idx:number)=>(
           <li key={idx}>{tag}</li>
        ))

        }
        
    </ul>
    <main>
        {post?.body}
    </main>
    </div>
  )
}
