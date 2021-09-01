const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const getDate = () => {
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const year = new Date().getFullYear();
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
  const fulldate = `${month} ${date} ${year} ${hour}:${minute}:${second}`;
  return fulldate;
};

function array_move(arr, old_index, new_index) {
  if (new_index >= arr.length) {
    let k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
}

const indonesianDate = () => {
  const string = getDate().split(" ");
  for (let i = 0; i < months.length; i++) {
    if (string[0] === (i + 1).toString()) {
      string[0] = months[i];
    }
  }
  const time = string[string.length - 1].split(":");
  array_move(string, 0, 1);
  time.pop();
  string.pop();

  return `${string.join(" ")} ${time.join(":")} WIB`;
};

module.exports = indonesianDate();
