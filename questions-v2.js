// DSA Questions Database - Complete Version with 9+ Platforms
// Updated: 2026-03-23

console.log('questions-v2.js loaded successfully');

const questionsDB = {
    "arrays": {
        title: "Arrays",
        icon: "📦",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Arrays are collections of elements stored in contiguous memory locations...",
            explanation: "Arrays store multiple values of the same type...",
            keyPoints: ["✅ O(1) access by index", "❌ O(n) insertion/deletion", "📍 Contiguous memory", "🔢 Fixed or Dynamic size"],
            realWorldExamples: ["Scoreboard ranking", "Student grades", "Temperature readings", "Inventory system"]
        },
        questions: [
            {
                id: 1, title: "Two Sum", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/two-sum/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/two-sum/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/2-sum/", logo: "🔶" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/two-sum", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/pair-sum_696230", logo: "🟧" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/basic-programming/implementation/basics-of-implementation/practice-problems/", logo: "💜" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/550349b212be33a0220001f7", logo: "⭐" }
                ]
            },
            {
                id: 2, title: "Best Time to Buy and Sell Stock", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/best-time-to-buy-and-sell-stock/", logo: "🔶" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/BEST-TIME-STOCK", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/best-time-to-buy-and-sell-stock_1071012", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/5531323b8d7ddd5f5f00198e", logo: "⭐" }
                ]
            },
            {
                id: 3, title: "Median of Two Sorted Arrays", difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/median-of-array/", logo: "🔶" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/MEDIANS", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/majority-element-majorityElement_1171_copy_1119207", logo: "🟧" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/", logo: "💜" }
                ]
            },
            {
                id: 4, title: "Container With Most Water", difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/container-with-most-water/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/container-with-most-water/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/container-with-most-water/", logo: "🔶" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/container-with-most-water_1171717", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/55e7280b40e1c4a06d0015ee", logo: "⭐" }
                ]
            },
            {
                id: 5, title: "Remove Duplicates from Sorted Array", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/remove-duplicates-from-sorted-array/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/solve-me-first/problem", logo: "⚫" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/REMDUP", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/remove-duplicates-from-sorted-array_1169215", logo: "🟧" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/", logo: "💜" }
                ]
            },
            {
                id: 6, title: "Rotate Array", difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/rotate-array/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/array-rotation/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/rotate-matrix/", logo: "🔶" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/ARRAYROT", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/rotate-array_1164230", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/5571d9b526526bac0e000679", logo: "⭐" }
                ]
            },
            {
                id: 7, title: "Max Product Subarray", difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/maximum-product-subarray/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-product-subarray/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/max-product-subarray/", logo: "🔶" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/MAXPROD", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/maximum-product-subarray_1115362", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/5531323b8d7ddd5f5f001d55", logo: "⭐" }
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
                id: 8, title: "Longest Substring Without Repeating Characters", difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/longest-substring-without-repeat/", logo: "🔶" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/SUBSTRIN", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/longest-substring-without-repeating-character_1171047", logo: "🟧" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/data-structures/hash-tables/finding-all-pairs/practice-problems/", logo: "💜" }
                ]
            },
            {
                id: 9, title: "Reverse String", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/reverse-string/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-a-string-in-java/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/reverse-a-string/problem", logo: "⚫" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/REVSTR", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/reverse-the-string_1169541", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/5168bb5dfe9a00e0db000001", logo: "⭐" }
                ]
            },
            {
                id: 10, title: "Palindrome Check", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/valid-palindrome/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/palindrome-check/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/palindrome-string/", logo: "🔶" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/PALIN", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/check-if-the-string-is-a-palindrome_1168032", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/54579f1b52b056c5d500026d", logo: "⭐" }
                ]
            },
            {
                id: 11, title: "Group Anagrams", difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/group-anagrams/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/group-anagrams/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/anagrams/", logo: "🔶" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/ANAGRAMS", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/group-anagrams_1169215", logo: "🟧" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/data-structures/hash-tables/finding-all-pairs/practice-problems/", logo: "💜" }
                ]
            },
            {
                id: 12, title: "Longest Palindromic Substring", difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-substring/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-palindrome-in-a-string/", logo: "🟩" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/LONGPAL", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/longest-palindromic-substring_1171047", logo: "🟧" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/algorithms/string-algorithm/basics-of-string-manipulation/practice-problems/", logo: "💜" }
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
                id: 13, title: "Reverse Linked List", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-a-linked-list/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/reverse-a-linked-list/problem", logo: "⚫" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/REVLINK", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/reverse-a-linked-list_804432", logo: "🟧" }
                ]
            },
            {
                id: 14, title: "Merge Two Sorted Lists", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/merge-two-sorted-lists/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem", logo: "⚫" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/MERLINK", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/merge-two-sorted-linked-lists_800332", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/5571d9b526526bac0e00058e", logo: "⭐" }
                ]
            },
            {
                id: 15, title: "Detect Cycle in Linked List", difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem", logo: "⚫" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/CYCLE", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/detect-cycle-in-a-linked-list_1170393", logo: "🟧" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/data-structures/linked-list/singly-linked-list/practice-problems/", logo: "💜" }
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
                id: 18, title: "Inorder Traversal", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/inorder-traversal-of-binary-tree/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/tree-inorder-traversal/problem", logo: "⚫" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/TREETRA", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/tree-traversal_630442", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/59e2f55e579d5851e7000064", logo: "⭐" }
                ]
            },
            {
                id: 19, title: "Level Order Traversal", difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/level-order-traversal/", logo: "🟩" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/LEVORDER", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/level-order-traversal-of-binary-tree_630373", logo: "🟧" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/data-structures/trees/binary-search-tree/practice-problems/", logo: "💜" },
                    { name: "Codeforces", url: "https://codeforces.com/problemset/problem/1283/A", logo: "🔴" }
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
                id: 23, title: "Number of Islands", difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/number-of-islands/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-number-of-islands/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/connected-cells-in-a-grid/problem", logo: "⚫" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/CFS", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/number-of-islands_1171502", logo: "🟧" },
                    { name: "Codeforces", url: "https://codeforces.com/problemset/problem/686/B", logo: "🔴" }
                ]
            }
        ]
    },

    "sorting": {
        title: "Sorting & Searching",
        icon: "🔎",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 28, title: "Binary Search", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-search/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/binary-search/", logo: "🟩" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/BINSEAR", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/binary-search_984599", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/5639bdcee4b3f63900014049", logo: "⭐" },
                    { name: "Codeforces", url: "https://codeforces.com/problemset/problem/1409/C", logo: "🔴" }
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
                id: 32, title: "Climbing Stairs", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/climbing-stairs-problem/", logo: "🟩" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/STAIR", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/count-ways-to-reach-nth-stair_839064", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/5586cbcdd8b98e68820006a7", logo: "⭐" }
                ]
            }
        ]
    },

    "stack-queue": {
        title: "Stack & Queue",
        icon: "📚",
        difficulty: ["Easy", "Medium", "Hard"],
        questions: [
            {
                id: 37, title: "Valid Parentheses", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/valid-parentheses-string/", logo: "🟩" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/VALIDPAR", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/valid-parentheses_1117383", logo: "🟧" },
                    { name: "HackerEarth", url: "https://www.hackerearth.com/practice/data-structures/stacks/basics-of-stacks/practice-problems/", logo: "💜" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/5571d9b526526bac0e000672", logo: "⭐" }
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
                id: 41, title: "Contains Duplicate", difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/contains-duplicate/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-element-exist-in-array/", logo: "🟩" },
                    { name: "CodeChef", url: "https://www.codechef.com/problems/DUPLICATE", logo: "🟫" },
                    { name: "CodingNinjas", url: "https://www.codingninjas.com/studio/problems/contains-duplicate_1115362", logo: "🟧" },
                    { name: "Codewars", url: "https://www.codewars.com/kata/5571d9b526526bac0e0005f9", logo: "⭐" }
                ]
            }
        ]
    }
};

