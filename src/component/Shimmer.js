export default Shimmer = () => {
    return (
        <div className="resturant-container">
          {Array(10)
            .fill("")
            .map((e, index) => (
                <div key={index}  className="shimmer-card">
                  <div className='resturant-card-conatiner'>
                </div>
              </div>
            ))}
        </div>
      );
}