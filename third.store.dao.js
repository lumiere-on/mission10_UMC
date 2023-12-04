export const getPreviewOngoingMission=async(page_offset,size,userId)=>{
    try{
        const conn=await pool.getConnection();

        if(page_offset=="undefined"||page_offset==null||typeof page_offset=="undefined"){
            const[OngoingMission]=await pool.queury(getOngoingMissionAtFirst, [parseInt(userId), parseInt(size)]);
           conn.release();
           return OngoingMission;
        }else{
            const[OngoingMission]=await pool.queury(getOngoingMissionByMission, [parseInt(userId), parseInt(size)]);
            conn.release();
           return OngoingMission;
        }
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
        
    }
}