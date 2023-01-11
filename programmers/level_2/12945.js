// 피보나치 수
function solution(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = (arr[i - 1] % 1234567) + (arr[i - 2] % 1234567);
  }

  return arr[n] % 1234567;
}