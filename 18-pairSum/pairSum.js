function pairSum(nums, target) {
  // Insert code here;
  // if len less than 1, error
  if(nums.length<=1){
    throw error;
  }
  else{
    for(var i=0;i<nums.length;i++){
      for(var j=i+1;j<nums.length;j++){
        // return true if two distinct numbers add up to target
	if(nums[i]+nums[j]==target){
	  return true;
	}
      }
    }
    return false;
  }
}

// Do not edit this line;
module.exports = pairSum;
