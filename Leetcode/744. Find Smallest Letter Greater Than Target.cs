public class Solution
{
    public char NextGreatestLetter(char[] letters, char target)
    {
        int left = 0;
        int right = letters.Length - 1;

        while (left <= right)
        {
            int middle = (left + right) / 2;
            char guess = letters[middle];
            if (guess <= target)
            {
                left = middle + 1;
            }
            else
            {
                right = middle - 1;
            }
        }
        return left < letters.Length ? letters[left] : letters[0];
    }
}