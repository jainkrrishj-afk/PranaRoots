// --- 1. EMAIL SETUP ---
// Find "Public Key" in EmailJS > Account
(function() {
    emailjs.init("xSYyd1UAnwH1fWWV6"); 
})();

// --- 2. SCROLL ANIMATIONS ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); 
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// --- 3. BOOKING LOGIC ---
const dateInput = document.getElementById('clientDate');
const form = document.getElementById('bookingForm');
const statusMsg = document.getElementById('statusMessage');
const submitBtn = document.getElementById('submitBtn');

// Restrict to Mon-Fri (Monday = 1, Friday = 5)
dateInput.addEventListener('input', function(e) {
    const day = new Date(this.value).getUTCDay();
    // 0 is Sunday, 6 is Saturday
    if([6, 0].includes(day)) {
        e.preventDefault();
        this.value = '';
        alert('We are available Monday to Friday only.');
    }
});

// Handle Form Submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Loading State
    submitBtn.innerText = "Sending Request...";
    submitBtn.style.background = "#6B8E23"; 

    // Data for Email
    const templateParams = {
        from_name: document.getElementById('clientName').value,
        phone_number: document.getElementById('clientPhone').value,
        date: document.getElementById('clientDate').value,
        time: document.getElementById('clientTime').value
    };

    // SEND EMAIL
    // Replace SERVICE ID and TEMPLATE ID below
    emailjs.send("service_03cmhtk", "template_cwovvnr", templateParams)
        .then(function() {
            // Success Message
            statusMsg.innerHTML = `
                <div style="background-color: #d1e7dd; color: #0f5132; padding: 15px; border-radius: 5px; margin-top: 20px; font-weight: 500;">
                    ✅ <strong>Request Sent!</strong><br>
                    Dr. Depa has received your details. Please wait for a confirmation call.
                </div>
            `;
            form.reset();
            submitBtn.innerText = "Confirm Booking";
            submitBtn.style.background = "#2D4F38";
        }, function(error) {
            // Error Message
            console.log('FAILED...', error);
            statusMsg.innerHTML = `<p style="color: red; margin-top:10px;">Network error. Please call 8939893927 directly.</p>`;
            submitBtn.innerText = "Try Again";
        });
});