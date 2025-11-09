impl Solution {
    pub fn score_of_string(s: String) -> i32 {
        let mut score: i32 = 0;
        let mut prev: i32 = 0;
        for c in s.chars(){
            score += (c as i32 - prev).abs();
            prev = c as i32;
        }
        score -= s.chars().next().unwrap() as i32;
        score
    }
}
