var displayGithub = function (parentEl, rfcNumber) {
    var rfcNumber = 4122;
    console.log("rfcNumber passed in: " + rfcNumber);
    var apiURL = "https://api.github.com/search/repositories?q=rfc" + rfcNumber + "&per_page=5";
    return fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json.items);
            //...something
            var data = [];
            for (var i = 0; i < json.items.length; i++) {
                data.push({
                   url: json.items[i].html_url,
                   name: json.items[i].name
                });
            }
            console.log(data);
            return data;
        })
        .then(function (data) {
            var divEl = $("<div>")
                .addClass("bg-slate-700")
                .text(data[0].name + "   " + data[0].url);

            parentEl.empty();
            parentEl.append(divEl);
        });

};
