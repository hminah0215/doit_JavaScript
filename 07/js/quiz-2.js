var nag = [];

nag[0] = "잔소리목록1, 일찍자고 일찍일어나랏!";
nag[1] = "잔소리목록2, 밤10시에서 새벽2시에는 필히 잠들어있어랏!";
nag[2] = "잔소리목록3, 돈주고 처먹느라 살찌고, 돈주고 살빼는게 뭔짓이냐";
nag[3] = "잔소리목록4, 나이가 몇인데 그것도 못해!! 혼자살면 굶어죽을래?";

var randomNag = Math.floor(Math.random() * nag.length);
document.write("<p>&quot;" + nag[randomNag] + "&quot;</p>");