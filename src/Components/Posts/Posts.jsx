// PostList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';


//Pegar imagem destacada: https://camistudio.com.br/scan2bindados/wp-json/wp/v2/media/31
const Posts = ({ startIndex }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://camistudio.com.br/scan2bindados/wp-json/wp/v2/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Erro ao obter posts:', error);
            }
        };

        fetchPosts();
    }, []);

    // Renderiza apenas o post com o índice fornecido
    const renderPost = (postIndex) => {
        const post = posts[postIndex];
        if (!post) return null;

        return (
            <div key={post.id} className={`post-container post-${startIndex + 1}`}>
                <h2 style={{
                    fontSize: "2.5rem",
                    fontWeight: "bolder",
                    color: "#273240",
                    lineHeight: "38px",
                    marginTop: "1rem",
                   /* marginBottom:"1rem"*/
                }}>{post.title.rendered}</h2>

                <div className="mt-5" style={{ fontSize: "16px", fontWeight: "400", lineHeight:"24px" }} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
        );
    };

    return (
        <div>
            {renderPost(startIndex)}
        </div>
    )
}

export default Posts;
