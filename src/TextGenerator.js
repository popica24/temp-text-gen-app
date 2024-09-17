export default function GenerateText({
    numeEntry,
    prenumeEntry,
    serieCIEntry,
    numarCIEntry,
    ciValabilDeLaEntry,
    ciValabilPanaLaEntry,
    cnpEntry,
    adresaEntry,
    judetEntry,
    telefonEntry
  }) {
    return `function waitForFilesAndValidate() {
    const fileInputs = [
      document.getElementById("document_input_1"),
      document.getElementById("document_input_2"),
      document.getElementById("document_input_3"),
      document.getElementById("document_input_4")
    ];
  
    const interval = setInterval(() => {
      const allFilesSelected = fileInputs.every(input => input.files.length > 0);
        
      if (allFilesSelected) {
        clearInterval(interval); 
        document.getElementById("validate-step3").click(); 
      }
    }, 500); 
  }

document.getElementById("AdresaEmail").value = "stoicatibi3@gmail.com"
document.getElementById("ConfirmareAdresaEmail").value = "stoicatibi3@gmail.com"
setTimeout(function(){ 
    document.getElementById("validate-step1").click() 
}, 100);

${numeEntry}
${prenumeEntry}
${serieCIEntry}
${numarCIEntry}
${ciValabilDeLaEntry}
${ciValabilPanaLaEntry}
${cnpEntry}
${adresaEntry}
${judetEntry}
${telefonEntry}

setTimeout(function(){ 
    document.getElementById("validate-step2").click() 
}, 500);

document.getElementById("document_1").click()

document.getElementById("document_2").click()

document.getElementById("document_3").click()

document.getElementById("document_4").click()

waitForFilesAndValidate()

$("#validate-step3").on('click', function(event){

document.getElementById("CheckDeAcord2").checked = true;
document.getElementById("CheckDeAcord4").checked = true;
document.getElementById("CheckDeAcord3").checked = true;
document.getElementById("CheckDeAcord").checked = true;    
$("#validate-step4").prop('disabled', false);
})`
  }
  