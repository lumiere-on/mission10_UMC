export const getOngoingMission=async(userId, query)=>{

    return previewOngoingMissionResponseDTO(await getPreviewOngoingMission(userId,storeId));

}
export const previewOngoingMissionResponseDTO=(data) =>{
    return {"OngoingMissionData":null, "page_offset":null};
}