

const StorieCard = ({story}) => {
    const {title,description,image}=story || {}
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
          className="h-56 w-full object-cover object-top"
            src={image[0]}
            alt="Shoes" />
            
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.substring(0,75)}...</p>
          <div className="card-actions justify-between">
            <button className="btn btn-primary">Update</button>
            <button className="btn bg-green text-white">Delet</button>
          </div>
        </div>
      </div>
    );
};

export default StorieCard;