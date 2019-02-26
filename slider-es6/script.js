const sliderData = [
  {
    img: "http://localhost:8888/IMAGES/tech-time/typewriter.jpg",
    name: "The Avengers",
    desc: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity."
  },
  {
    img: "http://localhost:8888/IMAGES/tech-time/camera-old.jpg",
    name: "Iron Man",
    desc: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
  },
  {
    img: "http://localhost:8888/IMAGES/tech-time/camera-photo.jpg",
    name: "Thor",
    desc: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
  },
  {
    img: "http://localhost:8888/IMAGES/tech-time/camera.jpg",
    name: "Guardians of the Galaxy",
    desc: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe."
  },
  {
    img: "http://localhost:8888/IMAGES/tech-time/technology.jpg",
    name: "Doctor Strange",
    desc: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts."
  }

];



for (let i = 0; i < sliderData.length; i++) {
  const slider = document.querySelector(".slider");
  const {img, name, desc} = sliderData[i];
  const slideData = `
    <div class="slide hide" data-slide="slide-${i}">
        <div class="slide-image fade-in" 
           style="background-image:url('${img}'); 
                  filter: grayscale(100%);
                  width: 100%;
                  height: 100vh;
                  background-position: center;
                  background-size: cover;
                  background-repeat: no-repeat;             
                  "  >           
        </div>
        <div class="slide-caption">
                <div class="slide-caption-content slide-top">
                  <div class="title-bg">
                    <h1>${name}</h1>
                  </div>
                  <p>${desc}</p>
                </div>
        </div>
    </div>
    
  `;
  slider.innerHTML += slideData;
}

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let intervalTime = 3000;

const slideInterval = setInterval(() => {
    
    slides[currentSlide].classList.remove("visible");    
    currentSlide = (currentSlide + 1);
    currentSlide == sliderData.length ? currentSlide = 0 : currentSlide;

 // currentSlide = currentSlide < slides.length ? currentSlide++  : currentSlide = 0;
  
  slides[currentSlide].classList.add("visible");
  
},  intervalTime);

/*




*/