import React from 'react';  
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CreateEvent() {
  return (
    <>
    <div className="w-screen min-h-screen flex flex-col text-white">
      <Header userName="Alice" />

      <main className="flex-grow flex flex-col items-center px-4 py-12">
  <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-16 text-center">
    Nous contacter
  </h2>

  <form className="w-full max-w-lg p-6  rounded-lg shadow-lg">
    {/* Nom et prénom*/}
    <div className="mb-8">
      <input
        type="text"
        placeholder="Nom"
        className="w-full p-3 rounded-xl bg-white text-gray-800 placeholder-gray-500"
      />
    </div>

    {/* Message */}
    <div className="mb-16">
      <textarea
        placeholder="Message"
        rows="4"
        className="w-full p-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 resize-none"
      ></textarea>
    </div>

    {/* Bouton */}
    <div>
      <button
        type="submit"
        className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition"
      >
        ENVOYER
      </button>
    </div>
  </form>
        </main>

      <Footer />
    </div>
    </>
  );
}
