$(document).ready(function () {
    $(".block").slice(0, 3).show();
    if ($(".block:hidden").length != 0) {
        $("#load").show();
    }
    $("#load").on("click", function (e) {
        e.preventDefault();
        $(".block:hidden").slice(0, 3).slideDown();
        if ($(".block:hidden").length == 0) {
            $("#load").text("No More to view")
                .fadOut("slow");
        }
    });
})