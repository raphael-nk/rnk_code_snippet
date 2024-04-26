### DIFFERENT WAYS TO TRANSPOSE DATA

```js
const data = [{"a": 1, "b": 2, "c": 3}, {"a": 4, "b": 5, "c": 6}];

console.log(data)
```

- Use `map` function

```js
const transposedData = Object.keys(data[0]).map(key => ({ 
    [key]: data.map(item => item[key]) 
}))

console.log(transposedData)
```

- Use `for` loop and `map` function

```js
for(const key of Object.keys(data[0])){
	transposedData[key] = data.map(item => item[key]); 
}

console.log(transposedData)
```

- Use `reduce` loop and `map` function

```js
const transposedData = Object.keys(data[0]).reduce((acc,key) => {
	acc[key] = data.map(item => item[key]); 
	return acc; 
},{})

console.log(transposedData)
```