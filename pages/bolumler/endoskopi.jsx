import React from 'react'
import Navbar from '../../components/Navbar'
import styles from '../../styles/Bolumler.module.css'
import Image from 'next/image'
import end from '../../images/endoskopi.jpg'
import Link from 'next/link'


function endoskopi() {
  return (
    <>
    <Navbar />
    <section className={styles.headerSection}>
    <h1>ENDOSKOPİ</h1>
   </section>
   <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-xl text-center sm:text-left">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Endoskopi Tedavisi
        </h2>

        <p className=" text-gray-500 md:mt-4 md:block">
        Sindirim sistemi rahatsızlıklarınızı ileri seviye endeskopi tedavileriyle çözüm bulmaktayız.         </p>
        <p className=" text-gray-500 md:mt-4 md:block">
        Mide ve bağırsak hastalıklarının teşhisi ve tedavi yöntemlerinde endeskopi uygulamamız sayesinde sağlığınıza kavuşacaksınız.
        </p>


        <div className="mt-4 md:mt-8">
          <Link
            href="https://api.whatsapp.com/send?phone=905527148080"
            className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Randevu Al
          </Link>
        </div>
      </div>
    </div>

    <Image
      alt="genel cerrahi"
      className="h-56 w-full object-cover sm:h-full"
      src={end}
    />
  </section>


  </>
  )
}

export default endoskopi