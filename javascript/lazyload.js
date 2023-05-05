
// lazy load the cards

const cards = document.querySelectorAll('.card');

const cardOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -125px 0px'
};

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;
    }
    else
    {
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add('transition', 'fade-in-card');
        cardObserver.unobserve(entry.target);
    }
  });
}, cardOptions);

cards.forEach(card => {
  cardObserver.observe(card);
});

// Lazy load the images
const images = document.querySelectorAll("[data-src]");

const imgOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -125px 0px"
}

function preLoadImage(img)
{
    const src = img.getAttribute("data-src");
    if (!src)
    {
        console.log("no source found!")
        return;
    }

    img.src = src;

    // Add transition from the placeholder to the real image
    img.addEventListener('load', () => {
        console.log("Loading Image!")
        img.classList.add('transition', 'fade-in');
        img.classList.remove('opacity-0');
        });
    
        // Remove the data-src attribute to avoid loading the image again
        img.removeAttribute('data-src');
        // Stop Observing the image once loaded.
        ImageObserver.unobserve(img);
}

const ImageObserver = new IntersectionObserver((entries, ImageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting)
        {
            return;
        }
        else
        {
            preLoadImage(entry.target);
            ImageObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image =>{
   ImageObserver.observe(image); 
})