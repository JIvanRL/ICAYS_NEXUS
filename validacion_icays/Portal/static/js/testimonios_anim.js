document.addEventListener('DOMContentLoaded', function() {
    var testimonialsLeft = document.querySelectorAll('.testimonial-fadein-left');
    var testimonialsRight = document.querySelectorAll('.testimonial-fadein-right');
    
    // Remover la clase 'visible' inicialmente de todos los testimonios
    var allTestimonials = [...testimonialsLeft, ...testimonialsRight];
    allTestimonials.forEach(function(el) {
        el.classList.remove('visible');
    });
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('testimonial-fadein-left')) {
                    entry.target.classList.remove('testimonial-fadeout-left');
                }
                if (entry.target.classList.contains('testimonial-fadein-right')) {
                    entry.target.classList.remove('testimonial-fadeout-right');
                }
            } else {
                entry.target.classList.remove('visible');
                if (entry.target.classList.contains('testimonial-fadein-left')) {
                    entry.target.classList.add('testimonial-fadeout-left');
                }
                if (entry.target.classList.contains('testimonial-fadein-right')) {
                    entry.target.classList.add('testimonial-fadeout-right');
                }
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    
    testimonialsLeft.forEach(function(el) {
        observer.observe(el);
    });
    testimonialsRight.forEach(function(el) {
        observer.observe(el);
    });
});
