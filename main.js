function getSizeValue(valueWithUnit, unit) 
{
    return
    parseInt(valueWithUnit.split(unit)[0]);
}
function balloon(event) 
{
    switch (event.keyCode) 
    {
        case 40:
            alert('Pressed downkey(d), it should deflate');
    changeSize('.balloon',1.1,'down');
break;
        case 38:
            alert('Pressed upkey(I), it should inflate');
    changeSize('balloon', 1.1);
break;
default:
    return;
    }
}

function question() 
{
    $('.exercise').toggleClass('active');
}

function changeSize(element, amount, direction) 
{
    element = document.querySelector(element);
    let elementSize = window.getComputerStyle(element).fontSize;
    let elementSizeValue = getSizeValue(elementSize, 'px');

    if (direction === undefined) {
        elementSizeValue *= amount;
    } else elementSizeValue /= amount;

    if (elementSizeValue <=250) {
        console.log(elementSize);
        elementSize = Math.ceil(elementSizeValue) + 'px';
        element.style.fontSize = elementSize;
    } 
    else boom(element);
}

function boom(element) 
{
    element.firstChild.nodeValue ='💥';
    document.removeEventListener('keyup', balloon, true);
}

document.addEventListener('keyup', balloon, true);

button = document.querySelector('button', true);
button.addEventListener('click', question, true);
