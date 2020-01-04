// $(".container").click(function (e) {
//     console.log("container click");
// })
//

let source;

$(".container > div").click(function(e) {
    console.log(e.target);
});