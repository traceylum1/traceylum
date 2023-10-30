import React from 'react';

export default function Learning() {
  return (
    <>
      <h1>Learning</h1>

      
      <article>
        <h2>10-4-2023</h2>
        <p>
          I have been working on <strong> Binary Search Trees</strong> for the past few days, and they just get more and more complicated. Figuring out 
          how to traverse them recursively inorder, preorder, and postorder already posed a huge challenge. Trying to figure out how to traverse them 
          iteratively fried my brain for a good couple days until I had to look up the solutions. Working to understand the solutions put my brain right 
          back into the fryer.
        </p>
        <p>
          After doing so much work with traversing binary search trees, I figured that to implement one would simply be a matter of putting together all my 
          gained knowledge of them. That also turned out to be false. I am yet again faced with the reality that CS will always find a way to kick my butt.
        </p>
        <p>
          Ryan has told me to spend a week on it. I'm not sure if that will be possible at my pace, but we will find out.
        </p>

      </article>

      <article>
        <h2>9-28-2023</h2>
        <p>
          I meant to start journaling about my learning a while ago, but since I hadn't had my website running yet, I pushed it off until now. 
          Therefore, I have accumulated a hefty backlog of things to share. I won't get to all of them in this post, but I'll touch on the 
          ones currently on my mind.
        </p>
        <p>
          Today I started learning about binary trees. The recursive solution to the Fibonacci sequence is an example of a binary tree, 
          because each function call recursively calls itself two other times, with (n - 1) and (n - 2). Here, the function uses 
          <strong> DFP</strong> (depth first search) to find the solution, evaluating all the (n - 1) calls first, then going back up to evaluate 
          the (n - 2) calls and returning them to the parent node. Aside from DFP, there is also <strong> BFP</strong> (breadth first search), which 
          evaluates both left and right children of the parent node before continuing down the tree. There are also three ways to traverse 
          a binary search tree: <strong> pre order traversal</strong>, <strong> post order traversal</strong> and <strong> in order traversal</strong>. I 
          will elaborate on them further when I've done more work with binary search trees.
        </p>
        <img src="https://i.stack.imgur.com/2dxLl.png" alt="Fibonacci sequence recursive tree" class="center"></img>
        <p>
          On another note, I feel like nearly every other day is a new battle with imposter syndrome. Self-doubt is always creeping just below the 
          surface, waiting for any and every opportunity to pounce. But, I know I just have to keep reminding myself that CS is not easy, and it's 
          unlikely that I'm struggling much harder than everyone else who learned this stuff.
        </p>
      </article>

    </>
    );
  }