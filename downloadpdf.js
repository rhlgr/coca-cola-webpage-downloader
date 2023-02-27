const download =  document.getElementById("download");
const webpage = document.getElementById("webpage");

window.onload = function () {
  download.addEventListener("click",()=>{
      var opt = {
          margin:       1,
          filename:     'myfile.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        
        html2pdf().from(webpage).set(opt).save();
    });
};