### Question 

In below Line we are managing the state 
const [allRestaurants, setAllRestaurants] = useState([]);
Genrally on chnage, (Handler) we update the state but one question in mind is ?
how it is upating the state after "CONST" genrally, we can't chnage the const value
But react one each change react render the the application and this is the very fast process of react 


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