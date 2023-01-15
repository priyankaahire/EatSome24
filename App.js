/**
     * Header
        - Logo
        - nav items (Home, about )
        - cart
        * Body
        -  serach bar
        -  RestaurantsCard
            -Image
            -name, price, description 
            -Ration
            - Cusines tags
        * footer
        - links
        - @
 */
import React, {createElement} from 'react';
import ReactDOM from 'react-dom/client';
import appLogo from './public/images/logo.jpg';

const config =[
    {
        type:"carousel",
        cards:[
            {
             offerName:"50% OFF"
           },
        {
            offerName:"No Delivery Charges"
        }
    ]
    },
    {
        type:"resturants",
        cards:[
            // {
            //     name:"Sri Jayadurga Biryani",
            //     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n7pn6ilfponvcatp0n73",
            //     cusines:["Biryani", "South Indian"],
            //     info:"Biryani, South Indian, Andhra, Hyderabadi, Snacks",
            //     rating:"4.2",
            //     price:"₹300 FOR TWO"
            // },
            // {
            //     name:"Burger King",
            //     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nt1itsfhqgnfcjkxbb7m",
            //     cusines:["Burgers", "American"],
            //     info:"Burgers, American",
            //     rating:"4.2",
            //     price:"₹500 FOR TWO"
            // }
        ]
    }
]
//* React element i.e JSX
const heading3 = (
    <h1 id="heading" key="heading">
       This is the namastye page
    </h1>
)

const Title = () => (
    <a className="resturant-title" href="/">
      <h2 >EatSome24</h2>
    </a>
)

//* React Component
//% - Functional 
//% Name of the component start with the CAPITAL LETTER
//% Composing component
const HeaderComponent = () => {
    return (
        <header>
            <div className="header justify-content-between">
             <div className="row ">
               <Title />
             </div>
             <div className='topnav-serachbar'>
               <SearchBar />
             </div>
             <div className="row mt-2">
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
             </div>
            
            </div>
        </header>
       
       
    )
};


const FooterComponent = () => {
    return (
        <div>
            <p>@facebook</p>
        </div>
    )
};
const biryani = //[
    {
    name:"Sri Jayadurga Biryani",
    image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n7pn6ilfponvcatp0n73",
    cusines:["Biryani", "South Indian"],
    info:"Biryani, South Indian, Andhra, Hyderabadi, Snacks",
    rating:"4.2",
    price:"₹300 FOR TWO"
}
// {
//     name:"Burger King",
//     image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nt1itsfhqgnfcjkxbb7m",
//     cusines:["Burgers", "American"],
//     info:"Burgers, American",
//     rating:"4.2",
//     price:"₹500 FOR TWO"
// }
//]
const SearchBar = () => {
    return (
        <div className ="search-container">
            <form style={{"marginLeft": "15px"}} action="/action_page.php">
                <input type="text" placeholder="Search.." name="search" />
            </form>
        </div>
    )
}

