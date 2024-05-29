import React, { useEffect, useState } from 'react'
import css from "./css/Content.module.css";
import { savedPosts } from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

function ContentHooks() {
    const [isLoaded, setLoad] = useState(false)
    const [fetchedPosts, setPost] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setLoad(true)
            setPost(savedPosts)
        }, 2000)
    }, []);

    const handleInput = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })

        setPost(filteredPosts)

    }

  return (
    <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor='searchInput' >Search</label>
                        <input onChange={(event) => handleInput(event)} id='searchInput' type='text' placeholder='By Author'/>
                        <h4>Posts found:{fetchedPosts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    <PostItem savedPosts={fetchedPosts}/>
                    : <Loader/>
                </div>
            </div>
  )
}

export default ContentHooks