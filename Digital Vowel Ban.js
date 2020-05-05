let obj = {
	"0":"zero",
	"1":"one",
	"2":"two",
	"3":"three",
	"4":"four",
	"5":"five",
	"6":"six",
	"7":"seven",
	"8":"eight",
	"9":"nine"
}

function digitalVowelBan(n, ban) {
	let str = String(n)
    let ans = ""
    let check = 0
	for (let s of str) {
		if (!obj[s].includes(ban)) {
			if (s != "0")
				check = 1
			if (check)
				ans += s
		}
	}
			
	return ans === "" ? "Banned Number" : Number(ans)
}
