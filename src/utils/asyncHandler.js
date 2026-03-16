//making asynhandler so we don't have to check for error every time in any async funtion for more :- https://chatgpt.com/share/69b80656-90e0-800c-9c9c-0d16e98aad2f

const asyncHandler =(fn)=>async(req,res,next)=>{
    try {
        await fn(req,res,next)
    } catch (error) {

        res.status(error.code||500).json{
            succes:false,
            message:error.message
        }
        
    }
    


}

export {asyncHandler}
