export const previewOngoingMissionResponseDTO=(data)=>{
    const mymissions=[];

    for(let i=0;i<data.length; i++){
        mymissions.push({
            "mission_point":data[i].mission_point,
            "mission_content":data[i].mission_content
        })
    }
    return{"OngoingMission": mymissions, "page_offset":data[data.length-1]/5};
    
}