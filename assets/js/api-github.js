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

            return {
                total: json.total_count,
                repos: data
            };
        })
        .then(function (data) {

            var githubContainerEl = $("<div>")
                .addClass("h-full flex flex-col");

            var titleEl = $("<h2>")
                //tailwind styling
                .addClass("bg-slate-500 p-2 text-center text-white")
                //displays onto the webpage
                .text("Related Repos On GitHub:");
            githubContainerEl.append(titleEl);

            for (var i = 0; i < data.repos.length; i++) {
                var aEl = $("<a>")
                    //tailwind styling
                    .addClass("bg-slate-300 p-2 text-center border-2 border-slate-500 hover:bg-slate-400")
                    .attr("href", data.repos[i].url)
                    .attr("target", target = "_blank")
                    //displays onto the webpage
                    .text(data.repos[i].name);
                githubContainerEl.append(aEl);
            }
            if (data.repos.length === 0) {
                var emptyEl = $("<div>")
                    //tailwind styling
                    .addClass("bg-slate-300 p-2 text-center")
                    //displays onto the webpage
                    .text("No Repos for this RFC found on Github");
                githubContainerEl.append(emptyEl);
            }
            else if (data.total > data.repos.length) {
                var moreEl = $("<a>")
                    .addClass("bg-slate-500 p-2 text-center text-white hover:bg-slate-600")
                    .attr("href", "https://github.com/search?q=rfc" + rfcNumber)
                    .attr("target", target = "_blank")
                    .text("See more on GitHub");
                githubContainerEl.append(moreEl);
            }


            parentEl.empty();
            parentEl.append(githubContainerEl);
        });

};
