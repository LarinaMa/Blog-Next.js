import { createClient, groq } from 'next-sanity'
const clientconfig = {
  projectId: '5u8nt3x6',
  dataset: 'production',
  apiVersion: '2023-08-08',
}
// grab all posts
export async function getPosts() {
  const client = createClient(clientconfig)
  const response = await client.fetch(
    groq`*[_type == "post"]{
            _id,
            _createdAt,
            title,
            "author": author->name,
            "image": mainImage.asset->url,
            "slug": slug.current,
            "cat": categories[0]->title,
            "avatar": author->image.asset->url
        }`,
    {
      next: {
        revalidate: 0,
      },
    },
    { cache: 'no-store' }
  )
  return response
}
export async function getPostData(slug) {
  const client = createClient(clientconfig)
  const response = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
           
            _createdAt,
            title,
            "image": mainImage.asset->url,
          "slug": slug.current,
          "content": body,
          "cat": categories[0]->title,
          
        }`,
    { slug }
  )
  return response
}
