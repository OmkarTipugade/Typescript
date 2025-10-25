const longestMinMaxDiffSubarray = (nums: number[], k: number): number => {
    let maxLength: number = 0;

    let len = nums.length
    let diffs : number[] = []
    let i  : number = 0, j: number =0
    let prevMin: number = 0 , prevMax: number = 0;
    while(i<len && j<len) {

        let min  = Math.min(nums[i], nums[j])
        let max  = Math.max(nums[i], nums[j])
        


    }

    return maxLength;
}