public class Solution
{
    public int Search(int[] nums, int target)
    {
        Array.Sort(nums);
        Console.WriteLine(nums);
        int low = 0;
        int high = nums.Length - 1;

        while (low <= high)
        {
            int middle = (low + high) / 2;
            int guess = nums[middle];
            if (guess == target)
            {
                return middle;
            }
            else if (guess > target)
            {
                high = middle - 1;
            }
            else
            {
                low = middle + 1;
            }
        }
        return -1;
    }
}