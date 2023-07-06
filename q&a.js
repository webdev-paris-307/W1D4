const sentence =
	"Lorem ipsum, dolor sit amet et ET conetsectetur etat adipisicing elit. Sequi fugit suscipit cupiditate distinctio reprehenderit voluptas, quasi esse alias atque error a officia. Necessitatibus, quam. Nisi vitae soluta fugiat voluptate itaque?"

let count = 0
for (let i = 0; i < sentence.length; i++) {
	if (
		sentence[i - 1] === " " &&
		sentence[i] === "e" &&
		sentence[i + 1] === "t"
	) {
		count++
	}
}

console.log(count)

const regex = /\bet\b/gi
const otherRegExp = new RegExp(/\bet\b/, "gi")

console.log(sentence.match(regex))

// choco
