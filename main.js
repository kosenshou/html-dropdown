function showDropdown() {
    document.getElementById('dropdown').style.display = 'block';
}

function hideDropdown() {
    document.getElementById('dropdown').style.display = 'none';
}

let datas = ['test', 'asdfads', 'fff', 'gehgeh'];

const dropdownElements = document.getElementById('dropdown_elements');

datas.forEach((data, id) => {
    const li = document.createElement('li');
    li.innerText = data;
    li.id = "option" + id;
    dropdownElements.append(li);
});

// document.getElementById('search').addEventListener('oninput', (e) => searching(e));
document.getElementById('search').oninput = searching;

function searching(event) {
    // console.log(event.target.value);
    // console.log('typing');
    let newData = datas.filter(data => data.includes(event.target.value));

    // console.log(newData);
    dropdownElements.innerHTML = '';

    newData.forEach((data, id) => {
        const li = document.createElement('li');
        li.innerText = data;
        li.id = "option" + id;
        dropdownElements.append(li);
    });
}

// Get the element, add a click listener...
document.getElementById("dropdown_elements").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		// console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
        
        document.getElementById('search').value = e.target.innerText;
        // console.log(e.target.innerText);
        hideDropdown();
	}
});

window.addEventListener('click', function(e){   
    if (document.getElementById('dropdown_container').contains(e.target)){
        // hideDropdown();
        console.log('click')
    } else {
        hideDropdown();
    }
});