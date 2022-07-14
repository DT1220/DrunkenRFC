var displayGithub = function (parentEl, rfcNumber) {
    var apiURL = "https://api.github.com/search/repositories?q=rfc" + rfcNumber + "&per_page=5";

    return fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            var data = [];
            for (var i = 0; i < json.items.length; i++) {
                data.push({
                    url: json.items[i].html_url,
                    name: json.items[i].name

                });
            }

            console.log(i + "    " + data[i]);
            return data;
        })
        .then(function (data) {
            parentEl.empty();

            for (var i = 0; i < data.length; i++) {
                var divEl = $("<div>")
                    //tailwind styling
                    .addClass("bg-slate-500 p-2 text-center text-white group-hover:bg-slate-600")
                    //displays onto the webpage
                    .text(data[i].name + "   " + data[i].url);
                parentEl.append(divEl);
            }
            if (data.length === 0) {
                var divEl = $("<div>")
                    //tailwind styling
                    .addClass("bg-slate-500 p-2 text-center text-white group-hover:bg-slate-600")
                    //displays onto the webpage
                    .text("No repositories for this RFC on Github");
                parentEl.append(divEl);
            }
        });

};
