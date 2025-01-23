import { useState } from "react";


const Pagination = ({countUser,currentPages,setCurrentPages,itemsPerPages,setItemsPerPages}) => {
   const {userCount}=countUser || {}
   
    const numberOfPages=Math.ceil(userCount/itemsPerPages)
    // here page value is single no object and array if want to array then follow rules (number of pages=125479 etc ,follow rules number of pages=[1,2,3,4,...])

    // short cut create array
    const pages=[...Array(numberOfPages).keys()]

    // divided button 
    const handleSelect=(e)=>{
        console.log(e.target.value)
        setItemsPerPages(parseInt(e.target.value))
    }

    const handlePage=(value)=>{
        setCurrentPages(value)
    }

    const handlePrev=()=>{
        if(currentPages>0){
            setCurrentPages(currentPages -1)
        }
    }

    const handleNext=()=>{
        if(currentPages<pages.length -1){
            setCurrentPages(currentPages +1)
        }
    }

    return (
        <div className="flex gap-2 justify-center">
          <button onClick={handlePrev} className="btn bg-orange-200 focus:text-white">prv</button> 
          {/* button map therfore how much button depend on pages */}
          {
            pages?.map((page,idx)=><button 
            onClick={()=>handlePage(page)}
            className={`${currentPages === page ? 'bg-orange-400': undefined} btn`} key={idx}>
                {page}
            </button>)
          }
          <button onClick={handleNext} className="btn bg-orange-200 focus:text-white">Next</button> 
          <select onChange={(e)=>handleSelect(e)} name="" id="">
                <option value="1">1</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>


        </div>
    );
};

export default Pagination;