import { useState } from "react";
import BookingForm from "./BookingForm";

export default function BookingPage(){

const [availableTimes,setAvailableTimes] = useState([
"17:00",
"18:00",
"19:00",
"20:00"
]);

return(

<section id="booking">
<h2>Reserve a Table</h2>

<BookingForm availableTimes={availableTimes} />

</section>

);

}