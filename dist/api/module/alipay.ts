import Http from "../http";

interface IPagePayRequestData {
	orderID: string;
	title: string;
	describe: string;
	price: string;
}
export const pagePay = function (params: IPagePayRequestData) {
	return Http.POST("alipay/pagePay", params);
};

interface IRefundRequestData {
	orderID: string;
	price: string;
}
export const refund = function (params: IRefundRequestData) {
	return Http.POST("alipay/refund", params);
};

