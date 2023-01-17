import {IMG_CDN_URL} from '../constnant'

//# We can used PROPS i.e passed param as props and get the value EX.props.restaurant?.data?.name
//# otherwise use destrucing the OBJECT like {restaurant}

//^ IF I dont wnat destrcuring like this 
//^ const {name, cuisines, cloudinaryImageId, avgRating, costForTwoString} = restaurant?.data;
//^ I want on FLY Then what i have to i will pass name, image etc as arg and get them as param like this
//^ EX const ResturantCard = ({name, cuisines, cloudinaryImageId, avgRating, costForTwoString}) => { }
//^ But i have to pass like this  <ResturantCard name={RESTURANT_ARRAY[0].data.name} cuisines={RESTURANT_ARRAY[0].data.cuisines} />
//! This will won't work <ResturantCard restaurant={RESTURANT_ARRAY[0].data}  />

//% One MOre Import is ES6 SPREAD OPERATORS <ResturantCard {...RESTURANT_ARRAY[0].data} />
const ResturantCardComponent = ({name, cuisines, cloudinaryImageId, avgRating, costForTwoString}) => {
  return (
      <div className="card">
          <div className='resturant-card-conatiner'>
          <div className='resturant-card-body'>
              <div className='image-continer'>
                  <img height="160" alt="Avatar" src={IMG_CDN_URL+cloudinaryImageId} />
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

export default ResturantCardComponent