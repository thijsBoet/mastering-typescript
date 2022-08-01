function triple(value: number | string) {
  if(typeof value === 'number') {
    return value * 3;
  } else {
    return value.repeat(3);
  }
}

console.log(triple('Hi'));

const el = document.getElementById('idk')
// Sure that value in not null
if (el) {
  console.log(el.innerHTML);
}

const printLetters = (word?: string) => {
	// Sure that value in not undefined
	if (word) {
		for (const letter of word) {
			console.log(letter);
		}
	}
}

function someDemo(x: string | number, y: string | number) {
  if (x === y) {
    return console.log("Same value and type");
  }
}

const myPet = { name: "kitty", age: 5 }

interface Movies {
  title: string,
  duration: number,
}

interface TVShows {
  title: string,
  numEpisodes: number,
  episodeDuration: number,
}

function getRuntime(media: Movies | TVShows) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRuntime({ title: 'Amadeus', duration: 140 }));
console.log(
	getRuntime({ title: 'Spongebob', numEpisodes: 80, episodeDuration: 30 })
);
