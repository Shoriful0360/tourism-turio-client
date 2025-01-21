

const Gallery = ({item}) => {
const{image}=item || {}
    return (
        <div className="columns-3 ">
          {
image?.map((img,idx)=><div key={idx}>
      <img src={img} alt=""  className="w-full aspect-video"/>
</div>)
          }

        </div>
    );
};

export default Gallery;