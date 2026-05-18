const experiences = [
  {
    name: "Jamestown Walking Tour",
    location: "Accra, Ghana",
    type: "History",
    description: "Explore colonial architecture, street murals, and stories from coastal fishing communities."
  },
  {
    name: "Kente Weaving Visit",
    location: "Bonwire, Ghana",
    type: "Craft",
    description: "Meet local artisans and learn the symbolism behind traditional kente designs."
  },
  {
    name: "Paga Crocodile Pond",
    location: "Upper East, Ghana",
    type: "Nature & Folklore",
    description: "Visit a sacred cultural site where community heritage and nature conservation meet."
  }
];

const listElement = document.getElementById("experience-list");
const searchInput = document.getElementById("search-input");
const emptyState = document.getElementById("empty-state");

const renderExperiences = (query = "") => {
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = experiences.filter((experience) => {
    if (!normalizedQuery) return true;

    return [experience.name, experience.location, experience.type]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);
  });

  listElement.innerHTML = filtered
    .map(
      (experience) => `
        <article class="card">
          <h3>${experience.name}</h3>
          <p class="meta">${experience.location} • ${experience.type}</p>
          <p class="details">${experience.description}</p>
        </article>
      `
    )
    .join("");

  emptyState.hidden = filtered.length !== 0;
};

searchInput.addEventListener("input", (event) => {
  renderExperiences(event.target.value);
});

renderExperiences();
