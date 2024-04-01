import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


//import { Link } from 'gatsby';

function PostDetail({ postId }) {
  const [post, setPost] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
//pega o id do post fixo e pega a imagem destacada
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://camistudio.com.br/scan2bindados/wp-json/wp/v2/posts/37`);
        setPost(response.data);
        if (post.featured_media) {
          const mediaResponse = await fetch(`https://camistudio.com.br/scan2bindados/wp-json/wp/v2/media/${post.featured_media}`);
          const mediaData = await mediaResponse.json();
          //setImageUrl(mediaData.source_url);
          setImageUrl("https://camistudio.com.br/scan2bindados/wp-content/uploads/2023/12/slide-01.jpg");
        } else {
          setImageUrl(console.log('sem imagem')); // Caso o post não tenha uma imagem destacada
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div> <h1 className='mt-2 text-center'>Loading...</h1></div>;
  }

  return (
    <>
    <Header/>
    <div className='container'>
      <div style={{marginTop:"10rem", marginBottom:"1rem"}}>
      <h1 className='mt-5'>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <img className='w-50' src={imageUrl} alt="" />
      </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default PostDetail;
