// share wa
var element = document.getElementById("Whatsapp");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://wa.me/?text=Bambi Baby Telon Balm 50ml | Glamary https://www.glamary.store/Produk/bambi-baby-telon-balm/';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share wa

// share telegram
var element = document.getElementById("Telegram");
var parent = element.parentNode;
var link = document.createElement('a');
link.href = 'https://telegram.me/share/url?text=Bambi Baby Telon Balm 50ml | Glamary Image&url=https://www.glamary.store/Produk/bambi-baby-telon-balm/';
link.appendChild(element.cloneNode(true));
parent.replaceChild(link, element);
// share telegram

/*-----------------
            Share Copy
        ------------------*/
        const copyBtn = document.querySelector(".copy-btn");
        const textarea = document.querySelector("textarea");
    
        copyBtn.addEventListener("click", () => {
          textarea.select();
          document.execCommand("copy");
          copyBtn.innerHTML = "<i class='fas fa-check'></i>";
          copyBtn.style.background = "#2DCDA7";
          copyBtn.style.color = "#fff";
    
          setTimeout(() => {
            document.getSelection().removeAllRanges();
            copyBtn.innerHTML = "<i class='fas fa-copy'></i>";
            copyBtn.style.background = "";
            copyBtn.style.color = "";
          }, 5000);
        });