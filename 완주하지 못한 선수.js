function solution(participant, completion) {
  const P = participant.length;

  var answer = "";

  participant.sort();
  completion.sort();

  for (let i = 0; i < P; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
}
