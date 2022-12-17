import React from 'react'
import Link from 'next/link'

function CTA() {
  return (

    <div className="">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-indigo-700 sm:text-3xl">
          <span className="block">HOCAYA SORULARINIZ İÇİN</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              HEMEN İLETİŞİME GEÇİN
            </Link>
          </div>
        </div>
      </div>
    </div>


  )
}

export default CTA