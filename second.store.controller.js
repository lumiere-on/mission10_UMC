export const MissionOrderOfRes=async(req,res,next)=>{
    return res.send(response(status.SUCCESS, await getOrder(req.params.ResName, req.query)));
    
}