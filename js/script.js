// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Document loaded and ready.");

    // Animasi fade-in untuk elemen-elemen utama
    const mainElements = document.querySelectorAll('main > *');
    mainElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Animasi hover untuk section
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.02)';
            section.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)';
            section.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Animasi typing untuk header
    const headerText = document.querySelector('header h1');
    const text = headerText.textContent;
    headerText.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            headerText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    typeWriter();

    // Animasi scroll reveal untuk gambar klien
    const clientImages = document.querySelectorAll('#clients img');
    const revealImage = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    const imageObserver = new IntersectionObserver(revealImage, { threshold: 0.5 });
    clientImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(50px)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        imageObserver.observe(img);
    });

    // Animasi pulsing untuk footer
    const footer = document.querySelector('footer');
    setInterval(() => {
        footer.style.transform = 'scale(1.05)';
        setTimeout(() => {
            footer.style.transform = 'scale(1)';
        }, 200);
    }, 5000);
});