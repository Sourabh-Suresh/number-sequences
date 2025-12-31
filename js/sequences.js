function generateAP(a1, d, n)
{
    let ap = [];
    for(let i = 0; i < n; i++)
    {
        ap.push(a1 + i*d);
    }
    return ap;
}

function generateGP(a1, r, n)
{
    let gp = [];
    gp = Array.from({length: n}, (_, i) => a1 * Math.pow(r, i));
    return gp;
}

function generateFibonacci(n)
{
    let fibonacci = [];
    let a = 1, b = 1;
    while (n-- > 0) {
        fibonacci.push(a);
        [a, b] = [b, a+b];
    }
    return fibonacci;
}


document.getElementById("seqForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let sequence = [];
    const page = document.body.dataset.sequence;

    if (page == "ap") {
        const a1 = parseFloat(document.getElementById("a1").value);
        const d = parseFloat(document.getElementById("d").value);
        const n = parseFloat(document.getElementById("n").value);
        if (isNaN(a1) || isNaN(d) || isNaN(n)) {
            return;
        }
        sequence = generateAP(a1, d, n);
    }
    else if (page == "gp") {
        const a1 = parseFloat(document.getElementById("a1").value);
        const r = parseFloat(document.getElementById("r").value);
        const n = parseFloat(document.getElementById("n").value);
        if (isNaN(a1) || isNaN(r) || isNaN(n)) {
            return;
        }
        sequence = generateGP(a1, r, n);
    }
    else if (page == "fibonacci") {
        const n = parseFloat(document.getElementById("n").value);
        if (isNaN(n)) {
            return;
        }
        sequence = generateFibonacci(n);
    }

    document.getElementById("sequence-result").textContent = sequence.join(", ");
})
