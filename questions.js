// DSA Questions Database with Concepts, Examples & Animations
// LeetCode, GeeksforGeeks, InterviewBit, HackerRank

const questionsDB = {
    "arrays": {
        title: "Arrays",
        icon: "📦",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Arrays are collections of elements stored in contiguous memory locations. Access any element in O(1) time using index.",
            explanation: "Arrays store multiple values of the same type. Perfect for storing sequences. Index-based access makes them efficient for lookups. But insertion/deletion in middle is O(n).",
            keyPoints: [
                "✅ O(1) access by index",
                "❌ O(n) insertion/deletion (middle)",
                "📍 Contiguous memory",
                "🔢 Fixed or Dynamic size"
            ],
            realWorldExamples: [
                "Scoreboard ranking in games (array of scores)",
                "Student grades storage (array of marks)",
                "Daily temperature readings over a month",
                "Inventory of products in warehouse"
            ]
        },
        animation: {
            type: "slideRight",
            duration: 600,
            delay: 100
        },
        questions: [
            {
                id: 1,
                title: "Two Sum",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/two-sum/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/two-sum/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/2-sum/", logo: "🔶" },
                ]
            },
            {
                id: 2,
                title: "Best Time to Buy and Sell Stock",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/best-time-to-buy-and-sell-stock/", logo: "🔶" },
                ]
            },
            {
                id: 3,
                title: "Median of Two Sorted Arrays",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/median-of-array/", logo: "🔶" },
                ]
            },
            {
                id: 4,
                title: "Container With Most Water",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/container-with-most-water/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/container-with-most-water/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/container-with-most-water/", logo: "🔶" },
                ]
            },
            {
                id: 5,
                title: "Remove Duplicates from Sorted Array",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/remove-duplicates-from-sorted-array/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/solve-me-first/problem", logo: "⚫" },
                ]
            },
            {
                id: 6,
                title: "Rotate Array",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/rotate-array/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/array-rotation/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/rotate-matrix/", logo: "🔶" },
                ]
            },
            {
                id: 7,
                title: "Max Product Subarray",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/maximum-product-subarray/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-product-subarray/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/max-product-subarray/", logo: "🔶" },
                ]
            }
        ]
    },

    "strings": {
        title: "Strings",
        icon: "📝",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Strings are sequences of characters. Immutable in many languages. Efficient manipulation is critical.",
            explanation: "Strings are text data. Operations like searching, reversing, pattern matching are common. Important: avoid string concatenation in loops (creates new objects).",
            keyPoints: [
                "🔤 Sequence of characters",
                "🔒 Immutable (usually)",
                "🔍 Pattern matching possible",
                "⚠️ Avoid loop concatenation"
            ],
            realWorldExamples: [
                "Search bar filtering (autocomplete, spell check)",
                "Validating passwords (checking patterns)",
                "Text editor find/replace functionality",
                "URL slugs and path parsing in web apps"
            ]
        },
        animation: {
            type: "fadeInUp",
            duration: 500,
            delay: 150
        },
        questions: [
            {
                id: 8,
                title: "Longest Substring Without Repeating Characters",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/longest-substring-without-repeat/", logo: "🔶" },
                ]
            },
            {
                id: 9,
                title: "Reverse String",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/reverse-string/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-a-string-in-java/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/reverse-a-string/problem", logo: "⚫" },
                ]
            },
            {
                id: 10,
                title: "Palindrome Check",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/valid-palindrome/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/palindrome-check/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/palindrome-string/", logo: "🔶" },
                ]
            },
            {
                id: 11,
                title: "Group Anagrams",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/group-anagrams/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/group-anagrams/", logo: "🟩" },
                    { name: "InterviewBit", url: "https://www.interviewbit.com/problems/anagrams/", logo: "🔶" },
                ]
            },
            {
                id: 12,
                title: "Longest Palindromic Substring",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-substring/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-palindrome-in-a-string/", logo: "🟩" },
                ]
            }
        ]
    },

    "linked-lists": {
        title: "Linked Lists",
        icon: "🔗",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Linked lists are collections where each element (node) points to the next. Dynamic size, but O(n) access.",
            explanation: "Unlike arrays, linked lists store data with pointers to next node. Good for insertion/deletion at known positions. Bad for random access (must traverse from head).",
            keyPoints: [
                "🔀 Dynamic size",
                "⚡ O(1) insertion (at known position)",
                "📍 O(n) access/search",
                "📦 Node contains data + pointer"
            ],
            realWorldExamples: [
                "Browser back/forward history (doubly linked)",
                "Undo/Redo in text editors",
                "Music player playlist (previous/next song)",
                "Implementing stacks and queues"
            ]
        },
        animation: {
            type: "zoomIn",
            duration: 700,
            delay: 200
        },
        questions: [
            {
                id: 13,
                title: "Reverse Linked List",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-a-linked-list/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/reverse-a-linked-list/problem", logo: "⚫" },
                ]
            },
            {
                id: 14,
                title: "Merge Two Sorted Lists",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/merge-two-sorted-lists/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem", logo: "⚫" },
                ]
            },
            {
                id: 15,
                title: "Detect Cycle in Linked List",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem", logo: "⚫" },
                ]
            },
            {
                id: 16,
                title: "Remove Nth Node From End",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/remove-nth-node-from-end/", logo: "🟩" },
                ]
            },
            {
                id: 17,
                title: "Palindrome Linked List",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/palindrome-linked-list/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/palindrome-linked-list/", logo: "🟩" },
                ]
            }
        ]
    },

    "trees": {
        title: "Trees",
        icon: "🌳",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Trees are hierarchical data structures with a root and branches. Essential for organizing hierarchical data.",
            explanation: "Trees consist of nodes with parent-child relationships. Binary trees have max 2 children. Trees enable searching in O(log n) if balanced. Traversal: Inorder, Preorder, Postorder, Level-order.",
            keyPoints: [
                "🌿 Hierarchical structure",
                "🔍 Binary Search Tree: O(log n)",
                "📊 Perfect for organizing data",
                "🎯 Multiple traversal methods"
            ],
            realWorldExamples: [
                "File system directory structure",
                "DOM structure in HTML/JavaScript",
                "Organization hierarchy (CEO → Managers → Employees)",
                "Compiler Abstract Syntax Trees (AST)",
                "Database indexing (B-trees)"
            ]
        },
        animation: {
            type: "slideDown",
            duration: 600,
            delay: 250
        },
        questions: [
            {
                id: 18,
                title: "Inorder Traversal",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/inorder-traversal-of-binary-tree/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/tree-inorder-traversal/problem", logo: "⚫" },
                ]
            },
            {
                id: 19,
                title: "Level Order Traversal",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/level-order-traversal/", logo: "🟩" },
                ]
            },
            {
                id: 20,
                title: "Lowest Common Ancestor",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-tree/", logo: "🟩" },
                ]
            },
            {
                id: 21,
                title: "Maximum Path Sum",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-path-sum-in-a-binary-tree/", logo: "🟩" },
                ]
            },
            {
                id: 22,
                title: "Validate Binary Search Tree",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/validate-binary-search-tree/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/validate-binary-search-tree/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/is-binary-search-tree/problem", logo: "⚫" },
                ]
            }
        ]
    },

    "graphs": {
        title: "Graphs",
        icon: "📊",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Graphs are collections of vertices (nodes) and edges (connections). Can be directed or undirected, weighted or unweighted.",
            explanation: "More general than trees. Graphs can have cycles and multiple paths between nodes. Essential for modeling networks, relationships, and connections.",
            keyPoints: [
                "🔌 Vertices and Edges",
                "🔀 Can have cycles",
                "🎯 Directed or Undirected",
                "⚖️ Can be weighted"
            ],
            realWorldExamples: [
                "Social networks (Facebook friends)",
                "Google Maps (locations and routes)",
                "Flight networks (cities and flights)",
                "Computer networks (devices and connections)",
                "Recommendation systems (user-product links)"
            ]
        },
        animation: {
            type: "rotate",
            duration: 800,
            delay: 300
        },
        questions: [
            {
                id: 23,
                title: "Number of Islands",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/number-of-islands/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-number-of-islands/", logo: "🟩" },
                    { name: "HackerRank", url: "https://www.hackerrank.com/challenges/connected-cells-in-a-grid/problem", logo: "⚫" },
                ]
            },
            {
                id: 24,
                title: "Course Schedule (Cycle Detection)",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/course-schedule/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph/", logo: "🟩" },
                ]
            },
            {
                id: 25,
                title: "Dijkstra's Algorithm",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/network-delay-time/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/", logo: "🟩" },
                ]
            },
            {
                id: 26,
                title: "Clone Graph",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/clone-graph/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/clone-a-graph/", logo: "🟩" },
                ]
            },
            {
                id: 27,
                title: "Topological Sort",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/alien-dictionary/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/topological-sorting/", logo: "🟩" },
                ]
            }
        ]
    },

    "sorting": {
        title: "Sorting & Searching",
        icon: "🔎",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Sorting arranges elements in specific order. Searching finds elements efficiently. Binary search is much faster than linear on sorted arrays.",
            explanation: "Various sorting algorithms: Bubble O(n²), Merge O(n log n), Quick O(n log n). Binary search on sorted arrays: O(log n). Why not use linear? It's O(n).",
            keyPoints: [
                "📈 Multiple sorting strategies",
                "⚡ Binary search: O(log n)",
                "🎯 Requires sorted data",
                "🔄 Presort vs On-the-fly"
            ],
            realWorldExamples: [
                "Search bars (binary search on sorted data)",
                "Leaderboards (sorting scores)",
                "E-commerce filters (sort by price/rating)",
                "Database indexes (binary search trees)",
                "GPS navigation (Dijkstra sorting)"
            ]
        },
        animation: {
            type: "slideLeft",
            duration: 550,
            delay: 180
        },
        questions: [
            {
                id: 28,
                title: "Binary Search",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/binary-search/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/binary-search/", logo: "🟩" },
                ]
            },
            {
                id: 29,
                title: "Search in Rotated Sorted Array",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-rotated-array/", logo: "🟩" },
                ]
            },
            {
                id: 30,
                title: "Merge k Sorted Lists",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/merge-k-sorted-lists/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-k-sorted-lists/", logo: "🟩" },
                ]
            },
            {
                id: 31,
                title: "Sort Colors",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/sort-colors/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/sort-colors/", logo: "🟩" },
                ]
            }
        ]
    },

    "dynamic-programming": {
        title: "Dynamic Programming",
        icon: "♻️",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Dynamic Programming: Solve complex problems by breaking into overlapping subproblems and storing results (memoization).",
            explanation: "Key insight: If problem has optimal substructure and overlapping subproblems, use DP. Build solutions bottom-up (tabulation) or top-down (memoization). Avoids recalculating same subproblems.",
            keyPoints: [
                "🎯 Optimal substructure",
                "🔁 Overlapping subproblems",
                "💾 Memoization/Tabulation",
                "⏱️ Time vs Space tradeoff"
            ],
            realWorldExamples: [
                "Video streaming bitrate optimization (choose quality)",
                "Stock trading strategies (maximize profit over time)",
                "Project scheduling (maximize value with constraints)",
                "Word prediction (spell checking)",
                "Game AI (chess, checkers minimax)"
            ]
        },
        animation: {
            type: "pulse",
            duration: 700,
            delay: 220
        },
        questions: [
            {
                id: 32,
                title: "Climbing Stairs",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/climbing-stairs-problem/", logo: "🟩" },
                ]
            },
            {
                id: 33,
                title: "Coin Change",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/coin-change/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/coin-change-problem-set-1-count-ways-to-make-sum/", logo: "🟩" },
                ]
            },
            {
                id: 34,
                title: "Longest Increasing Subsequence",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/longest-increasing-subsequence/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-increasing-subsequence/", logo: "🟩" },
                ]
            },
            {
                id: 35,
                title: "Word Break",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/word-break/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/word-break-problem/", logo: "🟩" },
                ]
            },
            {
                id: 36,
                title: "Edit Distance",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/edit-distance/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/edit-distance-dp-5/", logo: "🟩" },
                ]
            }
        ]
    },

    "stack-queue": {
        title: "Stack & Queue",
        icon: "📚",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Stack: LIFO (Last In First Out). Queue: FIFO (First In First Out). Both manage insertion/deletion efficiently.",
            explanation: "Stack: Push/pop at top, perfect for backtracking, undo. Queue: Enqueue/dequeue from ends, perfect for BFS, scheduling. Both built on arrays or linked lists.",
            keyPoints: [
                "⬆️ Stack: LIFO",
                "➡️ Queue: FIFO",
                "⚡ O(1) push/pop/enqueue/dequeue",
                "🔄 Used in algorithms extensively"
            ],
            realWorldExamples: [
                "Browser back button (stack of visited pages)",
                "Undo/Redo in applications (stack)",
                "Print queue in printers (queue)",
                "CPU task scheduling (priority queue)",
                "Graph DFS/BFS (stack/queue traversal)"
            ]
        },
        animation: {
            type: "bounceIn",
            duration: 650,
            delay: 270
        },
        questions: [
            {
                id: 37,
                title: "Valid Parentheses",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/valid-parentheses/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/valid-parentheses-string/", logo: "🟩" },
                ]
            },
            {
                id: 38,
                title: "Implement Queue using Stacks",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/implement-queue-using-stacks/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/queue-using-stacks/", logo: "🟩" },
                ]
            },
            {
                id: 39,
                title: "Trapping Rain Water",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/trapping-rain-water/", logo: "🟩" },
                ]
            },
            {
                id: 40,
                title: "Next Greater Element",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/next-greater-element-i/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/next-greater-element/", logo: "🟩" },
                ]
            }
        ]
    },

    "hash-table": {
        title: "Hash Tables & Maps",
        icon: "🗝️",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Hash tables use a hash function to map keys to array indices. Enables O(1) average-case lookup.",
            explanation: "Hash function converts keys to indices. Good distribution prevents collisions. Collision resolution: chaining or probing. Trade space for speed (store more → less collisions).",
            keyPoints: [
                "⚡ O(1) average lookup",
                "🔐 Hash function maps key→index",
                "💥 Handle collisions",
                "📊 Load factor matters"
            ],
            realWorldExamples: [
                "Database indexes (find records quickly)",
                "Caches (Redis, Memcached)",
                "DNS resolution (domain→IP)",
                "Password storage (hash functions)",
                "Duplicate detection in large datasets"
            ]
        },
        animation: {
            type: "shake",
            duration: 600,
            delay: 140
        },
        questions: [
            {
                id: 41,
                title: "Contains Duplicate",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/contains-duplicate/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-element-exist-in-array/", logo: "🟩" },
                ]
            },
            {
                id: 42,
                title: "Longest Consecutive Sequence",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/longest-consecutive/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-consecutive-elements/", logo: "🟩" },
                ]
            },
            {
                id: 43,
                title: "Valid Anagram",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/valid-anagram/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/anagrams/", logo: "🟩" },
                ]
            },
            {
                id: 44,
                title: "LRU Cache",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/lru-cache/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/lru-cache-implementation/", logo: "🟩" },
                ]
            }
        ]
    },

    "heap": {
        title: "Heap & Priority Queue",
        icon: "⛰️",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Heap: Complete binary tree where parent is greater/less than children. Enables efficient min/max extraction.",
            explanation: "Max heap: parent >= children. Min heap: parent <= children. Perfect for priority queues, heap sort. Insert/delete O(log n). Find min/max O(1).",
            keyPoints: [
                "🏔️ Complete binary tree",
                "👑 Parent >= children (max)",
                "🔻 O(log n) insert/delete",
                "⚡ O(1) find min/max"
            ],
            realWorldExamples: [
                "Priority queues (airplane boarding)",
                "Heap sort algorithm",
                "Dijkstra's shortest path algorithm",
                "Load balancing (process scheduling)",
                "Median of stream data"
            ]
        },
        animation: {
            type: "flip",
            duration: 700,
            delay: 310
        },
        questions: [
            {
                id: 45,
                title: "Kth Largest Element",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/kth-largest-element-in-an-array/", logo: "🟩" },
                ]
            },
            {
                id: 46,
                title: "Merge k Sorted Arrays",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/merge-k-sorted-lists/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-k-sorted-arrays/", logo: "🟩" },
                ]
            },
            {
                id: 47,
                title: "Top K Frequent Elements",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/top-k-frequent-elements/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-k-most-frequent-elements/", logo: "🟩" },
                ]
            },
            {
                id: 48,
                title: "Find Median in Stream",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/find-median-from-data-stream/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-median-of-stream-of-numbers/", logo: "🟩" },
                ]
            }
        ]
    },

    "two-pointers": {
        title: "Two Pointers",
        icon: "👉👈",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Two pointers: Start from both ends and move towards center. Efficient for sorted arrays to find pairs or boundaries.",
            explanation: "One pointer from start, one from end. Move based on comparison. Useful for finding pairs summing to target, removing duplicates, partitioning.",
            keyPoints: [
                "👈👉 One from start, one from end",
                "🎯 Move towards center",
                "⚡ O(n) time, O(1) space",
                "✅ Works on sorted arrays"
            ],
            realWorldExamples: [
                "Finding pairs with target sum",
                "Removing duplicates from array",
                "Reversing array/string in-place",
                "Validating palindromes",
                "Container with most water problem"
            ]
        },
        animation: {
            type: "slideInDown",
            duration: 600,
            delay: 160
        },
        questions: [
            {
                id: 49,
                title: "Valid Palindrome II",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/valid-palindrome-ii/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/valid-palindrome-two-pointers/", logo: "🟩" },
                ]
            },
            {
                id: 50,
                title: "Three Sum",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/3sum/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-triplets-array-sum-given-number/", logo: "🟩" },
                ]
            },
            {
                id: 51,
                title: "Merge Sorted Array",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/merge-sorted-array/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/merge-two-sorted-arrays/", logo: "🟩" },
                ]
            },
            {
                id: 52,
                title: "Trapping II Rain Water",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water-ii/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/trapping-rain-water-after-raining-on-a-2d-elevation-map/", logo: "🟩" },
                ]
            }
        ]
    },

    "sliding-window": {
        title: "Sliding Window",
        icon: "🪟",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Sliding window: Maintain a subarray/substring window, expand and shrink based on condition. Avoids recalculating.",
            explanation: "Key idea: Once we move the window, update state incrementally instead of recalculating. Used for finding max/min subarrays, longest substrings with constraint.",
            keyPoints: [
                "🪟 Maintain dynamic window",
                "↔️ Expand right, shrink left",
                "📊 Update state incrementally",
                "⚡ Typically O(n) solution"
            ],
            realWorldExamples: [
                "Network bandwidth monitoring (max data in time window)",
                "Stock price tracking (find longest uptrend)",
                "DNA sequence analysis (find patterns in genetic code)",
                "Real-time analytics dashboards",
                "Video streaming buffer optimization"
            ]
        },
        animation: {
            type: "slideInUp",
            duration: 600,
            delay: 190
        },
        questions: [
            {
                id: 53,
                title: "Best Time to Buy and Sell Stock II",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock-ii/", logo: "🟩" },
                ]
            },
            {
                id: 54,
                title: "Minimum Window Substring",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/minimum-window-substring/", logo: "🟩" },
                ]
            },
            {
                id: 55,
                title: "Max Consecutive Ones",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/max-consecutive-ones/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-consecutive-ones-in-binary-array/", logo: "🟩" },
                ]
            },
            {
                id: 56,
                title: "Permutation in String",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/permutation-in-string/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/permutation-in-string/", logo: "🟩" },
                ]
            }
        ]
    },

    "backtracking": {
        title: "Backtracking",
        icon: "🔙",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Backtracking: Explore all possible solutions, abandon path when it doesn't lead to solution. Build solutions incrementally.",
            explanation: "For each state, try all choices. If choice leads nowhere, backtrack. Used for: permutations, combinations, puzzles, N-Queens. Time: Often exponential, but prunes invalid paths.",
            keyPoints: [
                "🔀 Explore all possibilities",
                "◀️ Backtrack on dead ends",
                "🎯 Incremental solution building",
                "📊 Exponential time complexity"
            ],
            realWorldExamples: [
                "Sudoku solver",
                "Chess move prediction",
                "Maze solving algorithms",
                "Spell checker suggestions",
                "Compiler error recovery"
            ]
        },
        animation: {
            type: "jello",
            duration: 700,
            delay: 240
        },
        questions: [
            {
                id: 57,
                title: "Generate Parentheses",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/generate-parentheses/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/generate-all-combinations-of-balanced-parentheses/", logo: "🟩" },
                ]
            },
            {
                id: 58,
                title: "Word Search",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/word-search/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/word-search-in-2d-grid/", logo: "🟩" },
                ]
            },
            {
                id: 59,
                title: "Combination Sum",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/combination-sum/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/backtracking-algorithms/", logo: "🟩" },
                ]
            },
            {
                id: 60,
                title: "N-Queens",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/n-queens/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/n-queen-problem-backtracking/", logo: "🟩" },
                ]
            }
        ]
    },

    "bit-manipulation": {
        title: "Bit Manipulation",
        icon: "🔢",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Bit operations: AND (&), OR (|), XOR (^), NOT (~), shifts (<< >>). Efficient for flags, permissions, encoding.",
            explanation: "Work at binary level. XOR is powerful: a ^ a = 0, a ^ 0 = a. Bit shifts: << doubles, >> halves. Used for optimization and clever tricks.",
            keyPoints: [
                "🔲 Binary level operations",
                "⚡ XOR properties (self→0)",
                "🔄 Bit shifts for multiply/divide",
                "🎯 Space optimization"
            ],
            realWorldExamples: [
                "File permissions (read/write/execute bits)",
                "Network IP addresses and subnetting",
                "Graphics programming (color RGB bits)",
                "Cryptography (XOR encryption)",
                "Hardware-level optimization"
            ]
        },
        animation: {
            type: "swing",
            duration: 650,
            delay: 280
        },
        questions: [
            {
                id: 61,
                title: "Number of 1 Bits",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/number-of-1-bits/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n/", logo: "🟩" },
                ]
            },
            {
                id: 62,
                title: "Single Number",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/single-number/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-the-element-that-appears-once-in-array-where-other-elements-appear-twice/", logo: "🟩" },
                ]
            },
            {
                id: 63,
                title: "Reverse Bits",
                difficulty: "Easy",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/reverse-bits/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-bits-of-a-32-bit-signed-integer/", logo: "🟩" },
                ]
            },
            {
                id: 64,
                title: "Maximum Product of Word Lengths",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/maximum-product-of-word-lengths/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-product-of-word-lengths/", logo: "🟩" },
                ]
            }
        ]
    },

    "trie": {
        title: "Trie (Prefix Tree)",
        icon: "🌲",
        difficulty: ["Easy", "Medium", "Hard"],
        concept: {
            definition: "Trie: Tree where each node represents a character. Path from root represents a word. Efficient for prefix-based search.",
            explanation: "Each node has up to 26 child pointers (for 'a'-'z'). Insert/search O(m) where m = word length. Faster than hash table for prefix searches.",
            keyPoints: [
                "🔤 Character-level tree",
                "🔍 Prefix search efficient",
                "⏱️ O(m) for word of length m",
                "💾 Space for all prefixes"
            ],
            realWorldExamples: [
                "Autocomplete in search bars (Google suggest)",
                "Spell checkers (find similar words)",
                "IP routing tables",
                "Dictionary implementation",
                "T9 text prediction in old phones"
            ]
        },
        animation: {
            type: "rubberBand",
            duration: 800,
            delay: 330
        },
        questions: [
            {
                id: 65,
                title: "Implement Trie",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/trie-insert-and-search/", logo: "🟩" },
                ]
            },
            {
                id: 66,
                title: "Search Word in Trie",
                difficulty: "Medium",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/search-in-a-binary-search-tree/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/trie-insert-and-search/", logo: "🟩" },
                ]
            },
            {
                id: 67,
                title: "Word Ladder",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/word-ladder/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/word-ladder/", logo: "🟩" },
                ]
            },
            {
                id: 68,
                title: "Autocomplete System",
                difficulty: "Hard",
                platforms: [
                    { name: "LeetCode", url: "https://leetcode.com/problems/design-search-autocomplete-system/", logo: "🔵" },
                    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/trie-based-autocomplete-system/", logo: "🟩" },
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
    "InterviewBit": { color: "#FF6B35", icon: "🔶", url: "https://www.interviewbit.com" }
};

// Utility Functions
function getAllQuestions() {
    let allQuestions = [];
    for (let topic in questionsDB) {
        questionsDB[topic].questions.forEach(q => {
            allQuestions.push({ ...q, topic: topic });
        });
    }
    return allQuestions;
}

function getQuestionsByTopic(topic) {
    return questionsDB[topic] ? questionsDB[topic].questions : [];
}

function getTopicInfo(topic) {
    return questionsDB[topic] ? {
        title: questionsDB[topic].title,
        icon: questionsDB[topic].icon,
        concept: questionsDB[topic].concept,
        animation: questionsDB[topic].animation
    } : null;
}

function searchQuestions(query) {
    const allQuestions = getAllQuestions();
    return allQuestions.filter(q =>
        q.title.toLowerCase().includes(query.toLowerCase())
    );
}

function filterByDifficulty(questions, difficulty) {
    return questions.filter(q => q.difficulty === difficulty);
}

