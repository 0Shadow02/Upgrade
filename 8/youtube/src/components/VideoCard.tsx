
export function VideoCard(props: any){


    return <div className="p-2 cursor-pointer">

  <img  className="rounded" src={props.image}  alt="" />

  <div className="grid grid-cols-12 pt-2 "> 
        
            <div className="col-span-1  " >

                    <img  className={"rounded-full "} src= {props.thumnail} alt="" />
            </div >

         <div className="col-span-11 pl-2" >

                    <div >
                            {props.title}
                    </div>
                    <div className="col-span-11  text-gray-400 text-base" >
                           {props.author}
                    </div>
                    <div className="col-span-11  text-gray-400 text-base " >
                        {props.views} | {props.timestamp}
                    </div>

        </div>
        </div>
    </div>
}