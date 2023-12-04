export const ReviewOrderResponseDTO =(data) =>{

    const order=[];
    for(let i=0;i<data.length;i++){
        order.push({
            "user_id":data[i].user_id,
            "rate":data[i].rate,
            "review_body":data[i].review_content,
            "create_date": formatDate(data[i].created_at)

        })
    }
    return {"order of review":order,"page_offset": data[data.length-1]/5};


}
const formatDate=(date) =>{
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}