import { Link } from 'react-router-dom';
import homeImage from '../../Assets/homepagen.png'
import homeImageAboutMe from '../../Assets/aboutMe.png'
import homeImageSaxar from '../../Assets/sax.png'
import homeImageUpdo from '../../Assets/1.png'
import homeImageBraiding from '../../Assets/braiding.png'

const Home = () => {
  return (
    <div className="HomePage">

      <div className='HomePage-startDiv'>
        <div className="Home-Page-Img">
          <div className='header-mini'>
            <p>Bröllop, Bal & Fest</p>
          </div>
          <img src={homeImage} alt="bild" />
        </div>
      </div>




    <div className="AboutMe-StartPage">

      <div className="AboutMe-StartPage-Text">
        <p>Hej! Jag heter Alice, 24 år från Jönköping, 
        och har en stark passion för håruppsättningar. 
        Jag gick frisörlinjen på gymnasiet och har gjort flera bal- och bröllopsuppsättningar, 
        och genom denna sida vill jag nå ut till fler.</p>
        <button> <Link className="link" to="./AboutMePage">Läs mer om mig</Link></button>
      </div>

      <div className="AboutMe-StartPage-Bild">
         <img src={homeImageAboutMe} alt="bild" />
      </div>
      
    </div>



    <div className="serviceDiv">

      <div className='service-header-div'>
        <p className="service-header">Tjänster</p>
      </div>

        <div className="Service-Split">

        <div className="Service-Card">
          <img src={homeImageUpdo} alt="bild" />
      
        <div className="Service-Box">
          <h2>Håruppsättningar</h2>
          <p>Jag erbjuder ett flertal uppsättningar och diskuterar fram det bästa alternativet utifrån dina önskemål.</p>
          <br />
          <p><span className="text-bold">Heluppsättning</span> från 900kr</p>
          <p><span className="text-bold">Halvuppsättning</span> från 700kr</p>
          <br />
          <button><Link className="link" to="./bookingPage">Boka håruppsättning</Link></button>
        </div>

        </div>

        <div className="Service-Card">
          <img src={homeImageSaxar} alt="bild" />
      
        <div className="Service-Box">
          <h2>Klippningar</h2>
          <p>Jag klipper längre hår, ungefär från axlar och ner.</p>
          <br />
          <p><span className="text-bold">Klippning</span> 350kr</p>
          <br />
          <button><Link className="link" to="./bookingPage">Boka klippning</Link></button>
        </div>

        </div>

        </div>

    </div>


    <div className="HomeToCostumer-Page">

      <div className="Costumer-Img">
        <img src={homeImageBraiding} alt="bild" />
        <div className="Costumer-Text">
        <p>Ibland kan det vara en stressfylld dag inför ett festligt tillfälle, och för att underlätta detta erbjuder jag mig att resa till dig.</p>
        </div>
      </div>
    </div>




    <div className="Questions-Page">

      <div className="Questions-Header">
      <p>FAQ Vanliga frågor du kanske funderar på</p>
      </div>

      <div className="Questions-List">
      
      <details className="faq">
        <summary className="que">Kan man boka provfrisyr?</summary>
        <div className="ans">Ja, vill man boka provfrisyr går det bra. Den görs hemma hos mig och kostar 200kr.</div>
      </details>

      <details className="faq">
        <summary className="que">Hur långt kan du resa och tar du betalt för den?</summary>
        <div className="ans">Jag reser upp till 16 mil från Jönköping Central. Det tillkommer en avgift på 25kr/mil. </div>
      </details>

      <details className="faq">
        <summary className="que">Går det boka för fler personer, till exempel tärnor?</summary>
        <div className="ans">Det går jättebra. För tärnor utöver brud dras 100kr/person av på priset.</div>
      </details>

      <details className="faq">
        <summary className="que">Hur lång tid tar det att göra en uppsättning?</summary>
        <div className="ans">Det tar från ca 30 min till ca 2 timmar beroende på uppsättning.</div>
      </details>

      <details className="faq">
      <summary className="que">Hur sker betalningen?</summary>
        <div className="ans">Betalningen sker via swish.</div>
      </details>

      <details className="faq">
        <summary className="que">Vad händer om jag behöver avboka?</summary>
        <div className="ans">Jag ansvarar inte för kostnader eller skador som uppstår till följd av avbokning från min sida på grund av sjukdom eller annan oförutsedd händelse.</div>
      </details>

      </div>

    </div>


    </div>
  )
}

export default Home;