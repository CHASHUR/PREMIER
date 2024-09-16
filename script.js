document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader-wrapper');
    const mainContent = document.getElementById('main-content');
    const progress = document.querySelector('.progress');

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            finishLoading();
        } else {
            width += 0.85; 
            progress.style.width = width + '%';
        }
    }, 10); 

    function finishLoading() {
        gsap.to(loader, {
            opacity: 0,
            duration: 0.3, 
            onComplete: () => {
                loader.style.display = 'none';
                document.body.classList.add('loaded');
                mainContent.style.opacity = 1;
                
            }
        });
    }
});


