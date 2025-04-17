const express=require("express")
const { allReviews, createReviews } = require("../Controller/Reviews")
const allowOnly = require("../middleware/allowOnly")
const isLoggedIn = require("../middleware/IsLoggedin")
const router=express.Router({mergeParams:true})


router.get("/",allReviews)
router.post("/",isLoggedIn,allowOnly(["patient"]),createReviews)
router.post("/:id",isLoggedIn,allowOnly(["patient"]),createReviews)



module.exports=router


