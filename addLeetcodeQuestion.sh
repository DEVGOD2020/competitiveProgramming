echo "Add Leetcode Answer"
read -e -p "Question: " question
mkdir -p LeetCode/problems/$question/
nano LeetCode/problems/$question/$question.js
echo "Added Successfully"
