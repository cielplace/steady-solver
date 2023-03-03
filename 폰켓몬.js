function solution(nums) {
  const getPkmMax = nums.length / 2;
  const originPkm = new Set(nums).size;
  const answer = getPkmMax < originPkm ? getPkmMax : originPkm;

  return answer;
}
