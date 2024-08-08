document.getElementById('age-calc').addEventListener('submit',function(event) {
    event.preventDefault();

    const birthDate = new Date(document.getElementById('birthYear').value);
    const currentDate = new Date();

    if(isNaN(birthDate.getTime()) || birthDate > currentDate) {
        document.getElementById('result').textContent = 'Please enter a valid Date of Birth.';
        return;
    }

    let differenceInMilliseconds = currentDate - birthDate

    const seconds = Math.floor(differenceInMilliseconds / 1000);
    differenceInMilliseconds -= seconds * 1000;

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const days = Math.floor (hours / 24);
    const remainingHours = hours % 24;

    const weeks = Math.floor (days / 7);
    const remainingDays = days % 7;

    const years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();

    if (months < 0) {
        months += 12;
    }
    
    if (currentDate.getDate() < birthDate.getDate() ) {
        months--;
        if ( months < 0) {
            months += 12;
            years--;
        }
    }
    const calculate = document.getElementById('result');

        calculate.textContent = `You are ${years} years, ${months} months, ${weeks} weeks, ${remainingDays} days,` + 
                                `${remainingHours} hours, ${remainingMinutes} minutes, and ${remainingSeconds} seconds.` ;
});