import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FillQuestionnaire() {
  const questionnaires = [
    { id: 1, title: 'Questionnaire Satisfaction' },
    { id: 2, title: 'Retour sur évènement' },
  ];

  return (
    <>
      <Header userName="Alice" />
      <main className="max-w-xl mx-auto mt-10 p-4">
        <h2 className="text-2xl font-bold mb-4">Questionnaires Disponibles</h2>
        <ul className="space-y-4">
          {questionnaires.map(q => (
            <li key={q.id} className="flex justify-between items-center border p-2 rounded">
              <span>{q.title}</span>
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
                Remplir
              </button>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
