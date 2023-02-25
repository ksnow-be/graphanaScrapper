function restTest2() {
    fetch("https://21-school.ru/")
    .then(function (response) {
        return response.text()
    })
    .then(function (html) {
      var parser = new DOMParser();
	    var doc = parser.parseFromString(html, 'text/html');

      els = doc.getElementsByClassName("kampuses-tabs__tab");
      var data = document.getElementById("statData");
      data.innerHTML = ""; // чистим то что было

      [].forEach.call(els, function (el) {
        data.innerHTML += '<div class="dataCol col-8"><button disabled class="button-49" role="button">'+ el.innerHTML +'</button></div>' 
      });
    })
    .catch(function (err) {
      console.warn('Something went wrong.', err);
    });
}

function clickOnBlock(blockNameId) {

  restTest2();
  
  var blocks = document.getElementsByClassName("option");
  [].forEach.call(blocks, function (b) {
    if (b.id === blockNameId) {
      document.getElementById(b.id).style.color = "#E384FF";
    } else {
      document.getElementById(b.id).style.color = "#f9e6ff";
    }
  });
}