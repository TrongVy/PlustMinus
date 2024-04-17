// INPUT


// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.
//Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.


// Cho một mảng các số nguyên, tính tỉ số của các phần tử dương, âm và bằng 0.
// In giá trị thập phân của mỗi phân số trên một dòng mới có 6 chữ số sau số thập phân.  ( the decimal value of each fraction / giá trị thập phân của mỗi phân số)

// NOTE :Thử thách này đưa ra các vấn đề về độ chính xác. Các trường hợp thử nghiệm được chia tỷ lệ đến sáu chữ số thập phân, mặc dù các câu trả lời có sai số tuyệt đối lên tới 10^-4 đều có thể chấp nhận được.


// Example
// arr = [1,1,0,-1,-1]
// there are n = 5 element, tow positive, two negative, and one zero,Their ratios are :2/5= 0.400000, 2/5 = 0.400000 ,  and 1/2 = 0.200000 . Results are printed as:
// ( tỉ lệ 2 số dương,2 âm và 1 số 0 )
// Results are printed as:


// 0.400000
// 0.400000
// 0.200000


const plusMinus = (arr) => {
    let positive = 0
    let negative = 0
    let zero = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) positive++
        if (arr[i] < 0) negative++
        if (arr[i] == 0) zero++
    }
    console.log((positive / arr.length).toFixed(6))
    console.log((negative / arr.length).toFixed(6))
    console.log((zero / arr.length).toFixed(6))
}

let arrTest = [1, 1, 0, -1, -1];
plusMinus(arrTest);


// ratios : tỉ số
// positive : dương
// negative : âm
// decimal :  số thập phân
// fraction : phân số
// precision : độ chính xác
// absolute : tuyệt đối
// 10^-4 :ten to the power of negative four
