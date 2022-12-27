import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';

const Iletisim = () => {
  const form = useRef();

  const [confirmation, setConfirmation] = useState(false)

  if(confirmation) {
    return (
      <>
    <section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        İletişim formu ile bize ulaşabilirsiniz.
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold text-indigo-600">
          Tel: 0 552 714 80 80
          </a>

          <address className="mt-2 not-italic">
          Alibey Mah. Aziz Sok. No: 3 D: 5 , Silivri / İstanbul
          </address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <h1 classNameName='text-3xl'>Mesajınız için teşekkür ederiz, yakında size geri döneceğiz</h1>
        <br/>
        <Link href='/' className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-700 px-5 py-3 text-white sm:w-auto"> Anasayfaya dön </Link>
      </div>
    </div>
  </div>
</section>

    </>

    )
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gog1qlm', 'template_p70b1bk', form.current, 'xt1WxcLPGf6hh4__y')
      .then((result) => {
          console.log(result.text);
          setConfirmation(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <section className="bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
        İletişim formu ile bize ulaşabilirsiniz.
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold text-indigo-600">
          Tel: 0 552 714 80 80
          </a>

          <address className="mt-2 not-italic">
          Alibey Mah. Aziz Sok. No: 3 D: 5 , Silivri / İstanbul
          </address>
        </div>
      </div>

      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="sr-only" for="name">İsim</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="İsim"
              type="text"
              id="name"
              name="user_name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" for="email">E-posta</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="E-posta"
                type="email"
                id="email"
                name="user_email"
              />
            </div>

            <div>
              <label className="sr-only" for="phone">Telefon</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Telefon"
                type="tel"
                id="phone"
                name="user_phone"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" for="message">Mesaj</label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Mesaj"
              rows="8"
              id="message"
              name="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-700 px-5 py-3 text-white sm:w-auto"
            >
              <span className="font-medium"> Gönder </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </>

  );
};

export default Iletisim;


