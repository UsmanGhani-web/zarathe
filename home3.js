const testimonials = [
    {
      quote: "Michelle listens and provides excellent guidance through life's situations.",
      name: "Michelle Wilkinson (MA, LPC-S)",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "David helped me regain confidence and improve my daily habits.",
      name: "David Smith (PhD, Therapist)",
      image: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
      quote: "Lisa's sessions are practical, warm, and really insightful.",
      name: "Lisa Thompson (LMFT)",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];
  
  function showTestimonial(index) {
    const quoteBox = document.getElementById("quote");
    const testimonialBox = document.getElementById("testimonial");
  
    quoteBox.style.opacity = 0;
    testimonialBox.style.opacity = 0;
  
    setTimeout(() => {
      quoteBox.innerHTML = `<p>“${testimonials[index].quote}”</p>`;
      testimonialBox.innerHTML = `
        <img src="${testimonials[index].image}" alt="Doctor">
        <p><strong>${testimonials[index].name}</strong></p>
      `;
  
      const dots = document.querySelectorAll(".dot");
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
  
      quoteBox.style.opacity = 1;
      testimonialBox.style.opacity = 1;
    }, 500);
  }
  
  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 8000);




