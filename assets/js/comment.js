// Comments EmailJS
function sendComment() {
  var params = {
    comment: document.getElementById("comment").value,
  };
  emailjs
    .send("service_5bfiwcg", "template_5f2i4tr", params)
    .then(function (res) {
      alert("Success!!!" + res.status);
    });
}
