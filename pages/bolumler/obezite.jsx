import React from 'react'
import Navbar from '../../components/Navbar'
import styles from '../../styles/Bolumler.module.css'
import Image from 'next/image'
import midebotoksu from '../../images/mide-botoksu.jpg'
import Link from 'next/link'


function obezite() {
  return (
    <>
    <Navbar />
    <section className={styles.headerSection}>
    <h1>OBEZİTE TEDAVİSİ</h1>
   </section>
   <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 ">
    <div className="p-8 md:p-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-xl text-center sm:text-left">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Kilolarınızdan Kurtulun!
        </h2>

        <p className=" text-gray-500 md:mt-4 md:block">
        Fazla kilolarınızdan sağlıklı bir şekilde kurtulmak için mide balonu ve mide botoksu tedavisi uygulanmaktadır.         </p>
        <p className=" text-gray-500 md:mt-4 md:block">
        Operasyondan sonra uzman diyetisyen eşliğinden gıdalarınız takip edilir ve sağlığınıza kavuşursunuz. 
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
      className="h-36 w-full object-cover sm:h-full "
      src={midebotoksu}
    />
  </section>


  </>
  )
}

export default obezite