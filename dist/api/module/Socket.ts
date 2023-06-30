import Http from "../http";

interface IAddSocketRequestData {
	userID1: string;
	userID2: string;
}
export const addSocket = function (params: IAddSocketRequestData) {
	return Http.POST("socket/addSocket", params);
};

interface IRemoveByIdRequestData {
	_id: string;
}
export const removeById = function (params: IRemoveByIdRequestData) {
	return Http.POST("socket/removeById", params);
};

interface IModifyByIdRequestData {
	_id: string;
	context[0].senderID: string;
	context[0].time: string;
	context[0].data.type: string;
	context[0].data.content: string;
}
export const modifyById = function (params: IModifyByIdRequestData) {
	return Http.POST("socket/modifyById", params);
};

interface IGetSocketByUserIDRequestData {
	userID: string;
}
export const getSocketByUserID = function (params: IGetSocketByUserIDRequestData) {
	return Http.POST("socket/getSocketByUserID", params);
};

