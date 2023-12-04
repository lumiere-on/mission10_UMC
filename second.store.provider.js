export const getOrder=async(ResName, query)=>{
    const{missionText, size=3}=query;
    return previewOrderResponseDTO(await getPreviewReviewOrder(missionText, size,ResName));
}