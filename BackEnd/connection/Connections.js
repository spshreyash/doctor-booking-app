
const mongoose=require("mongoose")

async function Connection(url)
{
    try {
        await mongoose.connect(url)
    } catch (error) {
        console.log(error)
        
    }
}
module.exports=Connection