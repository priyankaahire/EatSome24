### Optional chaining

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/


### React Fiber Architecture
https://github.com/acdlite/react-fiber-architecture

### React Roter
https://reactrouter.com/en/main


### Webpack - npm i -D parcel
### React - npm install react
### React Dom - npm install react-dom
### Run The App - npx parcel index.html
        ### x Stand for the exicution

### Application Run

     npm start

### React Hooks
(Normal JS utility functions)
        -useState() - SuperPowerfull state varibales in react
        -useEffect()

### Routing in web apps
        - Client Side Routing: It is not loadin the page it is just loading that Component using <Link /> (Link is wrapper over the <a> tag and React DOM keeping a track of this Link)
        - Server Side Routing: You have contact.html, in <a> use pass the path and once you click it reload the whole page, send request to the server and fecth the data and load on the browser It callled     


    
### Classy: Class base component

1. Its a older way to craete the componet in the React.
2. Now everyting inside react is Funcation component, But still in Class Base Component it is part of interview
3. `It will tell you how React life cycle is work`

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

   ### If same component 2 instance is created then HOW LIFECYCLE WILL BE WORK ........?????
        ex. AboutComponnet & UserClassComponent
         When compount is mounted mounting in 2 phase that's why people said react is phase that's why React is Fast
         2 Phases
           1. Render phase
           2. Commit phase
        *Note: useEffect is backGroundly is not using componentDidMount

### Custom Hook's (Single Responsibility Principle)
            
       Hook is nothing but a Utiity function    ex. useParm is hook it is just utility   
       Ex. useRestaturantDetails, useOnlineStatus