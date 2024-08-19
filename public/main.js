function loadData() {
    const manufacturer = document.getElementById('manufacturer').value;
    if (manufacturer) {
        fetch(`data/${manufacturer}/info.json`)
            .then(response => response.json())
            .then(data => {
                displayData(data.sections); // Access sections array in the JSON
            })
            .catch(error => console.error('Error loading data:', error));
    }
}

function displayData(sections) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear previous content
    sections.forEach(item => {
        const section = document.createElement('section');
        section.innerHTML = `<h2>${item.title}</h2>`;
        item.steps.forEach(step => {
            const paragraph = document.createElement('p');
            paragraph.textContent = step;
            section.appendChild(paragraph);
        });
        contentDiv.appendChild(section);
    });
}
