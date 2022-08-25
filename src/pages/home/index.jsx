import React from 'react';
import '../../assets/css/home.css';
import FeaturedPost from '../../components/featured-post';
import PostList from '../../components/postslist';

export default function Home() {
    return (
        <body className='pagina'>
            <FeaturedPost />
            <PostList />
        </body>
    )
}