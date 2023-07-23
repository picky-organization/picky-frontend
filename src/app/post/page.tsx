import Link from 'next/link';
import React from 'react'

const fetchPost=async()=>{
    const res=await fetch("https://dummyjson.com/posts");
    const posts=await res.json();
    return posts?.posts;
}


export default async function Postpage() {
   const posts=await fetchPost()
//    console.log('test',posts)
  return (
    <div>
     {posts?.map((post:any)=>(
        <p key={post.id}>
         <Link href={`/post/${post.id}`}>{post.id}</Link>
        </p>
     ))}

    </div>
  )
}
