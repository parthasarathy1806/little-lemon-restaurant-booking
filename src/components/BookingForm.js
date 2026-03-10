import { useState } from "react";
import validateBooking from "../utils/validation";

export default function BookingForm({ availableTimes=[] }) {

  const [formData, setFormData] = useState({
    date: "",
    time: availableTimes[0] || "",
    guests: 1,
    occasion: "Birthday"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validateBooking(formData);

    if (!valid) {
      setError("Please enter valid booking details");
      return;
    }

    alert("Booking confirmed!");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="booking form">

      <label htmlFor="date">Choose date</label>
      <input
        id="date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        name="guests"
        type="number"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {error && <p>{error}</p>}

      <button type="submit">Submit</button>

    </form>
  );
}