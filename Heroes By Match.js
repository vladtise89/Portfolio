let players = [
  {
    name: "Just Fontaine",
    match: "France vs West Germany",
    year: "World Cup 1958",
    picture: "./img/Heroes Fontaine.jpg.avif",
    description:
      "He will best be remembered for his 1958 FIFA World Cup performance, where he scored 13 goals in just six matches – a feat that included putting four past defending champions West Germany in the third place play-off. ",
  },
  {
    name: "Garrincha",
    match: "Brazil vs Chile",
    year: "World Cup 1962",
    picture: "./img/Heroes Garrincha.jpg",
    description:
      "He scored two goals in the semi-final against the hosts, Chile, as Brazil went on to win 4–2. His first goal was a 20-yard left-foot shot; the second one, a header. A subsequent headline in the Chilean newspaper El Mercurio read: 'What planet is Garrincha from?' Garrincha was sent off in that match after 83 minutes for retaliating after being continually fouled. However, he was not suspended for the following match.",
  },
  {
    name: "Geoff Hurst",
    match: "England vs West Germany",
    year: "World Cup 1966",
    picture: "./img/Heroes Hurst.jpg",
    description:
      "The match is remembered for England's only World Cup and first major international title, Geoff Hurst's hat-trick – the first scored in a FIFA World Cup final – and the controversial third goal awarded to England by referee Gottfried Dienst and linesman Tofiq Bahramov. The England team became known as the 'wingless wonders', on account of their then-unconventional narrow attacking formation, described at the time as a 4–4–2.",
  },
  {
    name: "Pelé",
    match: "Brazil vs Italy",
    year: "World Cup 1970",
    picture: "./img/Heroes Pele.jpg",
    description:
      "Brazil played Italy in the final at the Azteca Stadium in Mexico City.[90] Pelé scored the opening goal with a header after out jumping Italian defender Tarcisio Burgnich. Brazil's 100th World Cup goal, Pelé's leap of joy into the arms of teammate Jairzinho in celebrating the goal is regarded as one of the most iconic moments in World Cup history.[91] He then made assists for Brazil's third goal, scored by Jairzinho, and the fourth finished by Carlos Alberto. The last goal of the game is often considered the greatest team goal of all time because it involved all but two of the team's outfield players.",
  },
  {
    name: "Gerd Muller",
    match: "Germany vs Netherlands",
    year: "World Cup 1974",
    picture: "./img/Heroes Muller.jpg",
    description:
      "Müller’s uncertain place in the pantheon makes a little more sense when one considers the single moment that defines his career: the winning goal in the 1974 World Cup final. On first viewing, it is all function over form, an act of close-range opportunism. But look again at that balance as he traps, swivels and threads elegantly into the far corner. What first appears scruffy reveals itself as a moment of pure balletic grace. Most players would have simply fallen backwards, clunk, on their arse. Not bad for a short fat man. Perhaps the greatest winner in any World Cup final.",
  },
  {
    name: "Paolo Rossi",
    match: "Italy vs Brazil",
    year: "World Cup 1982",
    picture: "./img/Heroes Rossi.jpg",
    description:
      "Paolo Rossi was an Italian professional footballer who played as a forward. He led Italy to the 1982 FIFA World Cup title, scoring six goals to win the Golden Boot as top goalscorer, and the Golden Ball for the player of the tournament. The match was won by Italy 3–2, with Italian striker Paolo Rossi scoring a hat-trick. The result eliminated Brazil from the tournament while Italy would go on to win it. The match has been described as one of the greatest in the history of association football.",
  },
  {
    name: "Diego Maradona",
    match: "Argentina vs Columbia",
    year: "World Cup 1986",
    picture: "./img/Heroes Maradona.jpg",
    description:
      "Four minutes after the Hand of God goal came a 2nd goal as the ball was passed to Maradona inside his own half. Maradona then began his 60-yard, 10-second dash towards the English goal, passing four English outfield players: Peter Beardsley, Peter Reid, Terry Butcher (twice) and Terry Fenwick.",
  },
  {
    name: "Tomáš Skuhravý",
    match: "Czechoslovakia vs Costa Rica",
    year: "World Cup 1990",
    picture: "./img/Heroes Skuhravy.jpg",
    description:
      "Tomáš Skuhravý scored five goals to become the second highest scorer for the 1990 tournment. This included a hat-trick against Costa Rica, in which all goals were scored by headers, the first time in World Cup history.",
  },
  {
    name: "Gheorghe Hagi",
    match: "Romania vs Columbia",
    year: "World Cup 1994",
    picture: "./img/Heroes Hagi.jpg",
    description:
      "The first game against Colombia saw Romania survive sustained pressure to overcome their much-fancied opponents; the 3-1 victory included a Hagi strike from the left touchline that became one of the iconic goals of the tournament, a 35-yard cross-shot that a player of lesser ability would never be given the credit for. Did he mean it? Of course he did – it was Hagi. Romania’s number 10 also laid on two goals for Răducioiu in a performance that announced to the world, “I’m back.”",
  },
  {
    name: "Roger Milla",
    match: "Cameroon vs Russia",
    year: "World Cup 1994",
    picture: "./img/Heroes Milla.jpg",
    description:
      "Roger Milla holds the record of being the oldest footballer to score a goal in the FIFA World Cup, having scored at the age of 42 years and 39 days. Within a minute of coming on, he picked the ball up on the edge of the box, held off the challenge of Dmitriy Khlestov and shot home past Stanislas Cherchesov. It was a goal that gave him another record.",
  },
  {
    name: "Zinedine Zidane",
    match: "France vs Brazil",
    year: "World Cup 1998",
    picture: "./img/Heroes Zidane.jpg",
    description:
      "France dominated Brazil from the kick-off, with Zidane scoring two similar goals, both headers from corner kicks taken by Emmanuel Petit and Youri Djorkaeff. Courtesy of Zidane's two goals, France went into the half-time break 2–0 up with one hand on the World Cup trophy.[16] Petit added a third goal deep in stoppage time to seal the 3–0 win and France's first World Cup. Named man of the match, Zidane became an instant national hero and would receive the Legion of Honour later that year.",
  },
  {
    name: "Dennis Bergkamp",
    match: "Netherlands vs Argentina",
    year: "World Cup 1998",
    picture: "./img/Heroes Bergkamp.jpg",
    description:
      "Argentina and Netherland's 1998 quarter-final meeting was one of the last true iconic World Cup matches. Latching onto a sweeping overhead pass from Frank de Boer in the 91st minute, Bergkamp brought the ball under his spell with frightful ease, sent Ayala for an early shower before smashing home from close range to make it 2 - 1.",
  },
  {
    name: "Ronaldo",
    match: "Brazil vs Germany",
    year: "World Cup 2002",
    picture: "./img/Heroes Ronaldo.jpg",
    description:
      "Brazil beat Germany, 2-0, in the final Sunday in the Yokohama International Stadium 20 kilometers (12 miles) from Tokyo. Luiz Nazario de Lima Ronaldo scored both the goals. 'It is a fantastic feeling to be a Brazilian tonight', Ronaldo said after the game. His strikes were rewards for perseverance, and for God-given ability.",
  },
  {
    name: "Gianluigi Buffon",
    match: "Italy vs France",
    year: "World Cup 2006",
    picture: "./img/Heroes Buffon.jpg",
    description:
      "In the final, Buffon later made an important save in extra time on a header from eventual Golden Ball winner Zidane,[342] which Buffon later described as the most important save of his career.[343] The match ended 1–1 after extra time and was followed by a penalty shootout in which neither Buffon nor Fabien Barthez saved a spot kick.",
  },
  {
    name: "Andres Iniesta",
    match: "Spain vs Netherlands",
    year: "World Cup 2010",
    picture: "./img/Heroes Iniesta.jpg",
    description:
      "Four minutes before the end Andrés Iniesta gave Spain the lead, and the title, with a volleyed shot into the corner of the goal to secure a 1–0 win. Spain's win was their first World Cup title, as well as the first World Cup win by a European team outside Europe. Iniesta was named the man of the match.",
  },
  {
    name: "Mario Gotze",
    match: "Germany vs Argentina",
    year: "World Cup 2014",
    picture: "./img/Heroes Gotze.jpg",
    description:
      "Mario Götze, who had come on as a substitute shortly before the end of normal time, received Schürrle's cross from the left on his chest before volleying a left-footed shot into the net to secure a 1–0 victory for Germany. This win was their fourth World Cup title and the first since German reunification, as well as the first World Cup win by a European team in the Americas. Götze was named the man of the match.",
  },
  {
    name: "Cristiano Ronaldo",
    match: "Portugal vs Spain",
    year: "World Cup 2018",
    picture: "./img/Heroes Cristiano Ronaldo.jpg",
    description:
      "Cristiano Ronaldo scored a dramatic late free-kick to complete his first World Cup hat-trick and rescue a point for Portugal after a thrilling 3-3 draw against Spain in Sochi.",
  },
  {
    name: "Lionel Messi",
    match: "Argentina vs France",
    year: "World Cup 2022",
    picture: "./img/Heroes Messi.jpg",
    description:
      "Lionel Messi, playing in his 26th World Cup game (the most ever in the men's tournament), walked up to the penalty spot, 12 yards from the French keeper. With a deep breath and calm strike, he powered it low and to the right. 1-0.  With the goal, Messi became the first man to score in every game of a World Cup knockout round in a single tournament (round of 16, quarterfinal, semifinal and final).",
  },
];

