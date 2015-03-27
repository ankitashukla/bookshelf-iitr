function postContactToGoogle() {
    var name = $('#reader-name').val();
    var contact = $('#contact').val();
    var email = $('#email').val();
    var book = $('#book').val();
    var room = $('#room').val();
    var bhawan = $('#bhawan').val();
    var remarks = $('#remarks').val();

        $.ajax({
            url: "https://docs.google.com/forms/d/1xSOKllaRwEVxwcpZgZ15MWw3g8upld-iFuXAJjxr1D8/formResponse",
            data: { "": name,
                    "entry_86304534": contact,
                    "entry_773614221": email, 
                    "entry_1993156935": book, 
                    "entry_278789661": room, 
                    "entry_431957419": bhawan,
                    "entry_1907761407"; remarks },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    window.location.replace("../thankyou.html");
                },
                200: function () {
                    window.location.replace("../thankyou.html");
                }
            }
        });
}
