import TinyAreaChart from "../../../../../Components/Charts/TinyAreaChart"
import  './Index.css';

const OverView = () => {
  return (
  <>
  <>
  
  <div className="bg-white w-full   mt-10 rounded-3xl">

<div className="px-5 py-3 flex flex-col">

<p className="poppins-regular">OverView</p>


<div className="mt-6 flex flex-col gap-y-7">

<div className="flex  justify-between">
<Card Heading="Total Views" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={1}/>
<Card Heading="Total Likes" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={0}/>
<Card Heading="Total Comments" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={1}/>
 
</div>
<div className="flex  justify-between">
<Card Heading="Total Engagment" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={1}/>
<Card Heading="ER" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={0}/>
<Card Heading="Budget Spent" totalNumbers="30,412" Percentage="1.5" time="LastMonth" Status={1}/>
 
</div>

</div>
</div>
  </div>
  
  </>
  
  
  </>
  )
}


const Card = ({Heading,totalNumbers,Status,Percentage,time}) => {
  
// If the status is Good then 1 and green color
// else 0 and red color 

let chartColor=Status?['#0A9B21','#8884d8']:['#FF5E5E','#FF5E5E']

  return(
    <>
    
    <div className="w-[250px] h-[170px] bg-white rounded-2xl flex flex-col justify-between OverViewBox1">
  <div className="px-4 py-2 lato-regular ">
    <p className="lato-regular text-xl">{Heading}</p>
    <p className=" text-xl text-green-600">{totalNumbers}</p>
    <div className="ml-5 lato-regular mt-2">
    <p><span className="text-green-500"> &#8593;</span> <span className="text-green-500">{Percentage} %</span> 
    <span className="text-gray-400"> vs {time}</span>
    </p>
    </div>

  </div>
  <TinyAreaChart  Status={Status} width="100%" height="100%" strokeColor={`${chartColor[0]}`} StopColor={`${chartColor[1]}`}/>

</div>
    
    </>
  )
}


export default OverView