function listPlayers() {
  players.forEach((player) => {
    const div = document.createElement("div");
    div.dataset.name = player.name;
    div.classList.add("squareOpens");

    div.innerHTML = `
    <h3 data-name="${player.name}">${player.name}</h3>
    <img data-name="${player.name}" src="${player.picture}"/>
    
    <h5 data-name="${player.name}">${player.match}</h5>
    <p data-name="${player.name}">${player.year}</p>
    `;

    var playerDiv = document.getElementById("players");

    playerDiv.appendChild(div);
  });
}
listPlayers();

function createModal() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  const squares = document.querySelectorAll(".squareOpens");
  squares.forEach((square) => {
    square.addEventListener(
      "click",
      function (event) {
        const findPlayer = players.find(
          (p) => p.name === event.target.dataset.name
        );

        document.querySelector("#mtitle").innerHTML = findPlayer.name;
        document.querySelector("#mdescription").innerHTML =
          findPlayer.description;

        modal.style.display = "block";
      },
      true
    );
  });
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
createModal();

//go to top of the page button
let mybutton = document.getElementById("goToTopBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
//trophies
var img = document.createElement("img");
img.src = "./img/Old trophy.jpg";
var src = document.getElementById("old-worldcup-trophy");
src.appendChild(img);

var img = document.createElement("img");
img.src = "./img/New trophy.jpg";
var src = document.getElementById("new-worldcup-trophy");
src.appendChild(img);
