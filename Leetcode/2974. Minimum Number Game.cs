public class Solution
{
    public int FindSmallest(List<int> list)
    {
        int smallest = list[0];
        for (int i = 1; i < list.Count; i++)
        {
            if (list[i] < smallest)
            {
                smallest = list[i];
            }
        }
        list.Remove(smallest);
        return smallest;
    }

    public int[] NumberGame(int[] nums)
    {
        List<int> list = nums.ToList();
        List<int> sortedNums = new List<int>();

        while (list.Count > 0)
        {
            int smallest_a = FindSmallest(list);
            int smallest_b = FindSmallest(list);

            sortedNums.Add(smallest_b);
            sortedNums.Add(smallest_a);

        }
        return sortedNums.ToArray();
    }
}