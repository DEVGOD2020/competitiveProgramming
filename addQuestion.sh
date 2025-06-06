#!/usr/bin/env bash

platforms=("leetcode" "codeforce")
#read -e -p "Choose Platform: " platform

select platform in "${platforms[@]}"; do
	case "$platform" in
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
