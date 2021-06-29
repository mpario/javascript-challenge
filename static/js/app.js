// from data.js
var tableData = data;
// console.log(tableData);

var ufoTable = d3.select("#ufo-table")
var tbody = d3.select("#ufo-table > tbody")

//define function to build the table
function buildTable(dataRows) {

	tableData.forEach(item => {
		var row = tbody.append("tr")
		Object.entries(item).forEach(([key, value]) => {
			row.append("td").text(value);
		})
	})	
};

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
	//prevent page from refreshing
	// d3.event.preventDefault();
	//select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");

	console.log(inputValue);
	console.log(tableData);

	var filteredData = tableData.filter(dateEntry => dateEntry.datetime === inputValue);

	console.log(filteredData);
	
	filteredData.forEach(item => {
		var row = tbody.append("tr")
		Object.entries(item).forEach(([key, value]) => {
			row.append("td").text(value);
		})
	})

	buildTable(filteredData);		
};
