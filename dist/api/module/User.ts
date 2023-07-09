import Http from "../http";

interface IListRequestData {
	current: number;
	pageSize: number;
}
export const userList = function (params: IListRequestData) {
	return Http.GET("/user/", params);
};

interface ICreateRequestData {
	age: number;
	classId: number;
	email: string;
	id: number;
	name: string;
}
export const userCreate = function (params: ICreateRequestData) {
	return Http.POST("/user/create", params);
};

interface IDeleteRequestData {
	id: string;
}
export const userDelete = function (params: IDeleteRequestData) {
	return Http.POST("/user/delete/:id", params);
};

interface IUpdateRequestData {
	age: number;
	classId: number;
	email: string;
	id: number;
	name: string;
}
export const userUpdate = function (params: IUpdateRequestData) {
	return Http.POST("/user/update", params);
};

interface IGetByIdRequestData {
	id: string;
}
export const userGetById = function (params: IGetByIdRequestData) {
	return Http.GET("/user/:id", params);
};

