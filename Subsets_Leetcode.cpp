//Backtracking Approach:

class Solution
{
public:
    vector<vector<int>> ans;
    void generate(vector<int> &subset, int ind, vector<int> &nums)
    {
        if (ind == nums.size())
        {
            ans.push_back(subset);
            return;
        }

        generate(subset, ind + 1, nums);  // don't include current element

        subset.push_back(nums[ind]);
        generate(subset, ind + 1, nums);  // include current element
        subset.pop_back(); 
    }
    
    vector<vector<int>> subsets(vector<int> &nums)
    {
        ans.clear();
        vector<int> subset = {};
        generate(subset, 0, nums);
        return ans;
    }
};


//Bit Masking Approach:

// class Solution
// {
// public:
//     vector<vector<int>> subsets(vector<int> &nums)
//     {
//         vector<vector<int>> ans = {};
//         int n = nums.size();
//         int maskSize = (1 << n);

//         for (int mask = 0; mask < maskSize; mask++)
//         {
//             vector<int> subset;

//             for (int i = 0; i < n; i++)
//             {
//                 if ((mask & (1 << i)) != 0)
//                     subset.push_back(nums[i]);
//             }
//             ans.push_back(subset);
//         }
//         return ans;
//     }
// };
