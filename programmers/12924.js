// 숫자의 표현
function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
}
