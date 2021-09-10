const app = {};


app.displayImages = function(data) {
    $(".results").empty();
    data.forEach(function(breed) {
        const imgHtml = `
        <div class ="img-box">
            <img src="${breed}"/>
        </div>
        `;
        $(".results").append(imgHtml);
        // console.log(breed);
    })
};

app.findImages = function(breed) {

    $.ajax({
        url: `https://dog.ceo/api/breed/${breed}/images/random/50`,
        method: "GET",
        dataType: "json"
    }).then(function(result) {
        app.displayImages(result.message);
    })
}

app.init = function() {
    $('form').submit(function(e) {
        e.preventDefault();
        const search = $('#search-input').val();
    app.findImages(search);
    });
}

$(function() {
    app.init();
});

