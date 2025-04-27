// Məlumatlar (constant variables)
const sidebarData = {
  image: "download.jpg",
  contact: [
    "1234567890",
    "gmailş.com",
    "Baku Yasamal",
    "gooogle.com"
  ],
  education: [
    "Bachelor of Marketing - Baku State University (2018-2022)"
  ],
  skills: [
    "Content Marketing",
    "SEO Optimization",
    "Team Management"
  ],
  languages: [
    "English",
    "Azerbaijani",
    "Turkish"
  ]
};

const mainData = {
  name: "RICHARD",
  surname: "SANCHEZ",
  jobTitle: "MARKETING MANAGER",
  profile: `Experienced marketing manager with over 5 years of experience developing marketing strategies.`,
  experiences: [
    {
      jobTitle: "Marketing Manager",
      company: "ABC Company",
      duration: "2020 - Present",
      description: "Leading the marketing team and managing advertising campaigns."
    }
  ],
  reference: `Available upon request.`
};

// Sidebar yaratmaq
function renderSidebar() {
  const sidebar = document.getElementById('sidebar');

  sidebar.innerHTML = `
    <img src="${sidebarData.image}" alt="Profile Photo" class="daire">

    <h2><center>CONTACT</center></h2>
    <div class="contact">
      ${sidebarData.contact.map(item => `<p contenteditable="true">${item}</p>`).join('')}
    </div>
    <hr>

    <h2><center>EDUCATION</center></h2>
    <div class="education-container">
      ${sidebarData.education.map(item => `<div class="education-entry"><p contenteditable="true">${item}</p></div>`).join('')}
    </div>
    <button class="add-btn" id="add-education">+ Add Education</button>
    <hr>

    <h2><center>SKILLS</center></h2>
    <div class="skills-container">
      ${sidebarData.skills.map(skill => `<div class="skill-entry"><p contenteditable="true">${skill}</p></div>`).join('')}
    </div>
    <div>
      <input type="text" id="new-skill" placeholder="New skill">
      <button id="add-skill">Add</button>
    </div>
    <hr>

    <h2><center>LANGUAGES</center></h2>
    <div class="languages-container">
      ${sidebarData.languages.map(lang => `<div class="language-entry"><p contenteditable="true">${lang}</p></div>`).join('')}
    </div>
    <div>
      <input type="text" id="new-language" placeholder="New language">
      <button id="add-language">Add</button>
    </div>
  `;
}

// Main hissəni yaratmaq
function renderMain() {
  const main = document.getElementById('main');

  main.innerHTML = `
    <h1 contenteditable="true">${mainData.name} <span class="highlight">${mainData.surname}</span></h1>
    <h3 contenteditable="true">${mainData.jobTitle}</h3>

    <div class="section">
      <h2>PROFILE</h2><hr>
      <p contenteditable="true">${mainData.profile}</p>
    </div>

    <div class="section">
      <h2>WORK EXPERIENCE</h2><hr>
      <div class="experience-container">
        ${mainData.experiences.map(exp => `
          <div class="experience-entry">
            <p><strong>Job Title:</strong> <span contenteditable="true">${exp.jobTitle}</span></p>
            <p><strong>Company:</strong> <span contenteditable="true">${exp.company}</span></p>
            <p><strong>Duration:</strong> <span contenteditable="true">${exp.duration}</span></p>
            <p><strong>Description:</strong> <span contenteditable="true">${exp.description}</span></p>
          </div>
        `).join('')}
      </div>
      <button class="add-btn" id="add-experience">+ Add Experience</button>
    </div>

    <div class="section">
      <h2>REFERENCE</h2><hr>
      <p contenteditable="true">${mainData.reference}</p>
    </div>
  `;
}

// Əlavə etmək funksiyaları
function addEducation() {
  const container = document.querySelector('.education-container');
  const newDiv = document.createElement('div');
  newDiv.className = 'education-entry';
  newDiv.innerHTML = `<p contenteditable="true">New Education</p>`;
  container.appendChild(newDiv);
}

function addSkill() {
  const input = document.getElementById('new-skill');
  if (input.value.trim()) {
    const container = document.querySelector('.skills-container');
    const newDiv = document.createElement('div');
    newDiv.className = 'skill-entry';
    newDiv.innerHTML = `<p contenteditable="true">${input.value.trim()}</p>`;
    container.appendChild(newDiv);
    input.value = '';
  }
}

function addLanguage() {
  const input = document.getElementById('new-language');
  if (input.value.trim()) {
    const container = document.querySelector('.languages-container');
    const newDiv = document.createElement('div');
    newDiv.className = 'language-entry';
    newDiv.innerHTML = `<p contenteditable="true">${input.value.trim()}</p>`;
    container.appendChild(newDiv);
    input.value = '';
  }
}

function addExperience() {
  const container = document.querySelector('.experience-container');
  const newDiv = document.createElement('div');
  newDiv.className = 'experience-entry';
  newDiv.innerHTML = `
    <p><strong>Job Title:</strong> <span contenteditable="true">New Job</span></p>
    <p><strong>Company:</strong> <span contenteditable="true">New Company</span></p>
    <p><strong>Duration:</strong> <span contenteditable="true">Year-Year</span></p>
    <p><strong>Description:</strong> <span contenteditable="true">Job description here</span></p>
  `;
  container.appendChild(newDiv);
}

// Yüklənəndə işləsin
window.onload = function() {
  renderSidebar();
  renderMain();

  document.addEventListener('click', function(e) {
    if (e.target.id === 'add-education') addEducation();
    if (e.target.id === 'add-skill') addSkill();
    if (e.target.id === 'add-language') addLanguage();
    if (e.target.id === 'add-experience') addExperience();
  });
};
