import React from 'react';  // ← Nécessaire pour utiliser JSX
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header userName="Alice" />
      <main className="p-10 text-center">
        <h1 className="text-3xl font-bold mb-6">
          Bienvenue sur Formlytics 🎉
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Se connecter
        </button>
      </main>
      <Footer />
    </>
  );
}
