import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BlogCard.module.css';


export default function BlogCard({ title, excerpt, coverImage, slug }) {
    
    return (
<div className={styles.cardContainer}>
<article className={styles.card}>
  <Image
    alt="Office"
    className="h-56 w-full object-cover"
    src={coverImage.url}
    width={500} height={500}
  />

  <div className="bg-white p-4 sm:p-6">

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">
      {title}
      </h3>
    </a>

    <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
    {excerpt}
    </p>
    <Link href={"/tedaviler/"+ slug}>
      devamını oku
            </Link>
  </div>
</article>
</div>

    );
}
