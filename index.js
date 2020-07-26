const preLoad = () => {
    const pre = document.getElementById("pre");
    pre.innerHTML = generateAllAlias("johnsmith").join("\n");
}

const generate = (e) => {
    if (e.keyCode === 13){
        const input = document.getElementById("input")
        pre.innerHTML = generateAllAlias(input.value).join("\n");
    }
}

const copy = () => {
    const pre = document.getElementById("pre");
    navigator.clipboard.writeText(pre.innerHTML);
}