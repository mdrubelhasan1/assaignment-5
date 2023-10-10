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
document.getElementById('area-parallelogram').addEventListener('click',function(){
    const base = getInputFieldValueById('parallelogram-input1');
    const height = getInputFieldValueById('parallelogram-input2');
    const area = base * height;
    setTextElementValueById('parallelogram-area',area);

     // Validate check: number and negative number:
     if(isNaN(base) || isNaN(height)){
        alert('Please enter a number');
    }
    if(base < 0 || height < 0){
        alert('Please enter positive number');
        return;
    }
});

// Rhombus area calculate:

document.getElementById('btn-rhombus').addEventListener('click',function(){
    const d1 = getInputFieldValueById('input-d1');
    const d2 = getInputFieldValueById('input-d2');
    const area = 0.5 * d1 * d2;
    setTextElementValueById('rhombus-area', area);

     // Validate check: number and negative number:
     if(isNaN(d1) || isNaN(d2)){
        alert('Please enter a number');
    }
    if(d1 < 0 || d2 < 0){
        alert('Please enter positive number');
        return;
    }
});

// Pentagon area calculate:
document.getElementById('btn-pentagone').addEventListener('click', function(){
    const valueP = getInputFieldValueById('input-p');
    const valueB = getInputFieldValueById('input-b');
    const area = 0.5 * valueP * valueB;
    setTextElementValueById('pentagon-area', area);

     // Validate check: number and negative number:
     if(isNaN(valueP) || isNaN(valueB)){
        alert('Please enter a number');
    }
    if(valueP < 0 || valueB < 0){
        alert('Please enter positive number');
        return;
    }
});

// Ellipse area calculate:

