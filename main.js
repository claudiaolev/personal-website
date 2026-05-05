document.getElementById("page-title").textContent = CONTENT.name;
document.getElementById("nav-name").textContent = CONTENT.name;
document.getElementById("hero-name").textContent = CONTENT.name;
document.getElementById("hero-tagline").textContent = CONTENT.tagline;
document.getElementById("about-text").textContent = CONTENT.about;

// Education
const eduList = document.getElementById("education-list");
CONTENT.education.forEach((e) => {
  const div = document.createElement("div");
  div.className = "edu-entry";
  div.innerHTML = `
    <span class="edu-school">${e.school}</span>
    <span class="edu-period">${e.period}</span>
    <span class="edu-detail">${e.detail}</span>
    <span class="edu-location">${e.location}</span>
  `;
  eduList.appendChild(div);
});

// Olympiads
const olList = document.getElementById("olympiad-list");
CONTENT.olympiads.forEach((o) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="ol-title">${o.title}</span>
    <span class="ol-result">${o.result}</span>
    <span class="ol-detail">${o.detail}</span>
  `;
  olList.appendChild(li);
});

// Work
const workList = document.getElementById("work-list");
CONTENT.work.forEach((w) => {
  const div = document.createElement("div");
  div.className = "entry";
  const bullets = w.bullets
    .map((b) => `<li>${b}</li>`)
    .join("");
  div.innerHTML = `
    <div class="entry-header">
      <span class="entry-title">${w.role}</span>
      <span class="entry-period">${w.period}</span>
    </div>
    <div class="entry-sub">${w.org}</div>
    <ul class="entry-bullets">${bullets}</ul>
  `;
  workList.appendChild(div);
});

// Art
const artList = document.getElementById("art-list");
CONTENT.art.forEach((a) => {
  const div = document.createElement("div");
  div.className = "entry";
  const accolade = a.accolade
    ? `<p class="entry-accolade">${a.accolade}</p>`
    : "";
  div.innerHTML = `
    <div class="entry-header">
      <span class="entry-title">${a.title}</span>
      <span class="entry-period">${a.year}</span>
    </div>
    <div class="entry-sub">${a.type}</div>
    <p class="entry-desc">${a.description}</p>
    ${accolade}
  `;
  artList.appendChild(div);
});

// Other
const otherList = document.getElementById("other-list");
CONTENT.other.forEach((o) => {
  const div = document.createElement("div");
  div.className = "entry other-entry";
  div.innerHTML = `
    <div class="other-title">${o.title}</div>
    <div class="other-desc">${o.description}</div>
  `;
  otherList.appendChild(div);
});

// Contact
document.getElementById("contact-email").innerHTML =
  `<a href="mailto:${CONTENT.email}">${CONTENT.email}</a>`;

// Mobile nav toggle
document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// Close mobile nav on link click
document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
  });
});