const resturantList = [
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "601253",
          "name": "Stuffed",
          "uuid": "0be74477-f166-40de-afcc-94f6434529db",
          "city": "1",
          "area": "Indiranagar",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "vbvdzq2whvlployf03qa",
          "cuisines": [
            "Fast Food",
            "Snacks",
            "Asian",
            "Bakery",
            "Continental"
          ],
          "tags": [],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "slaString": "34 MINS",
          "lastMileTravel": 5.900000095367432,
          "slugs": {
            "restaurant": "stuffed-indiranagar-indiranagar",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Skylark Palazzo, Bearing No 98, Airport Corporation Ward, Airport Road,Murugeshpalya , Bangalore 560098 Shivajinagara, B.B.M.P East,Karnataka-560098 \"",
          "locality": "Murugeshpalya",
          "parentId": 354759,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "Flat ₹100 off",
            "shortDescriptionList": [
              {
                "meta": "Flat ₹100 off on orders above ₹299",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹100 off on orders above ₹299 | Use code FLAT100",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹100 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLAT100",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹100 off on orders above ₹299 | Use code FLAT100",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [],
          "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5714725~p=1~eid=00000185-ab1c-6675-3285-22c60022017e",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "5.9 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "601253",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "lastMileTravel": 5.900000095367432,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.3",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "221738",
          "name": "Meghana Foods",
          "uuid": "106f4556-6804-4554-8c68-ee875d6acf65",
          "city": "1",
          "area": "Brookefield",
          "totalRatingsString": "5000+ ratings",
          "cloudinaryImageId": "aqsnrylokzpn45qhg1pb",
          "cuisines": [
            "Biryani",
            "Andhra",
            "South Indian",
            "North Indian",
            "Chinese",
            "Seafood"
          ],
          "tags": [],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 3.799999952316284,
          "slugs": {
            "restaurant": "meghana-foods-mahadevpura-mahadevpura",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "Raj Pinnacle, Mahadevapura, Bengaluru, Karnataka, India",
          "locality": "Mahadevpura",
          "parentId": 635,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [],
          "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "3.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "221738",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 3.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 5000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "445762",
          "name": "Burger King",
          "uuid": "548856fe-2b3d-4d24-b572-a25eed551d9f",
          "city": "1",
          "area": "Doddanekundi",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "nt1itsfhqgnfcjkxbb7m",
          "cuisines": [
            "Burgers",
            "American"
          ],
          "tags": [],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "slaString": "34 MINS",
          "lastMileTravel": 4.599999904632568,
          "slugs": {
            "restaurant": "burger-king-marathalli-kadugodi",
            "city": "bangalore"
          },
          "cityState": "1",
          "address": "burger king Kote MR Plaza, Anand Nagar, Sanjay Nagar, Chinnapanna Halli, Bengaluru, Karnataka 560037",
          "locality": "Doddanekundi",
          "parentId": 166,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [],
          "feeDetails": {
            "fees": [],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
          },
          "lastMileTravelString": "4.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "445762",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "lastMileTravel": 4.599999904632568,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      }
]

//# We can used PROPS i.e passed param as props and get the value EX.props.restaurant?.data?.name
//# otherwise use destrucing the OBJECT like {restaurant}

//^ IF I dont wnat destrcuring like this 
//^ const {name, cuisines, cloudinaryImageId, avgRating, costForTwoString} = restaurant?.data;
//^ I want on FLY Then what i have to i will pass name, image etc as arg and get them as param like this
//^ EX const ResturantCard = ({name, cuisines, cloudinaryImageId, avgRating, costForTwoString}) => { }
//^ But i have to pass like this  <ResturantCard name={resturantList[0].data.name} cuisines={resturantList[0].data.cuisines} />
//! This will won't work <ResturantCard restaurant={resturantList[0].data}  />

//% One MOre Import is ES6 SPREAD OPERATORS <ResturantCard {...resturantList[0].data} />
const ResturantCard = ({name, cuisines, cloudinaryImageId, avgRating, costForTwoString}) => {
    return (
        <div className="card">
            <div className='resturant-card-conatiner'>
            <div className='resturant-card-body'>
                <div className='image-continer'>
                    <img height="160" alt="Avatar" src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/"+cloudinaryImageId
                    } />
                </div>
                <div className='resturant-info'>
                    <div className="resu-name">{name}</div>
                    <div className='food-info'>{cuisines.join(", ")}</div>
                </div>
                <div className='other-info'>
                    <div className='rating-info'>{avgRating}</div>
                    <div className='price-info'>{costForTwoString}</div>
                </div>
                <div className='offer-info'>
                    <span className='offer-icon'></span>
                    <span className='offer-details'>50% off | Use WELCOME50</span>
                </div>
            </div>
            <div className='card-footer'></div>
            </div>
        </div>

    )
}

//~! Error is : ONLY ONE PARENT OVER HERE THATS WHY REQUIRED REACT FRAGMENT FOR THIS EX. <></>
// const AppLayout = () =>{
//     return (
//         {
//            <HeaderComponent />
//            <bodyComponent />
//            <FooterComponent />
//         }
//     )
// }


  
//! Instead of passing index wise data we can use FOR loop but in FUNCTINAL programing we can use used MAP not an LOOP
//! <ResturantCard {...resturantList[0].data} />
//! <ResturantCard {...resturantList[1].data}/>
//! <ResturantCard {...resturantList[2].data}/> */

const BodyComponent = () => {
    return (
        <>
            <div className='resturant-container'>
                {
                    resturantList.map(restaurant => {
                        return <ResturantCard key={restaurant.data.id} {...restaurant.data} />
                    })
                }
            </div>
        </>
        
    )
}

//% WHAT IS VIRUAL DOM
//% 
const AppLayout = () =>{
    return (
        <React.Fragment>
            <HeaderComponent />
            <BodyComponent />
            {/* <FooterComponent /> */}
        </React.Fragment>
    )
}
//~% Using JSX CREATE THE H1 TAG
const root = ReactDOM.createRoot(document.getElementById('root'))
//async defecr
//^ Following are the way you can passed to the render
root.render(<AppLayout />)
//% I can call as functin call
//root.render(HeaderComponent())