// Platform Information
const platforms = {
    "LeetCode": { color: "#FFA500", icon: "🔵", url: "https://leetcode.com" },
    "GeeksforGeeks": { color: "#2F8D46", icon: "🟩", url: "https://www.geeksforgeeks.org" },
    "HackerRank": { color: "#222222", icon: "⚫", url: "https://www.hackerrank.com" },
    "InterviewBit": { color: "#FF6B35", icon: "🔶", url: "https://www.interviewbit.com" },
    "CodeChef": { color: "#5B4E3D", icon: "🟫", url: "https://www.codechef.com" },
    "CodingNinjas": { color: "#FF9E3D", icon: "🟧", url: "https://www.codingninjas.com" },
    "HackerEarth": { color: "#462F7C", icon: "💜", url: "https://www.hackerearth.com" },
    "Codewars": { color: "#773B1A", icon: "⭐", url: "https://www.codewars.com" },
    "Codeforces": { color: "#FFC400", icon: "🔴", url: "https://codeforces.com" }
};

// Utility Functions
function getAllQuestions() {
    let allQuestions = [];
    for (let topic in questionsDB) {
        if (questionsDB[topic].questions) {
            questionsDB[topic].questions.forEach(q => {
                allQuestions.push({ ...q, topic: topic });
            });
        }
    }
    console.log(`Total questions loaded: ${allQuestions.length}`);
    return allQuestions;
}

function getQuestionsByTopic(topic) {
    return questionsDB[topic] && questionsDB[topic].questions ? questionsDB[topic].questions : [];
}

function getTopicInfo(topic) {
    return questionsDB[topic] ? {
        title: questionsDB[topic].title,
        icon: questionsDB[topic].icon,
        concept: questionsDB[topic].concept
    } : null;
}

function searchQuestions(query) {
    const allQuestions = getAllQuestions();
    return allQuestions.filter(q => q.title.toLowerCase().includes(query.toLowerCase()));
}

function filterByDifficulty(questions, difficulty) {
    return questions.filter(q => q.difficulty === difficulty);
}
