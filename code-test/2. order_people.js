const sortByGradeAndPoint = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const ASCIIgrade = arr[i].charCodeAt(arr[i].length - 1);
    const dataSplit = arr[i].split("|");
    const point = dataSplit[1];
    const nameCode = dataSplit[0].toUpperCase().charCodeAt(0);
    obj["" + ASCIIgrade + point + nameCode] = arr[i];
  }
  return obj;
};

const reverseByPoint = (obj) => {
  let result = [];
  let arr = [];
  let first;
  for (let i in obj) {
    const grade = i.slice(0, 2);
    if (!first) {
      first = grade;
      arr.push(obj[i]);
    } else if (first != grade) {
      first = grade;
      result = result.concat(arr);
      arr = [];
      arr.push(obj[i]);
    } else if (first == grade) {
      arr = [obj[i]].concat(arr);
    }
  }
  return result.concat(arr);
};

const sortByName = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const presentIndex = arr[i].split("|");
    const nextIndex = arr[i + 1].split("|");
    if (presentIndex[1] == nextIndex[1] && presentIndex[2] == nextIndex[2]) {
      if (presentIndex[0].charCodeAt(0) > nextIndex[0].charCodeAt(0)) {
        result.push(nextIndex[0]);
        result.push(presentIndex[0]);
        i++;
      } else {
        result.push(presentIndex[0]);
      }
    } else {
      result.push(presentIndex[0]);
    }
  }
  return result.concat(arr[arr.length - 1].split("|")[0]);
};
const sorted = (arr) => {
  const gradeSorted = sortByGradeAndPoint(arr);
  const pointSorted = reverseByPoint(gradeSorted);
  const nameSorted = sortByName(pointSorted);
  return nameSorted;
};

const data = [
  "evan|50000|D",
  "jefry|70000|C",
  "rizky|30000|D",
  "hanson|10000|B",
  "candra|30000|A",
  "goklas|20000|A",
  "hendra|20000|B",
  "surya|30000|A",
];

console.log(sorted(data));
