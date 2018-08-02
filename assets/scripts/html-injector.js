function includeHTML() {

    var pageElements, index, element, fileToBeIncluded, xhttp;
    pageElements = document.getElementsByTagName("*");

    for (index = 0; index < pageElements.length; index++) {

      element = pageElements[index];
      fileToBeIncluded = element.getAttribute("inner-html");

      if (fileToBeIncluded) {

        xhttp = new XMLHttpRequest();
        xhttp.open("GET", fileToBeIncluded, true);
        xhttp.send();

        xhttp.onreadystatechange = function() {

          if (this.readyState == 4) {

            if (this.status == 200) {
                element.innerHTML = this.responseText;
            } else if (this.status == 404) {
                element.innerHTML = "Content not found.";
            }

            element.removeAttribute("inner-html");
            includeHTML();

          }

        }

        return;

      }

    }

}

includeHTML();