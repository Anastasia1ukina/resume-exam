document.getElementById('download-btn').addEventListener('click', function () {
  var element = document.getElementById('app');
  html2pdf()
    .set({
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    })
    .from(element)
    .save();
});
