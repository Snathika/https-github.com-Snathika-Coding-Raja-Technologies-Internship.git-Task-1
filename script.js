function generateResume() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var summary = document.getElementById('summary').value;

  var resumeContent = `
      <h3>${name}</h3>
      <p>Email: ${email}<br>
      Phone: ${phone}</p>
      <h4>Summary</h4>
      <p>${summary}</p>
  `;

  document.getElementById('preview-content').innerHTML = resumeContent;
}
