import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CreateTemplate() {
  return (
    <>
      <Header userName="Alice" />
      <main className="max-w-xl mx-auto mt-10 p-4">
        <h2 className="text-2xl font-bold mb-4">Créer un Modèle de Questionnaire</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Titre de la question" className="border p-2 rounded" />
          <textarea placeholder="Contenu" className="border p-2 rounded"></textarea>
          <select className="border p-2 rounded">
            <option value="">Format</option>
            <option value="texte">Texte</option>
            <option value="choix">Choix multiple</option>
          </select>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
            Créer un modèle de questionnaire
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
