$("#customForm").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#mail").val();
    var company = $("#company").val();
    var reason = $("#reason").val();

    var googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdLtx9_zCZrCO9jItCQtL29WXD4ti4m_M8CvsrF_nw93FlTNg/formResponse"; // Replace with your Google Form URL

    $.ajax({
        url: googleFormUrl,
        data: {
            "entry.1524361955": name,
            "entry.132605492": email,
            "entry.1866305512": company,
            "entry.1078397583": reason,
        },
        type: "POST",
        dataType: "xml",
        statusCode: {
        0: function () {
            $("#customForm").hide();
            $("#successMessage").show();
        },
        200: function () {
            $("#failureMessage").show();
        },
        },
    });
});
  