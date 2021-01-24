import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetch() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        }).catch(e => {
            console.log('e')
        })
        return () => {
        }
    }, [])
    return (
        <div>
            {/* <ul> */}
                {
                    posts.map(post => <p key={post.id}>{post.title}</p>)
                }
            {/* </ul> */}
        </div>
    )
}

export default DataFetch