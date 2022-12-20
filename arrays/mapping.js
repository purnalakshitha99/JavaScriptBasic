const numbers = [1,-1,2,3,];

//const filtered = numbers.filter(n => n >= 0);
 const items = numbers
 .filter(n => n >= 0)
 .map(n => ({value:n}))
 .filter(obj => obj.value>1)
 .map(obj => obj.value);
//const item = filtered.map(n => '<li>' + n +'</li>');
//const items = filtered.map(n => ({value:n}));

//const html = '<ul>'+item.join('') + '</ul>';

console.log(items);
//console.log(html);