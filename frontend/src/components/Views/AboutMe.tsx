import image from '../../Assets/2.png'

const AboutMe = () => {
  return (
    <div className="AboutMePage">

    <div className="OmMig-Header">
      <h3>Om mig</h3>
    </div>

    <div className="OmMig-Page">

    <div className="OmMig-Text">
      <h3>Hur började intresse för hår, egentligen?</h3>
      <br />
      <p>För mig handlade det om nyfikenhet och kreativitet. På gymnasiet valde jag frisörutbildningen, men intresset började långt tidigare - hemma i vardagsrummet. Frisyrer som växte fram framför spegeln, hårnålar utspridda på bordet och min syster som tålmodigt ställde upp som modell och fotograf.
      <br /> <br /> 
      Till slut blev det för roligt för att inte dela. Alice hairstyles började som ett Instagramkonto mest på skoj, en plats att samla idéer och inspiration. Men idéerna fortsatte att flöda, bilderna blev fler och kontot växte till över 10 000 följare.
      <br /> <br />
      Idag är kontot inte längre aktivt, men skapandet finns kvar. Jag gör fortfarande frisyrer när tillfälle ges – till bröllop, bal och andra stunder.</p>
      </div>
      <div className="AboutMe-Img">
      <img src={image} alt='bild' />
    </div>

    </div>

    <div className="AboutMe-BetweenSpace"></div>

    <div className="KontaktaMig-Page">

    <div className="AboutMe-Img2">
      <img src={image} alt='bild' />
    </div>

    <div className="KontaktaMig-Text">
      <h3>Kontakt</h3>
      <br />
      <div><p>Du kan nå mig på både SMS och Mejl, jag brukar svara något snabbare på SMS.</p></div>
      <br /> <br />
    <div className="KontaktaMig-Telefon"><p>Telefon</p><p>0722194008</p></div>
      <br />
      <div className="KontaktaMig-Mejl"><p>Mejl</p><p>alice.lindkvist1@hotmail.com</p></div>
      <br />
    <div className="KontaktaMig-Instagram"><p>Följ mig</p><p><a href="https://www.instagram.com/hairstyles_alice/" target="_blank">Instagram</a></p></div>
    </div>

    </div>

    </div>
  )
}

export default AboutMe;