async function help() {
  let api = await fetch("https://api.vndb.org/kana/stats");
  console.log(api);
}
console.log(help());
