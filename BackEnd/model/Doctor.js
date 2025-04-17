const mongoose =require("mongoose")

const DoctSchema=new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    phone:String,
    photo:String,
    ticketPrice:Number,
    role:String,

    specialization:String,
    qualificationStartingDate: String,
    qualificationEndingDate: String,
    qualificationDegree: String,
    qualificationUniversity: String,
  
    Experiense:{
        type:Array,
        default:[]
    },
    bio:{
        type:String,
        
    },
    about:String,
    timeslots:{
        type:Array,
        default:[],
    },
    
    Reviews:[
        {
            
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    AvgRating:{
        type:Number,
        default:0,
    },
    totalrating:{
        type:Number,
        default:0,
    },
    isApproved: {
        type: String,
        enum: ["pending", "Approvel", "cancelled"],
        default: "pending",  // ✅ Correct spelling
      },
      
    appointment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Appintment",
    }],

    
    


})
const Doctor=mongoose.model("Doctor",DoctSchema)
module.exports=Doctor







// <div>
// <h4  className="mb-4">Qualification</h4>
// {
//    formData.qualification.map((ele,index)=>(
//        <>
//     <div key={index} className="flex flex-row  items-center gap-2.5">   
//       <div>

//        <label className="block mb-1 font-medium">Starting Date</label>
//         <input type="date"  name="startingDate" value={ele.startingDate}   className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//       </div>
//         {/* <input type="date"  name="EndingDate" value={ele.EndingDate}   className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/> */}
    
//      <div>
//   <label className="block mb-1 font-medium">Ending date</label>
//  <input type="date"  name="EndingDate" value={ele.EndingDate}   className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//    </div>

//    <div>
//   <label className="block mb-1 font-medium">degree  </label>
//  <input   onChange={handleChange} type="text"  name="degree" value={ele.degree} placeholder="degree"  className="w-[100px] border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//    </div>


//    <div>
//   <label className="block mb-1 font-medium">university  </label>
//  <input   onChange={handleChange} type="text"  name="university" value={ele.university} placeholder="university"  className=" w-[100px] border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//    </div>
//    <button type="reset">reset</button>

//      </div>
     
// </>
//    ))
// }


// </div>