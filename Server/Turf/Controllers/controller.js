export const registration = (req,res,next)=>{
    try{
        console.log(req.body)
    }
    catch(err){
        next(err)
    }
}