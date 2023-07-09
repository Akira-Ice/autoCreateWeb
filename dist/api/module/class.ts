import Http from "../http";

interface IListRequestData {
	current: number;
	pageSize: number;
}
export const classList = function (params: IListRequestData) {
	return Http.GET("/class/", params);
};

interface ICreateRequestData {
	id: number;
	name: string;
}
export const classCreate = function (params: ICreateRequestData) {
	return Http.POST("/class/create", params);
};

interface IDeleteRequestData {
	id: string;
}
export const classDelete = function (params: IDeleteRequestData) {
	return Http.POST("/class/delete/:id", params);
};

interface IUpdateRequestData {
	id: number;
	name: string;
}
export const classUpdate = function (params: IUpdateRequestData) {
	return Http.POST("/class/update", params);
};

interface IGetByIdRequestData {
	id: string;
}
export const classGetById = function (params: IGetByIdRequestData) {
	return Http.GET("/class/:id", params);
};

