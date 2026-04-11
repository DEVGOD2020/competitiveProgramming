#!/usr/bin/env bash

platforms=("atcoder" "leetcode" "codeforce")

select platform in "${platforms[@]}"; do
	case "$platform" in	
		atcoder)
			read -e -p "Question: " question
			mkdir -p AtCoder/problems/${question::-1}/
			cp AtCoder/templates/basicTemplate.js AtCoder/problems/${question::-1}/$question.js
			nvim AtCoder/problems/${question::-1}/$question.js
			echo "Added Successfully"
		;;
		leetcode)
			read -e -p "Question: " question
			mkdir -p LeetCode/problems/$question/
			nvim LeetCode/problems/$question/$question.js
			echo "Added Successfully"
		;;
		codeforce)
			read -e -p "Question: " question
			mkdir -p CodeForces/problems/${question::-1}/
			cp CodeForces/templates/basicTemplate.js CodeForces/problems/${question::-1}/$question.js
			nvim CodeForces/problems/${question::-1}/$question.js
			echo "Added Successfully"
		;;
	esac
done
