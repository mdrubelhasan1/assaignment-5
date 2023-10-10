// Traingle area calculate:
document.getElementById('btn-traingle').addEventListener('click', function(){
    const base = getInputFieldValueById('b-value');
    const height = getInputFieldValueById('h-value');
    const area = 0.5 * base * height;
    setTextElementValueById('traingle-area', area);

    // Validate check: number and negative number:
    if(isNaN(base) || isNaN(height)){
        alert('Please enter a number');
    }
    if(base < 0 || height < 0){
        alert('Please enter positive number')
        return;
    }
    

});
// Rectangle area calculate:
document.getElementById('btn-rectangle').addEventListener('click',function(){
    const width = getInputFieldValueById('rectangle-inputw');
    const length = getInputFieldValueById('rectangle-inputl');
    const area = width * length;
    setTextElementValueById('rectangle-area', area);

    // Validate check: number and negative number:
    if(isNaN(width) || isNaN(length)){
        alert('Please enter a number');
    }
    if(width < 0 || length < 0){
        alert('Please enter positive number');
        return;
    }

});

//Parallelogram area calculate:

