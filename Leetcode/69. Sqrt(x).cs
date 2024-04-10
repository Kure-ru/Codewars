public class Solution
{
    public int MySqrt(int x)
    {
        if (x == 0 || x == 1)
        {
            return x;
        }

        int left = 1;
        int right = x;

        while (left <= right)
        {
            int middle = left + (right - left) / 2;
            double square = Math.Pow(middle, 2);

            if (square == x)
            {
                return middle;
            }
            else if (square > x)
            {
                right = middle - 1;
            }
            else
            {
                left = middle + 1;
            }
        }
        return right;
    }
}