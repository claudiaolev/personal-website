document.getElementById("page-title").textContent = CONTENT.name;
document.getElementById("nav-name").textContent = CONTENT.name;
document.getElementById("hero-name").textContent = CONTENT.name;

// About
const aboutSections = document.getElementById("about-sections");
CONTENT.about.forEach((block) => {
  const div = document.createElement("div");
  div.className = "about-block";
  div.innerHTML = `<p class="about-label">${block.label}</p><p class="about-text">${block.text}</p>`;
  aboutSections.appendChild(div);
});

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
  const detail = o.detail ? `<span class="ol-detail">${o.detail}</span>` : "";
  const year = o.year ? `<span class="ol-year">${o.year}</span>` : "";
  li.innerHTML = `
    <span class="ol-title">${o.title}</span>
    <span class="ol-result">${o.result}</span>
    ${year}
    ${detail}
  `;
  olList.appendChild(li);
});

// Work
const workList = document.getElementById("work-list");
CONTENT.work.forEach((w) => {
  const div = document.createElement("div");
  div.className = "entry";
  const bullets = w.bullets.map((b) => `<li>${b}</li>`).join("");
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

// Civic
const civicList = document.getElementById("civic-list");
CONTENT.civic.forEach((c) => {
  const div = document.createElement("div");
  div.className = "entry";
  const bullets = c.bullets.map((b) => `<li>${b}</li>`).join("");
  div.innerHTML = `
    <div class="entry-header">
      <span class="entry-title">${c.role}</span>
      <span class="entry-period">${c.period}</span>
    </div>
    <div class="entry-sub">${c.org}</div>
    <ul class="entry-bullets">${bullets}</ul>
  `;
  civicList.appendChild(div);
});

// Art — description always visible, images + long description + acclaim toggle on click
const artList = document.getElementById("art-list");
CONTENT.art.forEach((a) => {
  const div = document.createElement("div");
  div.className = "entry art-entry";
  const typePart = a.type ? `<div class="entry-sub">${a.type}</div>` : "";
  const hasImages = a.images && a.images.length > 0;

  const longDescHTML = a.longDescription
    ? `<p class="art-long-desc">${a.longDescription}</p>`
    : "";

  const acclaimHTML = a.acclaim
    ? `<blockquote class="art-acclaim">${a.acclaim.replace(/\n/g, "<br>")}</blockquote>`
    : "";

  const imgHTML = hasImages
    ? `<div class="art-gallery-grid">${a.images.map((src) => `<img src="${src}" alt="" loading="lazy" />`).join("")}</div>`
    : "";

  const toggleBtn = (hasImages || a.longDescription || a.acclaim)
    ? `<span class="art-toggle">Show more ↓</span>`
    : "";

  div.innerHTML = `
    <div class="entry-header">
      <span class="entry-title">${a.title}</span>
      <span class="entry-period">${a.year}</span>
    </div>
    ${typePart}
    <p class="entry-desc">${a.description}</p>
    ${toggleBtn}
    <div class="art-gallery">
      ${longDescHTML}
      ${acclaimHTML}
      ${imgHTML}
    </div>
  `;
  artList.appendChild(div);

  const toggle = div.querySelector(".art-toggle");
  const gallery = div.querySelector(".art-gallery");
  if (toggle && gallery) {
    toggle.addEventListener("click", () => {
      const open = gallery.classList.toggle("open");
      toggle.textContent = open ? "Show less ↑" : "Show more ↓";
    });
  }
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

// Log
const logContent = document.getElementById("log-content");
const log = CONTENT.log;
if (log) {
  if (log.substack) {
    const p = document.createElement("p");
    p.className = "log-substack";
    p.innerHTML = `<a href="${log.substack}" target="_blank" rel="noopener">Substack →</a>`;
    logContent.appendChild(p);
  }
  if (log.entries && log.entries.length > 0) {
    const ul = document.createElement("ul");
    ul.className = "log-entries";
    log.entries.forEach((e) => {
      const li = document.createElement("li");
      const date = e.date ? `<span class="log-date">${e.date}</span>` : "";
      li.innerHTML = `<a href="${e.url}" target="_blank" rel="noopener">${e.title}</a>${date}`;
      ul.appendChild(li);
    });
    logContent.appendChild(ul);
  }
  if (!log.substack && (!log.entries || log.entries.length === 0)) {
    logContent.innerHTML = `<p style="font-size:0.88rem;color:var(--muted)">Coming soon.</p>`;
  }
}

// Media — grouped by section and category
const mediaList = document.getElementById("media-list");
CONTENT.media.forEach((section) => {
  const sectionLi = document.createElement("li");
  sectionLi.className = "media-section-header";
  sectionLi.textContent = section.section;
  mediaList.appendChild(sectionLi);

  section.groups.forEach((group) => {
    const li = document.createElement("li");
    li.className = "media-group";
    const links = group.items.map(item =>
      `<a href="${item.url}" target="_blank" rel="noopener">${item.label}</a>`
    ).join(" · ");
    li.innerHTML = `<span class="media-category">${group.category}</span><span class="media-links">${links}</span>`;
    mediaList.appendChild(li);
  });
});

// Contact
document.getElementById("contact-email").innerHTML =
  `<a href="mailto:${CONTENT.email}">${CONTENT.email}</a>`;

// Mobile nav toggle
document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("open");
  });
});
