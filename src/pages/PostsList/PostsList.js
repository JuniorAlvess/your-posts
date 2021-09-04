import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import Header from '../components/Header';
import PushToPost from '../components/PushToPost'

const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        api.get()
            .then((response) => setPosts(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [])

    return (
        <>
            <Header />

            <main>
                <ul>
                    {
                        posts.map(post => {
                            return (
                                <PushToPost
                                    key={post.id}
                                    title={`#${post.id} ${post.title}`}
                                    onclick={() => {
                                        localStorage.setItem('postId', post.id)
                                        window.scroll({ top: 100 })
                                    }}
                                />
                            )
                        })
                    }
                </ul>
            </main>
        </>
    );
}

export default PostsList;