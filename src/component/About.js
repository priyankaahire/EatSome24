import useLoginStorage from "../Hooks/useLoginStorage";
import User from "./Profile/User";
import React from "react";

// export const AboutComponent = () => {
//     return (
//         <>
//         <div>
//             <h1>About</h1>
//             <h2>Let's talk about EatSome24</h2>
//             {/* <User name={"Priyanka  (Funcation Component)"} location={"Pune"} email={"psahire01@gmail.com"}/> */}
//             <UserClass name={"Priyanka  (Class Component)"} location={"Pune"} email={"psahire01@gmail.com"}/>
//         </div>
//         </>
//     )
// }

//~* Class base component to understand the LifeCycle of React

class AboutComponent extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
    this.loggedInUser = useLoginStorage("username")
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
    //% API Called inside this: Because it is called after rendering (mounting) component
  }
  render() {
    console.log("Parent render");
    return (
      <>
        <div>
          <h1>About</h1>
          <div>
            LoggedIn User
              
            {  this.loggedInUser && <h1 className="text-xl font-bold">{this.loggedInUser}</h1> }
             
          </div>
          <h2>Let's talk about EatSome24</h2>
          <User
            name={"Priyanka  (Funcation Component)"}
            location={"Pune"}
            email={"psahire01@gmail.com"}
          />
          {/* <UserClass name={"Priyanka  Ahire (Class Component)"} location={"Pune"} email={"psahire01@gmail.com"}/> */}
          {/* <UserClass name={"Hadeel  Faries (Class Component)"} location={"Isreal"} email={"Hadeel@gmail.com"}/> */}
        </div>
      </>
    );
  }
}

export default AboutComponent;

/*
//! NOT THIS WAY
    - Parent Constructor
    - Parent render

        - Priyanka Constructor
        - Priyanka render
        - Priyanka componentDidMount

        - Hadeel Constructor
        - Hadeel render
        - Hadeel componentDidMount
   
    - Parent componentDidMount
//! Correct ONE 
    - Parent Constructor
    - Parent render

        - Priyanka Constructor
        - Priyanka render

        - Hadeel Constructor
        - Hadeel render

        - Priyanka componentDidMount
        - Hadeel componentDidMount

    - Parent componentDidMount
*/
