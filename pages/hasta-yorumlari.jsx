import React from 'react'
import Navbar from '../components/Navbar'

function hastaYorumlari() {
  return (
    <>
    <Navbar />
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <h2 className="text-xl font-bold sm:text-2xl">HASTALARIMIZIN GÖRÜŞLERİ</h2>

    <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2">
      <blockquote>

        <p className="mt-2 text-gray-700">
        "Yetenek bilgi tecrübe güler yüz tüm güzellikler sizde toplanmış hocam iyi ki sizinle yollarımız kesişmiş yoksa hala hayat bana zordu çok teşekkürler."
        </p>

        <footer className="mt-4">
          <p className="text-xs text-gray-500">Vatan Öztürk</p>
        </footer>
      </blockquote>

      <blockquote>
        <p className="mt-2 text-gray-700">
        "Size çok teşekkür ediyorum hocam sizinle tanıştığım için çok mutluyum. Karşınıza hep sizin gibi güzel insanlar çıksın."
        </p>

        <footer className="mt-4">
          <p className="text-xs text-gray-500">Mehmet Akdağ</p>
        </footer>
      </blockquote>

      <blockquote>

        <p className="mt-2 text-gray-700">
        "Verdiğiniz krem tedavisi çok işe yaradı. Sizi herkese tavsiye ediyorum. Bu süreçte yanımda olduğunuz için çok teşekkür ederim sağlıcakla kalın."
        </p>

        <footer className="mt-4">
          <p className="text-xs text-gray-500">Sami Arslan</p>
        </footer>
      </blockquote>
    </div>
  </div>
</section>

    </>
  )
}

export default hastaYorumlari