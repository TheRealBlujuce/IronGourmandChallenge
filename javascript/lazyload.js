const images = document.querySelectorAll("[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
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
        img.classList.add('fade-in');
        });
    
        // Remove the data-src attribute to avoid loading the image again
        img.removeAttribute('data-src');
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