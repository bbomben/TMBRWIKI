var systems=document.querySelectorAll("button.system-type");

for(var i=0; i<systems.length;i++){

    systems[i].onclick=function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
        
    };
};   


var expandAllButtons = document.querySelectorAll("button.expand-all");

    expandAllButtons.forEach(button => {
        button.addEventListener("click", function() {

            var currentSection = this.closest("section");
            var allButtons = Array.from(currentSection.querySelectorAll("button.system-type"));
            var allRules = Array.from(currentSection.querySelectorAll("div.rules-of-thumb"));

            var startIndex = allButtons.indexOf(this);

            var sectionsToToggle = allRules.slice(startIndex + 1, startIndex + 4);
            var buttonsToToggle = allButtons.slice(startIndex + 1, startIndex + 4);
            

            var isExpanded = this.classList.contains("active");
            

            sectionsToToggle.forEach((rule, index) => {
                if (isExpanded) {
                    rule.classList.remove("show");
                    if (index < buttonsToToggle.length) {
                        buttonsToToggle[index].classList.remove("active");
                    }
                } else {
                    rule.classList.add("show");
                    if (index < buttonsToToggle.length) {
                        buttonsToToggle[index].classList.add("active");
                    }
                }
                                 
            });
        });
    });
    
    var systems=document.querySelectorAll("button.expand-all");

    for(var i=0; i<systems.length;i++){
    
        systems[i].onclick=function(){
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            
        };
    };   
    
    

//////////////////////////////////////////////////////////////////


var innerText = document.querySelectorAll('.expand-all');

innerText.forEach(function(text) {
    text.addEventListener ("click", function () {
        if (this.textContent == '+ expand all +') {
            this.textContent = '- collapse all -';
        } else {
            this.textContent = '+ expand all +'
        }
    }) 
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})
   


