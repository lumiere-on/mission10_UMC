import { previewOngoingMissionResponseDTO } from "../third.index";

export const getOngoingMission=async(userId, query)=>{
    const{storeId, size=3}=query;
    return previewOngoingMissionResponseDTO(await getPreviewOngoingMission(userId,size,storeId ));
    
}