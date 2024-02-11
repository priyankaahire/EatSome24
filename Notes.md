## Documentation
   https://react.dev/learn/


### Question 

In below Line we are managing the state 
const [allRestaurants, setAllRestaurants] = useState([]);
Genrally on chnage, (Handler) we update the state but one question in mind is ?
how it is upating the state after "CONST" genrally, we can't chnage the const value
But react one each change react render the the application and this is the very fast process of react 

# Parcel
 - Dev Build
 - Local Server
 - HMR = Hot Module Replacemenet
 - File watching Algorithum - written in c++
 - Catching - Faster Builds
 - Imgae Optimization
 - MInification
 - Building
 - Compress
 - Consistent Hashing
 - Code Splitting
 - Differential Bundling - support older browsers
 - Diagnostic
 - Error handling
 - Https
 - Tree Shaking - remove unused code
 - Different dev and prod bundles


### UseEffect Hook

        1. If no dependecy array            => useEffect is called on every render (On each click it called)
                useEffect (() =>{
                        getResturantApiResponse()
                })
        2. If dependecy array is empty = [] => Then useEfect called on intial render (just once) component is render
                useEffect (() =>{
                        getResturantApiResponse()
                }, [])
        3. If dependecy array is not empty  => Then useEffect called when dependecy changes
                useEffect (() =>{
                        getResturantApiResponse()
                }, [searchText])
 
     1.  Callback function
     2.  Dependency array: Not mendatory: It will change the behaviour of the every the render

it is called using two arguments: It is called every render of componenet
ex. Every time my Resturant component is called or render useEffect is called, But this dependecy array changed the behaviour of the render

### useState Hook

        const [filteredRestaurants, setFilteredRestaurants] = useState([]);
                1. Don't create useState outside of the component
                2. It is use to create the local state variable inside your component 
                3. Always try to create the top the component
                4. Never create ths useState inside the if..else , for.. loop and function () condition
        Because, 


