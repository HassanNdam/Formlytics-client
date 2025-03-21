import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CreateEvent() {
  return (
    <>
      <Header userName="Alice" />
      <main className="max-w-xl mx-auto mt-10 p-4">
        <h2 className="text-2xl font-bold mb-4">Créer un Évènement</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Titre de l'évènement" className="border p-2 rounded" />
          <input type="date" className="border p-2 rounded" />
          <textarea placeholder="Description" className="border p-2 rounded"></textarea>
          <input type="text" placeholder="Lieu" className="border p-2 rounded" />
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Créer un évènement
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
