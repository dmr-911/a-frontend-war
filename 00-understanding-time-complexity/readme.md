An algorithm is a step-by-step set of instructions used to solve a problem or complete a task.

Code pattern	Time complexity	Why?
arr[0]	\(O(1)\)	One indexed access
for (i = 0; i < n; i++)	\(O(n)\)	\(n\) iterations
Two sequential loops of \(n\)	\(O(n)\)	\(n+n=2n\)
Two nested loops of \(n\)	\(O(n^2)\)	\(n \times n\)
Nested loop with inner limit 5	\(O(n)\)	\(5n\) iterations