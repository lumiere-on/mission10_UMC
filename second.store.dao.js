export const getPreviewReviewOrder=async(page_offset, size, ResName)=>{
    try{
        const conn=await pool.getConnection();

        if(page_offset=="undefined"||typeof page_offset=="undefined"||page_offset==null){
            const [missions]=await pool.get(getOrderByOrderAtFirst,[parseInt(ResName), parseInt(size)]);
            conn.release();
            return missions;
        }
        else{
            const [missions]=await pool.query(getOrderByOrder, [parseInt(ResName),parseInt(size)]);
            conn.release();
            return missions;
        }
    }catch(err){
        throw new BaseError(status.PARAMETOR_IS_WRONG);
    }
}