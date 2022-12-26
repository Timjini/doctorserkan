import React from 'react'
import Image from 'next/image'
import logo from '../images/logo-dark.jpg'
import Link from 'next/link'

function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-white">
  <div
    className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
  >
    <div className="sm:flex sm:items-center sm:justify-between">
      <Image
                    src={logo}
                    alt="Serkan Fatih Ipek Logo"
                    width={200}
                    height={200}
                  />

      <ul className="flex justify-start gap-6 mt-8 sm:mt-0 sm:justify-end">
        <li>
          <Link
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Facebook</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Instagram</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>

        <li>
          <Link
            href="/"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Twitter</span>

            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </Link>
        </li>
      </ul>
      <div>
      <Link
              href="https://Linkpi.whatsapp.com/send?phone=905527148080"
              className="mt-2 inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-5 py-3 text-base font-medium text-white hover:bg-green-700"
            >
              WhatsApp İletişim
            </Link><br/>
            <Link
              href="tel:+90-552-714-80-80"
              className="mt-2 inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-5 py-3 text-base font-medium text-white hover:bg-gray-700"
            >
              Bizi Hemen Arayın
            </Link>
      </div>
    </div>

    <div
      className="grid grid-cols-1 gap-8 pt-8 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
    >
      <div>
        <p className="font-medium text-gray-900">ENDOSKOPİ</p>

        <nav aria-label="Footer Navigation - Services" className="mt-6">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/tedaviler/endoskopik-stent-yerleştirilmesi" className="text-gray-700 transition hover:opacity-75">
              Endoskopik Stent Yerleştirilmesi
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/peg" className="text-gray-700 transition hover:opacity-75">
                PEG
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/kolonoskopi" className="text-gray-700 transition hover:opacity-75">
              Kolonoskopi
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/gastroskopi" className="text-gray-700 transition hover:opacity-75">
              Gastroskopi
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p className="font-medium text-gray-900">SİNDİRİM SİSTEMİ CERRAHİSİ</p>

        <nav aria-label="Footer Navigation - Company" className="mt-6">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/tedaviler/pankreas-kanseri" className="text-gray-700 transition hover:opacity-75">
              Pankreas Kanseri
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/kolon-kanseri" className="text-gray-700 transition hover:opacity-75">
              Kolon Kanseri
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/ince-bagirsak-kanseri" className="text-gray-700 transition hover:opacity-75">
              İnce Bağırsak Kanseri
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/mide-kanseri" className="text-gray-700 transition hover:opacity-75">
              Mide Kanseri
              </Link>
            </li>
            <li>
              <Link href="/tedaviler/yemek-borusu-kanseri" className="text-gray-700 transition hover:opacity-75">
              Yemek Borusu Kanseri
              </Link>
            </li>
          </ul>

        </nav>
      </div>

      <div>
        <p className="font-medium text-gray-900">ENDOKRİN HASTALIKLARI</p>

        <nav aria-label="Footer Navigation - Company" className="mt-6">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/tedaviler/guatr" className="text-gray-700 transition hover:opacity-75">
              Guatr
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/tiroid-kanseri" className="text-gray-700 transition hover:opacity-75">
              Tiroid Kanseri
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/paratiroid-hastaliklari" className="text-gray-700 transition hover:opacity-75">
              Paratiroid Hastalıkları
              </Link>
            </li>
            <li>
              <Link href="/tedaviler/Bobrek-ustu-bezi-hastaliklari" className="text-gray-700 transition hover:opacity-75">
              Böbrek Üstü Bezi Hastalıkları
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p className="font-medium text-gray-900">MEME HASTALIKLARI</p>

        <nav aria-label="Footer Navigation - Legal" className="mt-6">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/tedaviler/jinekomasti" className="text-gray-700 transition hover:opacity-75">
                Jinekomasti
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/fibroadenom" className="text-gray-700 transition hover:opacity-75">
              Fibroadenom
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/meme-kanseri" className="text-gray-700 transition hover:opacity-75">
              Meme Kanseri
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/fibrokistik-hastaligi" className="text-gray-700 transition hover:opacity-75">
              Fibrokistik Hastalığı
              </Link>
            </li>
            <li>
              <Link href="/tedaviler/iyi-huylu-meme-hastaliklari" className="text-gray-700 transition hover:opacity-75">
              İyi Huylu Meme Hastalıkları
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="font-medium text-gray-900">OBEZİTE TEDAVİSİ</p>

        <nav aria-label="Footer Navigation - Legal" className="mt-6">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/tedaviler/tup-mide" className="text-gray-700 transition hover:opacity-75">
              Tüp Mide
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/mide-balonu" className="text-gray-700 transition hover:opacity-75">
              Mide Balonu
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/mide-botoksu" className="text-gray-700 transition hover:opacity-75">
              Mide Botoksu
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="font-medium text-gray-900">SAFRA KESESİ HASTALIKLARI</p>

        <nav aria-label="Footer Navigation - Legal" className="mt-6">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/tedaviler/safra-yollari-kanseri" className="text-gray-700 transition hover:opacity-75">
              Safra Yolları Kanseri
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/safra-kesesi-kanseri" className="text-gray-700 transition hover:opacity-75">
              Safra Kesesi Kanseri
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/safra-kesesi-tasi" className="text-gray-700 transition hover:opacity-75">
              Safra Kesesi Taşı
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="font-medium text-gray-900">KARACİĞER HASTALIKLARI</p>

        <nav aria-label="Footer Navigation - Legal" className="mt-6">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/tedaviler/karaciger-kanseri" className="text-gray-700 transition hover:opacity-75">
                Karaciğer Kanseri
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/karaciger-iyi-huylu-tumorleri" className="text-gray-700 transition hover:opacity-75">
              Karaciğer İyi Huylu Tümörleri
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/karaciger-kisti" className="text-gray-700 transition hover:opacity-75">
              Karaciğer Kisti
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/karaciger-apsesi" className="text-gray-700 transition hover:opacity-75">
              Karaciğer Apsesi
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="font-medium text-gray-900">ANAL BÖLGE HASTALIKLARI</p>

        <nav aria-label="Footer Navigation - Legal" className="mt-6">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/tedaviler/hemoroid" className="text-gray-700 transition hover:opacity-75">
                Hemoroid
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/kil-donmesi" className="text-gray-700 transition hover:opacity-75">
              Kıl Dönmesi
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/anal-fissur" className="text-gray-700 transition hover:opacity-75">
              Anal Fissür
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/anal-fistul" className="text-gray-700 transition hover:opacity-75">
              Anal Fistül
              </Link>
            </li>
            <li>
              <Link href="/tedaviler/anal-apse" className="text-gray-700 transition hover:opacity-75">
              Anal Apse
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="font-medium text-gray-900">KARIN DUVAR FITIKLARI</p>

        <nav aria-label="Footer Navigation - Legal" className="mt-6">
          <ul className="space-y-4 text-sm">
            <li>
              <Link href="/tedaviler/ameliyat-yeri-fitigi" className="text-gray-700 transition hover:opacity-75">
              Ameliyat Yeri Fıtığı
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/gobek-fitigi" className="text-gray-700 transition hover:opacity-75">
              Göbek Fıtığı
              </Link>
            </li>

            <li>
              <Link href="/tedaviler/kasik-fitigi" className="text-gray-700 transition hover:opacity-75">
              Kasık Fıtığı
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <p className="text-xs text-gray-500">
      &copy; 2022. Op. Doktor Serkan Fatih İpek. All rights reserved.
    </p>
  </div>
</footer>

  )
}

export default Footer