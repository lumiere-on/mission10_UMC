export const reviewOrder=async(req,res,next)=>{
    return res.send(response(status.SUCESS, await getOrder(req.params.ResName, req.query)));
    
}