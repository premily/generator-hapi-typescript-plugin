test: gulp-compile
	@node node_modules/lab/bin/lab
test-cov: gulp-compile
	@node node_modules/lab/bin/lab -t 100
test-cov-html: gulp-compile
	@node node_modules/lab/bin/lab -r html -o coverage.html

gulp-compile:
	@node node_modules/gulp/bin/gulp ts

.PHONY: test test-cov test-cov-html