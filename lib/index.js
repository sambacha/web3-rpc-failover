'use strict';
/**
* weighted round robbin 
* @exports arr
*/

export default function (arr) {
	var i=0, j=0, tmp, items=[];

	for (; i < arr.length; i++) {
		tmp = arr[i];
		for (j=0; j < tmp.weight; j++) {
			items.push(tmp.item);
		}
	}

	return function () {
		return items[items.length * Math.random() | 0];
	};
}
