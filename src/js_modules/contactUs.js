// export default function contactus(contentDiv){
//     console.log("contact e os carai")
//     contentDiv.textContent=""

    

    
// }

// contactus.js
export default function contactus(contentDiv) {
    console.log("Simple Contact Us page loaded");
    contentDiv.textContent = ""; // Clears any existing content in the div

    // Create the main container for the contact page
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contentDiv.appendChild(contactContainer);

    // --- Contact Header ---
    const contactHeader = document.createElement("h2");
    contactHeader.classList.add("contact-header");
    contactHeader.textContent = "Get in Touch";
    contactContainer.appendChild(contactHeader);

    // --- Contact Info Section ---
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info-simple"); // A new class for simple info section
    contactContainer.appendChild(contactInfo);

    const address = document.createElement("p");
    address.innerHTML = "<strong>Address:</strong> 123 Best Restaurant Street, São Paulo, State, 1205";
    contactInfo.appendChild(address);

    const phone = document.createElement("p");
    phone.innerHTML = "<strong>Phone:</strong> (555) 123-4567";
    contactInfo.appendChild(phone);

    const email = document.createElement("p");
    email.innerHTML = "<strong>Email:</strong> oh@oftheboroguedeid.com";
    contactInfo.appendChild(email);

    const hours = document.createElement("p");
    hours.innerHTML = "<strong>Hours:</strong> Mon - Fri: 9:00 AM - 9:00 PM | Sat - Sun: 10:00 AM - 10:00 PM";
    contactInfo.appendChild(hours);
}