import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Bolumler.module.css'
import hospital from '../images/Hospital.jpg'
import food from '../images/food.jpg'
import doctor from '../images/doctor.jpg'
import Image from 'next/image'
import Link from 'next/link'

function bolumler() {
  return (
   <>
   <Navbar />
    <section className={styles.headerSection}>
      <h1>BÖLÜMLER</h1>
    </section>

    <div className={styles.cardContainer}>
    <Link href="/bolumler/genel-cerrahi" class="block">
      <Image
        alt="doctor"
        class="h-64 w-full object-cover"
        src={doctor}
      />

      <h3 class="mt-4 text-xl font-bold text-gray-700 ">Genel Cerrahi</h3>

      <p class="mt-2 max-w-sm text-gray-700">
      Genel cerrahi, çok çeşitli sağlık problemlerini ve hastalıklarını tedavi etmek için ...
      </p>
      <span className='text-green-500'>Daha Fazla</span>

    </Link>
    <Link href="/bolumler/endoskopi" class="block">
      <Image
        alt="hospital"
        class="h-64 w-full object-cover"
        src={hospital}
      />

      <h3 class="mt-4 text-xl font-bold text-gray-700">Endoskopi</h3>

      <p class="mt-2 max-w-sm text-gray-700">
      Sindirim sistemi rahatsızlıklarınızı ileri seviye endeskopi tedavileriyle çözüm bulmaktayız...
      </p>
      <span className='text-green-500'>Daha Fazla</span>

    </Link>
    <Link href="/bolumler/obezite" class="block">
      <Image
        alt="food"
        class="h-64 w-full object-cover"
        src={food}
      />

      <h3 class="mt-4 text-xl font-bold text-gray-700">Obezite</h3>

      <p class="mt-2 max-w-sm text-gray-700">
      Fazla kilolarınızdan sağlıklı bir şekilde kurtulmak için mide balonu ve mide botoksu tedavisi ...
      </p>
      <span className='text-green-500'>Daha Fazla</span>
    </Link>

      </div>

   </>
  )
}

export default bolumler