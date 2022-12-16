import heroImg from '../images/mide-balonu-uygulamasi.jpg';
import styles from '../styles/Hero.module.css';



export default function Hero() {

  return (
    <section className={styles.heroBg}>
    <div
      className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
        Genel Cerrahi 
          <strong className="font-extrabold text-white sm:block">
          Endoskopi ve Obezite Tedavisi
          </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl sm:leading-relaxed">
        
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
            href="/iletisim"
          >
            HEMEN BİLGİ AL
          </a>
  
      
        </div>
      </div>
    </div>
  </section>
  
  )
}
