export const getOrder = async (ResName, query) => {
    
    return ReviewOrderResponseDTO(await getReviewOrder(ResName, UserId));//가게 이름과 유저 아이디
} //data를 객체에 담아 보냄. 

export const ReviewOrderResponseDTO = (data) => {

    return {"reviewOrderData": null, "page_offset": null};
}