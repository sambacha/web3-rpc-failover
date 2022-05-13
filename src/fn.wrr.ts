/**
* weighted round robbin 
* @exports wrr
*/
export default function (wrr) {
var i=0, j=0, tmp, items=[];
for (; i < wrr.length; i++) {
  tmp = wrr[i];
  for (j=0; j < tmp.weight; j++) {
    items.push(tmp.item);
  }
};

return function () {
  return items[items.length * Math.random() | 0];
  }
};
