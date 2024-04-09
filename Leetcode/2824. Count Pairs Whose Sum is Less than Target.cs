public class Solution
{
    public int CountPairs(IList<int> nums, int target)
    {
        List<int> sorted = nums.ToList();
        sorted.Sort();

        int count = 0;
        int left = 0;
        int right = sorted.Count - 1;

        while (left < right)
        {
            if (sorted[left] + sorted[right] < target)
            {
                count += (right - left);
                left++;
            }
            else
            {
                right--;
            }
        }

        return count;
    }
}