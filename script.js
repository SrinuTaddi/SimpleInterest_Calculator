const calBtn = document.getElementById('calBtn')
calBtn.addEventListener('click', function(event){
    event.preventDefault()

    
    let p = document.getElementById('principal').value
    let t = document.getElementById('timespan').value
    let r = document.getElementById('rateOfInt').value

    p = Number(p)
    t = Number(t)
    r = Number(r)

    if(p > 0 && t > 0 && r > 0){


    let result = getSimpleInterest(p, t, r);
    let amount = p + result

    document.getElementById('resultBox').classList.add('show')
    document.getElementById('p').innerHTML = 'Rs. '+ p
    document.getElementById('t').innerHTML = t
    document.getElementById('r').innerHTML = r + '%'
    document.getElementById('result').innerHTML = 'Rs. '+ result
    document.getElementById('amount').innerHTML = 'Rs. '+ amount

     document.getElementById('principal').value = ' '
     document.getElementById('timespan').value = ' '
     document.getElementById('rateOfInt').value = ' '

    }
    else {
        alert("Please Enter All Fields !")
    }

})

function getSimpleInterest(p, t, r){
    let si = (p * t * r)/100;
    return si;
}