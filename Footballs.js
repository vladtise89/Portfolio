const balls = [
  {
    id: 1,
    year: "1930",
    images: "./img/footballs/1930 ball.jpg",
    description:
      "The Tiento (pictured above) was one of the two match balls at the inaugural World Cup in 1930. At the time, there was no official ball, let alone a rule about who would supply it. The finalists, Argentina and Uruguay, ended up bringing their own balls to the deciding game.",
  },
  {
    id: 2,
    year: "1934",
    images: "./img/footballs/1934 ball.jpg",
    description:
      "Made in Rome, the Federale 102 bore an interesting resemblance to a rugby ball with its brown cowhide and 13 polygonal panels.",
  },
  {
    id: 3,
    year: "1938",
    images: "./img/footballs/1938 ball.jpg",
    description:
      "The Allen ball was very similar to the Federale 102. Made by Allen, a Paris-based manufacturer, it was made of brown cowhide and consisted of 13 panels.",
  },
  {
    id: 4,
    year: "1950",
    images: "./img/footballs/1950 ball.jpg",
    description:
      "The Duplo T came to replace previous balls whose hand-sewn laces were reminiscent of their rugby counterparts. Sometimes referred to as the Superball (the name of the manufacturer), the Duplo T was the first match ball to have lace-less construction on its brown cowhide outer facing, which had with 12 identical panels.",
  },
  {
    id: 5,
    year: "1954",
    images: "./img/footballs/1954 ball.jpg",
    description:
      "Made by a company based in Basel, Kost Sports, the Swiss World Champion featured 18 panels instead of the usual 13. It was bright yellow rather than the traditional dark brown.",
  },
  {
    id: 6,
    year: "1958",
    images: "./img/footballs/1958 ball.jpg",
    description:
      "The Top Star, designed by Sydsvenska Lader & Remfabriks Manufacturing, was selected from 102 unbranded candidate balls that were blind tested by four FIFA officials.",
  },
  {
    id: 7,
    year: "1962",
    images: "./img/footballs/1962 ball.jpg",
    description:
      "The Chilean ball was not universally well received, with even referee Ken Aston unimpressed by it. The ball’s major defect was that it became heavier as water seeped in through its seams.",
  },
  {
    id: 8,
    year: "1966",
    images: "./img/footballs/1966 ball.jpg",
    description:
      "The 1966 World Cup in England was the last edition where the host country supplied the match ball. After careful deliberation, the English Football Association chose Slazenger's Challenge 4-Star – an 18-panel ball available in orange and yellow.",
  },
  {
    id: 9,
    year: "1970",
    images: "./img/footballs/1970 ball.jpg",
    description:
      "The Telstar’s enticing design of 32 black-and-white panels make it one of the most iconic of all time.",
  },
  {
    id: 10,
    year: "1974",
    images: "./img/footballs/1974 ball.jpg",
    description:
      "The Telstar Durlast was an improved version of the original Telstar from 1970. The Telstar Durlast was the first official match ball to not only carry its name and logo but also have a polyurethane waterproof coating.",
  },
  {
    id: 11,
    year: "1978",
    images: "./img/footballs/1978 ball.jpg",
    description:
      "A ball with 20 hexagonal hand-stitched panels, the Tango was expensive for its time. Nevertheless, it became extremely popular and was even used as the official match ball at UEFA European Championships.",
  },
  {
    id: 12,
    year: "1982",
    images: "./img/footballs/1982 ball.jpg",
    description:
      "Thanks to the popularity of its predecessors, the Tango Espana only needed minor tweaks such as better waterproofing, with the seams rubberised to prevent the ball becoming heavier due to water ingress. However, the changes were not sustainable as new balls had to be supplied when the seams were damaged. Moreover, the Tango Espana marked the end of an era for the leather ball.",
  },
  {
    id: 13,
    year: "1986",
    images: "./img/footballs/1986 ball.jpg",
    description:
      "For the first time, adidas produced a 100 per cent synthetic ball featuring detailed patterns of the Aztec culture. It also holds a unique place in World Cup history as the ball that Diego Maradona punched over England goalkeeper Peter Shilton for the infamous 'Hand of God' goal.",
  },
  {
    id: 14,
    year: "1990",
    images: "./img/footballs/1990 ball.jpg",
    description:
      "The Etrusco Unico was inspired by the host nation’s culture: the ball features triangular triads with lion heads reminiscent of Etruscan art. Perhaps those lion heads intimidated the strikers taking part as this World Cup witnessed the lowest goals-per-game average in World Cup history.",
  },
  {
    id: 15,
    year: "1994",
    images: "./img/footballs/1994 ball.jpg",
    description:
      "The artwork on the Questra commemorated the 25th anniversary of the moon landing. Constructed from five different materials including a polystyrene foam, adidas made the ball more waterproof, lighter, softer and more responsive. Since it felt softer to the touch and easier to control, the Questra helped accelerate the speed of games. ",
  },
  {
    id: 16,
    year: "1998",
    images: "./img/footballs/1998 ball.jpg",
    description:
      "The Tricolore was the first ball to feature a multi-coloured design, boasting red, blue and white colours to match the French flag. Tricolore was also the first Adidas World Cup match ball manufactured outside of Europe (made in Morocco & Indonesia) since the 1970 Adidas Telstar. 'Tricolore' means 'three-colored' in French.",
  },
  {
    id: 17,
    year: "2002",
    images: "./img/footballs/2002 ball.jpg",
    description:
      "adidas finally ditched the Tango design in 2002 and the resulting Fevernova had a very light feel.",
  },
  {
    id: 18,
    year: "2006",
    images: "./img/footballs/2006 ball.jpg",
    description:
      "The Teamgeist consisted of 14 thermally bonded – as opposed to stitched – panels with a harmonious combination of pentagonal and hexagonal patterns as well as rectangular shapes. In the view of many players, its softer touch and rounder design led to much more accurate shots",
  },
  {
    id: 19,
    year: "2010",
    images: "./img/footballs/2010 ball.jpg",
    description:
      "The Jabulani was heavily criticised for the way it changed trajectory in the air, making long-distance shots highly unpredictable. On the other hand, some players claimed the Jabulani’s ‘Grip ‘n’ Groove’ technology enabled keepers to make better contact with the ball.",
  },
  {
    id: 20,
    year: "2014",
    images: "./img/footballs/2014 ball.jpg",
    description:
      "It was Brazilian football fans who named the official match ball of the 2014 World Cup. The name Brazuca is an informal local term which means Brazilian or is used to describe the Brazilian way of life. ",
  },
  {
    id: 21,
    year: "2018",
    images: "./img/footballs/2018 ball.jpg",
    description:
      "Telstar 18 was used throughout the group stage and the red-coloured Telstar Mechta replaced it for the knockout stage. Mechta translates as “dream” or “ambition” in Russian.",
  },
  {
    id: 22,
    year: "2022",
    images: "./img/footballs/2022 ball.jpg",
    description:
      "The official match ball for Qatar 2022 is Al Rihla, which means “the journey” in Arabic. Made exclusively with water-based inks and glues, Al Rihla is one of the most environmentally-friendly World Cup balls.",
  },
];

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const slideImages = document.querySelector("#slideImages");

const length = balls.length;

let slideNumber = 1;

const displayProducts = (balls) => {
  slideImages.innerHTML = balls
    .map(
      (ball) =>
        `
      <div class="imageSlide" >
      <span class="imgYear">${ball.year}</span>

      <img src="${ball.images}" class="imgBall"  alt="World Cup Balls">
  
      <div class="imgDesc">${ball.description}</div>
  
      </div>
      `
    )
    .join("");
};
displayProducts(balls);

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 500}px)`;
  slideNumber++;
};
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 500}px)`;
  slideNumber--;
};

const firstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};
const lastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 500}px)`;
  slideNumber = length;
};

right.addEventListener("click", () => {
  if (slideNumber < length) {
    nextSlide();
  } else {
    firstSlide();
  }
});

left.addEventListener("click", () => {
  if (slideNumber > 1) {
    prevSlide();
  } else {
    lastSlide();
  }
});

//trophies
var img = document.createElement("img");
img.src = "./img/Old trophy.jpg";
var src = document.getElementById("old-worldcup-trophy");
src.appendChild(img);

var img = document.createElement("img");
img.src = "./img/New trophy.jpg";
var src = document.getElementById("new-worldcup-trophy");
src.appendChild(img);
