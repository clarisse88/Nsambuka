
function showSidebar(){
  const sidebar= document.querySelector('.sidebar')
  sidebar.style.display='flex'
}
function hideSidebar(){
  const sidebar= document.querySelector('.sidebar')
  sidebar.style.display='none'
}
  
function changeBg() {
    const images = [
    
    
      'url(../images/Background3.jpg)',
      'url(../images/Background2.jpg)',
      'url(../images/Background1.jpg)',
    ];
    const section = document.querySelector('section');
    const animatedText = document.getElementById('animated-text');
    animatedText.classList.remove('animated'); // Remove the class

    void animatedText.offsetWidth; // Trigger reflow
    animatedText.classList.add('animated'); // Re-add the class
    const bg = images[Math.floor(Math.random() * images.length)];
    section.style.backgroundImage=bg
    setTimeout(() => {
        animatedText.style.animation = 'slide-in 2s ease forwards';
}, 1000);
  }
  setInterval(changeBg, 10000);

  
// Listen for changes to the media query
mediaQuery.addEventListener("change", handleMediaQueryChange);

// Run the check on page load
handleMediaQueryChange(mediaQuery);
 
  function sendMessage() {
    var company = document.getElementById("company").value;
    var name = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailAddress = document.getElementById("email").value;
    var phoneNumber = document.getElementById("number").value;
    var subject = encodeURIComponent("Hello Clarisse");
    var body = document.getElementById("message").value;
    window.location.href = "mailto:clarampiana@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      
    alert(body,'message sent.');
} 

const form = document.getElementById('contact-form');
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submit behavior
            fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert("Thank you for your message! We will get back to you soon.");
                    form.reset(); // Clear the form fields
                } else {
                    alert("Oops! There was a problem submitting your form.");
                }
            }).catch(error => {
                alert("Oops! There was an error submitting your form.");
            });
        });
       