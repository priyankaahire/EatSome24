

// import { StartSharp } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { IMG_CDN_URL } from '../utils/constnant';
// import StarIcon from '@material-ui/icons/Star';
//# We can used PROPS i.e passed param as props and get the value EX.props.restaurant?.data?.name
//# otherwise use destrucing the OBJECT like {restaurant}

//^ IF I dont wnat destrcuring like this 
//^ const {name, cuisines, cloudinaryImageId, avgRating, costForTwoString} = restaurant?.data;
//^ I want on FLY Then what i have to i will pass name, image etc as arg and get them as param like this
//^ EX const ResturantCard = ({name, cuisines, cloudinaryImageId, avgRating, costForTwoString}) => { }
//^ But i have to pass like this  <ResturantCard name={RESTURANT_ARRAY[0].data.name} cuisines={RESTURANT_ARRAY[0].data.cuisines} />
//! This will won't work <ResturantCard restaurant={RESTURANT_ARRAY[0].data}  />

//% One MOre Import is ES6 SPREAD OPERATORS <ResturantCard {...RESTURANT_ARRAY[0].data} />
const RestaurantCardComponent = ({ id, name, cuisines, cloudinaryImageId, avgRating, costForTwo, sla, promoted }) => {
    const {slaString, lastMileTravelString} = sla 
    return (
            < >
                <div className="eatsome-card">
                    <div>
                        <div className='p-3 rounded-2xl'>
                            <img height="160" alt="Avatar" src={IMG_CDN_URL + cloudinaryImageId} />
                        </div>
                    </div>
                    <div >
                        <div className='px-2'>
                            {promoted?.toString()}<div title={name} className="font-bold text-lg text-black ellipsis-text">{name}</div>
                        </div>
                        <div className='px-2 items-center'>
                            <div title={cuisines.join(", ")} className='text-sm text-slate-600 ellipsis-text'>{cuisines.join(", ")}</div>
                        </div>
                        <div className='px-2 grid gap-1 grid-rows-1 grid-cols-4 items-center'>
                            <div className='text-white text-xs bg-green-800  w-8/12 text-center'><StarIcon sx={{fontSize:"12px"}} />{avgRating}</div>
                            <div className='text-slate-600 '>{slaString}</div>
                            <div className='text-slate-600 col-span-2 text-end'>{costForTwo}</div>
                        </div>
                        <div className='px-2 divide-y divide-slate-600 '>
                            <span className="text-sm text-slate-600 ellipsis-text">50% off | Use WELCOME50</span>
                        </div>
                    </div>

                </div>
            </>
    )
}

export default RestaurantCardComponent