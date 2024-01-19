// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// PATTERN SEARCH ALGORITHMS

// BINARY SEARCH (DIVIDE AND CONQUER)


// !! INPUT DATA MUST BE SORTED !!


function binarySearch(arr, T) {
	let L = 0;
	let R = arr.length - 1;

	while (L < R) {
		let M = Math.floor((R + L) / 2);
		// console.log(arr[L] ,arr[M], arr[R]);

		if (arr[M] === T) return M;
		
		// if M is smaller than the target value, move L to 1 index after M's current index
		if (arr[M] < T) {
			L = M++;
		}
		
		// if M is larger than the target value, move R to 1 index before M's current index
		if (arr[M] > T) {
			R = M--;
		}		
	}

	// final return value if the target value (T) is not found in the array
	return -1;
	
}

let numbers = [12, 16, 22, 60, 68, 70, 80, 99, 112, 200];

binarySearch(numbers, 22)


// first iteration:
// [12, 16, 22, 60, 68, 70, 80, 99, 112, 200]
//  L               M                    R
// ------------------------------------------
// second iteration:
// [12, 16, 22, 60, 68, 70, 80, 99, 112, 200]
//  L   M       R
// ------------------------------------------
// third iteration
// [12, 16, 22, 60, 68, 70, 80, 99, 112, 200]
//          LM  R