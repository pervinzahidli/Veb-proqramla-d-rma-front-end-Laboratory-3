
const contactInfo = [
  '1234567890',
  'gmailş.com',
  'Baku Yasamal',
  'gooogle.com'
];

const educationData = [
  { degree: 'Bachelor', school: 'ABC University', year: '2018–2022' }
];

const skillsData = ['HTML', 'CSS', 'JavaScript'];
const languagesData = ['English', 'Spanish'];
function renderContactInfo() {
  const container = document.getElementById('contact-section');
  container.innerHTML = '';
  contactInfo.forEach(info => {
    const p = document.createElement('p');
    p.textContent = info;
    container.appendChild(p);
  });
}

function renderEducation() {
  const container = document.querySelector('.education-container');
  container.innerHTML = '';
  educationData.forEach(edu => {
    const entry = document.createElement('div');
    entry.className = 'education-entry';
    entry.innerHTML = `
      <p><strong>Degree:</strong> <span contenteditable="true">${edu.degree}</span></p>
      <p><strong>School:</strong> <span contenteditable="true">${edu.school}</span></p>
      <p><strong>Year:</strong> <span contenteditable="true">${edu.year}</span></p>
      <button onclick="this.parentElement.remove()">Remove</button>
      <button onclick="saveEditableContent(this)">Save</button>
    `;
    container.appendChild(entry);
  });
}

function renderSkills() {
  const container = document.querySelector('.skills-container');
  container.innerHTML = '';
  skillsData.forEach(skill => {
    const entry = document.createElement('div');
    entry.className = 'skill-entry';
    entry.innerHTML = `
      <span contenteditable="true">${skill}</span>
      <button onclick="this.parentElement.remove()">×</button>
      <button onclick="saveEditableContent(this)">Save</button>
    `;
    container.appendChild(entry);
  });
}

function renderLanguages() {
  const container = document.querySelector('.languages-container');
  container.innerHTML = '';
  languagesData.forEach(lang => {
    const entry = document.createElement('div');
    entry.className = 'language-entry';
    entry.innerHTML = `
      <span contenteditable="true">${lang}</span>
      <button onclick="this.parentElement.remove()">×</button>
      <button onclick="saveEditableContent(this)">Save</button>
    `;
    container.appendChild(entry);
  });
}

function addEducation() {
  const container = document.querySelector('.education-container');
  const newEntry = document.createElement('div');
  newEntry.className = 'education-entry';
  newEntry.innerHTML = `
    <p><strong>Degree:</strong> <span contenteditable="true">New Degree</span></p>
    <p><strong>School:</strong> <span contenteditable="true">New School</span></p>
    <p><strong>Year:</strong> <span contenteditable="true">2020–2024</span></p>
    <button onclick="this.parentElement.remove()">Remove</button>
    <button onclick="saveEditableContent(this)">Save</button>
  `;
  container.appendChild(newEntry);
}

function addExperience() {
  const container = document.querySelector('.experience-container');
  const newEntry = document.createElement('div');
  newEntry.className = 'experience-entry';
  newEntry.innerHTML = `
    <p><strong>Job Title:</strong> <span contenteditable="true">New Job</span></p>
    <p><strong>Company:</strong> <span contenteditable="true">New Company</span></p>
    <p><strong>Duration:</strong> <span contenteditable="true">2022</span></p>
    <p><strong>Description:</strong> <span contenteditable="true">Job Description</span></p>
    <button onclick="this.parentElement.remove()">Remove</button>
    <button onclick="saveEditableContent(this)">Save</button>
  `;
  container.appendChild(newEntry);
}

function addSkill() {
  const input = document.getElementById('new-skill');
  const text = input.value.trim();
  if (text) {
    const container = document.querySelector('.skills-container');
    const entry = document.createElement('div');
    entry.className = 'skill-entry';
    entry.innerHTML = `
      <span contenteditable="true">${text}</span>
      <button onclick="this.parentElement.remove()">×</button>
      <button onclick="saveEditableContent(this)">Save</button>
    `;
    container.appendChild(entry);
    input.value = '';
  }
}

function addLanguage() {
  const input = document.getElementById('new-language');
  const text = input.value.trim();
  if (text) {
    const container = document.querySelector('.languages-container');
    const entry = document.createElement('div');
    entry.className = 'language-entry';
    entry.innerHTML = `
      <span contenteditable="true">${text}</span>
      <button onclick="this.parentElement.remove()">×</button>
      <button onclick="saveEditableContent(this)">Save</button>
    `;
    container.appendChild(entry);
    input.value = '';
  }
}

function saveEditableContent(button) {
  const parent = button.parentElement;
  const editableFields = parent.querySelectorAll('[contenteditable="true"]');

  for (const el of editableFields) {
    if (!el.innerText.trim()) {
      alert("Please enter valid content.");
      return;
    }
  }

  editableFields.forEach(el => el.setAttribute('contenteditable', 'false'));
  button.setAttribute('disabled', true);
  button.innerText = 'Saved';
}

function toggleDropdown(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

window.onload = function () {
  renderContactInfo();
  renderEducation();
  renderSkills();
  renderLanguages();

  document.getElementById('add-education').onclick = addEducation;
  document.getElementById('add-experience').onclick = addExperience;
  document.getElementById('add-skill').onclick = addSkill;
  document.getElementById('add-language').onclick = addLanguage;

  document.getElementById('contact-heading').onclick = () => toggleDropdown('contact-dropdown');
  document.getElementById('education-heading').onclick = () => toggleDropdown('education-dropdown');
  document.getElementById('skills-heading').onclick = () => toggleDropdown('skills-dropdown');
  document.getElementById('languages-heading').onclick = () => toggleDropdown('languages-dropdown');

  document.getElementById('contact-dropdown').style.display = 'block';
  document.getElementById('education-dropdown').style.display = 'block';
  document.getElementById('skills-dropdown').style.display = 'block';
  document.getElementById('languages-dropdown').style.display = 'block';
};
