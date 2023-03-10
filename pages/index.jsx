import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GraphQLClient, gql } from 'graphql-request';
import BlogCard from '../components/BlogCard';
import Hero from '../components/Hero';
import Section from '../components/Section';
import CTA from '../components/CTA';
import Ourservices from '../components/Ourservices';
import Link from 'next/link';


const graphcms = new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clbnnstcx1fvf01uoe1fvdg0p/master')

  const QUERY =
    gql`{
      posts  (first :9) {
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




export default function Home({posts}) {
  const [cards, setCards] = useState(9);

  const loadMore = () => {
    setCards(cards + 9);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Doktor Serkan Fatih Ipek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
      <Hero />
      <Section />
      <Ourservices />
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
      <div className={styles.cardContainer}>
      <Link href="/tedaviler" className='block  rounded bg-gray-50 px-12 py-3  text-lg font-medium text-gray-700 shadow hover:bg-gray-100 focus:outline-none focus:ring active:bg-gray-100 sm:w-auto'>
          Tüm Tedaviler
        </Link>
        </div>

              <CTA />

      </main>

      </div>
  )
}

