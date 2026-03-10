import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form heading", ()=>{

render(<BookingForm/>);

const dateLabel = screen.getByText(/choose date/i);

expect(dateLabel).toBeInTheDocument();

});