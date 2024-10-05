function submitOrder() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const menuItems = [
        { name: 'Omelet Telur', price: 15000 },
        { name: 'Nasi Goreng', price: 20000 },
        { name: 'Seblak', price: 10000 }
    ];
    
    if (checkboxes.length > 0) {
        console.log("Pesanan Anda:");
        checkboxes.forEach((checkbox, index) => {
            console.log(`${menuItems[index].name} - Rp. ${menuItems[index].price}`);
        });
    } else {
        console.log("Tidak ada pesanan yang dipilih.");
    }
}
