let siswa = [{
    nama: "Saya",
    umur: 18,
    nik: "008821",
    lulus: true,
    hobi: ["Game", "Coding"],
    Pendidikan: {
      sd: "lulus",
      smp: "lulus",
      smk: "lulus",
    },
  },
  {
    nama: "Dia",
    umur: 18.5,
    nik: "008822",
    lulus: true,
    hobi: ["Membaca", "Menonton film"],
    Pendidikan: {
      sd: "lulus",
      smp: "lulus",
      smk: "lulus",
    },
  }
];
for(const i of siswa){
 console.log(`<div class="container">Halo ${i.nama}</div>`);
}
console.log(JSON.stringify(siswa));


async function logJSONData(url) {
  const response = await fetch(url,{
    method: "GET"
  });
  const jsonData = await response.json();
  console.log(jsonData);
}
logJSONData('coba.json')


// AJAX
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let siswa = JSON.parse(this.responseText);
//     console.log(siswa);
//   }
// };
// xhr.open("GET", "coba.json", true);
// xhr.send();


// JQUERY
// $.getJSON("https://api.vndb.org/kana/schema", function (data) {
//   console.log(data);
// });
