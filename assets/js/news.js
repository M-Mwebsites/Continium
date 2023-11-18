var url = 'https://docs.google.com/spreadsheets/d/1VC4EM6Zvzuh_wPwOPO6gIAkhyCSfA4DpCJuyoVHKsMY/gviz/tq?tqx=out:json&tq&gid=0';
fetch(url)
.then(response => response.text())
.then(data => document.getElementById("news").innerHTML=myItems(data.substring(47).slice(0, -2))  
);
function myItems(jsonString) {
    var json = JSON.parse(jsonString);
    var div = '<div>';
    
    // Reverse the order of rows
    var reversedRows = json.table.rows.slice().reverse();

    reversedRows.forEach(ligne => {
        var array = [];
        ligne.c.forEach(cellule => {
            try {
                var valeur = cellule.f ? cellule.f : cellule.v;
            } catch (e) {
                var valeur = '';
            }
            array.push(valeur);
        });

        //date format
        const [datePart, timePart] = array[0].split(' ');
        const dateObject = new Date(datePart);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        let formattedDate = dateObject.toLocaleDateString('en-US', options);
        const [month, day, year] = formattedDate.split(/[ ,]+/);
        formattedDate = `${day} ${month} ${year}`;

        //text format
        let formattedText = array[1].replaceAll("\n", "<br>");
        formattedText = formattedText.replace(/\[([^)]+)\]\(([^)]+)\)/g, '<a href="$1" target="_blank">$2</a>');

        div += '<h4>' + formattedDate + ':</h4>';
        div += '<p>' + formattedText + '</p>';
    });

    div += '</div>';
    return div;
}