function generateQRCode() {
  const url = document.getElementById('urlInput').value.trim();
  const qrImage = document.getElementById('qrImage');

  if (!url) {
    alert("Please enter a URL!");
    return;
  }

  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
  qrImage.src = apiUrl;
  qrImage.style.display = 'block';
}
