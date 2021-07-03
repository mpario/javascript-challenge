// from data.js
var tableData = data;
// console.log(tableData);

var ufoTable = d3.select("#ufo-table");
var tbody = d3.select("#ufo-table > tbody");


//define function to build the table
function buildTable(dataRows) {
	//setting up comparison between intended and actual row counts
	console.log(`appending ${dataRows.length} rows`);
	var rowsAdded = 0;

	//delete the old rows and columns of data
	d3.selectAll("#ufo-table > tbody > tr > td").remove();
	d3.selectAll("#ufo-table > tbody > tr").remove();

	//add the new rows and columns of data
	dataRows.forEach(item => {
		var row = tbody.append("tr")
		rowsAdded++;
		Object.entries(item).forEach(([key, value]) => {
			row.append("td").text(value);
		})
	})	
	
	//finishing comparison of row counts
	console.log(`appended ${rowsAdded} rows`);
}

//call the function
buildTable(tableData);              

//select buttons
var button = d3.select("#filter-btn")
var form = d3.select(".form-group")

//event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//allow users to filter
function runEnter() {
	//select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");

	console.log(inputValue);

	if (inputValue !== "") {
		var filteredData = tableData.filter(dateEntry => dateEntry.datetime === inputValue);		
	}
	else {
		var filteredData = tableData;
	}

	console.log(filteredData);
	buildTable(filteredData);		
}
