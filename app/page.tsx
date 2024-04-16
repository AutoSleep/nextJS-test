import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import InvoiceStatus from './ui/invoices/status';
import { lusitana } from './ui/font';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div
        className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
      />

      <h1 className="text-blue-600">I Am Bulue</h1>

    	<div className={styles.shape}/>
      <InvoiceStatus status='pending'/>
      <InvoiceStatus status='paid'/>
      <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
      asdas
      </p>
      <AcmeLogo/>
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />

        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing mobile version"
        />
      </div>

      
      
      
    </main>
  );
}
