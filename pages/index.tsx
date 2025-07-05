import Head from 'next/head';
import type { NextPage } from 'next';

/**
 * Домашняя страница Oru
 */
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oru — Главная</title>
        <meta name="description" content="Oru: социальная сеть с карьерным порталом" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-grow p-4 bg-background text-primary">
        <h1 className="text-3xl font-bold mb-4 text-center">Добро пожаловать в Oru</h1>
        <p className="text-lg text-center max-w-xl">
          Это ваша социальная сеть с механиками Tinder и карьерным порталом. Начните знакомиться и развивать карьеру уже сегодня!
        </p>
      </main>
    </>
  );
};

export default Home;
