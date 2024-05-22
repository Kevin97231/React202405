/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function JsxTheorie() {

    const title =
    "Bonjour <strong>tout le monde</strong>, bienvenue sur notre appli react !";

  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  // const user = undefined;

  const formatName = (user) => user.firstName + " " + user.lastName;

  const img = "../src/assets/react.svg";

  const style = { color: "blue", backgroundColor: "gray" };

  const handleClick = (e) => {
    console.log(e);
    alert("j'ai cliqué !");
  };

  const fruits = ["banane", "pomme", "abricot", "poire"];

  return (
    <>
      {/* En jsx les balises sont automatiquement échappé  */}
      <h1>{title}</h1>

      {/* Très déconseillé, à utiliser dans des cas parrticuliers en faisant très attention */}
      <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>

      <h1 id="monId" className="myClass">
        {" "}
        Bonjour !
      </h1>

      <p>Salut les amis !</p>
      {/* <p>{formatName(user)}</p> */}

      <div>
        <img src={img} alt="" />
      </div>

      {/* affichage 'conditionnel' */}
      {/* En js quand on fait une vérif. sur 'user' , ce sera true si 'user' n'est pas indéfinie */}

      {user ? <h2>Bonjour {formatName(user)}</h2> : <h1>Bonjour inconnu !</h1>}

      {/* On affiche le <h2>......</h2> uniquement quand user n'est pas 'undefined' */}
      {user && <h2>Bonjour {formatName(user)}</h2>}

      <h1 style={style}>Titre en rouge</h1>

      <button onClick={handleClick}>cliquez !</button>

      <button onClick={() => alert("j'ai encore cliqué !")}>
        cliquez une deuxième fois !
      </button>

      {/* Affichage d'un tableau de données avec un .map() */}
      {/* La clé utilisée doit être unique pour éviter les comportements étranges qui peuvent 
      être provoqués si l'état du composant change  */}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {/* Exemple avec des composants enfants: */}

      <Children color="blue">
        {" "}
        Ici le contenu de la props. nommée 'children'{" "}
      </Children>

      <Children2 color="blue" id="myId" className="myClassName">
        Bonjour, je suis le deuxième enfant
      </Children2>
    </>
  );
}

const Children = ({ color, children = "passe moi un texte !" }) => {
  const props = {
    id: "myId",
    className: "myClassName",
  };

  return (
    <>
      <p>Je suis le composant enfant !</p>
      <p>voici la couleur envoyée: {color}</p>
      <p>{children}</p>

      <h2 style={{ color: color }} {...props}></h2>
    </>
  );
};

// Exemple précédent n'est pas très parlant (  {...props} )
// La ou ce sera intéressant:

const Children2 = ({ color, children, ...props }) => {
  return (
    <>
      <h1 style={{ color: color }} {...props}>
        {children}
      </h1>
    </>
  );
};

export default JsxTheorie;