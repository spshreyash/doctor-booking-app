

const cloud_name= import.meta.env.VITE_CLOUD_NAME
const upload_preset=import.meta.env.VITE_UPLOAD_PRESET

export const uploadImageToCloudnery= async(file)=>
{
    const uploadData= new FormData()

     uploadData.append("file",file)
     uploadData.append("cloud_name",cloud_name)

     uploadData.append("upload_preset",upload_preset)

     try {
            const res=await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,{
                method:"POST",
              
                body:uploadData,

            })

            const data=await res.json()
        //     console.log("cloud_name:", cloud_name);
        //    console.log("upload_preset:", upload_preset);
        //     console.log(" this data is foem form data cloudenery ",data)

            if(res.ok)
            {
                return data
            }
            else{
              throw new  Error(data.error.message)
            }
        
     } catch (error) {
        console.log(error)
        return null
        
     }

     
}

