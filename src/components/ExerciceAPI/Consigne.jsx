/* eslint-disable react/no-unescaped-entities */
export const Consigne = () => {
    return (
      <>
      <h2>Consigne: </h2>
      <div className="p-5 border w-fit">
        1 - Créer un tableau qui contient l'ensemble des produits en BDD.
        <br />
        2- Ajouter, sur chacune des lignes du tableau:
        <ul>
          <li>
            un bouton permettant de supprimer le produit de la ligne
            correspondante
          </li>
          <li>
            un bouton permettant de modifier le produit de la ligne
            correspondante. (Réfléchir comment afficher le formulaire. Peut etre une div qui s'affiche à coté / en dessous, un pop-up ...)
          </li>
        </ul>
        3 - Créer un bouton permettant d'afficher un formulaire pour rajouter un
        produit (réfléchir comment afficher le formulaire. Peut etre une div qui s'affiche à coté / en dessous, un pop-up ...)
        <br />
        4 - Créer un hook personnalisé 'axios' qui retourne: 
        <ul>
          <li>
            loading: une variable crée avec un useState() dans le hook. Sera à false quand pas de chargement, et à true pendant le chargement (le temps que l'on reçoive la réponse du serveur)
          </li>
          <li>
            error: une variable crée avec un useState() dans le hook. Sera la valeur de l'erreur 'attrapée' dans le .catch
          </li>
          <li>
            get: une fonction permettant de faire un 'get'
          </li>
          <li>
            post: une fonction permettant de faire un 'post'
          </li>
          <li>
            put:  une fonction permettant de faire un 'put'
          </li>
          <li>
            remove : une fonction permettant de faire un 'remove' 
          </li>
        </ul>
      </div>
    </>
    );
  }