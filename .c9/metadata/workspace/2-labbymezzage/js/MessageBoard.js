{"changed":true,"filter":false,"title":"MessageBoard.js","tooltip":"/2-labbymezzage/js/MessageBoard.js","value":"\"use strict\"\n\nvar messageBoard = {\n    \n    messages: []\n\n};","undoManager":{"mark":51,"position":54,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"remove","lines":["N"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["B"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":18},"end":{"row":2,"column":1},"action":"insert","lines":["","    ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":4},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":14},"end":{"row":2,"column":16},"action":"insert","lines":["[]"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":15},"end":{"row":2,"column":15},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"remove","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"remove","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]},{"start":{"row":1,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":[""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":12},"action":"insert","lines":["\"use strict\""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":1,"column":0},"action":"insert","lines":["",""]},{"start":{"row":1,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":[""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":0},"end":{"row":1,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1416834636483}