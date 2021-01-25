

let myData = [];

function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    let city = document.getElementById("city").value;
    let payment = document.getElementById("payment").value;


    if (name.length > 2 && city.length > 2) {
		myData.push([name,city,payment]);
		 let str = '<ul>'
		
		for (let i = 0; i< myData.length;i++){
			str += '<li>'+ myData[i][0] +" "+ myData[i][1]+" " + myData[i][2] +'</li>';
		}
		 str += '</ul>';
		 document.getElementById("display1").innerHTML = str;
    }
    else {
        alert("Please fill in all fields.");
    }
}
