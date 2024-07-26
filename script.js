function displayMindright() {
            document.getElementById('about').style.display = 'block';
            document.getElementById('certification').style.display = 'none';
            document.getElementById('services').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
            document.getElementById('CBT').style.display = 'none';
            document.getElementById('aboutme').style.display = 'none';
        }

        function displayCertified() {
            document.getElementById('certification').style.display = 'block';
            document.getElementById('about').style.display = 'none';
            document.getElementById('services').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
            document.getElementById('CBT').style.display = 'none';
            document.getElementById('aboutme').style.display = 'none';
        }

        function displayServices() {
            document.getElementById('services').style.display = 'block';
            document.getElementById('about').style.display = 'none';
            document.getElementById('certification').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
            document.getElementById('CBT').style.display = 'none';
            document.getElementById('aboutme').style.display = 'none';
        }

function displayAboutme() {
            document.getElementById('aboutme').style.display = 'block';
            document.getElementById('about').style.display = 'none';
            document.getElementById('certification').style.display = 'none';
            document.getElementById('services').style.display = 'none';
            document.getElementById('CBT').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
        }


function displayCBT() {
            document.getElementById('CBT').style.display = 'block';
            document.getElementById('contact').style.display = 'none';
            document.getElementById('about').style.display = 'none';
            document.getElementById('certification').style.display = 'none';
            document.getElementById('services').style.display = 'none';
            document.getElementById('aboutme').style.display = 'none';
        }

        function displayContactme() {
            document.getElementById('contact').style.display = 'block';
            document.getElementById('about').style.display = 'none';
            document.getElementById('certification').style.display = 'none';
            document.getElementById('services').style.display = 'none';
            document.getElementById('CBT').style.display = 'none';
            document.getElementById('aboutme').style.display = 'none';
        }

function enlargeImage(img) {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 0.3s ease';
}

function resetImage(img) {
    img.style.transform = 'scale(1)';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you within 48 hours.');
    this.reset();
});