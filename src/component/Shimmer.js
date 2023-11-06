export default Shimmer = () => {
    return (
        <div className="resturant-container">
          <div><div className="shimmer-title"><h1 ></h1></div></div>
          <div className="resturant-card">
          {Array(10)
            .fill("")
            .map((e, index) => (
              <div className=''  key={index} >
                <div className="shimmer-card">
                  <div className='resturant-card-conatiner'>
                </div>
              </div>
              </div>
            ))}
            </div>
        </div>
      );
}