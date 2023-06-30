import Http from "../http";

interface IGetRecordByUserIDRequestData {
	userID: string;
}
export const getRecordByUserID = function (params: IGetRecordByUserIDRequestData) {
	return Http.POST("record/getRecordByUserID", params);
};

interface IModifyRecordUserRequestData {
	userID1: string;
	userID2: string;
}
export const modifyRecordUser = function (params: IModifyRecordUserRequestData) {
	return Http.POST("record/modifyRecordUser", params);
};

interface IModifyRecordTreeRequestData {
	userID: string;
	treeID: string;
	mode: string;
	clearAll: string;
}
export const modifyRecordTree = function (params: IModifyRecordTreeRequestData) {
	return Http.POST("record/modifyRecordTree", params);
};

interface IModifyRecordOrderRequestData {
	userID: string;
	orderID: string;
}
export const modifyRecordOrder = function (params: IModifyRecordOrderRequestData) {
	return Http.POST("record/modifyRecordOrder", params);
};

