
# SSR Components - Mention/Mention Reference Parser

## Overview
This component implements a mention parser that detects `@mention` references in text and converts them into clickable links.

## How the Sliding Window Mechanic Works

The `formatText()` function uses a **sliding window algorithm** to match user mentions:

### Algorithm Flow

1. **Split Input**: Text is split into individual words
2. **Iterate Through Words**: Loop through each word with index `i`
3. **Detect Mention**: When a word starts with `@`:
    - Initialize pointer `j = i + 1`
    - **Sliding Window**: Expand window from `i` to `j`, incrementing `j` each iteration
    - **Candidate Matching**: For each window size, join words and check against the dummy data
    - **Track Match**: Store the largest `j` where a valid match is found
4. **Render Result**: 
    - If match found: render as blue link spanning `[i, matched)`
    - If no match: render as plain text
5. **Continue**: Move pointer `i` forward and repeat

### Example
```
Input: "@Jane Smith says hello"
- i=0: Check "@Jane" (no match), "@Jane Smith" (match!) → matched=2
- Render: <a>@Jane Smith</a>
- i=2: Continue with "says"...
```

This greedy approach finds the longest possible name match starting from each `@` symbol.
