let slideshows = document.getElementsByClassName("slideshow");

for (let j = 0; j < slideshows.length; j++) {
    let slideIndex = 0;
    showSlides(j); // Pass the index of the slideshow

    function showSlides(index) {
        let i;
        let slides = slideshows[index].getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "flex";
        setTimeout(function() {
            showSlides(index);
        }, 5000); // Change image every 5 seconds
    }
}

function openLink(target){
    let linkLocation = target.getAttribute("href");
    window.location.href = linkLocation;
}

function discordDialog(){
    alert('You can find me under the name `LifelessNerd`');
}

function toAbout(){
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}