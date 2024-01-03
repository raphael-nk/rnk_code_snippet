const data = [
  {
    "_id": "65643d9d8ac85e0d8f034842",
    "user_id": "652d4c3e44225f3fe6012b03",
    "exchange_id": "615aaae93f4ccf38515f9b7b",
    "is_active": true,
    "usdt_limit": 2000,
    "usdt_value": 2000,
    "usdt_plus_value": 10,
    "btc_amount": 0.00023698999999999999254741978038651950555504299700260162353515625,
    "updated_at": "2023-12-11T08:01:15.431000Z",
    "exchange": "BINANCE"
  },
  {
    "_id": "6573210e3f2a009279023002",
    "user_id": "652d4c3e44225f3fe6012b03",
    "exchange_id": "642692fd8b623bac46d8819e",
    "is_active": true,
    "usdt_limit": 200,
    "usdt_value": 200,
    "usdt_plus_value": 0,
    "btc_amount": 0,
    "exchange":"KRAKEN"
  }
]; 

// Using map function
const transposedData = Object.keys(data[0]).map(key => ({ 
		[key]: data.map(item => item[key]) 
	}))
   
// Using for loop 
/*const transposedData = {}
for(const key of Object.keys(data[0])){
	transposedData[key] = data.map(item => item[key]); 
}*/

// Using reduce 
/*const transposedData = Object.keys(data[0]).reduce((acc,key) => {
	acc[key] = data.map(item => item[key]); 
	return acc; 
},{});*/ 
 
console.log(transposedData); 
