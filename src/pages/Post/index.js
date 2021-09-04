import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import PushToPost from '../components/PushToPost'

import api from '../../services/api'
import './style.scss'

const Post = () => {
    const postId = localStorage.getItem('postId')
    const [post, setPost] = useState([])
    const [otherPublications, setOtherPublications] = useState([])

    useEffect(() => {
        api.get()
            .then(response => {
                setPost(response.data[postId - 1])

                Number(postId) === 100 ? setOtherPublications(response.data.slice(0, 4))
                    : setOtherPublications(response.data.slice(postId, Number(postId) + 4))
            }).catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [postId]);

    return (
        <>
            <Header />
            <main>
                <Link to="/" className="back-button"> Voltar </ Link>
                <article>
                    <h2>{`#${post.id} ${post.title}`}</h2>
                    <p>
                        {post.body}
                    </p>
                </article>

                <h3>
                    Leia Mais
                </h3>
                <div className="other-publications">
                    {
                        otherPublications.map(post => {
                            return (
                                <PushToPost
                                    key={post.id}
                                    title={`#${post.id} ${post.title}`}
                                    onclick={() => { localStorage.setItem('postId', post.id) }}
                                    href={`#${post.id}`}
                                    onClick={window.scroll({ top: true, behavior: 'smooth' })}
                                />
                            );
                        })
                    }
                </div>
            </main>
        </>
    );
}

export default Post;