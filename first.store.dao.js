export const getPreviewReviewOrder= async(page_offset, size, ResName)=>{
    try{
        const conn=await pool.getConnection();

        if(page_offset=="undefined"||typeof page_offset =="undefined"||page_offset==null){
            const [order]=await pool.query(getPreviewReviewOrderAtFirst, [parseInt(UserId), parseInt(size),parseInt(ResName)]);
            conn.release();
            return order;
        }else{
            const[order]=await pool.query(getPreviewReviewOrder,[parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return order;
        }
    }catch(err){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}