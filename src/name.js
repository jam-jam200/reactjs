// function Name(props) {
//     return(
//         <div className="myName">
//             <p>My name is {props.firstname} {props.surname}</p>
//         </div>
//     );

import react from "react";
import { render } from "react-dom";

// }
function Name({firstname, surname, age}) {
   return(
    <div className="me">
        <p>My name is {firstname} {surname}</p>
        <p>I am {age} years old</p>
    </div>
   );
}
export default Name;


