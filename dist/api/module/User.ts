import Http from "../http";

interface IGetUserListRequestData {
	pageNo: string;
	limit: string;
}
export const getUserList = function (params: IGetUserListRequestData) {
	return Http.POST("user/getUserList", params);
};

interface IRegisterRequestData {
	account: string;
	password: string;
	role: string;
}
export const register = function (params: IRegisterRequestData) {
	return Http.POST("user/register", params);
};

interface ILoginRequestData {
	account: string;
	password: string;
}
export const login = function (params: ILoginRequestData) {
	return Http.POST("user/login", params);
};

interface IRemoveByIdRequestData {
	_id: string;
}
export const removeById = function (params: IRemoveByIdRequestData) {
	return Http.POST("user/removeById", params);
};

interface IModifyByIdRequestData {
	account: string;
	password: string;
	role: string;
	avator: string;
	name: string;
	sex: string;
	location: string;
	_id: string;
	__v: string;
}
export const modifyById = function (params: IModifyByIdRequestData) {
	return Http.POST("user/modifyById", params);
};

interface IGetUserByIdRequestData {
	_id: string;
}
export const getUserById = function (params: IGetUserByIdRequestData) {
	return Http.POST("user/getUserById", params);
};

