export default function validateBooking(data){

if(!data.date){
return false;
}

if(data.guests < 1 || data.guests > 10){
return false;
}

return true;

}