public class Solution
{
    public string SortSentence(string s)
    {

        string[] words = s.Split(' ');
        string[] sorted = new string[words.Length];
        for (int i = 0; i < words.Length; i++)
        {
            // Convert the last character to its corresponding numeric value
            // and subtract '1' to get the zero-based index
            int index = words[i][words[i].Length - 1] - '1';
            string word = words[i].Remove(words[i].Length - 1);
            sorted[index] = word;
        }

        return String.Join(' ', sorted);
    }
}