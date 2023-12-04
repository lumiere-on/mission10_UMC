export const OngoingMissionRouter=express.Router({mergeParamsw: true});

OngoingMissionRouter.get('/Ongoingmission',asyncHandler(OngoingMissionPreview));
