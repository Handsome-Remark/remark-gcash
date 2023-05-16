//side menu for menu and//
const menuButton = document.querySelector('.menu-button');
const slideInMenu = document.querySelector('.slide-in-menu');
const buttonMenu = document.querySelector('.button-menu');
const menuSlide = document.querySelector('.menu-slide');
const backHomeButton = document.querySelector('.back-home-button');
const backButton = document.querySelector('.back-button');
menuButton.addEventListener('click', () => {
 slideInMenu.classList.toggle('open');
});

buttonMenu.addEventListener('click', () => {
 menuSlide.classList.toggle('open');
});

backHomeButton.addEventListener('click', () => {
    slideInMenu.classList.remove('open');
});

backButton.addEventListener('click', () => {
    menuSlide.classList.remove('open');
});

//modal
var modal = document.getElementById("send-money-modal");
var btn = document.getElementById("send-money-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal = document.getElementById("send-money-modal");
var btn = document.getElementById("send-money-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const expressSendButton = document.querySelector('.express-send-button');
const sendModal = document.getElementById('send-modal');
const sendModalClose = sendModal.querySelector('.close');

expressSendButton.addEventListener('click', () => {
  sendModal.style.display = 'block';
});

sendModalClose.addEventListener('click', () => {
  sendModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == sendModal) {
    sendModal.style.display = 'none';
  }
});

function openNextModal() {
  var recipient = document.getElementById("recipient").value;
  var amount = document.getElementById("amount").value;
  var message = document.getElementById("message").value;

  if (recipient.trim() === "") {
    alert("Please enter a recipient name.");
    return;
  }
  if (amount.trim() === "" || isNaN(amount)) {
    alert("Please enter a valid amount in PHP.");
    return;
  }
  
  var nextModal = document.getElementById("next-modal");
  nextModal.style.display = "block";
}

function confirmTransaction() {
  // Display success message
  alert("Transaction successfully!");

  // Close the modal
  var nextModal = document.getElementById("next-modal");
  nextModal.style.display = "none";
}
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  const scanQRCodeBtn = document.getElementById('scan-qrcode-btn');
  scanQRCodeBtn.addEventListener('click', function() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(function(stream) {
        // video element to show the camera stream
        const video = document.createElement('video');
        video.setAttribute('autoplay', '');
        video.setAttribute('playsinline', '');
        video.style.display = 'none';
        document.body.appendChild(video);

        // Attach camera stream to the video element
        video.srcObject = stream;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        function scanQRCode() {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          context.drawImage(video, 0, 0, canvas.width, canvas.height);

        
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

          
          const code = jsQR(imageData.data, imageData.width, imageData.height);

         
          if (code) {
            console.log('Scanned QR code:', code.data);
            stream.getTracks().forEach(track => track.stop());
            video.remove();
            canvas.remove();
          } else {
            requestAnimationFrame(scanQRCode);
          }
        }
        scanQRCode();
      })
      .catch(function(error) {
        console.error('Error accessing camera:', error);
      });
  });
});