// DSA Questions Database - MIXED: Direct Links + Searchable Platforms
// LeetCode & GeeksforGeeks = Direct problem links (✓ Verified)
// Others = Platform homepage (requires search) with note for users

console.log('questions.js loaded - HONEST PLATFORM LINKS');

const questionsDB = {
    "arrays": {
        title: "Arrays",
        icon: "📦",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 1,
                title: "Two Sum",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/two-sum/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/two-sum/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 2,
                title: "Buy Stock",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 3,
                title: "Max Subarray",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-subarray-sum-kadanes-algorithm/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 4,
                title: "Move Zeroes",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/move-zeroes/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/move-all-zeroes-to-end-of-array/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 5,
                title: "Contains Duplicate",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/contains-duplicate/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-element-exist-in-array/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 6,
                title: "Anagram Check",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/valid-anagram/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-two-arrays-are-permutations-of-each-other/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 7,
                title: "Product Array",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/product-of-array-except-self/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/product-of-an-array-except-itself/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 8,
                title: "3Sum",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/3sum/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-triplets-array-sum-given-number/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "strings": {
        title: "Strings",
        icon: "📝",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 11,
                title: "Group Anagrams",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/group-anagrams/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/group-words-with-same-character-set/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 12,
                title: "Longest Palindrome",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-substring/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-palindromic-substring-using-dynamic-programming/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 13,
                title: "Isomorphic",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/isomorphic-strings/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-two-strings-are-isomorphic/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 14,
                title: "Ransom Note",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/ransom-note/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/determine-ransom-note-magazine/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 15,
                title: "Roman to Int",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/roman-to-integer/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/converting-roman-numerals-to-decimal-lying-between-1-to-3999/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 16,
                title: "Int to Roman",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/integer-to-roman/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/converting-decimal-number-lying-between-1-to-3999-to-roman-numerals/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "linked-lists": {
        title: "Linked Lists",
        icon: "🔗",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 17,
                title: "Reverse List",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-a-linked-list/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 18,
                title: "Palindrome",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/palindrome-linked-list/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 19,
                title: "Merge Lists",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/merge-two-sorted-lists/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 20,
                title: "Cycle Check",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 21,
                title: "Remove Node",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/remove-nth-node-from-end-of-list/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 22,
                title: "Find Middle",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/middle-of-the-linked-list/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-middle-of-a-linked-list/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 23,
                title: "Reorder List",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/reorder-list/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reorder-a-linked-list/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "trees": {
        title: "Trees",
        icon: "🌳",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 24,
                title: "Inorder",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/inorder-traversal-of-binary-tree/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 25,
                title: "Level Order",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/level-order-traversal/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 26,
                title: "Max Depth",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-depth-or-height-of-tree/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 27,
                title: "Path Sum",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/path-sum/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 28,
                title: "LCA",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-tree/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 29,
                title: "Validate BST",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/validate-binary-search-tree/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-a-given-array-represents-a-valid-sequence-from-root-to-leaves-of-bst/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 30,
                title: "Same Tree",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/same-tree/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-two-trees-are-identical/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "graphs": {
        title: "Graphs",
        icon: "📊",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 37,
                title: "Number of Islands",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/number-of-islands/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-number-of-islands/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 38,
                title: "Max Island Area",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/max-area-of-island/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-the-largest-island-in-a-2d-grid/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 39,
                title: "Clone Graph",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/clone-graph/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/clone-a-graph/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 40,
                title: "Course Schedule",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/course-schedule/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 41,
                title: "Word Ladder",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/word-ladder/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/word-ladder-length-of-shortest-path-between-two-words/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 42,
                title: "Dijkstra",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/network-delay-time/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "binary-search": {
        title: "Sorting & Searching",
        icon: "🔎",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 28,
                title: "Binary Search",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-search/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/binary-search/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 29,
                title: "Insert Position",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/search-insert-position/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/search-insert-position-in-sorted-array/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 30,
                title: "Rotated Array",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-rotated-array/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 31,
                title: "Sqrt(x)",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/sqrtx/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/square-root-of-an-integer/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 32,
                title: "First/Last Position",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-first-and-last-occurrence-of-an-element-in-sorted-array/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 33,
                title: "Answer Search",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/first-bad-version/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/binary-search/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 34,
                title: "Ship Packages",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/binary-search/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "dynamic-programming": {
        title: "Dynamic Programming",
        icon: "♻️",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 35,
                title: "Climbing Stairs",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/climbing-stairs-problem/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 36,
                title: "House Robber",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/house-robber/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/house-robber-problem/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 37,
                title: "Coin Change",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/coin-change/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/coin-change-problem/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "stacks-queues": {
        title: "Stacks & Queues",
        icon: "📚",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 31,
                title: "Valid Parens",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/valid-parentheses-string/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 32,
                title: "Min Stack",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/min-stack/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 33,
                title: "Next Greater",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/next-greater-element-i/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/next-greater-element/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 34,
                title: "Daily Temp",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/daily-temperatures/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/daily-temperatures/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 35,
                title: "Polish Notation",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/evaluation-of-postfix-expression/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 36,
                title: "Queue via Stack",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/implement-queue-using-stacks/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/queue-using-stacks/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "hash-table": {
        title: "Hash Tables & Maps",
        icon: "🗝️",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 41,
                title: "Contains Duplicate",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/contains-duplicate/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-element-exist-in-array/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" }
                ]
            },
            {
                id: 42,
                title: "Group Anagrams",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/group-anagrams/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/group-words-same-set-characters/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" }
                ]
            },
            {
                id: 43,
                title: "Two Sum II",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/pair-sum-in-array/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "two-pointers": {
        title: "Two Pointers",
        icon: "👉👈",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 44,
                title: "Two Sum II",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/two-pointer-technique/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 45,
                title: "Valid Palindrome",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/valid-palindrome/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/valid-palindrome-string-with-spaces/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 46,
                title: "Container",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/container-with-most-water/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/container-with-most-water/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 47,
                title: "3Sum",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/3sum/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-triplets-array-sum-given-number/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 48,
                title: "Remove Duplicates",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/remove-duplicates-from-sorted-array/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 49,
                title: "Rain Water",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/trapping-rain-water/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 50,
                title: "Reverse String",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/reverse-string/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-a-string-in-java/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "sliding-window": {
        title: "Sliding Window",
        icon: "🪟",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 51,
                title: "Longest Substring",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 52,
                title: "Max Consecutive",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/max-consecutive-ones/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-consecutive-ones-in-binary-representation/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 53,
                title: "Min Window",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-the-smallest-window-that-contains-all-characters-in-its-order/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 54,
                title: "Permutation",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/permutation-in-string/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-string-is-a-permutation-of-another-string/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 55,
                title: "Fixed Window",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/maximum-average-subarray-i/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 56,
                title: "Fruit Baskets",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/fruit-into-baskets/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/max-sum-window/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 57,
                title: "Concatenation",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/concatenated-words/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/concatenated-string-with-uncommon-characters/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "heaps": {
        title: "Heaps & Priority Queues",
        icon: "📈",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 50,
                title: "Kth Largest Element in an Array",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/kth-largest-element-in-an-array/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" }
                ]
            },
            {
                id: 51,
                title: "Top K Frequent Elements",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/top-k-frequent-elements/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/k-frequent-elements/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" }
                ]
            },
            {
                id: 52,
                title: "Merge K Sorted Lists",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/merge-k-sorted-lists/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-k-sorted-lists/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "graphs": {
        title: "Graphs",
        icon: "📊",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 37,
                title: "Islands",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/number-of-islands/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-number-of-islands/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 38,
                title: "Max Island Area",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/max-area-of-island/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-largest-connected-component-in-an-undirected-graph/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 39,
                title: "Clone Graph",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/clone-graph/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/deep-copy-graph/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 40,
                title: "Course Schedule",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/course-schedule/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/topological-sorting/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 41,
                title: "Word Ladder",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/word-ladder/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/word-ladder/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 42,
                title: "Dijkstra",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/network-delay-time/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    },
    "dynamic-programming": {
        title: "Dynamic Programming",
        icon: "♻️",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 43,
                title: "Fibonacci",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/fibonacci-number/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 44,
                title: "Climbing Stairs",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/climbing-stairs-problem/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 45,
                title: "Coin Change",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/coin-change/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/coin-change-problem/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 46,
                title: "House Robber",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/house-robber/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/house-robber-problem/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 47,
                title: "LIS",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/longest-increasing-subsequence/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            },
            {
                id: 48,
                title: "Knapsack",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/0-1-knapsack-problem/", logo: "🔵", direct: true },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-3/", logo: "🟩", direct: true },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/", logo: "⚫", direct: false, note: "Search required" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems", logo: "🟫", direct: false, note: "Search required" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems", logo: "🔶", direct: false, note: "Search required" },
                    { name: "Codewars", url: "https://www.codewars.com/kata", logo: "⭐", direct: false, note: "Search required" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/", logo: "🟪", direct: false, note: "Search required" }
                ]
            }
        ]
    }
};

function getAllQuestions() {
    let allQuestions = [];
    for (let topic in questionsDB) {
        if (questionsDB[topic].questions) {
            questionsDB[topic].questions.forEach(q => {
                allQuestions.push({ ...q, topic: topic });
            });
        }
    }
    console.log('✅ Loaded all questions - Direct links + Searchable platforms available');
    return allQuestions;
}

function getQuestionsByTopic(topic) {
    return questionsDB[topic] && questionsDB[topic].questions ? questionsDB[topic].questions : [];
}

function searchQuestions(query) {
    const allQuestions = getAllQuestions();
    return allQuestions.filter(q => q.title.toLowerCase().includes(query.toLowerCase()));
}

function filterByDifficulty(questions, difficulty) {
    return questions.filter(q => q.difficulty === difficulty);
}
