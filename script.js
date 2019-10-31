
$("#random-btn").on("click", function () {

    var lottoNum = "";
    for (var i = 0; i < 8; i++) {
        var random = Math.floor(Math.random() * 8) + 1;
        lottoNum = random + lottoNum;
    }
    console.log(lottoNum);
    $("#random-holder").append("<br>" + "<h2>" + lottoNum + "</h2>");
});