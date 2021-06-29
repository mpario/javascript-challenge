// from data.js
var tableData = data;
// console.log(tableData);

//define function to build the table
function buildTable(dataRows) {
	var ufoTable = d3.select("#ufo-table")
	var tbody = d3.select("#ufo-table > tbody")

	tableData.forEach(item => {
		var row = tbody.append("tr")
		Object.entries(item).forEach(([key, value]) => {
			row.append("td").text(value);
		})
	})	
}

//call the function
buildTable(tableData);
              
//allow users to filter
var button = d3.select("#filter-btn")
var inputField = d3.select("#datetime")

function handleClick(enterDate) {
	//filter by date
	var filteredDate = d3.event.target.value;
	buildTable(filteredDate)
	// console.log(filteredDate)
}

button.on("click", handleClick);
