let izabranaFirma, naziv, pib, adresa;
let godina = 2022;
let Izmijenjena = false;
let OvlascenoLicePrezimeIme = "Zeljko Djuranovic";
let OvlascenoLicePIB = "1606981220012";
let KontaktTelefon = "067440040";
let KontaktEmail = "zeljkodj@t-com.me";
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const select = document.getElementById("mySelect");
const vrijednostiPolja = [];
let rezultat,
  dobit9,
  dobit12,
  dobit15,
  gubitak,
  dobit,
  ostatakOporeziveDobiti,
  gubPrethGod,
  kapDob,
  kapGub;

// dodaje sve inpute u niz vrijednostiPolja
inputs.forEach(function (input) {
  vrijednostiPolja[input.name] = 0;
  input.addEventListener("blur", function () {
    vrijednostiPolja[input.name] = parseFloat(input.value);
    if (!input.value) vrijednostiPolja[input.name] = 0;
    console.log(vrijednostiPolja);
    preracun(vrijednostiPolja);
    update();
  });
});

function update() {
  document.getElementById("x36").value = dobit;
  document.getElementById("x37").value = gubitak;
  document.getElementById("x39").value = ostatakOporeziveDobiti;
  document.getElementById("x40").value = kapDob;
  document.getElementById("x41").value = kapGub;
  document.getElementById("x40").value > document.getElementById("x41").value
    ? (document.getElementById("x42").value =
        document.getElementById("x40").value -
        document.getElementById("x41").value)
    : (document.getElementById("x42").value = 0);
  document.getElementById("x40").value < document.getElementById("x41").value
    ? (document.getElementById("x43").value =
        document.getElementById("x41").value -
        document.getElementById("x40").value)
    : (document.getElementById("x43").value = 0);
  document.getElementById("x49a").value = dobit9;
}
function preracun(vrijednosti) {
  if (vrijednosti["x01"]) {
    rezultat =
      vrijednosti["x01"] -
      vrijednosti["x03"] +
      vrijednosti["x04"] +
      vrijednosti["x05"] -
      vrijednosti["x06"] +
      vrijednosti["x07"] +
      vrijednosti["x08"] +
      vrijednosti["x09"] +
      vrijednosti["x10"] +
      vrijednosti["x11"] +
      vrijednosti["x12"] +
      vrijednosti["x13"] +
      vrijednosti["x14"] +
      vrijednosti["x15"] +
      vrijednosti["x16"] +
      vrijednosti["x17"] +
      vrijednosti["x18"] +
      vrijednosti["x19"] +
      vrijednosti["x20"] +
      vrijednosti["x21"] +
      vrijednosti["x22"] +
      vrijednosti["x23"] +
      vrijednosti["x24"] +
      vrijednosti["x27"] +
      vrijednosti["x28"] +
      vrijednosti["x29"] +
      vrijednosti["x32"] -
      vrijednosti["x33"] -
      vrijednosti["x34"] -
      vrijednosti["x35"];

    console.log("postoji dobit");
    if (rezultat < 0) {
      gubitak = Math.abs(rezultat);
      dobit9 = 0;
      dobit12 = 0;
      dobit15 = 0;
      dobit = 0;
    } else {
      dobit = rezultat;
      gubitak = 0;
    }
  } else {
    rezultat =
      vrijednosti["x02"] +
      vrijednosti["x03"] -
      vrijednosti["x04"] -
      vrijednosti["x05"] +
      vrijednosti["x06"] -
      vrijednosti["x07"] -
      vrijednosti["x08"] -
      vrijednosti["x09"] -
      vrijednosti["x10"] -
      vrijednosti["x11"] -
      vrijednosti["x12"] -
      vrijednosti["x13"] -
      vrijednosti["x14"] -
      vrijednosti["x15"] -
      vrijednosti["x16"] -
      vrijednosti["x17"] -
      vrijednosti["x18"] -
      vrijednosti["x19"] -
      vrijednosti["x20"] -
      vrijednosti["x21"] -
      vrijednosti["x22"] -
      vrijednosti["x23"] -
      vrijednosti["x24"] -
      vrijednosti["x27"] -
      vrijednosti["x28"] -
      vrijednosti["x29"] -
      vrijednosti["x32"] +
      vrijednosti["x33"] +
      vrijednosti["x34"] +
      vrijednosti["x35"];
    console.log("postoji gubitak");

    if (rezultat < 0) {
      dobit = Math.abs(rezultat);
      gubitak = 0;
    } else {
      gubitak = rezultat;
      dobit = 0;
      dobit9 = 0;
      dobit12 = 0;
      dobit15 = 0;
    }
  }
  kapDob = vrijednosti["x03"];
  kapGub = vrijednosti["x04"];
  // gubPrethGod = vrijednosti["x38"];
  ostatakOporeziveDobiti = 0;
  ostatakOporeziveDobiti = dobit - vrijednosti["x38"];
  if (ostatakOporeziveDobiti < 100000) {
    dobit9 = (ostatakOporeziveDobiti * 9) / 100;
    dobit12 = 0;
    dobit15 = 0;
  }

  console.log("rezultatDobit ", rezultat);
  console.log("gubitak ", gubitak);
  console.log("dobit ", dobit);
  console.log("dobit9 je", dobit9, dobit15);
  console.log(vrijednosti["38"]);
  console.log(ostatakOporeziveDobiti);
  console.log(kapDob, kapGub);
}

