import React from 'react'

interface PostProps {
  title: string
  excerpt: string
  image: string
  slug: string
}

export default function Post({ title, excerpt, image, slug }: PostProps) {
  return (
    <div className="post">
      <div className="post-image">
        <img
          src={image}
          alt={title}
        />
      </div>
      <div className="post-content">
        <div>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </div>
        <a href={`/${slug}`}>Read more...</a>
      </div>
    </div>
  )
}
