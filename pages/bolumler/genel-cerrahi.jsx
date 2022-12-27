import React from 'react'
import styles from '../../styles/Bolumler.module.css'
import genelPage from '../../images/genel-page.jpg'
import Image from 'next/image'
import Link from 'next/link'

function GenelCerrahi() {
  return (
    <>
      <section className={styles.headerSection}>
      <h1>GENEL CERRAHİ</h1>
     </section>
     <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Cerrahi Müdahaleler
          </h2>

          <p className=" text-gray-500 md:mt-4 md:block">
          Genel cerrahi, çok çeşitli sağlık problemlerini ve hastalıklarını tedavi etmek için çeşitli cerrahi prosedürlerin gerçekleştirilmesini içeren tıbbi bir disiplindir.
          </p>
          <p className=" text-gray-500 md:mt-4 md:block">
          Genel cerrahlar, özellikle karın ve buna bağlı organlarla ilgili olanlar olmak üzere birçok hastalık tipini teşhis edebilir. Bunlara safra kanalları, karaciğer, pankreas, dalak, ek, ince ve kalın bağırsak, rektum ve mide dahildir. Cerrah ayrıca torasik bölgeyi, tiroiddeki bezleri ve fıtıkları da tedavi edebilir.

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
        src={genelPage}
      />
    </section>


    </>
  )
}

export default GenelCerrahi