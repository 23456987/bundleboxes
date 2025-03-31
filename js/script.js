function selectBundle(pairs, price) {
    document.getElementById('totalPrice').textContent = price.toFixed(2);

    // Remove previous selections
    document.querySelectorAll('.bundle-option').forEach(option => {
        option.classList.remove('selected');
        option.querySelector(".size-color")?.remove(); // Remove existing dropdown
    });

    // Get selected bundle
    let selectedBundle = document.querySelector(`#bundle${pairs}`).parentElement;
    selectedBundle.classList.add('selected');

    // Create dropdown container
    let sizeColorDiv = document.createElement("div");
    sizeColorDiv.classList.add("size-color");

    for (let i = 1; i <= pairs; i++) {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
            <label>#${i}</label>
            <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
            </select>
            <select>
                <option>Colour</option>
                <option>Red</option>
                <option>Blue</option>
            </select>
        `;
        sizeColorDiv.appendChild(itemDiv);
    }

    selectedBundle.appendChild(sizeColorDiv);
}
