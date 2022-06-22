import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Post from './Post'
import { useRecoilState } from 'recoil'
import fetchPostsAtom from '../atoms/fetchPosts.atom'

function Feed({topic = "*"}) {
    const [posts, setPosts] = useState([])
    const [fetchPosts, setFetchPosts] = useRecoilState(fetchPostsAtom)
    useEffect(()=> {
        const fetch = async ()=> {
            try {
                const data = await axios.get(`/api/post/${topic}`)
                setPosts(data?.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetch()
    },[fetchPosts])
  return (
    <div className="mt-5 space-y-4">
        {
            posts?.map(post=> {
                return <Post key={post?._id} post={post} />
            })
        }
    </div>
  ) 
}

export default Feed