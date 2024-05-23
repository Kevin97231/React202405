import { Component } from "react";

export class ClassComponent extends Component {

 
    // Le constructeur est appelé lorsqu'une instance de la classe est créée.
    constructor(props) {
        // Appel au constructeur parent avec les props
        super(props);
        // Initialisation de l'état local count à 0
        this.state = {
          count: 0,
        };
        // Lier la méthode incrementCount à l'instance actuelle de la classe
        this.incrementCount = this.incrementCount.bind(this);
      }
    
      // componentDidMount est appelé après que le composant est monté dans le DOM.
      componentDidMount() {
        console.log("Class Component mounted");
      }
    
      // componentWillUnmount est appelé juste avant que le composant soit retiré du DOM.
      componentWillUnmount() {
        console.log("Class Component unmounted");
      }
    
      // Méthode pour incrémenter le compteur
      incrementCount() {
        // Utilisation de setState pour mettre à jour l'état local count
        // prevState représente l'état précédent du composant
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      }
    
      // La méthode render est obligatoire et retourne le JSX à afficher.
      render() {
        return (
          <div>
            <h1>Class Component</h1>
            {/* Affichage du compteur et bouton pour incrémenter */}
            <p>Je suis le composant class !</p>
    
            <div className="flex w-fit border p-2 m-5">
              <p className="pr-5">Count: {this.state.count}</p>
              <button className="btn btn-primary" onClick={this.incrementCount}>+</button>
            </div>
          </div>
        );
      }

}