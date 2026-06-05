const courses = window.CyplexCourses || [];
const siteContent = window.CyplexSiteContent || {};

const byId = (id) => document.getElementById(id);
const normalize = (value) => String(value || "").toLowerCase();

const labels = {
  "coming-soon": "Coming Soon",
  planned: "Planned",
  pilot: "Pilot"
};

function uniqueValues(key) {
  return [...new Set(courses.map((course) => course[key]))].filter(Boolean).sort();
}

function fillSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function renderMetrics() {
  if (!byId("metricCategories") || !byId("metricCourses") || !byId("statusSummary")) return;
  const categories = uniqueValues("category");
  const priorityCount = courses.filter((course) => course.status === "coming-soon").length;

  byId("metricCategories").textContent = categories.length;
  byId("metricCourses").textContent = courses.length;

  const summary = byId("statusSummary");
  summary.textContent = `${courses.length} concepts in the full menu. ${priorityCount} are marked as first-priority Coming Soon courses.`;
}

function courseMatches(course) {
  const searchInput = byId("courseSearch");
  const categoryInput = byId("categoryFilter");
  const typeInput = byId("typeFilter");
  const search = normalize(searchInput?.value);
  const category = categoryInput?.value || "all";
  const type = typeInput?.value || "all";
  const searchBlob = normalize([
    course.title,
    course.category,
    course.audience,
    course.outcome,
    course.type,
    course.level
  ].join(" "));

  return (!search || searchBlob.includes(search)) &&
    (category === "all" || course.category === category) &&
    (type === "all" || course.type === type);
}

function renderCourses() {
  const grid = byId("courseGrid");
  const summary = byId("statusSummary");
  if (!grid || !summary) return;
  const filtered = courses.filter(courseMatches);

  summary.textContent = `${filtered.length} course concepts shown. Links remain inactive until LearnWorlds URLs are added.`;

  grid.innerHTML = filtered.map((course) => {
    const statusLabel = labels[course.status] || "Planned";
    return `
      <article class="course-card">
        <header>
          <div>
            <span class="course-meta">${course.category}</span>
            <h3>${course.title}</h3>
          </div>
          <span class="course-status ${course.status}">${statusLabel}</span>
        </header>
        <p><strong>You will create:</strong> ${course.outcome}</p>
        <p><strong>Best for:</strong> ${course.audience}</p>
        <footer>
          <span class="chip">${course.type}</span>
          <span class="chip">${course.time}</span>
          <span class="chip">${course.level}</span>
        </footer>
      </article>
    `;
  }).join("");
}

function initFilters() {
  const categoryFilter = byId("categoryFilter");
  const typeFilter = byId("typeFilter");
  if (!categoryFilter || !typeFilter) return;

  fillSelect(categoryFilter, uniqueValues("category"));
  fillSelect(typeFilter, uniqueValues("type"));

  ["courseSearch", "categoryFilter", "typeFilter"].forEach((id) => {
    byId(id)?.addEventListener("input", renderCourses);
  });
}

function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = byId("primaryNav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function renderApproach() {
  const grid = byId("approachGrid");
  const approach = siteContent.approach || [];
  if (!grid || !approach.length) return;

  grid.innerHTML = approach.map((item, index) => `
    <article class="approach-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function renderTeam() {
  const grid = byId("teamGrid");
  const team = siteContent.team || [];
  if (!grid || !team.length) return;

  grid.innerHTML = team.map((person) => `
    <article class="team-card">
      <img src="${person.image}" alt="${person.alt}" loading="lazy" decoding="async">
      <div class="team-body">
        <h3>${person.name}</h3>
        <span class="team-role">${person.role}</span>
        <p>${person.bio}</p>
      </div>
    </article>
  `).join("");
}

function hydrateContact() {
  const contact = siteContent.contact || {};
  const emailLink = byId("contactEmail");
  const location = byId("contactLocation");
  const bookCall = byId("bookCallLink");
  const form = byId("contactForm");

  if (emailLink && contact.email) {
    emailLink.textContent = contact.email;
    emailLink.href = `mailto:${contact.email}`;
  }
  if (location && contact.location) {
    location.textContent = contact.location;
  }
  if (bookCall && contact.calendlyUrl) {
    bookCall.href = contact.calendlyUrl;
  }
  if (form && contact.formAction) {
    form.action = contact.formAction;
  }
}

function preventPlaceholderNavigation() {
  document.querySelectorAll('[aria-disabled="true"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
}

renderMetrics();
initFilters();
renderCourses();
renderApproach();
renderTeam();
hydrateContact();
initMobileMenu();
preventPlaceholderNavigation();
