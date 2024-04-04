public class Solution
{
    public int SearchInsert(int[] nums, int target)
    {
        int low = 0;
        int high = nums.Length;

        if (target > nums[high - 1])
        {
            return high;
        }

        while (low <= high)
        {
            int middle = (high + low) / 2;
            if (nums[middle] == target)
            {
                return middle;
            }
            else if (nums[middle] > target)
            {
                high = middle - 1;
            }
            else
            {
                low = middle + 1;
            }
        }
        return low;
    }
}