import { Link } from 'react-router-dom';
import homeImage from '../../Assets/homePage.png'

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
         <img src={homeImage} alt="bild" />
      </div>
      
    </div>





    <div className="serviceDiv">

      <div>
        <p className="service-header">Tjänster</p>
      </div>

        <div className="Service-Split">

        <div className="Service-Card">
          <img src={homeImage} alt="bild" />
      
        <div className="Service-Box">
          <h2>Håruppsättningar</h2>
          <p>Jag erbjuder ett flertal uppsättningar och diskuterar fram det bästa alternativet utifrån dina önskemål.</p>
          <br />
          <p><span className="text-bold">Heluppsättning</span> från 700kr</p>
          <p><span className="text-bold">Halvuppsättning</span> från 500kr</p>
          <br />
          <button><Link className="link" to="./bookingPage">Boka håruppsättning</Link></button>
        </div>

        </div>

        <div className="Service-Card">
          <img src={homeImage} alt="bild" />
      
        <div className="Service-Box">
          <h2>Håruppsättningar</h2>
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
        <img src={homeImage} alt="bild" />
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
        <summary className="que">Hur långt i förväg behöver jag boka?</summary>
        <div className="ans">Du kan tidigast boka 1 år i förväg och senast 1 månad innan. Med mindre framförhållning finns det risk för att jag inte kan.</div>
      </details>
      <br />
      <details className="faq">
        <summary className="que">Kan man boka provfrisyr?</summary>
        <div className="ans">Ja, vill man boka provfrisyr går det bra. Den görs hemma hos mig och kostar 150kr som läggs till på slutpriset.</div>
      </details>
      <br />
      <details className="faq">
        <summary className="que">Hur långt kan du resa och tar du betalt för den?</summary>
        <div className="ans">Jag reser upp till 16 mil från Jönköping Central. Över 2 mil till kund kommer en avgift på 20kr/mil på resterande mil. </div>
      </details>
      <br />
      <details className="faq">
        <summary className="que">Går det boka för fler personer, till exempel tärnor?</summary>
        <div className="ans">Det går jättebra. För tärnor utöver brud dras 100kr/person av på priset.</div>
      </details>
      <br />
      <details className="faq">
        <summary className="que">Hur lång tid tar det att göra en uppsättning?</summary>
        <div className="ans">Det tar från ca 30 min till ca 2 timmar beroende på uppsättning.</div>
      </details>
      <br />
      <details className="faq">
      <summary className="que">Hur sker betalningen?</summary>
        <div className="ans">Betalningen sker via swish.</div>
      </details>
      <br />
      <details className="faq">
        <summary className="que">Vad händer om jag behöver avboka?</summary>
        <div className="ans">Avbokning ska ske senast 24h innan bokad tid.
        Jag ansvarar inte för kostnader eller skador som uppstår till följd av avbokning från min sida på grund av sjukdom eller annan oförutsedd händelse. Jag försöker i möjligaste mån hjälpa till att hitta en ersättare, men kan inte garantera detta.</div>
      </details>

      </div>

    </div>


    </div>
  )
}

export default Home;