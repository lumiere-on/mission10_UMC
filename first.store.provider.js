export const getReviewOrder =async(ResName, query) =>{
    const{UserId, size=5}=query;
    return ReviewOrderResponseDTO(await getPreviewReviewOrder(UserId, size,ResName));
}