import React from 'react'
import Navbar from '../components/Navbar'
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard';
import styles from '../styles/Home.module.css'


const graphcms = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbnnstcx1fvf01uoe1fvdg0p/master')

  const QUERY =
    gql`{
      posts (first:100) {
        id
        title
        slug
        excerpt
        coverImage {
          url
        }
      }
    }
    `
export async function getStaticProps() {
  const {posts} = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    }
  }
}


function tedaviler({posts}) {
  return (
    <><Navbar />
         <section className={styles.headerSection}>
                <h1>Tedaviler</h1>
        </section>
     <div className={styles.cardContainer}>

    {posts.map((post) => (
      <BlogCard 
          key={post.id} 
          title={post.title}
          slug={post.slug}
          excerpt={post.excerpt}
          coverImage={post.coverImage}/>
    ))}
    </div>
    </>
  )
}

export default tedaviler