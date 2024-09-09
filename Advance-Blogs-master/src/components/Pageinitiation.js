import React, { useContext } from "react"
import { AppContext } from "../context/AppContext";

const Pageinitiaton = (props) => {
  const { changeHandler, page, pages } = useContext(AppContext);

  return (
    <div className=" w-full  py-3 flex justify-center border-2 shadow-md    bg-white fixed bottom-0"> 
      <div className="flex w-1/2 justify-between flex-wrap max-w-[1250px]">
        <div className="flex gap-2 ">
          {page > 1 && (<button onClick={() => { changeHandler(page - 1) }} className="border py-1 px-2 rounded-md">Previous</button>)}
          {page < pages && (<button onClick={() => { changeHandler(page + 1) }} className="border py-1 px-2 rounded-md w-20">Next</button>)}

        </div>
        <p className="flex gap-1"><span>page</span><span>{page}</span><span>of</span><span>{pages}</span></p>

      </div>

    </div>
  )
};

export default Pageinitiaton;
