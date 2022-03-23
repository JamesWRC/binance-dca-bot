// const trades = [
// 	{
// 		asset: "ETH", // Asset you want to buy
// 		currency: "BTC", // Currency you want to buy the asset with
// 		quoteOrderQty: 0.1, // Buy 0.1 BTC worth of ETH
//		schedule:: "0 11 * * *" // Everyday at 11am
// 	}
// ];
const trades = [
	// Daily DCA
	{
		asset: "ETH", // Asset you want to buy
		currency: "AUD", // Currency you want to buy the asset with
		quoteOrderQty: 15, // Buy $10 AUD worth of ETH
		schedule: '* * * * *' // Every day @ 11am
	},
	// Weekly DCA
	{
		asset: "USDT", // Asset you want to buy
		currency: "AUD", // Currency you want to buy the asset with
		quoteOrderQty: 30, // Buy ~$10 AUD worth of USDT
		schedule: '0 10 * * 4' // At 10:00 on Thursday
	},
	{
		asset: "IMX", // Asset you want to buy
		currency: "USDT", // Currency you want to buy the asset with
		quoteOrderQty: 10, // Buy $10 USDT worth of IMX
		schedule: '0 11 * * 4*' // At 11:00 on Thursday
	},
	{
		asset: "LRC", // Asset you want to buy
		currency: "USDT", // Currency you want to buy the asset with
		quoteOrderQty: 10, // Buy $10 USDT worth of IMX
		schedule: '0 11 * * 4*' // At 11:00 on Thursday
	},
];

export { trades };
