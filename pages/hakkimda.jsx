import React from 'react'
import Image from 'next/image'
import serkan from '../images/dr_serkan-fatih-ipek.jpg'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function hakkimda() {
  return (
    <>
    <section className={styles.hakkimdaWrapper}>
    <Image src={serkan} alt="serkan" width={350} height={350} />
  <div className={styles.hakkimdaContent}>
    <h1>Op. Dr. Serkan Fatih İpek Kimdir?</h1>
    <br/>
    <h2>Eğitim ve Uzmanlık</h2>
    <ul>
      <li>1993 – 1999  Eskişehir Osmangazi Üniversitesi Tıp Fakültesi</li>  
      <li>2000 – 2004  Bakırköy Dr.Sadi Konuk Eğitim Ve Araştırma Hastanesi Genel Cerrahi Asistanlığı Deneyim</li> 
      <li>2004-2005 Bakırköy Dr. Sadi Konuk Eğitim ve Araştırma Hastanesi Genel Cerrahi Uzmanı</li> 
      <li>2005-2006 Gölcük Asker Hastanesi Genel Cerrahi Uzmanı</li> 
      <li>2006-2008 Kastamonu Taşköprü Devlet Hastanesi Genel Cerrahi Uzmanı</li> 
      <li>2008-2018 Silivri Kolan Hastanesi Başhekimi Ve Genel Cerrahi Uzmanı</li> 
      <li>2018- Halen Silivri Medical Park Hastanesi Genel Cerrahi Uzmanı</li>
      <li>2020 – Halen kendi kliniğinde hizmet vermektedir.</li>
    </ul>

    <h2>Kurs ve Sertifikalar</h2>
      <ul>
        <li>Laparoskopik Cerrahi Sertifikası</li>
        <li>Endoskopi Sertifikası</li>
        <li>Kolon Ve Rektum Hastalıkları 5. Uzmanlık Sonrası Eğitim Kursu</li>
        <li>Uluslararası Katılımlı 3.Bölgesel Travma Ve Acil Cerrahi Kongresi</li>
        <li>10th European Congress Of Trauma And Emergency Surgery</li>
        <li>Uygulamalı Proctoloji Kursu</li>
        <li>Mesleki Üyelikler</li>
        <li>Türk Tabipler Birliği</li>
      </ul>
  </div>
  <div className={styles.hakkimdaContent2}>
    <h2>Bilimsel Yayınlar</h2>
      <ul>
        <li>Malıgnancy Rısk Of Gastric Ulcers:Could It Be Hıgher Than The Expected Values?</li>
        <li>Porçöz(%25 Ct 200 Asit) Alımına Bağlı Üst Sindirim Sisteminde Ağır Hasar Oluşan 2 Olgunun Klinik Ve Endoskopik Bulguları</li>
        <li>Kasık Fıtıklarında Anterior Preperitoneal Mesh Takviyesi</li>
        <li>Non-Variseal Üst Gis Kanamalarında Acil Endoskopinin Yeri</li>
        <li>Komplike Akut Apandisitlerde Cilt Kapatılmalı Mı?</li>
        <li>İnguinal Herni Tamirinde Anterior Preperitoneal Mesh Ve Lichtenstein Mesh Takviyelerinin Karşılaştırılması</li>
        <li>Sol Kasık Bölgesinde Littre Fıtığı: Olgu Sunumu</li>
      </ul>
   </div>   
   <Link href="/iletisim" className={styles.hakkimdaButton}>Randevu Al</Link>
    </section>

    </>
  )
}

export default hakkimda