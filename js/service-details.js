const learnMoreLinks = document.querySelectorAll('.learn-more');

learnMoreLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const serviceName = link.id.split('-')[0] + '-' + link.id.split('-')[1];

        const url = `src/services-details/${serviceName}-section.html`;

        loadServiceDetails(url);
    });
});

function loadServiceDetails(url) {
    fetch(`./${url}`)
        .then(response => response.text())
        .then(html => {

            const serviceDetails = document.getElementById('service-details');
            serviceDetails.innerHTML = html;

            const offsetTop = serviceDetails.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            if (window.innerWidth > 992) {
                const showcaseClientSection = document.getElementById('showcase-client-section');
                showcaseClientSection.style.marginTop = '-10%';
                showcaseClientSection.style.paddingBottom = '10px';

                serviceDetails.style.paddingBottomBottom = '-100px';
            }
        });
}