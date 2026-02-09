Prana Roots | Holistic Healing Web Portal
Prana Roots is a premium, responsive landing page designed for Healer J. Depa (M.D. Acu). The site serves as a digital gateway for patients seeking non-invasive, drug-free healing through ancient wisdom and modern acupuncture techniques.

🌿 Project Overview
The website is built with a "Glassmorphism" aesthetic, utilizing soft greens, gold accents, and organic shapes to evoke a sense of calm and wellness. It features a fully functional appointment request system and a showcase of various specialized therapies.

Key Features

Responsive Design: Fully optimized for desktop, tablet, and mobile devices.

Glassmorphism UI: Modern interface using backdrop filters and soft shadows for a clean, professional look.

Appointment Booking: A dynamic form that integrates with EmailJS to send booking requests directly to the practitioner.

Input Validation: The booking system automatically restricts appointments to weekdays (Monday–Friday) to align with clinic hours.

Scroll Animations: Uses the Intersection Observer API for elegant fade-in effects as the user explores the page.

🛠️ Built With
HTML5 & CSS3: Custom styles including CSS Variables, Flexbox, Grid, and Keyframe animations.

JavaScript (Vanilla): Logic for scroll animations and form handling.

EmailJS: For client-side email dispatch without the need for a backend server.

Google Fonts: Cormorant Garamond (Serif) and Montserrat (Sans-serif).

FontAwesome: For professional iconography.

📂 File Structure
Plaintext
├── index.html      # Main structure and content
├── styles.css      # Custom styling and animations
├── script.js      # EmailJS integration and scroll logic
└── moms-photo.jpeg # Clinic logo / Profile imagery
🚀 Setup & Installation
To run this project locally or deploy it:

Clone the repository:

Bash
git clone https://github.com/your-username/prana-roots.git
Configure EmailJS: To make the booking form functional, update the following keys in script.js with your own EmailJS credentials:

emailjs.init("YOUR_PUBLIC_KEY")

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", ...)

Launch: Simply open index.html in any modern web browser or use a "Live Server" extension in VS Code.

🩺 About the Practitioner
Healer J. Depa (M.D. Acu) is a certified expert holding a Master Diploma in Acupuncture from Bharat Sevak Samaj (Govt. of India). The clinic specializes in:

Pulse Diagnosis (Nadi Pariksha)

Chromotherapy & Magnetic Therapy

Acupuncture & Auricular Therapy

Bach Flower Remedies

📄 License
This project was designed for Prana Roots. All rights reserved.
