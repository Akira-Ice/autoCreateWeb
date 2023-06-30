import Http from "../http";

export const getOrderList = function (params: IGetOrderListRequestData) {
	return Http.POST("order/getOrderList", params);
};

interface IGetOrderListByUserIDRequestData {
	userID: string;
}
export const getOrderListByUserID = function (params: IGetOrderListByUserIDRequestData) {
	return Http.POST("order/getOrderListByUserID", params);
};

export const getOrderByTreeID = function (params: IGetOrderByTreeIDRequestData) {
	return Http.POST("order/getOrderByTreeID", params);
};

interface IAddOrderRequestData {
	treeID: string;
	sellerID: string;
	buyerID: string;
	time: string;
	state: string;
}
export const addOrder = function (params: IAddOrderRequestData) {
	return Http.POST("order/addOrder", params);
};

interface IRemoveByIdRequestData {
	_id: string;
}
export const removeById = function (params: IRemoveByIdRequestData) {
	return Http.POST("order/removeById", params);
};

interface IModifyByIdRequestData {
	_id: string;
	treeID: string;
	buyerID: string;
	sellerID: string;
	state: string;
	time: string;
}
export const modifyById = function (params: IModifyByIdRequestData) {
	return Http.POST("order/modifyById", params);
};

interface IGetOrderListByUserIDRequestData {
	userID: string;
}
export const getOrderListByUserID = function (params: IGetOrderListByUserIDRequestData) {
	return Http.POST("order/getOrderListByUserID", params);
};

export const dataAnalysis = function (params: IDataAnalysisRequestData) {
	return Http.POST("order/dataAnalysis", params);
};

interface IGetOrderByTreeIDRequestData {
	treeID: string;
}
export const getOrderByTreeID = function (params: IGetOrderByTreeIDRequestData) {
	return Http.POST("order/getOrderByTreeID", params);
};

