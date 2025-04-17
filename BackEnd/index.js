const  express=require("express")
const app=express()
const dotenv = require("dotenv");
dotenv.config();
const port=process.env.PORT
const path=require("path")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const Connection=require("./connection/Connections.js")
const authrouter=require("./routes/auth.js")
const userRoute=require("./routes/User.js")
const reviewsRoute=require("./routes/reviews.js")
const doctorRoute=require("./routes/docotor.js")
const  bookingRoute =require("./routes/Booking.js")

const corsOption = {
    origin: "http://localhost:5173",  
    methods: "GET, PUT, DELETE, POST, PATCH",
    credentials: true // ⬅️ Allow cookie
  };


  Connection(process.env.MONGO_URL).then(()=>console.log("Connected")).catch(()=>console.log("not Connected"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set("view engine","ejs")
app.use(cookieParser());
app.use(cors(corsOption));
app.use(express.static(path.join(__dirname,'public')))



app.use("/api/auth",authrouter)
app.use("/api/user",userRoute)
app.use("/api/doctor",doctorRoute)
app.use("/api/reviews",reviewsRoute)
app.use("/api/bookings",bookingRoute)

app.listen(port,()=>console.log("server is sarted "))