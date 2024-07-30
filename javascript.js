function check() {
    const panVal = document.getElementById('pan').value;
    const regpan = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

    if (regpan.test(panVal)) {
        document.getElementById('panerror').textContent = 'Valid'; // Valid PAN
    } else {
        document.getElementById('panerror').textContent = 'Invalid PAN'; // Invalid PAN
     }
        }