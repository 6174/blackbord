/*
 * home page.
 */
exports.index = function(req, res) {
	res.render('index', {
		title: 'Express'
	});
};

/**
 * teaccher page
 */
exports.teacher = function(req, res) {
	var renderObj = {
		title: 'teacher page'
	};
	res.render('teacher', renderObj);
};

/**
 * blackbord page
 */
exports.blackbord = function(req, res) {
	var renderObj = {
		title: 'blackbord page'
	};
	res.render('blackbord', renderObj)

}