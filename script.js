document.getElementById('age-calc').addEventListener('submit',function(event) {
    event.preventDefault();
    const birthYear = document.getElementById('birthYear').value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    
    if (birthYear > currentYear || birthYear < 1900) {
        document.getElementById('result').textContent ='Please enter a valid year of birth.';

    } else {
        document.getElementById('result').textContent = `You are ${age} years old.`;
    }
});