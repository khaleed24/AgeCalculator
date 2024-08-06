document.getElementById('age-calc').addEventListener('submit',function(event) {
    event.preventDefault();
    const birthYear = document.getElementById('birthYear').value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    
    const calculate = document.getElementById('result');

    if (birthYear > currentYear || birthYear < 1900 || birthYear ==="") {
       calculate.textContent ='Please enter a valid year of birth.';

    } else {
        calculate.textContent = `You are ${age} years old.`;
    }
});