
const MiniFoot= () =>  { 
    return (
<div className="navhome-footer text-center">

        <p className="mt-3">Informazioni · Accessibilità</p>
        <p>Centro assistenza · Privacy e condizioni ▾</p>
        <p>Opzioni per gli annunci pubblicitari</p>
        <p>Pubblicità · Servizi alle aziende ▾</p>
        <p>Scarica l’app LinkedIn · Altro</p>
        <img
          src="../LinkedIn-Logo.wine.png"
          alt="LinkedIn Logo"
          style={{ width: "100px", height: "75px" }}

        />   <span className="mt-2 mb-5 " style={{ fontSize: '15px' }}>LinkedIn Corporation © {new Date().getFullYear()} </span>
      </div>) } ;
      export default MiniFoot;