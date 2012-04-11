//font style and color (c)Vasiliy Shevchuk 2012
var style = {
	default : 0,
	reset : 0,
	bold : 1,
	underline : 4,
	flashing : 5,
    non_flashing : 25,
	black : 30,
	red : 31,
	green : 32,
	yellow : 33,
	blue : 34,
	magenta : 35,
	cyan : 36,
	white : 37,
	b_black : 40,
	b_red : 41,
	b_green : 42,
	b_yellow : 43,
	b_blue : 44,
	b_magenta : 45,
	b_cyan : 46,
	b_white : 47,
	ib_black : 100,
	ib_red : 101,
	ib_green : 102,
	ib_yellow : 103,
	ib_blue : 104,
	ib_magenta : 105,
	ib_cyan : 106,
	ib_white : 107
};
for (var i in style){
	style[i] = '\033[' + style[i] + 'm';
}
module.exports = style;
