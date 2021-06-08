
window.addEventListener("load", function(){

    // TODO: register the handler
    let actionURL;
    let actions = {
            google: "https://www.google.com/",
            duckDuckGo: "https://duckduckgo.com/",
            bing: "https://www.bing.com/search",
            ask: "https://www.ask.com/web"
          };

    let form = document.getElementById("searchForm");
    
    form.addEventListener("submit", function(event) {  
        
        let searchInput = document.querySelector("input[name=q]");
       
        let radioValueChecked = document.querySelector('input[name=engine]:checked');
        let radioValue = document.getElementsByName("engine");

        // alert(radioValue);
        // alert(radioValue.checked);
        // alert(radioValue.value);
        //radioValue === null
        // let radioValueChecked = document.querySelector('input[name=engine]:checked');
        if (searchInput.value === "" || radioValueChecked === null){
            alert("All fields are required!");
            event.preventDefault();
        }

//  console.log(`radiovalue is ${radioValue}`);


for (let i = 0; i < radioValue.length; i++) {
    // alert("inside for loop");

        if(radioValue[i].checked) { 
            // if(radioValue.checked) {
           
            // alert("radioValue checked");
            if (radioValue[i].value === "google"){
        
            //  alert("inside google");
            actionURL = actions["google"];
            // console.log(actionURL);
            }
            else if (radioValue[i].value === "duckDuckGo") {
            //  alert("inside duckDuckGo");
            actionURL = actions["duckDuckGo"];
            }
            else if (radioValue[i].value === "bing") {
            //  alert("inside bing");
            actionURL = actions["bing"];
            }
            else if (radioValue[i].value === "ask") {
            //  alert("inside ask");
            actionURL = actions["ask"];
            }

        }
}

form.setAttribute("action", actionURL);

});

    
});