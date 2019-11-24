let operatingSystems = [
    {
        name:'Android',
        version:'5.0 / Lollipop'
    },
    {
        name:'ios',
        version:'11'
    },
    {
        name:'mango',
        version:'5'
    },
    {
        name:'rim',
        version:'3'
    },
    {
        name:'windows',
        version:'10'
    },
    {
        name:'linux',
        version:'5'
    }
]

let table=document.getElementById('tableos');

operatingSystems.forEach(os => {
    let row = document.createElement('tr');
    row.onclick = () =>{
        let labelos=document.getElementById('labelos');
        labelos.textContent=os.name;

        let labelver=document.getElementById('labelver');
        labelver.textContent=os.version;
    }
    
    let tdos = document.createElement('td');
    tdos.innerHTML = os.name;
    row.appendChild(tdos);

    let tdver = document.createElement('td');
    tdver.innerHTML = os.version;
    row.appendChild(tdver);

    let tdcost = document.createElement('td');
    let inp=document.createElement('input');
    inp.type='number';
    inp.onkeyup = event => {
        console.log(event.target.value)
    }
    tdcost.appendChild(inp);
    row.appendChild(tdcost);

    table.appendChild(row);
})
console.log(document);