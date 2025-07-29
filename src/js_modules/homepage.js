export default function createHomePage(contentDivReal){
    
    contentDivReal.textContent=""

    const contentDiv=document.createElement("div")
    contentDivReal.appendChild(contentDiv)
    contentDiv.classList.add("home-container");

    const contentTitle = document.createElement("div");
    contentTitle.textContent = "Traditional Brazilian Cuisine since 1969";
    contentTitle.classList.add("home-title");
    contentDiv.appendChild(contentTitle);
    
    const about = document.createElement("div");
    about.textContent = "About Us: O do Borogodó";
    about.classList.add("home-section-title");
    contentDiv.appendChild(about);
    
    const aboutContent = document.createElement("div");
    aboutContent.textContent = "Welcome to O do Borogodó, where the soul of traditional Brazilian cuisine comes alive in every dish! Located in the vibrant heart of São Paulo, our restaurant was born from a deep love for Brazil's culinary roots and a desire to share this passion with you.";
    aboutContent.classList.add("home-paragraph");
    contentDiv.appendChild(aboutContent);
    
    const essence = document.createElement("div");
    essence.textContent = "Our Essence: Tradition and Flavor";
    essence.classList.add("home-section-title");
    contentDiv.appendChild(essence);
    
    const essenceContent = document.createElement("div");
    essenceContent.textContent = "Here at O do Borogodó, we believe food is more than sustenance—it's a celebration, a memory, and a connection. We delve into recipes passed down through generations, from the remote corners of the Northeast to the fresh tastes of the South, to bring the most authentic and comforting flavors of our country to your table. Every ingredient is meticulously selected, prioritizing local producers and fresh seasonal ingredients, ensuring not only an unmistakable taste but also sustainability at every step.";
    essenceContent.classList.add("home-paragraph");
    contentDiv.appendChild(essenceContent);
    
    const brazilianHome = document.createElement("div");
    brazilianHome.textContent = "A Brazilian Home Atmosphere";
    brazilianHome.classList.add("home-section-title");
    contentDiv.appendChild(brazilianHome);
    
    const brazilianHomeContent = document.createElement("div");
    brazilianHomeContent.textContent = "As you step through our doors, you'll be transported to a space that evokes the warmth and hospitality of Brazilian homes. Our decor blends rustic, charming elements with touches of folk art and native botanicals, creating a cozy and vibrant atmosphere. Whether it's for a relaxed family lunch, a romantic candlelit dinner, or a lively gathering with friends, O do Borogodó is the perfect haven for anyone seeking a genuine and memorable gastronomic experience.";
    brazilianHomeContent.classList.add("home-paragraph");
    contentDiv.appendChild(brazilianHomeContent);
    
    const experience = document.createElement("div");
    experience.textContent = "The Borogodó Experience";
    experience.classList.add("home-section-title");
    contentDiv.appendChild(experience);
    
    const experienceContent = document.createElement("div");
    experienceContent.textContent = 'Our team is dedicated to providing not just a meal, but a true sensory journey. From the inviting aroma of the kitchen to the laughter echoing through the dining room, we want every visit to be a moment of joy and discovery. We invite you to sit back, relax, and let the flavors of Brazil tell their stories. Come visit us and discover the true "borogodó" of traditional Brazilian cuisine!';
    experienceContent.classList.add("home-paragraph");
    contentDiv.appendChild(experienceContent);
}
