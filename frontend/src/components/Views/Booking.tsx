import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from 'react';

type BookingFormData = {
    name: string;
    email: string;
    phone: string;
    hairupdo: string;
    date: string;
    costumers: string;
    city: string;
    description: string;
  };
  
const Booking = () => {

  const [success, setSuccess] = useState(false);

  const { register, handleSubmit } = useForm<BookingFormData>();


  const onSubmit = (data: BookingFormData) => {
    emailjs.send(
      "service_o4v7kyl",
      "template_5grdwnq",
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        hairupdo: data.hairupdo,
        date: data.date,
        costumers: data.costumers,
        city: data.city,
        description: data.description
      },
      "HJ_n2zNDsnPluGk2U"
        ).then(() => {
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      });
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
      <input className="booking-input" {...register("email")} placeholder="E-post" />
      <input className="booking-input" {...register("phone")} placeholder="Telefonnummer" />

      <select className="select" {...register("hairupdo")}>
      <option>Välj</option>
      <option>Bal</option>
      <option>Bröllop</option>
      <option>Klippning</option>
      </select>
       
      <input className="booking-input" {...register("costumers")} placeholder="Antal personer" />
      <input className="booking-input" {...register("date")} type="date" />

      <input className="booking-input" {...register("city")} placeholder="Stad/område" />

      <input className="booking-input" {...register("description")} placeholder="Beskrivning(valfri)" />

      <button className={success ? "bookingBtn success" : "bookingBtn"} type="submit">Skicka förfrågan</button>
      {success && <p className="successText">Mail skickat ✔</p>}
    </form>

    </div>
  </div>

    </div>
  );
}

export default Booking;
