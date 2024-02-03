const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Thanks Cutie!!!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();

  // Define predefined romantic date ideas
  const dateIdeas = [
    "Cook a romantic dinner together",
    "Go for a moonlit walk on the beach",
    "Have a picnic in the park",
    "Stargaze in the backyard",
    "Explore a botanical garden",
    "Attend a live outdoor concert",
    "Visit an art gallery",
    "Plan a movie marathon night at home",
    "Take a scenic hike and have a picnic",
    "Go on a sunrise or sunset photo shoot",
    "Attend a local farmers' market",
    "Take a dance lesson together",
    "Go on a bike ride together",
    "Plan a themed dinner night at home",
    "Go on a scenic drive",
    "Visit a local dessert shop",
    "Take a pottery or ceramics class",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Attend a local festival or fair",
    "Visit a local bookstore and pick out books for each other",
    "Have a picnic in a local park",
    "Attend a paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Plan a movie night with your favorite films",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Visit a local botanical garden",
    "Have a picnic",
    "Take a cooking class together",
    "Visit a local museum",
    "Go on a scenic hike and have a picnic",
    "Take a painting class together",
    "Have a themed dinner night at home",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Visit a local dessert shop",
    "Attend a live music performance",
    "Visit a local bookstore and pick out books for each other",
    "Take a photography workshop together",
    "Attend a paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Plan a movie night with your favorite films",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Visit a local botanical garden",
    "Have a picnic",
    "Take a cooking class together",

    // Add more date ideas as needed
  ];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`How about this romantic date idea: ${selectedDateIdea}`);
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);
