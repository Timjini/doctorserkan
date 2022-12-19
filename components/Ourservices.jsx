import React from 'react'
import styles from '../styles/Home.module.css'

function Ourservices() {
  return (
    <section className={styles.cta}>
  <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold sm:text-4xl text-indigo-600 text-center">SAĞLIĞINIZ BİZİM İÇİN ÖNEMLİ!</h2>

    <div className="max-w-xl">

      <p className="mt-4 text-gray-500">
      </p>
    </div>

    <div
      className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
    >
      <div className="flex items-start">
        <span className="flex-shrink-0 rounded-lg p-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>

        </span>

        <div className="ml-4">
          <h2 className="text-lg font-bold text-gray-600">Teşhisler ve Tedavi Yöntemleri</h2>

          <p className="mt-1 text-sm text-gray-500">
          Hastalığınızın tedavisi hakkında bilgi almak için sayfamızı ziyaret edebilirsiniz.
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <span className="flex-shrink-0 rounded-lg  p-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>

        </span>

        <div className="ml-4">
          <h2 className="text-lg font-bold text-gray-600">Hasta Odaklı Hizmet</h2>

          <p className="mt-1 text-sm text-gray-500">
          Hastalarımızın bizim için çok önemli! Hastalarımızın beklentilerine göre hareket edip, bunları karşılamak için elimizden gelenin en iyisini yapıyoruz.
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <span className="flex-shrink-0 rounded-lg  p-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        </svg>

        </span>

        <div className="ml-4">
          <h2 className="text-lg font-bold text-gray-600">Alanının En Tecrübeli Operatör Doktoru</h2>

          <p className="mt-1 text-sm text-gray-500">
          Serkan Fatih İpek, birçok başarılı ameliyatı olan deneyimli bir doktor ve birçok mutlu gülümsemenin yaratıcısıdır.
          </p>
        </div>
      </div>     
    </div>
  </div>
</section>

  )
}

export default Ourservices