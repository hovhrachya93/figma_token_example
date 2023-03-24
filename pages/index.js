import Head from 'next/head';
import { useEffect } from 'react';
import fs from 'fs';

import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const callAPI = async () => {
    try {
      console.log('callAPI try-->>');

      const res = await fetch(
        `https://api.jsonbin.io/v3/b/6418586dc0e7653a058b38ea`,
        {
          method: 'GET',
          headers: {
            'X-Master-Key':
              '$2b$10$LVVG7Go0EM7S4iH5/RafEOB0vUsTjRnKMGLf2TP4NsVRakHpfJmnK',
          },
        }
      );
      const data = await res.json();
      console.log('callAPI data-->>', data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log('callAPI', callAPI);
  useEffect(() => {
    callAPI();
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>dsd</main>
    </>
  );
}
