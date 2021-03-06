/* 0-1 knapsack problem
For an overall introduction to knapsack problem, see https://en.wikipedia.org/wiki/Knapsack_problem
Function name: knapsack
Param: 
  items: an array of {w: v:} (where 'w' stands for weight, and 'v' stands for value)
  capacity: a positive integer number
Will return max sum value that can reach, and the chosen subset to add up to the value.
Example:
var items = [{w:3,b:10},{w:1,b:3},{w:2,b:9},{w:2,b:5},{w:1,b:6}];
var capacity = 6;
console.log(knapsack(items, capacity));
will return 
{ maxValue: 25,
  subset: [ { w: 1, v: 6 }, { w: 2, v: 9 }, { w: 3, v: 10 } ] }
*/

function knapsack(items, capacity){
    // This implementation uses dynamic programming.
    // Variable 'memo' is a grid(2-dimentional array) to store optimal solution for sub-problems,
    // which will be later used as the code execution goes on.
    // This is called memoization in programming.
    // The cell will store best solution objects for different capacities and selectable items.
    const memo = [];
  
    // Filling the sub-problem solutions grid.
    for (let i = 0; i < items.length; i++) { //this loop will run 3 times based on our input of 3 items
      // Variable 'cap' is the capacity for sub-problems. In this example, 'cap' ranges from 1 to 6.
      const row = [];
      for (let cap = 1; cap <= capacity; cap++) { //this loop runs 5 times for each iteration of above loop
        row.push(getSolution(i,cap));
      }
      //we push the row filled with values into memo arr after this loop completes
      memo.push(row);
    }
  
    // The right-bottom-corner cell of the grid contains the final solution for the whole problem.
    return(getLast());
  
    function getLast(){
      const lastRow = memo[memo.length - 1];
      return lastRow[lastRow.length - 1];
    }
  
    function getSolution(row,cap){
      const NO_SOLUTION = { maxValue:0, subset:[] };
      // the column number starts from zero.
      const col = cap - 1; 

      const lastItem = items[row];   

      // The remaining capacity for the sub-problem to solve.
      const remaining = cap - lastItem.w; // 

      // Refer to the last solution for this capacity,
      // which is in the cell of the previous row with the same column
      const lastSolution = row > 0 ? memo[row - 1][col] || NO_SOLUTION : NO_SOLUTION;
    
      // Refer to the last solution for the remaining capacity,
      // which is in the cell of the previous row with the corresponding column
      const lastSubSolution = row > 0 ? memo[row - 1][remaining - 1] || NO_SOLUTION : NO_SOLUTION;
  
      // If any one of the items weights greater than the 'cap', return the last solution
      if(remaining < 0) return lastSolution;

      const lastValue = lastSolution.maxValue;
      const lastSubValue = lastSubSolution.maxValue;
      const newValue = lastSubValue + lastItem.v;

      if(newValue >= lastValue){

        // copy the subset of the last sub-problem solution
        const _lastSubSet = lastSubSolution.subset.slice();

        _lastSubSet.push(lastItem);
 
        return { maxValue: newValue, subset:_lastSubSet };

      } else{
        return lastSolution;
      }
    }
  }
  
  // test
  const items = [
    {w: 2, v: 10},
    {w: 3, v: 20},
    {w: 5, v: 15 },
  ];
  
  const capacity = 5;
  console.log(knapsack(items, capacity));
  