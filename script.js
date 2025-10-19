// Footer links
document.getElementById('contact').addEventListener('click', () => {
  alert('Phone Number: 91+8682940603');
});
document.getElementById('linkedin').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/r-pradeep-b9a440349', '_blank');
});

// Modal handling
const modal = document.getElementById('modal');
const projectFrame = document.getElementById('projectFrame');

function openProject(name) {
  projectFrame.src = `${name}/index.html`; // expects project folder name
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
  projectFrame.src = '';
}
