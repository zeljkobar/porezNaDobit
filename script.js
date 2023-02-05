function download(filename, text) {
  var element = document.createElement("a");
  element.style.display = "none";

  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const select = document.getElementById("mySelect");

for (const item of firme) {
  const option = document.createElement("option");
  option.value = item.ime;
  option.textContent = item.ime;
  select.appendChild(option);
}

let izabranaFirma;
let pib;
let adresa;
let godina = 2022;
let Izmijenjena = false;
let naziv;
let OvlascenoLicePrezimeIme = 'Zeljko Djuranovic';
let OvlascenoLicePIB = '1606981220012';
let KontaktTelefon = '067440040'

const form = document.querySelector("form");
form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const fields = form.elements;
    let currentField = event.target;
    let index = Array.prototype.indexOf.call(fields, currentField);
    if (index !== -1 && (index + 1) < fields.length) {
      fields[index + 1].focus();
    }
  }
});

select.addEventListener("change", (event) => {
  const selectedIndex = event.target.selectedIndex;
  izabranaFirma = firme[selectedIndex];
  naziv = izabranaFirma.ime;
  pib = izabranaFirma.pib;
  adresa = izabranaFirma.adresa;
});
const x01 = document.getElementById('x01');
console.log(pib);
console.log(izabranaFirma);

document.getElementById('download-btn').addEventListener('click', function () {
  console.log(x01.value);
})
// document.getElementById("download-btn").addEventListener(
//   "click",
//   function () {
//     console.log(select.value);
//     var text = `<?xml version="1.0" encoding="utf-8"?>
//     <PortalCitReturn2018 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
//       <PIB>03356299</PIB>
//       <Godina>2022</Godina>
//       <Od>2022-01-01T00:00:00</Od>
//       <Do>2022-12-31T00:00:00</Do>
//       <Izmijenjena>false</Izmijenjena>
//       <Naziv>SAMRAJ DOO BAR</Naziv>
//       <Rezident>true</Rezident>
//       <Adresa> , BAR</Adresa>
//       <OvlascenoLicePIB>1606981220012</OvlascenoLicePIB>
//       <OvlascenoLicePrezimeIme>Željko Ðuranoviæ</OvlascenoLicePrezimeIme>
//       <KontaktEmail>zeljkodj@t-com.me</KontaktEmail>
//       <KontaktTelefon>067440040</KontaktTelefon>
//       <KonsOdobreno>ne</KonsOdobreno>
//       <KonsDatumRjesenja xsi:nil="true" />
//       <Iznos1>0</Iznos1>
//       <Iznos2>1729</Iznos2>
//       <Iznos3>0</Iznos3>
//       <Iznos4>0</Iznos4>
//       <Iznos5>0</Iznos5>
//       <Iznos6>0</Iznos6>
//       <Iznos7>0</Iznos7>
//       <Iznos8>0</Iznos8>
//       <Iznos9>0</Iznos9>
//       <Iznos10>0</Iznos10>
//       <Iznos11>0</Iznos11>
//       <Iznos12>0</Iznos12>
//       <Iznos13>0</Iznos13>
//       <Iznos14>0</Iznos14>
//       <Iznos15>0</Iznos15>
//       <Iznos16>0</Iznos16>
//       <Iznos17>0</Iznos17>
//       <Iznos18>0</Iznos18>
//       <Iznos19>0</Iznos19>
//       <Iznos20>0</Iznos20>
//       <Iznos21>0</Iznos21>
//       <Iznos22>0</Iznos22>
//       <Iznos23>0</Iznos23>
//       <Iznos24>0</Iznos24>
//       <Iznos25>0</Iznos25>
//       <Iznos26>0</Iznos26>
//       <Iznos27>0</Iznos27>
//       <Iznos28>0</Iznos28>
//       <Iznos29>0</Iznos29>
//       <Iznos30>0</Iznos30>
//       <Iznos31>0</Iznos31>
//       <Iznos32>0</Iznos32>
//       <Iznos33>0</Iznos33>
//       <Iznos34>0</Iznos34>
//       <Iznos35>0</Iznos35>
//       <Iznos36>0</Iznos36>
//       <Iznos37>1729</Iznos37>
//       <Iznos38>0</Iznos38>
//       <Iznos39>0</Iznos39>
//       <Iznos40>0</Iznos40>
//       <Iznos41>0</Iznos41>
//       <Iznos42>0</Iznos42>
//       <Iznos43>0</Iznos43>
//       <Iznos44>0</Iznos44>
//       <Iznos45>0</Iznos45>
//       <Iznos46>0</Iznos46>
//       <Iznos47>0</Iznos47>
//       <Iznos48>0</Iznos48>
//       <Iznos49a>0</Iznos49a>
//       <Iznos49b>0</Iznos49b>
//       <Iznos49c>0</Iznos49c>
//       <Iznos50>0</Iznos50>
//       <Iznos51>0</Iznos51>
//       <Iznos52>0</Iznos52>
//       <Iznos53>0</Iznos53>
//       <Iznos54>0</Iznos54>
//       <Iznos55>0</Iznos55>
//       <Iznos56>0</Iznos56>
//       <Iznos57>0</Iznos57>
//       <Iznos58>0</Iznos58>
//       <Iznos59>0</Iznos59>
//       <Iznos60>0</Iznos60>
//       <Iznos61>0</Iznos61>
//       <Iznos62>0</Iznos62>
//       <IznosPG1_1>0</IznosPG1_1>
//       <IznosPG1_2>621</IznosPG1_2>
//       <IznosPG1_21>621</IznosPG1_21>
//       <IznosPG1_22>0</IznosPG1_22>
//       <IznosPG1_23>0</IznosPG1_23>
//       <IznosPG1_24>0</IznosPG1_24>
//       <IznosPG1_25>0</IznosPG1_25>
//       <IznosPG1_3>0</IznosPG1_3>
//       <IznosPG2_1>0</IznosPG2_1>
//       <IznosPG2_2>0</IznosPG2_2>
//       <IznosPG2_21>0</IznosPG2_21>
//       <IznosPG2_22>0</IznosPG2_22>
//       <IznosPG2_23>0</IznosPG2_23>
//       <IznosPG2_24>0</IznosPG2_24>
//       <IznosPG2_25>0</IznosPG2_25>
//       <IznosPG2_3>0</IznosPG2_3>
//       <BrojDokumentaOrgId></BrojDokumentaOrgId>
//       <BrojDokumentaRbr>0</BrojDokumentaRbr>
//       <Akcija>new</Akcija>
//       <Message>
//         <Show>false</Show>
//         <Message />
//       </Message>
//       <Error>
//         <Show>false</Show>
//         <Message />
//       </Error>
//     </PortalCitReturn2018>
//     `;
//     console.log(izabranaFirma.ime);
//     //   var filename = document.getElementById("filename").value;
//     var filename = `${izabranaFirma.ime}.xml`;
//     download(filename, text);
//   },
//   false
// );
