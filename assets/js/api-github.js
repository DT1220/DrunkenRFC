var displayGithub = function (parentEl, rfcNumber) {
    var rfcNumber = 4122;
    console.log("rfcNumber passed in: " + rfcNumber);
    var apiURL = "https://api.github.com/search/repositories?q=rfc" + rfcNumber + "&per_page=5";

    return fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            //console.log(json.items);
            //let list = localStorage.getItem('json.items');
            //const printlist = function(){
            //    localStorage.setItem('list', JSON.stringify(json.items))
            //}

            var data = [];
            for (var i = 0; i < json.items.length; i++) {
                //items += <li> ${json[i]}</li>
                data.push({
                   url: json.items[i].html_url,
                   name: json.items[i].name

                });
            }
            //console.log(data);

            console.log(i + "    " + data[i]);
            return data;
        })
        .then(function (data) {
           
            var divEl = $("<div>")
                //tailwind styling
                .addClass("bg-slate-500 p-2 text-center text-white group-hover:bg-slate-600")
                //displays onto the webpage
                .text(data[1].name + "   " + data[1].url);
                console.log(data);
            parentEl.empty();
            parentEl.append(divEl);
        });

};
