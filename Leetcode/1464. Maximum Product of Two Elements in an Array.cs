public class Solution
{
    public int MaxProduct(int[] nums)
    {
        int[] sorted = QuickSort(nums);
        return (sorted[nums.Length - 1] - 1) * (sorted[nums.Length - 2] - 1);
    }

    public int[] QuickSort(int[] nums)
    {
        if (nums.Length < 2)
        {
            return nums;
        }

        int pivot = nums[0];
        int[] less = nums.Skip(1).Where(item => item <= pivot).ToArray();
        int[] greater = nums.Skip(1).Where(item => item > pivot).ToArray();

        return QuickSort(less).Concat(new int[] { pivot }).Concat(QuickSort(greater)).ToArray();
    }
}
