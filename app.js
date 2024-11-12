// Navigation bar 
const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    navbar.classList.add("moving");
    console.log("I am clicked");
  });
}
if (close)
  close.addEventListener("click", () => {
    navbar.classList.remove("moving");
    console.log("its a remove");
  });

  // Thems changing button


  
        // Form  validation application

const username = document.querySelector('#user-name');
const userphone = document.querySelector('#user-phone');
const useremail = document.querySelector('#user-email');
const usermessage = document.querySelector('#user-message');

// showing  the inner message inside form input, constant variable
const usericon = document.querySelector('#errorname');
const phoneicon = document.querySelector('#errorphone');
const emailicon = document.querySelector('#erroremail');
const msgicon = document.querySelector('#errormessage');

function validname(){
  const uname = username.value;
  if(uname.length == 0){
    usericon.innerHTML = 'Enter your name';
    return false;
  }else if(!uname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    usericon.innerHTML = 'check your name';
    return false;
  }else{
    usericon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  }
}
function validphone(){
    const phone = userphone.value;
    if(phone.length == 0){
      phoneicon.innerHTML = 'Enter your phone';
      return false;
    }else if(phone.length != 10){
      phoneicon.innerHTML = 'Please enter valid number';
      return false;
    }else if(!phone.match(/^[0-9]{10}$/)){
      phoneicon.innerHTML = 'Check your number';
      return false;
    }else{
      phoneicon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
      return true;
    }
}
function validemail(){
  const uemail = useremail.value;
  if(uemail.length ==  0){
    emailicon.innerHTML = 'Enter the email';
    return false;
  }else if(!uemail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailicon.innerHTML = 'Check your email';
    return false;
  }else{
    emailicon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  }
}
function validmsg(){
  let umsg = usermessage.value;
  let count = 30;
  let left = count -umsg.length;
  if(left > 0){
    msgicon.innerHTML = left + '  remaining laters';
    return false;
  }else if(umsg.length == 0){
    msgicon.innerHTML = ' Enter your message';
    return false;
  }else{
    msgicon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
  }
}