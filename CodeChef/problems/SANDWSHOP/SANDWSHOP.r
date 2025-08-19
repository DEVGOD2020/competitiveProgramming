input <- file('stdin', 'r')
data <- readLines(input, n=1)
res <- as.numeric( strsplit(data, " ")[[1]] )
cat(res[1] - (res[2] + res[3]) )

