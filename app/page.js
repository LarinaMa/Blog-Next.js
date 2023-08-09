import { getPosts } from '@/utils.js'
export default async function Home() {
  const posts = await getPosts()
  console.log(posts)
  return (
    <div className="post-previews">
      {posts.map((post) => (
        <a href={`/posts/${post.slug}`}>
          <img src={post.image} />
          <p className="cat">{post.cat}</p>
          <h3>{post.title}</h3>
          <p className="author">
            <img src={post.avatar} />
            {post.author}
          </p>
        </a>
      ))}
    </div>
  )
}
