import "./Intro.css";

const Intro = () => {
  return (
    <div id="accueil" className="intro">
      <h1>Estin bib</h1>
      <p>
        “ Estin Library is a platform that collects all the courses of the Graduate School of Computer and Digital Science and Technology (ESTIN) and that facilitates you to consult these courses in comfort, you will find all the TD, EMD, as well as CORRECTIONS on this virtual library just by clicking on the folder you are looking for”
      </p>
      <img className="bib" src="/estinBib.svg" />
      <img src="/estinBib_mobile.svg" className="bib_mobile" />
      <img className="vecteur" src="/vecteur.svg" />
    </div>
  );
};
export default Intro;
