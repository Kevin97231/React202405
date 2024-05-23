import { RequestEx } from "../components/RequestEx";

/* eslint-disable react/no-unescaped-entities */
export const RequestApi = () => {
  return (
    <>
      <h1>Les requêtes HTTP</h1>
      <h2>Rappel</h2>
      <p>
        <a
          className="underline"
          href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods"
        ></a>
      </p>
      <strong>En résumé</strong>
      <ul className="pl-5 list-dics pb-5">
        <li>
          <strong>GET: </strong> Sert à récupérer des données
        </li>
        <li>
          <strong>POST: </strong> Utilisé avec un body, très souvent du JSON (ou
          xml sur d'anciennes appli.). Très utilisé pour les 'CREATE', en
          envoyant un objet dans le 'body' de la requête
        </li>
        <li>
          <strong>PUT: </strong> Même logique que pour le 'POST' à la différence
          que le type 'PUT' est utilisé pour faire des mise à jour
        </li>
        <li>
          <strong>DELETE: </strong> Utiliser pour supprimer une ressource
        </li>
      </ul>

      <h2>Les requêtes avec la bibliotheque 'axios'</h2>
      <a className="underline" href="https://axios-http.com/fr/docs/example">documentation axios</a>

        <p className="pt-5">Les adresses de notre json server:</p>
        
        <ul className="pl-5 list-dics">
            <li>
                <strong>GET: </strong> http://localhost:3001/products
            </li>
            <li>
                <strong>POST: </strong> http://localhost:3001/products
            </li>
            <li>
                <strong>PUT: </strong> http://localhost:3001/products/id
            </li>
            <li>
                <strong>DELETE: </strong> http://localhost:3001/products/id
            </li>
        </ul>

        <div>
            <RequestEx/>
        </div>
    </>
  );
};
