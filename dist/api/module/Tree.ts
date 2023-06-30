import Http from "../http";

export const getTreeList = function (params: IGetTreeListRequestData) {
	return Http.POST("tree/getTreeList", params);
};

interface IGetTreeByIdRequestData {
	_id: string;
}
export const getTreeById = function (params: IGetTreeByIdRequestData) {
	return Http.POST("tree/getTreeById", params);
};

interface IAddTreeRequestData {
	ownerID: string;
	type: string;
	state: string;
	height: string;
	diameter: string;
	branchPoint: string;
	location: string;
	describe: string;
	imgs: string;
	price: string;
}
export const addTree = function (params: IAddTreeRequestData) {
	return Http.POST("tree/addTree", params);
};

interface IRemoveByIdRequestData {
	_id: string;
}
export const removeById = function (params: IRemoveByIdRequestData) {
	return Http.POST("tree/removeById", params);
};

interface IModifyByIdRequestData {
	_id: string;
	ownerID: string;
	type: string;
	state: string;
	height: string;
	diameter: string;
	branchPoint: string;
	location: string;
	describe: string;
	price: string;
	imgs: string;
	time: string;
	owner: string;
	title: string;
}
export const modifyById = function (params: IModifyByIdRequestData) {
	return Http.POST("tree/modifyById", params);
};

interface IGetTreeListByUserIDRequestData {
	userID: string;
}
export const getTreeListByUserID = function (params: IGetTreeListByUserIDRequestData) {
	return Http.POST("tree/getTreeListByUserID", params);
};

