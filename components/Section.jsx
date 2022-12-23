import React from 'react';
import styles from '../styles/Section.module.css';
import Link from 'next/link';

function Section() {
  return (
    <div className={styles.mainContainer}>
    <Link
  href="/bolumler"
  className="group flex flex-col justify-between rounded-sm bg-white p-8 shadow-xl transition-shadow hover:shadow-lg"
>
  <div>
    <h3 className="text-3xl font-bold text-indigo-600">Obezite Tedavisi</h3>
    <div className="mt-4 border-t-2 border-indigo-100 pt-2">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
      Hızlı ve sağlıklı bir şekilde<br/> zayıflamak için cerrahi dışı tedavi<br/> yöntemleri uygulamaktayız.
      </p>
    </div>
  </div>

  <div className="mt-16 inline-flex items-center text-indigo-600">
    <p className="text-lg font-medium">BİLGİ AL</p>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </div>
</Link>
<Link
  href="/bolumler"
  className="group flex flex-col justify-between rounded-sm bg-white p-8 shadow-xl transition-shadow hover:shadow-lg"
>
  <div>
    <h3 className="text-3xl font-bold text-indigo-600">Endoskopi</h3>
    <div className="mt-4 border-t-2 border-indigo-100 pt-2">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
      Tüm Endoskopi operasyonlarının<br/> titizlikle ve detaylı bir şekilde tedavi<br/> edilmektedir.
      </p>
    </div>
  </div>

  <div className="mt-16 inline-flex items-center text-indigo-600">
    <p className="text-lg font-medium">BİLGİ AL</p>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </div>
</Link>
<Link
  href="/bolumler"
  className="group flex flex-col justify-between rounded-sm bg-white p-8 shadow-xl transition-shadow hover:shadow-lg"
>
  <div>
    <h3 className="text-3xl font-bold text-indigo-600">Genel Cerrahi</h3>
    <div className="mt-4 border-t-2 border-indigo-100 pt-2">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
      Vücuttaki genel ya da bölgesel tüm<br/> rahatsızlıkların cerrahi yöntemlerle<br/> tedavileri...
      </p>
    </div>
  </div>

  <div className="mt-16 inline-flex items-center text-indigo-600">
    <p className="text-lg font-medium">BİLGİ AL</p>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </div>
</Link>
</div>

  )
}

export default Section