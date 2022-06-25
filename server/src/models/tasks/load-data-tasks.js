const { getAllTasks, addNewTask } = require("./tasks.model");

const allTasks = [
  {
    id: "000",
    sectionId: "0",
    title: "Two Sum",
    description:
      "Given an array of n numbers <span>nums</span> and an interger <span>target</span>, the function should return the indices of the two numbers such as they add up to <span>target</span>.\nWe can assume that each array <span>nums</span> as input as exaclty only one solution, and you can't use the indice twice.",
    taskPrototype: "def twoSum(nums, target):",
    exemple: "Input nums = [3, 4, 2, 1, 10] | target = 11\nOutput: [3, 4]",
    numberOfChecks: 6,
    clueOne:
      "What about browse the entire array, and search for every nums if another num match ?",
    clueTwo: "Did you think about hash table ?",
    optimizeSolution: "The best solution is O(n) runtime | O(n) space",
    edgeCases:
      "2 <= len(nums) <= 10<sup>4</sup>\n-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>\n-10<sup>9</sup> <= target <= 10<sup>9</sup>",
    githubRepo: "HTW-interview_trainning",
    directoryName: "0x00-array_string",
    fileName: "0-two_sum.py",
  },
  {
    id: "001",
    sectionId: "0",
    title: "Contains Duplicate",
    description:
      "Given an array <span>nums</span>, of n number. Return <span>true</span> if any value appear twice, or <span>false</span> if not",
    taskPrototype: "def containsDuplicate(nums):",
    exemple: "Input nums = [2, 3, 4, 1, 2]\n Output: true",
    numberOfChecks: 6,
    clueOne: "What about sorting ?",
    clueTwo: "Did you think about hash table ?",
    optimizeSolution: "The best solution is O(n) runtime | O(n) space",
    edgeCases:
      "1 <= len(nums) <= 10<sup>5</sup>\n10<sup>9</sup> <= nums[i] <= 10<sup>9</sup>",
    githubRepo: "HTW-interview_trainning",
    directoryName: "0x00-array_string",
    fileName: "1-contains_duplicate.py",
  },
  {
    id: "002",
    sectionId: "0",
    title: "Max Profit",
    description:
      "Given an array <span>prices</span>, where <span>price[i]</span> is the price at the i<sup>th</sup> day\nYour goal is to maximize the profit by buying stock on a <span>single day</span>, and sell it on an <span>futur other single day</span>.\nIf you cannot make any profit from the stock market, <span>return 0</span>",
    taskPrototype: "def maxProfit(prices):",
    exemple: "Input prices = [1, 3, 4, 1, 4, 8]\nOutput: 7",
    numberOfChecks: 8,
    clueOne: "Try to write a brute force method, what did you think about ?",
    clueTwo: "Heap should be useful here",
    optimizeSolution: "The best solution is O(n) runtime | max O(n) space",
    edgeCases:
      "1 <= len(prices) <= 10<sup>5</sup>\n0</sup> <= prices[i] <= 10<sup>4</sup>",
    githubRepo: "HTW-interview_trainning",
    directoryName: "0x00-array_string",
    fileName: "2-max_profit.py",
  },
  // {
  //   id: "001",
  //   sectionId: "1",
  //   title: "Contains Duplicate",
  //   description: "",
  //   taskPrototype: "",
  //   exemple: "",
  //   numberOfChecks: 0,
  //   clueOne: "",
  //   clueTwo: "",
  //   optimizeSolution: "",
  //   edgeCases: "",
  //   githubRepo: "HTW-interview_trainning",
  //   directoryName: "0x00-array_string",
  //   fileName: "",
  // },
  // {
  //   id: "001",
  //   sectionId: "1",
  //   title: "Contains Duplicate",
  //   description: "",
  //   taskPrototype: "",
  //   exemple: "",
  //   numberOfChecks: 0,
  //   clueOne: "",
  //   clueTwo: "",
  //   optimizeSolution: "",
  //   edgeCases: "",
  //   githubRepo: "HTW-interview_trainning",
  //   directoryName: "0x00-array_string",
  //   fileName: "",
  // },
  // {
  //   id: "001",
  //   sectionId: "1",
  //   title: "Contains Duplicate",
  //   description: "",
  //   taskPrototype: "",
  //   exemple: "",
  //   numberOfChecks: 0,
  //   clueOne: "",
  //   clueTwo: "",
  //   optimizeSolution: "",
  //   edgeCases: "",
  //   githubRepo: "HTW-interview_trainning",
  //   directoryName: "0x00-array_string",
  //   fileName: "",
  // },
];

const populateAllTasks = async () => {
  const taskFormTheDataBase = await getAllTasks();
  console.log(taskFormTheDataBase);
  if (taskFormTheDataBase.length !== 0) {
    console.log("All tasks are already populate");
    return;
  }
  allTasks.forEach(async (task) => {
    await addNewTask(task);
  });
  console.log("Task data populate done");
};

module.exports = populateAllTasks;
