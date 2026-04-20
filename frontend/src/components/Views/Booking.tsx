import { useForm } from "react-hook-form";

const Booking = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <div className="BookingPage">

      <div className="bookingPage-header">
      <p>Fyll i formuläret så återkommer jag inom 24h med pris och tillgänglighet.</p>
      </div>

 <div className="bookingFormDiv">
    <div className="bookingForm">

    <form className="form" onSubmit={handleSubmit(onSubmit)}>

      <input className="booking-input" {...register("name")} placeholder="Name" />

      <select className="select" {...register("hairupdo")}>
      <option>Välj</option>
      <option>Bal</option>
      <option>Bröllop</option>
      <option>Klippning</option>
      </select>
       
      <input className="booking-input" {...register("costumers")} placeholder="Antal personer" />
      <input className="booking-input" {...register("date")} type="date" />

      <input className="booking-input" {...register("city")} placeholder="Stad/område" />

      <input className="booking-input" {...register("decription")} placeholder="Valfri beskrivning" />

      <button type="submit">Skicka förfrågan</button>
    </form>

    </div>
  </div>

    </div>
  );
}

export default Booking;


// Namn
// Datum för event
// Bal / Bröllop / Annat
// Plats (stad/område)
// Kort beskrivning
// (Valfritt men guld värt) bild-inspiration