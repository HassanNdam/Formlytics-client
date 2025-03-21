import React from 'react';  // ← Nécessaire pour utiliser JSX
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
    <Header userName="Kevin Glass" />

    <main className="flex-grow flex flex-col items-center justify-center px-4">
       <h1 className="text-4xl text-white md:text-5xl font-bold text-center mb-6 leading-loose md:leading-relaxed">
           CRÉER ET GÉRER VOS <br />ÉVÉNEMENTS AVEC FORMLYTICS
       </h1>  
      <button className="bg-blue-500 text-dark px-6 py-2 rounded hover:bg-blue-600 transition mb-16 mt-4">
        Se connecter
      </button>
      <section className="w-full px-4 py-12 bg-dark text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        POURQUOI FORMLYTICS
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Bloc 1 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-6xl font-extrabold text-dark mb-2">1.</span>
          <p className="text-xl text-white font-semibold">Interface Intuitive</p>
        </div>

        {/* Bloc 2 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-6xl font-extrabold text-dark mb-2">2.</span>
          <p className="text-xl text-white font-semibold">Analyse en temps réel</p>
        </div>

        {/* Bloc 3 */}
        <div className="flex flex-col items-center text-center">
          <span className="text-6xl font-extrabold text-dark mb-2">3.</span>
          <p className="text-xl text-white font-semibold">Personnalisation poussée</p>
        </div>
      </div>
    </section>
    </main>

    <Footer />
  </div>
  );
}
