import Link from "next/link";

// À REMPLACER par ton adresse e-mail de contact (elle sert pour la garantie).
const EMAIL = "cabas.sav@outlook.fr";

export default function Home() {
  return (
    <main>
      <div className="wrap">
        <span className="marque">Cabas</span>

        <h1>Tes courses de la semaine, dans ton budget.</h1>
        <p className="sous">
          Dis-nous ce que tu veux dépenser et combien vous êtes. Cabas te
          prépare les menus et la liste de courses.
        </p>

        <section className="douleur">
          <span className="chiffre">
            Plusieurs dizaines d’euros de trop, chaque semaine.
          </span>
          <p>
            Sans plan, on dépasse le budget, et une partie des courses finit à
            la poubelle. Ce n’est pas un manque de volonté : organiser sept
            repas autour d’un budget demande une heure que personne ne prend.
          </p>
        </section>

        <section>
          <h2>Ce que tu reçois</h2>
          <ul className="benefices">
            <li>
              <strong>Des menus à ton budget</strong>
              Sept repas pensés pour la somme que tu fixes et le nombre de
              personnes à table.
            </li>
            <li>
              <strong>Une liste classée par rayon</strong>
              Tu fais le tour du magasin une seule fois, avec le total estimé
              avant d’arriver.
            </li>
            <li>
              <strong>Rien n’est gaspillé</strong>
              Ce qui reste d’une semaine passe à la suivante.
            </li>
          </ul>
        </section>

        <section className="ticket" id="abonnement">
          <h2>Ton abonnement</h2>
          <div className="ligne">
            <span>Cabas, pour ton foyer</span>
            <span>9&nbsp;€ / mois</span>
          </div>
          <div className="ligne">
            <span>Menus et liste de courses chaque semaine</span>
          </div>
          <div className="ligne">
            <span>Premier plan reçu sous 24&nbsp;h</span>
          </div>
          <div className="total">
            <span>9&nbsp;€ / mois</span>
            <span>0,30&nbsp;€ / jour</span>
          </div>
        </section>

        <section className="garantie">
          <strong>Satisfait ou remboursé pendant 14 jours.</strong>
          <p>
            Si ton plan ne te convient pas, écris-nous à {EMAIL} dans les 14
            jours qui suivent ton paiement. Tu es remboursé en totalité, sous
            5 jours ouvrés, sans avoir à te justifier.
          </p>
        </section>

        <section className="faq">
          <h2>Questions fréquentes</h2>
          <details>
            <summary>Est-ce que ça marche pour mon cas ?</summary>
            <p>
              Cabas s’adapte au budget que tu fixes et au nombre de personnes à
              table, que tu sois seul, en colocation ou en famille. Si ton
              premier plan ne te convient pas, tu es remboursé.
            </p>
          </details>
          <details>
            <summary>Combien de temps ça me prend ?</summary>
            <p>
              Environ une minute pour nous donner ton budget et le nombre de
              personnes. Le reste est déjà préparé.
            </p>
          </details>
          <details>
            <summary>Et si je veux arrêter ?</summary>
            <p>
              Tu résilies quand tu veux, sans justification et sans frais. Et
              pendant les 14 premiers jours, tu peux te faire rembourser.
            </p>
          </details>
          <details>
            <summary>À quoi sert ce que je paie ?</summary>
            <p>
              À recevoir chaque semaine tes menus et ta liste de courses,
              ajustés à ton budget, sans y passer l’heure que ça demande
              d’habitude.
            </p>
          </details>
        </section>

        <footer className="pied">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/cgv">CGV</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </footer>
      </div>

      <div className="barre">
        <a className="bouton" href="#abonnement">
          Commencer ma semaine
        </a>
        <p className="note">
          Sans engagement, résiliable à tout moment · Satisfait ou remboursé
          14&nbsp;jours
        </p>
      </div>
    </main>
  );
}