// funkcija za izvoz xml-a
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

// kreira dropdown listu
for (const item of firme) {
  const option = document.createElement("option");
  option.value = item.ime;
  option.textContent = item.ime;
  select.appendChild(option);
}

// prelazak na enter na novo polje
form.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const fields = form.elements;
    let currentField = event.target;
    let index = Array.prototype.indexOf.call(fields, currentField);
    if (index !== -1 && index + 1 < fields.length) {
      fields[index + 1].focus();
    }
  }
});

// selektuje izabranu firmu
select.addEventListener("change", (event) => {
  const selectedIndex = event.target.selectedIndex;
  izabranaFirma = firme[selectedIndex];
  naziv = izabranaFirma.ime;
  pib = izabranaFirma.pib;
  adresa = izabranaFirma.adresa;
});

document.getElementById("proba").addEventListener("click", function () {
  let rezultatDobit =
    vrijednostiPolja["x01"] - vrijednostiPolja["x03"] + vrijednostiPolja["x04"];
  console.log(vrijednostiPolja);
  console.log(vrijednostiPolja["x36"]);
  console.log(typeof vrijednostiPolja["x03"]);
  console.log(rezultatDobit);
});

// kreira xml
document.getElementById("download-btn").addEventListener(
  "click",
  function () {
    var text = `<?xml version="1.0" encoding="utf-8"?>
    <PortalCitReturn2018 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
      <PIB>${pib}</PIB>
      <Godina>${godina}</Godina>
      <Od>2022-01-01T00:00:00</Od>
      <Do>2022-12-31T00:00:00</Do>
      <Izmijenjena>${Izmijenjena}</Izmijenjena>
      <Naziv>${izabranaFirma.ime}</Naziv>
      <Rezident>true</Rezident>
      <Adresa>${izabranaFirma.adresa}</Adresa>
      <OvlascenoLicePIB>${OvlascenoLicePIB}</OvlascenoLicePIB>
      <OvlascenoLicePrezimeIme>${OvlascenoLicePrezimeIme}</OvlascenoLicePrezimeIme>
      <KontaktEmail>${KontaktEmail}</KontaktEmail>
      <KontaktTelefon>${KontaktTelefon}</KontaktTelefon>
      <KonsOdobreno>ne</KonsOdobreno>
      <KonsDatumRjesenja xsi:nil="true" />
      <Iznos1>${vrijednostiPolja["x01"]}</Iznos1>
      <Iznos2>${vrijednostiPolja["x02"]}</Iznos2>
      <Iznos3>${vrijednostiPolja["x03"]}</Iznos3>
      <Iznos4>${vrijednostiPolja["x04"]}</Iznos4>
      <Iznos5>${vrijednostiPolja["x05"]}</Iznos5>
      <Iznos6>${vrijednostiPolja["x06"]}</Iznos6>
      <Iznos7>${vrijednostiPolja["x07"]}</Iznos7>
      <Iznos8>${vrijednostiPolja["x08"]}</Iznos8>
      <Iznos9>${vrijednostiPolja["x09"]}</Iznos9>
      <Iznos10>${vrijednostiPolja["x10"]}</Iznos10>
      <Iznos11>${vrijednostiPolja["x11"]}</Iznos11>
      <Iznos12>${vrijednostiPolja["x12"]}</Iznos12>
      <Iznos13>${vrijednostiPolja["x13"]}</Iznos13>
      <Iznos14>${vrijednostiPolja["x14"]}</Iznos14>
      <Iznos15>${vrijednostiPolja["x15"]}</Iznos15>
      <Iznos16>${vrijednostiPolja["x16"]}</Iznos16>
      <Iznos17>${vrijednostiPolja["x17"]}</Iznos17>
      <Iznos18>${vrijednostiPolja["x18"]}</Iznos18>
      <Iznos19>${vrijednostiPolja["x19"]}</Iznos19>
      <Iznos20>${vrijednostiPolja["x20"]}</Iznos20>
      <Iznos21>${vrijednostiPolja["x21"]}</Iznos21>
      <Iznos22>${vrijednostiPolja["x22"]}</Iznos22>
      <Iznos23>${vrijednostiPolja["x23"]}</Iznos23>
      <Iznos24>${vrijednostiPolja["x24"]}</Iznos24>
      <Iznos25>${vrijednostiPolja["x25"]}</Iznos25>
      <Iznos26>${vrijednostiPolja["x26"]}</Iznos26>
      <Iznos27>${vrijednostiPolja["x27"]}</Iznos27>
      <Iznos28>${vrijednostiPolja["x28"]}</Iznos28>
      <Iznos29>${vrijednostiPolja["x29"]}</Iznos29>
      <Iznos30>${vrijednostiPolja["x30"]}</Iznos30>
      <Iznos31>${vrijednostiPolja["x31"]}</Iznos31>
      <Iznos32>${vrijednostiPolja["x32"]}</Iznos32>
      <Iznos33>${vrijednostiPolja["x33"]}</Iznos33>
      <Iznos34>${vrijednostiPolja["x34"]}</Iznos34>
      <Iznos35>${vrijednostiPolja["x35"]}</Iznos35>
      <Iznos36>${dobit}</Iznos36>
      <Iznos37>${gubitak}</Iznos37>
      <Iznos38>${vrijednostiPolja["x38"]}</Iznos38>
      <Iznos39>${vrijednostiPolja["x39"]}</Iznos39>
      <Iznos40>${vrijednostiPolja["x40"]}</Iznos40>
      <Iznos41>${vrijednostiPolja["x41"]}</Iznos41>
      <Iznos42>${vrijednostiPolja["x42"]}</Iznos42>
      <Iznos43>${vrijednostiPolja["x43"]}</Iznos43>
      <Iznos44>${vrijednostiPolja["x44"]}</Iznos44>
      <Iznos45>${vrijednostiPolja["x45"]}</Iznos45>
      <Iznos46>${vrijednostiPolja["x46"]}</Iznos46>
      <Iznos47>${vrijednostiPolja["x47"]}</Iznos47>
      <Iznos48>${vrijednostiPolja["x48"]}</Iznos48>
      <Iznos49a>${vrijednostiPolja["x49a"]}</Iznos49a>
      <Iznos49b>${vrijednostiPolja["x49b"]}</Iznos49b>
      <Iznos49c>${vrijednostiPolja["x49c"]}</Iznos49c>
      <Iznos50>${vrijednostiPolja["x50"]}</Iznos50>
      <Iznos51>${vrijednostiPolja["x51"]}</Iznos51>
      <Iznos52>${vrijednostiPolja["x52"]}</Iznos52>
      <Iznos53>${vrijednostiPolja["x53"]}</Iznos53>
      <Iznos54>${vrijednostiPolja["x54"]}</Iznos54>
      <Iznos55>${vrijednostiPolja["x55"]}</Iznos55>
      <Iznos56>${vrijednostiPolja["x56"]}</Iznos56>
      <Iznos57>${vrijednostiPolja["x57"]}</Iznos57>
      <Iznos58>${vrijednostiPolja["x58"]}</Iznos58>
      <Iznos59>${vrijednostiPolja["x59"]}</Iznos59>
      <Iznos60>${vrijednostiPolja["x60"]}</Iznos60>
      <Iznos61>${vrijednostiPolja["x61"]}</Iznos61>
      <Iznos62>${vrijednostiPolja["x62"]}</Iznos62>
      <IznosPG1_1>0</IznosPG1_1>
      <IznosPG1_2>0</IznosPG1_2>
      <IznosPG1_21>0</IznosPG1_21>
      <IznosPG1_22>0</IznosPG1_22>
      <IznosPG1_23>0</IznosPG1_23>
      <IznosPG1_24>0</IznosPG1_24>
      <IznosPG1_25>0</IznosPG1_25>
      <IznosPG1_3>0</IznosPG1_3>
      <IznosPG2_1>0</IznosPG2_1>
      <IznosPG2_2>0</IznosPG2_2>
      <IznosPG2_21>0</IznosPG2_21>
      <IznosPG2_22>0</IznosPG2_22>
      <IznosPG2_23>0</IznosPG2_23>
      <IznosPG2_24>0</IznosPG2_24>
      <IznosPG2_25>0</IznosPG2_25>
      <IznosPG2_3>0</IznosPG2_3>
      <BrojDokumentaOrgId></BrojDokumentaOrgId>
      <BrojDokumentaRbr>0</BrojDokumentaRbr>
      <Akcija>new</Akcija>
      <Message>
        <Show>false</Show>
        <Message />
      </Message>
      <Error>
        <Show>false</Show>
        <Message />
      </Error>
    </PortalCitReturn2018>
    `;
    console.log(izabranaFirma.ime);
    //   var filename = document.getElementById("filename").value;
    var filename = `${izabranaFirma.ime}.xml`;
    download(filename, text);
  },
  false
);
