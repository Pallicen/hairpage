import homeImage from '../../Assets/homePage.png'

const Home = () => {
  return (
    <div className="HomePage">


      <div className='HomePage-startDiv'>
        <div className="Home-Page-Img">
          <div className='header'>
            <p>Bröllop, Bal & Fest</p>
          </div>
          <img src={homeImage} alt="bild" />
        </div>
      </div>




    <div className="AboutMe-StartPage">
      <div className="AboutMe-StartPage-Text">
        <p>Hej! Jag heter Alice, 23 år från Jönköping, 
        och har en stark passion för håruppsättningar. 
        Jag gick frisörlinjen på gymnasiet och har gjort flera bal- och bröllopsuppsättningar, 
        och genom denna sida vill jag nå ut till fler.</p>
        <button> <a href="/AboutMe">Läs mer om mig</a></button>
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
          <button><a href="/booking">Boka</a></button>
        </div>

        </div>

        <div className="Service-Card">
          <img src={homeImage} alt="bild" />
      
        <div className="Service-Box">
          <h2>Håruppsättningar</h2>
          <p>Jag erbjuder ett flertal uppsättningar och diskuterar fram det bästa alternativet utifrån dina önskemål.</p>
          <br />
          <p><span className="text-bold">Heluppsättning</span> från 700kr</p>
          <p><span className="text-bold">Halvuppsättning</span> från 500kr</p>
          <br />
          <button><a href="/booking">Boka</a></button>
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
        <div className="ans">Du kan tidigast boka 1 år i förväg, men med mindre framförhållning finns det risk för att jag inte kan.</div>
      </details>
      <br />
      <details className="faq">
        <summary className="que">Kan man boka provfrisyr?</summary>
        <div className="ans">Ja, vill man boka provfrisyr går det bra. Den görs hemma hos mig och kostar 200kr.</div>
      </details>
      <br />
      <details className="faq">
        <summary className="que">Hur långt kan du resa och tar du betalt för den?</summary>
        <div className="ans">Jag reser upp till 4 mil från Jönköping Central. </div>
      </details>
      <br />
      <details className="faq">
        <summary className="que">Går det boka för fler personer, till exempel tärnor?</summary>
        <div className="ans">Det går jättebra.</div>
      </details>
      <br />
      <details className="faq">
        <summary className="que">Hur lång tid tar det att göra en uppsättning?</summary>
        <div className="ans">Det tar från ca 30 min till 2 timmar beroende på vilken uppsättning.</div>
      </details>
      <br />
      <details className="faq">
      <summary className="que">Hur sker betalning</summary>
        <div className="ans">Via swish.</div>
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