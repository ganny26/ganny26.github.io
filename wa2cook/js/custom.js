$("#joinus").click(function (e) {
    e.preventDefault();
    $("html, body").delay(0).animate({
        scrollTop: $('#betainvite').offset().top
    }, 2000);
});

$('#invite-form').one('submit', function () {

    var inputq1 = encodeURIComponent($('#email2').val());
    var q1ID = "emailAddress";
    var baseURL = 'https://docs.google.com/forms/d/1c2TFRgzztAPVDuGygAqwknXj1XTZzbkxzQ3nenc5k8s/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + q1ID + "=" + inputq1 + submitRef);
    console.log(submitURL);
    $(this)[0].action = submitURL;
    $("#betarequest").hide();
    $("#betaresponse").show()

});

$(document).ready(function(){
    $('#betaresponse').hide();
    
})