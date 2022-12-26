import styles from '../../styles/Slug.module.css'
import { GraphQLClient, gql } from 'graphql-request';
import Image from 'next/image'
import Navbar from '../../components/Navbar'


const graphcms = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbnnstcx1fvf01uoe1fvdg0p/master');



  const QUERY =
    gql`
    query Post($slug: String! )  {
        post(where: {slug: $slug} ) {
            id
            slug
            title
            excerpt
            coverImage {
                url
            }
            body {
                html
            }
        }
    }
    `

const SLUGLIST = gql`
    {
        posts (first:100){
            slug
        }
    }    
`

export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST);
    return { 
        paths: posts.map((post) => ({ params :{ slug: post.slug}})),
        fallback: false,
     }
}



export async function getStaticProps({params}) {
    const {slug} = params;
  const data = await graphcms.request(QUERY, {slug});
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 100,
  }
}

export default function BlogPost({ post }) {
    return (
        <>
        <Navbar />
        <main className={styles.cardMain}>
        <section className={styles.headerSection}>
                <h1>Tedaviler</h1>
        </section>
            <Image src={post.coverImage.url} width={400} height={400} alt={post.title} />
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.body.html}} className={styles.htmlContent} />
        </main>
        </>
    )
    }

