public class Solution
{
    public int CountNegatives(int[][] grid)
    {
        int count = 0;
        foreach (int[] innerArray in grid)
        {
            int left = 0;
            int right = innerArray.Length - 1;
            while (left <= right)
            {
                int middle = (left + right) / 2;
                if (innerArray[middle] < 0)
                {
                    right = middle - 1;
                }
                else
                {
                    left = middle + 1;
                }
            }
            count += innerArray.Length - left;
        }
        return count;
    }
}