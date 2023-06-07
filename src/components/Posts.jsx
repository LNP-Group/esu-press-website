import React from 'react'
import Post from './Post'
import { posts } from '../data/posts.js'

export default function Posts() {
  return (
    <div className="post-layout">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          image={post.image}
          slug={post.slug}
          author={post.author}
        />
      ))}
    </div>
  )
}