### Rounting configuartion
  https://reactrouter.com/en/main/routers/picking-a-router

  In the documnetation lot of router But `createbrowserrouter` is   recommended for all
  ### createBrowserRouter: 


    1. Content the array of object with path and second with the which componnet you want to load
    2. "appRouter" is the configuration we created now we have to  passed this configuration to the 
    3. RouterProvide is required: Provide routing configuartion to aour app earlier we directly render the appLayout (root.render(<AppLayout />)), and this RouterProvider exported from the react-dom librray
    
    WHO WROTE THE CODE FOR US ...........??????

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout></AppLayout>
    },
    {
        path:"/about",
        element:<AboutComponent />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
//! root.render(<AppLayout />)
1. We will provide the Roter to the root render
2. It will work if I wrote in Brouser "http://localhost:1234/about" it will route to the about page
root.render(<RouterProvider router={appRouter} />) 

If somthing start from the "use" keyword its mean it is hook it is decided by react industry

### Children Route
  If we want to display everyting inside the body we don't want to change the 

### Link
   Link is wrapper over the <a> tag so in DOM link is not avilable it is replace by <a> and React DOM keeping a track of this Link

### Classy: Class base component

### Class Base Component:                                             
1. It is class which is return the peace of jsx,It is class extends the "React.componnet" and which as render method which return the JSX
2. Export import in same as function component <UserClass />
3. Props pass = <User name={{"Priyanka Class"}}>
4. Props Received (Inside the constuctor)
        class UserClass extends React.Component {
        constructor(props) {
                //~^ Complusary one
                //~^ Why Super(Props) : Bsically, using Super we can access the parent class constructor 
                //~^ and if want the props data we have to overite the current props with parent props 
                //~^ that why it "this.props" this.props we can access any where in the component
                super(props)
                console.log(props)
                }
        render() {
                return (
                <div>
                <h2>Name:{this.props.name} </h2>
                </div>
                )
        }
5. State varibale in class Component (create and update): 
                state is called once your component instance is created, what is instance creation
                Genrally, when browser render the componnet it mean they monting or loading that html so in "class base component" we called in 
                instance of that called. i.e whenever we said we are loading on web page the class component its mean we are in creating instance of that class and constructor is called , so it is the best place to received props and create the state Variable
                `this.state is regiserved word here` its a big Object which content all state varibale we can add whatever we want in state
                Don't like useState Hook to craete seprate-seprate state for varibale (count, count1)
                Create:
                        this.state = {
                                count:0,
                                count2:0
                        }
                Update: On button click will Increate the count of this
                        this.setState({count:this.state.count + 1}): we will passed the object of variable and once u click it is re-rendering the component
                Note* It will only update the the update Object it will touching to the Count1 because it always compre the 2 Object
}
export default UserClass
### Function Base Componet: 
1. It is function which return the peace of jsx
2. Export and import <User />
3. Props pass = <User name={{"Priyanka Function"}}>
4. Props Received
        const User = (props) => {
        return (
                <h1>{props.name}</h1>  
        )
        }
        ------- OR Destructure it--------
        const User = ({name}) => {
        return (
                <h1>{name}</h1>  
        )
        }
        export default User
5. useState hook to create the state (create and update): Basically it is called once your component is render or mount
        Create: const [count] = useState(0); const [count2] = useState(1) 
        Update: const [count, setCount] = useState(0)
                On button click will Increate the count of this
                useEffect(()=>{
                 setCount(1)
                }, [])

 ### Life cycle of Compnent

1. constructor
2. Render
3. componetDidMount(): didMount means componet rendering is Done its method called   
    This is the basic life cycle But what about the Parent-Child Component Call
    1. Parent Constructor
    2. Parnet Render: Inside this (AboutComponet) they found   (UserClassComponet)     then it will start the life cycle of Childe
    3. Child Constructor
    4. Child Render
    4. Child componentDidMount
    5. Parent componentDidMount

    ### WHY THIS componentDidMount() 
        It is for to make apiCall()  : If you notice in functional componet we make API call inside the useEffect liek 1st is the
        callback and second parm is dependecy array and inside that we fecthApicall() because first we render the component(quickly) and the useEffect is initiate after rendering the component we have to called the api the same way inside. If we not render the component and first waiting for the data to fill the data and render on browser so it will take time nothing will bee display on UI if we wait for data that's why 
        quick rendering -> api call -> render the data
        `Class Component` same way first quicky render component -> make it api call inside didMount -> render data (fill the component)

     ### If same component 2 instance is created then HOW LIFECYCLE WILL BE WORK ........?????
     <UserClass name={"Priyanka  Ahire (Class Component)"} location={"Pune"} email={"psahire01@gmail.com"}/>
     <UserClass name={"Hadeel  Faries (Class Component)"} location={"Isreal"} email={"Hadeel@gmail.com"}/>

        https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
        ex. AboutComponnet & UserClassComponent

        It's a fun let's see
          But why this  why componentDidMount called at the end for the 2 instance of same class
                - Parent Constructor
                - Parent render

                        - FirstChild Constructor
                        - FirstChild render

                        - SechondChild Constructor
                        - SechondChild render

                        - FirstChild componentDidMount
                        - SechondChild componentDidMount
                - Parent componentDidMount

        Here First and Second child did mount called after both instance constructor and render is called, because 
        This is the beauty of React React is that's why it is fast (Check the Lifecycle methods Digram)
       
        When compount is mounted mounting in 2 phase that's why people said react is phase that's why React is Fast
         2 Phases
           1. Render phase
           2. Commit phase
            in this 2 phases of `Mounting, Updating Unmounting` will work let's see

            When comppunt is mounting 1st construtor is called then render is called both are in render phase then react Updating the DOM onece DOM is updating then componentDidMount is called
            that's why it is best way to called "API" and this "Mounting phase" happende for every Child and evry Parent. 
              1. Render phase: Constructor
              2. Commit phase: React actually render the DOM and componet Did mount is called

              Once it star exicution Parent component start render the constructor then renderting it while render it Found 2 UserClass then it start the life cycle of 
              UserClass with constructor and render React will not renderning first child did mount that's why it fast it is batch the render Phase for this 2 Child . 
              render 1st and the commit for both Happened that's why 

              React is trying to upadate the DOM and DOM manuplation is most expensive updating the DOM , loading the DOM so react want's to batch the renderning
              In Constructor phase react is renderning and at the rendering time it is reconcilation (Object compare the to diff vertual DOM)

              ### *Note: useEffect is backGroundly is not using componentDidMount

### componentDidUpdate:
        componentDidUpdate(prevProps, prevState) {
                        console.log(this.props.name + "Child componentDidUpdate")
                        //! inside we have to check pervous and current value then will perform the operation bUt using useEffect it all getting resolved we don't need to check
                        //! the condition 
                        if(this.state.count != prevProps.count || this.state.count2 != prevProps.count2) {
                        //code
                        }
                        //! That's why in useEffect used dependecy array why it array because multiple varibale will change [count, count2]
                }
### componentDidUpdate: 
                It is called when page is living 
                it is single page application we just chnaging the component
                We have to clear the things while living a page like setTimeOut
                   If we add setTimeout will 3 sec interval so it is called but if chnaged the page it still called because we are not rerenderning the page we are changing the componnet
                   so we have to clear you mess also inside the `componentDidUpdate`
                      clearInterval(this.timer)
                and If i create the setInterval inside by useEffect if i added interval then if I chnage the about -> Home page it will still calling setInterval and once i back from home -> about 
                it is continuing counting basically but why ............? so we have return the function

                useEffect(() => {
                        setInterval(() => {
                                consol.elog("React js")
                        }, 1000)

                        //! This will called on componentDidUpdate inside functional compoent once i leave my page only that time It will called
                        return () => {

                        }
                }, [])

                Homework:
                   why super(props) in class component
                   why async componentDidMount : in  useEffect( async () => { }, []) not allowded in useEffect callback function 


### Custom Hook's (Single Responsibility Principle)
            
       Hook is nothing but a Utiity function    ex. useParm is hook it is just utility   
       Ex. useRestaturantDetails, useOnlineStatus
       When you offline provide some game to engage customer on site

       *Note: It is not mendatory to use the "Capital" letter but it is suggested by React guidlines (use linter buy devloper)

### Make App Faster
- You can see the index js file size in browser is 2Mb in prod mode it is little less bundler size is more many componnets inside that 
- we need a bundle for it to optimze
- Break down into smaller peace (Becuse we can't create all file into the one js file or either small small js file) 
      this process is know as "Chunking", "Code Splitting", "Dynamic Bundling", "Lazy loading", "On demand Loading" create the sammler bundler

- Let's take a example
        Now i have to add Grocery menu on my EatSome site i have another small application which load on after "Grocery" Click
        we we can't import that Grocery Component like others because it self it os a small application so we have to use "Lazy loading" it load only on demand

- Grocery Component: It is not a part of index bundle it is loading Seperatlly and dist folder there Grocery.js file
        after doing that will faced "suspence error" so lazy loading suggest bind you componnet insid the 
        <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
        
### CSS Framework : Episode-10 | Jo Dikhta Hai, Vo Bikta Hai
- Index css
- SASS SCSS
- style component: we have to create the component: https://styled-components.com/docs
- Framework
 1. Materail ui (MUI) (https://mui.com/material-ui/getting-started/), 
 2. Bootsrap, 
 3. Ant design   (https://ant.design/components/overview/)
 4. Chakra UI    (https://chakra-ui.com/getting-started)
 5. Tailwind css (https://tailwindcss.com/docs/installation)
     - npm install -D tailwindcss postcss (2 pacgaes 1 tailwind css and postcss behind sceen)
     - Install tailwindcss and its peer dependencies via npm, and then run the init command to generate tailwind.config.js.
     - Create a .postcssrc file in your project root, and enable the tailwindcss plugin.
     - Add the Tailwind directives to your CSS: Create a ./src/index.css file and add the @tailwind directives for each of Tailwind’s layers.
     - Start your build process: Run `npx parcel src/index.html`
     - Start using Tailwind in your project:  <link href="./index.css" rel="stylesheet">

# postcssrc
     WHT postcssrc Required....???
     using this your parcel( Bundler) read the tailwind from that

# tailwind.config
        Inside the "content" we have provide the configuration. This "content" array take the all list of configuration 
        file in what are the place we are using the tailwind css ex. inside the .css, .htm. .jsx, .html
        content: ["./src/**/*.{html,js,ts,jsx,tsx}"],

# Advantag
        - complex UI can create
        - If u add aclass only that time it will add into the CSS file it will not blout you bundle
        - It will to remove redent css how ?????: If 10 developer working on diff moudle if they want to craete green button then they will create there own green button class other wise we that to create common css and every one has knowledge of that common file to avoid such sitution but still it will not achivable with this approach
        BUT........If we used tailwind css and every used "bg-green" at the time of bundling there only on class in css file for "backgrouncolor:green" so that's why it is more powerful
        - Also we can write media queries like ex. className="bg-pink-100 sm: bg-yellow-50 lg:bg-green-50
        - If my device grater than sm then use yellow otherwise pink and on a larger device green

### Episode-11 | Data is new Oil
# Higher order componenet: 
        ex. IF we want to display some card with some label like offer, Promoted then what will do will we will write some function which take as component and return the component
        It is function which takes as component and inhance that component and return the new Component
        It take the existing the component and modify it and returning that component
        Example:
        If want to display the Promoted Resturant or with Promoted label in Resturant list so in that case we will write one more function 
        Higher order function
        * Input - RestaurantCard => RestaturantCardPromoted

        1. React component 2 layer: Data Layer and UI Layer
        and UI layer is powered by data layer that data layer is consist of Props, state, local varibales , {} inside the javascript html. If you know to maintain your data in React application will be very fast and UI layer is consist of JSX the code inside retun

        2. How to manage Data Layer:
        Example to understand the this layer is, If we click on Restaurant Details we have here diff-diff sections and each section has diff-diff items
        Ex Recommended, Newly Added, Salds, Low Fat Foods this are section and each section has some list of items

# Controll and Uncontroll Component
        https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components
        RestaurantCategory  componnet has a controll of RestaurantCategory so in that case "RestaurantCategory" is controlling component and if handling show and hide index logic inside the RestaurantCategory then in that case it un-controll component

# Lifting the sate
        https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
        once we expand the one state another should be collapse: exmaple in details page all type of item we are expanding and collpasing
        but in that case once we expand on category another should collapse but this only happende if we give a control of componnet to the parent component. 
# use Context (Props drealing) :
        pass the data from parent to least child restDetails -> restCategory -> restitem this but problmatic because data is  very crusial part of data. But if is is not good way then how should i pass the the data or want to access the data then react has super power like useContext using this we can achive
        so we can use "context" we can set the data at global level and we can use that data in any place
        use Context

        `Can we access this loggedIn info inside the AboutUs.js` ???? ..We can not because it is Class based component inside class based we dont have hooks
        `<UserContext.Consumer>
         {(data)=>console.log(data)}
        </UserContext.Consumer>` 
        using consumer we can access the user info because once you create the context rect give us the power of consumer and With help of JSX we can call the callback function to access to theta data
        Even, If we want pass some userInfo from the root level like app where we called all api and returning the User details then we have to use `Context provider` this provide by react we will wrap outer whole app into that 

        Q. can we userd <UserContext.Consumer> multiple times?? : Yes we can used multiple times

        Q. what is diff between redux store and context (Both are for the data manuplication inside app)
            => If you doing samll application you don't Redux it is not part of react it is seperate library 
            In case context, if you want access cart data, user data, item data so in that case we have to create diff diff context to manage this data like, userContext, cartContext, itemContext
        https://react.dev/reference/react/useContext#usecontext
        Ex. Once we expand then after clicking on same text it should collapse then we will achive it by using "context"

### Episode-12 | Lets' Build Our store

    