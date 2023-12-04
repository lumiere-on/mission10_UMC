export const OngoingMissionPreview=async(req, res,next)=>{
    return res.send(response(status.SUCCESS, await getOngoingMission(req.params.storeId, req.query));
    
}