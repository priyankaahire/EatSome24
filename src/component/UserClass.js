
import React from "react"
import useProfile from "../Hooks/useProfile"
import axios from "axios"
import { GIT_PROFILE_URL } from "../utils/constnant"
class UserClass extends React.Component {
    //% Recived the props inside the Class Base Component using constructor
    constructor(props) {
        console.log(this.props.name + "Child constructor")
        //~^ Complusary one
        //~^ Why Super(Props) : Bsically, using Super we can access the parent class constructor 
        //~^ and if want the props data we have to overite the current props with parent props 
        //~^ that why it "this.props" this.props we can access any where in the component
        super(props)
        //! `state is regiserved word here` its a big Object which content all state varibale we can add whatever we want in state 
        //! Don't like useState Hook to craete seprate-seprate state for varibale (count, count1)
        //% State is created whenevr class instance is created
        this.state = {
            count: 0,
            count2: 0,
            userInfo:{
                name:"Dummy",
                location:"Pune",
                email:"ps"
            }
        }
    }

    async componentDidMount() {
        console.log(this.props.name + "Child componentDidMount")
        try {
           //const data =  await fetch(GIT_PROFILE_URL)
           let profileData = await data.json()
           console.log(profileData)

           this.setState({
            userInfo:profileData[0]
           })
       
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.name + "Child componentDidUpdate")
        //! inside we have to check pervous and current value then will perform the operation bUt using useEffect it all getting resolved we don't need to check
        //! the condition 
        if(this.state.count != prevProps.count || this.state.count2 != prevProps.count2) {
            //code
        }
        //! That's why in useEffect used dependecy array why it array because multiple varibale will change [count, count2]
    }

    componentWillUnmount() {
        console.log(this.props.name + "Child componentDidUpdate: It is called if i go from the about the contact that time it called")
    }
    //% 1. Componunt render with the dummy data first time because constructor is called
    //% 2. componentDidMount willcalled for api then 
    //%     api -> setState (basically updating as per digram) -> render -> componetDidUpdate
    //%  it called setSate then mouting is happned
    render() {
        console.log(this.props.name + "Child render")
       // const { name, location, email } = this.props
        const { count, count2 } = this.state
        const {name, location, email} = this.state.userInfo
        return (
            <div className="user-card">
                <button onClick={() => {
                    //! NEVER UPDATE THE STATE VARIABLES DIRECTLY this.state.count = this.state.count + 1
                    this.setState({ count: this.state.count + 1 })
                }}>Count Incrase</button>
                <span>count:{count} : {count2}</span>
                <span>Name:{name} </span>
                <span>Location:{location} </span>
                <span>Email:{email} </span>
            </div>
        )
    }
}

export default UserClass

/****
 * 
 * ----------- MOUNTING --------------
 * 
 * Constructor (dummy)
 * Render (dummy)
 *       <HTML Dummy />
 * Componnet Did Mount
 *        <API Call>
 *        <this.setState> -> State varibale is updated
 * 
 * 
 * ------------  UPDATE --------
 * 
 * render(API data)
 * <HTML (new API data) -> At this time user will see the real data
 * Componnet Did update
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */