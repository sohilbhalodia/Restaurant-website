window.Location.call = Home();

/* Start to hide all div */
function hideDiv(){
    window.document.getElementById("idHomePage").style.display = 'none';
    window.document.getElementById("idMenuPage").style.display = 'none';
    window.document.getElementById("idBookTableDesign").style.display = 'none';
    window.document.getElementById("idBookingForm").style.display = 'none';
    window.document.getElementById("idBookingMessage").style.display = 'none';
    window.document.getElementById("idaboutus").style.display = 'none';
    window.document.getElementById("idContactUS").style.display = 'none';
    window.document.getElementById("idFormBooking").reset();
}
/* End to hide all div*/ 

/* Start to enable home page div */
function Home(){
    hideDiv();
    window.document.getElementById("idHomePage").style.display = 'flex';
}
/* End to home page div */

/* Start to enable menu page div */
function Menu(){
    hideDiv();
    window.document.getElementById("idMenuPage").style.display = 'grid';
}
/* End to menu page div */

/* Start to enable book page div */
function Book(){
    hideDiv();
    window.document.getElementById("idBookTableDesign").style.display = 'flex';
    window.document.getElementById("idBookingForm").style.display = 'flex';
    window.document.getElementById("idFormBooking").style.display = 'block';
}
/* End to book page div */

/* Start to submit button */
function submitform(){
    var Formname = document.getElementById("idbookingName").value;
    var Formdate = document.getElementById("idbookingDate").value;

    window.document.getElementById("idFormBooking").style.display = 'none';
    window.document.getElementById("idBookingMessage").style.display = 'flex';

    window.document.getElementById("idFormname").innerHTML = "Dear  " + Formname;
    window.document.getElementById("idBookingDate").innerHTML = "Your booking is confirmed on date  " + Formdate;

}
/* End to book page div */

/* Start to enable about page div */
function Aboutus(){
    hideDiv();
    window.document.getElementById("idaboutus").style.display = 'flex';
}
/* End to about page div */

/* Start to enable contact page div */
function ContactUS(){
    hideDiv();
    window.document.getElementById("idContactUS").style.display = 'flex';
}
/* End to contact page div */
