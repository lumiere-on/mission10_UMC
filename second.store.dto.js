export const previewOrderResponseDTO=(data)=>{
    const orderOfRes=[];

    for(let i=0;i<data.length;i++){
        orderOfRes.push({
            "res_location":data[i].res_location,
            "mission_point":data[i].mission_point;
        })
    }
    return {"orderResData": orderOfRes, "page_offset":data[data.length-1]/5};
    
}