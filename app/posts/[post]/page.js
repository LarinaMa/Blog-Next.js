import { getPostData } from '@/utils'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

export default async function Post({ params }) {
  const slug = params.post
  const post = await getPostData(slug)
  console.log(post)
  return (
    <div>
      <img src={post.image} />
      <p className="cat">{post.cat}</p>
      <h1>{post.title}</h1>
      <p className="date">{new Date(post._createdAt).toLocaleDateString()}</p>
      <PortableText value={post.content} />
      <Link href="/" className="homeLink">
        Home
      </Link>
    </div>
  )
}
