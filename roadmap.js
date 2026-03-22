const topics = {
    arrays: {
        title: "Arrays & Hashing",
        concept: "Arrays store elements of the same type in contiguous memory locations, enabling O(1) random access via indices. Core interview topics: two pointers, sliding window, prefix sums, Kadane's algorithm for max subarray. Watch for off-by-one errors, bounds checking. Time complexities: access O(1), search/insert/delete O(n). Hashing complements arrays for O(1) lookups using hash maps. Interview tip: Visualize indices on paper whiteboard. Frequency: Amazon (High), Google (High), Meta (Medium).",
        detailedExplanation: "Arrays are the foundation of data structures. They provide contiguous memory allocation which allows instant access to any element using index (0-indexed). Key concepts: (1) In-place modifications save space; (2) Two-pointer technique solves problems like palindromes, sorted pairs, partitioning; (3) Sliding window finds optimal subarrays satisfying constraints; (4) Prefix sum preprocessing answers range queries in O(1); (5) HashMap stores element-index mappings for O(1) lookups. Common pitfalls: off-by-one errors in loops, not handling empty arrays, modifying during iteration. Interview approach: State both brute force O(n²) and optimized solution, discuss space-time tradeoff.",
        approaches: [
            {
                name: "Two Pointers",
                description: "Use indices from start/end moving towards center. Handles sorted arrays, finding pairs, partitioning. Time O(n), Space O(1)."
            },
            {
                name: "Sliding Window",
                description: "Maintain contiguous subarray window. Expand/contract for max/min with constraint. Time O(n), Space O(1)."
            },
            {
                name: "Prefix Sum",
                description: "Precompute cumulative sums for range queries. Answer range[l,r] in O(1) after O(n) preprocessing. Space O(n)."
            },
            {
                name: "Hash Map",
                description: "Store index/frequency mappings for instant lookups. Solves 'find pair sum to target', 'duplicate detection'. Space O(n)."
            },
            {
                name: "Kadane's Algorithm",
                description: "Track max_ending_here and max_so_far for maximum subarray. Single pass DP. Time O(n), Space O(1)."
            }
        ],
        patterns: {
            traversal: {
                title: "Array Traversal",
                explanation: "Systematic iteration through array elements, foundational for most array problems. Single pass for sum/max/count/min. Use for-loops with indices for clarity and random access. Multiple passes acceptable if T.C. remains linear. Track start/end indices for subarrays. Common in preprocessing (prefix sums). Pitfall: Modifying array while iterating. Interview: Always state T.C. O(n), S.C. O(1). Practice verbal explanation while coding.",
                code: "public class Solution {\n    public void traverse(int[] arr) {\n        for(int i = 0; i < arr.length; i++) {\n            // Process arr[i]\n            System.out.println(arr[i]);\n        }\n    }\n}",
                problems: [
                    { name: "Two Sum", difficulty: "Easy", frequency: "High", companies: ["Amazon", "Google", "Meta"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/two-sum/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/two-sum/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/2-sum/" }] },
                    { name: "Best Time to Buy and Sell Stock", difficulty: "Easy", frequency: "Medium", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/best-time-to-buy-and-sell-stock/" }] },
                    { name: "Contains Duplicate", difficulty: "Easy", frequency: "Low", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/contains-duplicate/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-element-exist-in-array/" }, { name: "HackerRank", url: "https://www.hackerrank.com/challenges/find-duplicate-elements-in-array/problem" }] },
                    { name: "Product of Array Except Self", difficulty: "Medium", frequency: "High", companies: ["Amazon", "Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/product-of-array-except-self/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/product-of-array-except-self/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/product-array-except-self/" }] }
                ]
            },
            prefixsum: {
                title: "Prefix Sum",
                explanation: "Precompute cumulative sums to answer range sum queries in O(1) after O(n) preprocessing. prefix[i] = sum of elements from 0 to i-1. Range sum(l,r) = prefix[r+1] - prefix[l]. Handles subarray sums equals K with hashmap of prefix sums. Extends to difference array. T.C. O(n), S.C. O(n). Interview favorite for 'count subarrays with property'. Pitfall: Off-by-one in range calculations.",
                code: "public class Solution {\n    public int[] prefixSum(int[] arr) {\n        int[] prefix = new int[arr.length + 1];\n        for(int i = 1; i <= arr.length; i++) {\n            prefix[i] = prefix[i-1] + arr[i-1];\n        }\n        return prefix;\n    }\n}",
                problems: [
                    { name: "Subarray Sum Equals K", difficulty: "Medium", frequency: "High", companies: ["Amazon", "Meta"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/subarray-sum-equals-k/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/subarray-sum-equals-k/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/subarray-sum-equals-k/" }] },
                    { name: "Continuous Subarray Sum", difficulty: "Medium", frequency: "Medium", companies: ["Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/continuous-subarray-sum/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/continuous-subarray-sum-divisible-k/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/continuous-subarray-sum/" }] },
                    { name: "Find Pivot Index", difficulty: "Easy", frequency: "Low", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/find-pivot-index/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-pivot-index-array/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/find-pivot-index/" }] }
                ]
            },
            sliding_window: {
                title: "Sliding Window",
                explanation: "Maintain dynamic window [left, right] expanding/shrinking for subarrays satisfying condition. Use for 'longest/maximum subarray with constraint' (sum <= K, chars <=2, etc.). Track window sum/count with add/remove operations O(1). Two pointers variant. States: expand right, shrink left when invalid. T.C. O(n), S.C. O(1). Interview: Identify when applicable (contiguous subarray constraint).",
                code: "public class Solution {\n    public int maxLength(int[] arr, int k) {\n        int left = 0, sum = 0, maxLen = 0;\n        for(int right = 0; right < arr.length; right++) {\n            sum += arr[right];\n            while(sum > k && left <= right) {\n                sum -= arr[left++];\n            }\n            maxLen = Math.max(maxLen, right - left + 1);\n        }\n        return maxLen;\n    }\n}",
                problems: [
                    { name: "Longest Substring Without Repeating Characters", difficulty: "Medium", frequency: "High", companies: ["Amazon", "Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/longest-substring-without-repeat/" }] },
                    { name: "Minimum Window Substring", difficulty: "Hard", frequency: "Medium", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/minimum-window-substring/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/minimum-window-substring/" }] },
                    { name: "Longest Repeating Character Replacement", difficulty: "Medium", frequency: "High", companies: ["Amazon", "Meta"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/longest-repeating-character-replacement/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-repeating-character-replacement/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/longest-repeating-character-replacement/" }] }
                ]
            },
            kadane: {
                title: "Kadane's Algorithm",
                explanation: "Maximum subarray sum using DP: max_ending_here = max(arr[i], max_ending_here + arr[i]). T.C. O(n), S.C. O(1). Handles negatives. Interview staple for 'maximum sum with constraint'.",
                code: "public class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSoFar = nums[0], maxEnding = nums[0];\n        for(int i = 1; i < nums.length; i++) {\n            maxEnding = Math.max(nums[i], maxEnding + nums[i]);\n            maxSoFar = Math.max(maxSoFar, maxEnding);\n        }\n        return maxSoFar;\n    }\n}",
                problems: [
                    { name: "Maximum Subarray", difficulty: "Medium", frequency: "High", companies: ["Amazon", "Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-subarray-sum/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/max-sum-subarray/" }] }
                ]
            }
        }
    },
    strings: {
        title: "Strings",
        concept: "Immutable sequences of characters in Java. Common ops: charAt, substring, length. Interview focus: palindromes, anagrams, sliding window, two pointers. Handle edge cases: empty string, single char, all same chars, unicode. T.C. string ops O(n), concatenation in loop O(n^2) → use StringBuilder. ASCII 128 chars often assumed for counting. Frequency: Amazon (High), Microsoft (High).",
        detailedExplanation: "Strings in Java are immutable, meaning once created, they cannot be changed. Operations on String create new objects. Key insights: (1) Use StringBuilder for concatenation in loops (O(n) vs O(n²)); (2) Character frequency counting useful for anagrams/patterns; (3) Sliding window finds longest substring with constraints; (4) Two pointers checks palindromes/reversal; (5) Early termination saves iterations; (6) Consider both ASCII (128) and Unicode. Edge cases: empty string, single char, repeated chars, spaces. Interview: Explain immutability, discuss mutable vs immutable tradeoffs.",
        approaches: [
            {
                name: "Character Counting",
                description: "Use array[256] or HashMap to count frequencies. Identify anagrams, missing chars, duplicates. Time O(n), Space O(1) for ASCII."
            },
            {
                name: "Sliding Window",
                description: "Find longest/shortest substring matching condition. Expand right, shrink left when invalid. Time O(n), Space O(k) for window."
            },
            {
                name: "Two Pointers",
                description: "Validate palindromes from ends. Partition string. Reverse in-place. Time O(n), Space O(1)."
            },
            {
                name: "StringBuilder",
                description: "Build result strings efficiently. Concatenation O(1) amortized. Final toString() O(n)."
            },
            {
                name: "Pattern Matching",
                description: "Regex or manual iteration for substring. KMP algorithm O(n+m) for pattern search."
            }
        ],
        patterns: {
            frequency: {
                title: "Character Frequency / Anagrams",
                explanation: "Count character occurrences using array (ASCII) or hashmap. Anagram check: same freq counts. Group anagrams by sorted string or freq tuple. Fixed size array[26/128] for lowercase/ASCII. HashMap for unicode. T.C. O(n), S.C. O(1)/O(k). Interview: Optimize space when possible. Pitfall: Case sensitivity, spaces/punctuation.",
                code: "public class Solution {\n    public boolean isAnagram(String s, String t) {\n        int[] count = new int[26];\n        for(char c : s.toCharArray()) count[c - 'a']++;\n        for(char c : t.toCharArray()) count[c - 'a']--;\n        for(int val : count) if(val != 0) return false;\n        return true;\n    }\n}",
                problems: [
                    { name: "Valid Anagram", difficulty: "Easy", frequency: "High", companies: ["Amazon", "Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/valid-anagram/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/anagrams/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/anagrams/" }] },
                    { name: "Group Anagrams", difficulty: "Medium", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/group-anagrams/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/group-anagrams/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/anagrams/" }] }
                ]
            },
            palindrome: {
                title: "Palindrome Check",
                explanation: "String reads same forward/backward. Two pointers from ends to center. Skip non-alphanumeric, ignore case. Expand around center for longest. Preprocess clean string. T.C. O(n), S.C. O(1). Interview: Verbalize edge cases first (odd/even length, spaces).",
                code: "public class Solution {\n    public boolean isPalindrome(String s) {\n        int left = 0, right = s.length() - 1;\n        while(left < right) {\n            while(left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;\n            while(left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;\n            if(Character.toLowerCase(s.charAt(left++)) != Character.toLowerCase(s.charAt(right--))) return false;\n        }\n        return true;\n    }\n}",
                problems: [
                    { name: "Valid Palindrome", difficulty: "Easy", frequency: "Medium", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/valid-palindrome/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/palindrome-check/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/palindrome-string/" }] },
                    { name: "Longest Palindromic Substring", difficulty: "Medium", frequency: "High", companies: ["Amazon", "Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-substring/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-palindrome-in-a-string/" }, { name: "HackerRank", url: "https://www.hackerrank.com/challenges/longest-palindrome/problem" }] }
                ]
            },
            two_pointers: {
                title: "Two Pointers",
                explanation: "Left/right pointers meeting/moving for sorted arrays/strings. Remove duplicates, partition. T.C. O(n), S.C. O(1). Faster than nested loops.",
                code: "public class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        int left = 0, right = numbers.length - 1;\n        while(left < right) {\n            int sum = numbers[left] + numbers[right];\n            if(sum == target) return new int[]{left+1, right+1};\n            else if(sum < target) left++;\n            else right--;\n        }\n        return new int[]{};\n    }\n}",
                problems: [
                    { name: "3Sum", difficulty: "Medium", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/3sum/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-triplets-array-sum-given-number/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/3-sum/" }] }
                ]
            }
        }
    },
    binarysearch: {
        title: "Binary Search",
        concept: "Divide-and-conquer on sorted arrays halving search space each step O(log n). Requires monotonic property. Adapt for rotated, peaks, bounds. Template: while(l <= r), mid = l + (r-l)/2, compare arr[mid]. Interview must-have: Code template from memory, handle edge cases (l==r, not found). Frequency: Google (High), Amazon (Medium).",
        detailedExplanation: "Binary search is the go-to algorithm for sorted/monotonic sequences, reducing O(n) to O(log n). The fundamental principle: eliminate half the search space each iteration. Key requirements: (1) Data must be sorted or have monotonic property; (2) Mid calculation as l + (r-l)/2 prevents integer overflow; (3) Three patterns exist: find exact match, find boundary (first/last occurrence), answer-space search. Variants: rotated arrays (find pivot then search), peak finding (no full sort), answer space (search solution not array). Common mistakes: infinite loops when l=mid (use l=mid+1 in right search), not handling empty arrays, off-by-one in boundaries. Interview strategy: Code template from memory, identify the monotonic property, optimize from brute force.",
        approaches: [
            {
                name: "Standard Binary Search",
                description: "Find exact target in sorted array. l=0, r=n-1, compare arr[mid] with target. Time O(log n), Space O(1)."
            },
            {
                name: "Left Boundary Search",
                description: "Find first occurrence of value. Use left-biased comparison: if arr[mid] < target, move left. Time O(log n)."
            },
            {
                name: "Right Boundary Search",
                description: "Find last occurrence of value. Use right-biased comparison: if arr[mid] <= target, move right. Time O(log n)."
            },
            {
                name: "Rotated Array Search",
                description: "Find pivot point where sort breaks. Determine which half is properly sorted, search there. Time O(log n)."
            },
            {
                name: "Answer-Space Search",
                description: "Search solution space not array. Implement feasibility check, binary search the answer (e.g., capacity, speed). Time O(log(answer) * feasibility)."
            }
        ],
        patterns: {
            basic: {
                title: "Basic Binary Search",
                explanation: "Find target in sorted array. Initialize l=0, r=n-1. Mid calculation avoids overflow: l + (r-l)/2. Update bounds based on comparison. Return index or -1. Edge: empty array, single element, target at bounds. T.C. O(log n), S.C. O(1). First problem to code in interviews.",
                code: "public class Solution {\n    public int search(int[] arr, int target) {\n        int left = 0, right = arr.length - 1;\n        while(left <= right) {\n            int mid = left + (right - left) / 2;\n            if(arr[mid] == target) return mid;\n            else if(arr[mid] < target) left = mid + 1;\n            else right = mid - 1;\n        }\n        return -1;\n    }\n}",
                problems: [
                    { name: "Binary Search", difficulty: "Easy", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/binary-search/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/binary-search/" }, { name: "HackerRank", url: "https://www.hackerrank.com/challenges/binary-search/problem" }] }
                ]
            },
            rotated: {
                title: "Search Rotated Sorted Array",
                explanation: "Sorted array rotated at unknown pivot. Determine which half is sorted. If target in sorted half → search there, else other half. Modified binary: compare arr[l] vs arr[mid] to find sorted side. T.C. O(log n). Interview: Draw rotation examples.",
                code: "public class Solution {\n    public int search(int[] nums, int target) {\n        int l = 0, r = nums.length - 1;\n        while(l <= r) {\n            int m = l + (r - l)/2;\n            if(nums[m] == target) return m;\n            if(nums[l] <= nums[m]) {\n                if(target > nums[m]) l = m + 1;\n                else r = m - 1;\n            } else {\n                if(target < nums[m]) r = m - 1;\n                else l = m + 1;\n            }\n        }\n        return -1;\n    }\n}",
                problems: [
                    { name: "Search in Rotated Sorted Array", difficulty: "Medium", frequency: "High", companies: ["Amazon", "Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-rotated-array/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/search-in-rotated-sorted-array/" }] }
                ]
            },
            peaks: {
                title: "Find Peak Element",
                explanation: "Binary search for local maximum. If arr[mid] < arr[mid+1] → peak right half, else left. T.C. O(log n).",
                code: "public class Solution {\n    public int findPeakElement(int[] nums) {\n        int left = 0, right = nums.length - 1;\n        while(left < right) {\n            int mid = left + (right - left) / 2;\n            if(nums[mid] < nums[mid + 1]) left = mid + 1;\n            else right = mid;\n        }\n        return left;\n    }\n}",
                problems: [
                    { name: "Find Peak Element", difficulty: "Medium", frequency: "Medium", companies: ["Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/find-peak-element/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-peak-element/" }, { name: "InterviewBit", url: "https://www.interviewbit.com/problems/find-peak-element/" }] }
                ]
            }
        }
    },
    'linked list': {
        title: "Linked List",
        concept: "Dynamically sized nodes with value + next pointer. Singly/doubly/circular. Ops: insert/delete O(1) with pointer, traversal O(n). Interview: Dummy nodes for edge cases, slow/fast pointers, recursion vs iterative. Memory management crucial. Draw nodes on whiteboard. Frequency: Amazon (High), Microsoft (Medium).",
        detailedExplanation: "Linked lists provide dynamic memory allocation without contiguous storage. Unlike arrays, insertion/deletion after a known position is O(1), but random access costs O(n). Key techniques: (1) Dummy head node simplifies edge cases (empty list, inserting at head); (2) Slow/fast two pointers find middle, detect cycles; (3) Recursion elegant for reversal/problems but uses stack space; (4) Iterative solutions preserve O(1) space; (5) For cycle problems, Floyd's algorithm finds start of cycle. Common pitfalls: null pointer exceptions, not properly unlinking nodes, infinite loops on cycles, memory leaks if references not cleared. Interview: Draw nodes on whiteboard, verbalize pointer updates, discuss iterative vs recursive tradeoffs.",
        approaches: [
            {
                name: "Two Pointers (Slow/Fast)",
                description: "Find middle: fast +2, slow +1. Detect cycle: meet if cycle, distance to cycle = reset slow to head. Time O(n), Space O(1)."
            },
            {
                name: "Dummy Head Node",
                description: "Create dummy before actual head. Handles edge cases: empty, single node, insert at head. Simplifies code logic."
            },
            {
                name: "Recursive Reversal",
                description: "Reverse rest, point current.next.next = current, current.next = null. Elegant but uses O(n) stack. Time O(n)."
            },
            {
                name: "Iterative Reversal",
                description: "prev=null, swap pointers in loop. prev → curr → next. Time O(n), Space O(1)."
            },
            {
                name: "Merge Two Lists",
                description: "Use dummy, compare heads, point to smaller, advance pointer. Time O(n+m), Space O(1)."
            }
        ],
        patterns: {
            cycle: {
                title: "Cycle Detection",
                explanation: "Floyd's Tortoise & Hare: slow +1, fast +2. Meet if cycle. Distance to cycle = mu, cycle length = lambda. Find start: reset slow to head. T.C. O(N), S.C. O(1). Interview: Prove why it works.",
                code: "public class Solution {\n    public boolean hasCycle(ListNode head) {\n        ListNode slow = head, fast = head;\n        while(fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if(slow == fast) return true;\n        }\n        return false;\n    }\n}",
                problems: [
                    { name: "Linked List Cycle", difficulty: "Easy", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/" }, { name: "HackerRank", url: "https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem" }] }
                ]
            },
            reverse: {
                title: "Reverse Linked List",
                explanation: "Iterative: prev=null, three pointers (prev, cur, next). Recursive: reverse rest, then cur.next = prev. K-reverse: reverse k nodes, connect groups. T.C. O(n), S.C. O(1). Practice both iterative/recursive.",
                code: "public class Solution {\n    public ListNode reverseList(ListNode head) {\n        ListNode prev = null, curr = head;\n        while(curr != null) {\n            ListNode nextTemp = curr.next;\n            curr.next = prev;\n            prev = curr;\n            curr = nextTemp;\n        }\n        return prev;\n    }\n}",
                problems: [
                    { name: "Reverse Linked List", difficulty: "Easy", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-a-linked-list/" }, { name: "HackerRank", url: "https://www.hackerrank.com/challenges/reverse-a-linked-list/problem" }] }
                ]
            },
            merge: {
                title: "Merge Linked Lists",
                explanation: "Dummy node + two pointers. Always point to smaller head. T.C. O(n+m), S.C. O(1).",
                code: "public class Solution {\n    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode();\n        ListNode tail = dummy;\n        while(l1 != null && l2 != null) {\n            if(l1.val < l2.val) {\n                tail.next = l1; l1 = l1.next;\n            } else {\n                tail.next = l2; l2 = l2.next;\n            }\n            tail = tail.next;\n        }\n        tail.next = (l1 != null) ? l1 : l2;\n        return dummy.next;\n    }\n}",
                problems: [
                    { name: "Merge Two Sorted Lists", difficulty: "Easy", frequency: "Medium", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/merge-two-sorted-lists/" }] }
                ]
            },
            palindrome_ll: {
                title: "Linked List Palindrome",
                explanation: "Slow/fast to middle, reverse second half, compare. Restore if needed. T.C. O(n), S.C. O(1).",
                code: "public class Solution {\n    public boolean isPalindrome(ListNode head) {\n        ListNode slow = head, fast = head;\n        while(fast.next != null && fast.next.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        // reverse second half and compare\n    }\n}",
                problems: [
                    { name: "Palindrome Linked List", difficulty: "Medium", frequency: "Medium", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/palindrome-linked-list/" }] }
                ]
            }
        }
    },
    stack: {
        title: "Stack & Queue",
        concept: "LIFO (Stack)/FIFO (Queue). Interview: parentheses validation, monotonic stack, next greater, BFS/DFS. Java Deque preferred. T.C. O(1) amortized. Frequency: Amazon (Medium), Google (Medium).",
        detailedExplanation: "Stacks (LIFO) are essential for DFS, expression evaluation, and problems requiring backtracking. Queues (FIFO) power BFS and job scheduling. Stack operations: push/pop/peek O(1). Common stack patterns: (1) Parentheses matching - push on open, pop on close; (2) Monotonic stack - maintain decreasing/increasing sequence, handles 'next greater element'; (3) Expression evaluation - shunting yard, postfix evaluation. Queue patterns: (1) BFS level-order traversal; (2) Sliding window maximum; (3) Circular buffers for fixed-size queues. Java Deque combines both. Pitfalls: empty check before pop, understanding when to use which structure. Interview: Identify stack vs queue based on problem constraints, code push/pop carefully.",
        approaches: [
            {
                name: "Parentheses Validation",
                description: "Push opening brackets, pop on closing. Check match. Empty stack at end = valid. Time O(n), Space O(n)."
            },
            {
                name: "Monotonic Stack",
                description: "Maintain decreasing/increasing stack of indices. Solves 'next greater/smaller element', 'largest rectangle'. Time O(n)."
            },
            {
                name: "Expression Evaluation",
                description: "Infix → postfix (shunting yard) → evaluate with operand stack. Handle operator precedence. Time O(n)."
            },
            {
                name: "BFS with Queue",
                description: "Level-order traversal, shortest path unweighted. Queue size tells level. Time O(n), Space O(max_width)."
            },
            {
                name: "DFS with Stack",
                description: "Iterative DFS using stack instead of recursion. Push neighbors, process until empty. Time O(n + m)."
            }
        ],
        patterns: {
            parentheses: {
                title: "Valid Parentheses",
                explanation: "Matching brackets: push opening, pop on closing match. Mismatched types/length fail. Multiple types: map closing to opening. T.C. O(n), S.C. O(n). Interview: Hashmap for multiple types.",
                code: "public class Solution {\n    public boolean isValid(String s) {\n        Deque<Character> stack = new ArrayDeque<>();\n        for(char c : s.toCharArray()) {\n            if(c == '(' || c == '[' || c == '{') stack.push(c);\n            else {\n                if(stack.isEmpty()) return false;\n                char top = stack.pop();\n                if(!isMatch(top, c)) return false;\n            }\n        }\n        return stack.isEmpty();\n    }\n}",
                problems: [
                    { name: "Valid Parentheses", difficulty: "Easy", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/valid-parentheses-string/" }] }
                ]
            },
            monotonic: {
                title: "Monotonic Stack",
                explanation: "Maintain increasing/decreasing stack. Pop smaller/larger for next greater/smaller. T.C. O(n).",
                code: "public class Solution {\n    public int[] nextGreaterElement(int[] nums) {\n        int[] result = new int[nums.length];\n        Deque<Integer> stack = new ArrayDeque<>();\n        for(int i = nums.length - 1; i >= 0; i--) {\n            while(!stack.isEmpty() && stack.peek() <= nums[i]) stack.pop();\n            result[i] = stack.isEmpty() ? -1 : stack.peek();\n            stack.push(nums[i]);\n        }\n        return result;\n    }\n}",
                problems: [
                    { name: "Next Greater Element I", difficulty: "Easy", frequency: "Medium", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/next-greater-element-i/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/next-greater-element/" }] }
                ]
            }
        }
    },
    recursion: {
        title: "Recursion & Backtracking",
        concept: "Solve by smaller subproblems. Base case terminates. Backtracking: try, recurse, undo. Draw recursion tree. Memo for DP. Frequency: Amazon (High), Meta (High).",
        patterns: {
            classic: {
                title: "Classic Recursion",
                explanation: "Base case + recursive case. Factorial, fibonacci, climb stairs. Memoize DP to avoid recomputation. T.C. exponential → memo O(n). Interview: Identify recursion possible problems.",
                code: "public class Solution {\n    public int climbStairs(int n) {\n        if(n <= 2) return n;\n        return climbStairs(n-1) + climbStairs(n-2);\n    }\n}",
                problems: [
                    { name: "Climbing Stairs", difficulty: "Easy", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/" }] }
                ]
            },
            subsets: {
                title: "Subsets/Combinations",
                explanation: "For each element: include or exclude. Backtrack with start index. T.C. O(2^n).",
                code: "public class Solution {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(0, new ArrayList<>(), nums, result);\n        return result;\n    }\n    private void backtrack(int start, List<Integer> curr, int[] nums, List<List<Integer>> result) {\n        result.add(new ArrayList<>(curr));\n        for(int i = start; i < nums.length; i++) {\n            curr.add(nums[i]);\n            backtrack(i + 1, curr, nums, result);\n            curr.remove(curr.size() - 1);\n        }\n    }\n}",
                problems: [
                    { name: "Subsets", difficulty: "Medium", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/subsets/" }] }
                ]
            }
        }
    },
    trees: {
        title: "Binary Trees",
        concept: "Nodes with <=2 children. Traversal: inorder/pre/post/level. Recursion natural. Height-balanced. Frequency: Amazon (High), Google (High).",
        detailedExplanation: "Trees model hierarchical relationships. Binary trees have at most 2 children per node. Key properties: (1) Inorder traversal of BST gives sorted order; (2) Recursion naturally fits tree structure; (3) DFS/BFS applicable; (4) Height = longest path from root to leaf; (5) Balanced trees maintain O(log n) operations. BST operations: search O(log n) balanced, O(n) skewed; insert/delete require rebalancing for AVL. Common patterns: find path sum, lowest common ancestor, serialize/deserialize, construct from traversals. Pitfalls: not handling null children, off-by-one in height calculations, not considering skewed trees. Interview: Draw tree examples, discuss recursion base cases, explain traversal order.",
        approaches: [
            {
                name: "Inorder Traversal",
                description: "Left → Root → Right. BST inorder = sorted order. Recursive elegant, iterative uses stack. Time O(n), Space O(h)."
            },
            {
                name: "Preorder Traversal",
                description: "Root → Left → Right. Useful for cloning trees, building expression trees. Recursive or iterative with stack."
            },
            {
                name: "Postorder Traversal",
                description: "Left → Right → Root. Deletion uses postorder. Recursive natural, iterative complex (two stacks/flags)."
            },
            {
                name: "Level-Order (BFS)",
                description: "Queue-based, process by level. Useful for level-wise operations, shortest path. Time O(n), Space O(w)."
            },
            {
                name: "DFS for Paths",
                description: "Recursion tracks path. Path sum, paths to leaf, backtrack on return. Time O(n), Space O(h)."
            }
        ],
        patterns: {
            traversal: {
                title: "Tree Traversal",
                explanation: "Recursive inorder/preorder/postorder. Iterative stack. Level order BFS queue. T.C. O(n).",
                code: "public class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        List<Integer> result = new ArrayList<>();\n        Stack<TreeNode> stack = new Stack<>();\n        TreeNode curr = root;\n        while(curr != null || !stack.isEmpty()) {\n            while(curr != null) {\n                stack.push(curr);\n                curr = curr.left;\n            }\n            curr = stack.pop();\n            result.add(curr.val);\n            curr = curr.right;\n        }\n        return result;\n    }\n}",
                problems: [
                    { name: "Binary Tree Inorder Traversal", difficulty: "Medium", frequency: "Medium", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/inorder-traversal-of-binary-tree/" }, { name: "HackerRank", url: "https://www.hackerrank.com/challenges/tree-inorder-traversal/problem" }] }
                ]
            },
            depth: {
                title: "Maximum Depth",
                explanation: "1 + max(left, right). T.C. O(n).",
                code: "public class Solution {\n    public int maxDepth(TreeNode root) {\n        if(root == null) return 0;\n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}",
                problems: [
                    { name: "Maximum Depth of Binary Tree", difficulty: "Easy", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-depth-of-binary-tree/" }] }
                ]
            },
            diameter: {
                title: "Diameter of Binary Tree",
                explanation: "Max path through any 2 leaves. height + height - 1 per node, track global max.",
                code: "public class Solution {\n    int max = 0;\n    public int diameterOfBinaryTree(TreeNode root) {\n        height(root);\n        return max;\n    }\n    private int height(TreeNode node) {\n        if(node == null) return 0;\n        int left = height(node.left);\n        int right = height(node.right);\n        max = Math.max(max, left + right);\n        return 1 + Math.max(left, right);\n    }\n}",
                problems: [
                    { name: "Diameter of Binary Tree", difficulty: "Easy", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/diameter-of-binary-tree/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/diameter-of-binary-tree/" }] }
                ]
            }
        }
    },
    graphs: {
        title: "Graphs",
        concept: "Nodes + edges. DFS/BFS, adjacency list/matrix. Topological sort, shortest path. Frequency: Google (High), Meta (High).",
        detailedExplanation: "Graphs represent networks of connected nodes. Key concepts: (1) Directed vs undirected - edges one-way or bidirectional; (2) Weighted vs unweighted - edges have costs; (3) Adjacency list (sparse graphs) vs matrix (dense graphs); (4) DFS finds connected components, cycles, topological order; (5) BFS finds shortest paths in unweighted graphs; (6) Dijkstra for weighted shortest paths; (7) Union-Find detects cycles and merges components. Common interview problems: number of islands (DFS), course schedule (topological sort), network delay time (Dijkstra). Pitfalls: forgetting visited tracking (infinite loops), not handling disconnected components, adjacency list index errors. Interview: Choose representation (adjacency list usually better), implement DFS/BFS templates from memory.",
        approaches: [
            {
                name: "DFS - Recursion",
                description: "Mark visited, explore recursively. Finds connected components, cycles, topological order. Time O(V+E), Space O(h)."
            },
            {
                name: "BFS - Queue",
                description: "Add neighbors to queue, process level by level. Shortest path unweighted, level-wise operations. Time O(V+E), Space O(V)."
            },
            {
                name: "Topological Sort",
                description: "DFS with post-order, or Kahn's algorithm (in-degree counting). Orders tasks with dependencies. Time O(V+E)."
            },
            {
                name: "Dijkstra (Weighted Shortest Path)",
                description: "Priority queue, relax edges. Single-source shortest paths. Time O((V+E)log V)."
            },
            {
                name: "Union-Find (Disjoint Set)",
                description: "Merge components, cycle detection. Path compression + union by rank. Nearly O(1) amortized operations."
            }
        ],
        patterns: {
            bfs: {
                title: "BFS / Level Order",
                explanation: "Queue, visit neighbors. Shortest path unweighted.",
                code: "public class Solution {\n    public int openLock(String[] deadends, String target) {\n        Queue<String> queue = new LinkedList<>();\n        Set<String> visited = new HashSet<>();\n        queue.offer(\"0000\");\n        int steps = 0;\n        while(!queue.isEmpty()) {\n            int size = queue.size();\n            for(int i = 0; i < size; i++) {\n                String curr = queue.poll();\n                if(curr.equals(target)) return steps;\n                // generate neighbors\n            }\n            steps++;\n        }\n        return -1;\n    }\n}",
                problems: [
                    { name: "Number of Islands", difficulty: "Medium", frequency: "High", companies: ["Amazon", "Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/number-of-islands/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-number-of-islands/" }, { name: "HackerRank", url: "https://www.hackerrank.com/challenges/connected-cells-in-a-grid/problem" }] }
                ]
            },
            dfs: {
                title: "DFS",
                explanation: "Stack/recursion. Connected components, cycles.",
                code: "public class Solution {\n    public void dfs(int node, int[] visited, List<List<Integer>> adj) {\n        visited[node] = 1;\n        for(int nei : adj.get(node)) {\n            if(visited[nei] == 0) {\n                dfs(nei, visited, adj);\n            }\n        }\n    }\n}",
                problems: [
                    { name: "Course Schedule", difficulty: "Medium", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/course-schedule/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph/" }] }
                ]
            }
        }
    },
    heaps: {
        title: "Heaps / Priority Queue",
        concept: "Complete binary tree, parent > children (maxheap). Extract-max O(log n). Median, k-largest. Java PriorityQueue. Frequency: Amazon (Medium).",
        detailedExplanation: "Heaps are specialized binary trees enabling efficient extraction of min/max elements. Max-heap: parent >= children; Min-heap: parent <= children. Complete binary tree structure ensures balanced height. Operations: insert O(log n), delete O(log n), peek O(1). Java PriorityQueue is a min-heap; wrap with comparator for max-heap. Common patterns: (1) Kth largest/smallest - maintain heap of size k; (2) Median of stream - two heaps (max for smaller half, min for larger); (3) Top-k frequent - heap based on frequency. Heap building from array: O(n) by heapifying from n/2 to 0. Pitfalls: wrong comparator order, not maintaining heap size, confusing index calculations in array representation. Interview: Understand parent/child indices, implement heapify down/up from memory, recognize heap-suitable problems.",
        approaches: [
            {
                name: "Kth Largest Element",
                description: "Min-heap size k. Push all, maintain popping when > k. Kth largest = peek. Time O(n log k), Space O(k)."
            },
            {
                name: "Median of Stream",
                description: "Max-heap (left) + Min-heap (right). Balance sizes. Median = left top or avg of both. Time O(log n) per add."
            },
            {
                name: "Top-K Frequent",
                description: "Build frequency map, heap by frequency. Extract top k. Time O(n log k), Space O(n)."
            },
            {
                name: "Heap Construction",
                description: "Heapify array in O(n) by percolating down from n/2 to 0. Better than n insertions O(n log n)."
            },
            {
                name: "Merge K Sorted Lists",
                description: "Min-heap of list heads. Pop min, push next from same list. Extract k*n elements. Time O(nk log k)."
            }
        ],
        patterns: {
            kth_largest: {
                title: "Kth Largest",
                explanation: "Minheap size K for kth largest.",
                code: "public class KthLargest {\n    PriorityQueue<Integer> heap = new PriorityQueue<>();\n    int k;\n    public KthLargest(int k, int[] nums) {\n        this.k = k;\n        for(int n : nums) add(n);\n    }\n    public int add(int val) {\n        heap.offer(val);\n        if(heap.size() > k) heap.poll();\n        return heap.peek();\n    }\n}",
                problems: [
                    { name: "Kth Largest Element in a Stream", difficulty: "Easy", frequency: "Medium", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/kth-largest-element-in-an-array/" }] }
                ]
            }
        }
    },
    dp: {
        title: "Dynamic Programming",
        concept: "Overlapping subproblems + optimal substructure. Bottom-up/top-down. 1D/2D arrays. Frequency: Google (High), Amazon (High).",
        detailedExplanation: "Dynamic Programming solves optimization problems by breaking them into overlapping subproblems and storing results (memoization). Two approaches: (1) Top-down recursion with memoization - natural but uses stack; (2) Bottom-up tabulation - iterative, explicit, often more space-optimized. Key steps: (1) Define state: dp[i] = answer for subproblem i; (2) Find recurrence: dp[i] based on dp[j] for j < i; (3) Base case: dp[0] or boundary conditions; (4) Build table bottom-up. Classic problems: Fibonacci (O(n)), 0/1 Knapsack (O(nW)), Longest Increasing Subsequence (O(n²)), Matrix Chain Mult. (O(n³)), Coin Change (O(nk)). Space optimization: many 2D DP reduce to 1D by observing current row depends only on previous row. Pitfalls: incorrect state definition leading to missing scenarios, not handling impossible states, array indexing errors. Interview: Define state clearly, trace through small examples, optimize space after correctness.",
        approaches: [
            {
                name: "Memoization (Top-Down)",
                description: "Recursive with cache. Natural structure, elegant code. Space for recursion stack. Time depends on unique states."
            },
            {
                name: "Tabulation (Bottom-Up)",
                description: "Iterative, build table from base case up. No recursion overhead. Clear iteration order. Easier space optimization."
            },
            {
                name: "1D Space Optimization",
                description: "Many 2D DP can use rolling arrays. Current row = previous row values. Space O(n) → O(1)."
            },
            {
                name: "Knapsack Family",
                description: "0/1 Knapsack, unbounded knapsack, knapsack with constraints. Define dp[w] = max value with capacity w."
            },
            {
                name: "Sequence Problems",
                description: "LIS (Longest Increasing Subseq), LCS (Longest Common Subseq). Compare sequence elements, track matches/differences."
            }
        ],
        patterns: {
            knapsack: {
                title: "0/1 Knapsack",
                explanation: "dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i]). Space optimize 1D.",
                code: "public class Solution {\n    public int change(int amount, int[] coins) {\n        int n = coins.length;\n        int[][] dp = new int[n+1][amount+1];\n        for(int i = 1; i <= n; i++) {\n            for(int w = 1; w <= amount; w++) {\n                if(coins[i-1] <= w) {\n                    dp[i][w] = Math.max(dp[i-1][w], dp[i-1][w-coins[i-1]] + 1);\n                } else {\n                    dp[i][w] = dp[i-1][w];\n                }\n            }\n        }\n        return dp[n][amount];\n    }\n}",
                problems: [
                    { name: "Coin Change", difficulty: "Medium", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/coin-change/" }, { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/coin-change-problem-set-1-count-ways-to-make-sum/" }] }
                ]
            },
            lcs: {
                title: "Longest Common Subsequence",
                explanation: "dp[i][j] = dp[i-1][j-1] + 1 if match else max(left, up).",
                code: "public class Solution {\n    public int longestCommonSubsequence(String text1, String text2) {\n        int m = text1.length(), n = text2.length();\n        int[][] dp = new int[m+1][n+1];\n        for(int i = 1; i <= m; i++) {\n            for(int j = 1; j <= n; j++) {\n                if(text1.charAt(i-1) == text2.charAt(j-1)) {\n                    dp[i][j] = dp[i-1][j-1] + 1;\n                } else {\n                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\n                }\n            }\n        }\n        return dp[m][n];\n    }\n}",
                problems: [
                    { name: "Longest Common Subsequence", difficulty: "Medium", frequency: "Medium", companies: ["Google"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/longest-common-subsequence/" }] }
                ]
            }
        }
    },
    greedy: {
        title: "Greedy",
        concept: "Local optimum leads to global. Interval scheduling, Huffman. Prove greedy choice property. Frequency: Amazon (Medium).",
        patterns: {
            intervals: {
                title: "Interval Scheduling",
                explanation: "Sort by end time, pick non-overlapping.",
                code: "public class Solution {\n    public int eraseOverlapIntervals(int[][] intervals) {\n        Arrays.sort(intervals, (a,b) -> a[1] - b[1]);\n        int count = 0, end = intervals[0][1];\n        for(int i = 1; i < intervals.length; i++) {\n            if(intervals[i][0] < end) count++;\n            else end = intervals[i][1];\n        }\n        return count;\n    }\n}",
                problems: [
                    { name: "Non-overlapping Intervals", difficulty: "Medium", frequency: "Medium", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/non-overlapping-intervals/" }] }
                ]
            }
        }
    },
    backtracking: {
        title: "Backtracking",
        concept: "Systematic trial: choose, explore, backtrack on failure. N-Queens, permutations, sudoku. T.C. exponential average/pruned. Frequency: Meta (High).",
        patterns: {
            permutations: {
                title: "Permutations",
                explanation: "Swap indices, recurse, swap back.",
                code: "public class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        backtrack(0, nums, result);\n        return result;\n    }\n    private void backtrack(int start, int[] nums, List<List<Integer>> result) {\n        if(start == nums.length) {\n            result.add(Arrays.stream(nums).boxed().collect(Collectors.toList()));\n        }\n        for(int i = start; i < nums.length; i++) {\n            swap(nums, start, i);\n            backtrack(start + 1, nums, result);\n            swap(nums, start, i);\n        }\n    }\n}",
                problems: [
                    { name: "Permutations", difficulty: "Medium", frequency: "High", companies: ["Amazon"], platforms: [{ name: "LeetCode", url: "https://leetcode.com/problems/permutations/" }] }
                ]
            }
        }
    }
};

