document.querySelectorAll(".checkbox_div").forEach ((i) => {
    i.addEventListener("change", () => {
        i.style.backgroundColor = (i.style.backgroundColor !== "black") ? "black" : "initial";
    //     if (i.style.backgroundColor !== "black"){
    //         i.style.backgroundColor = "black";
    //     }
    //     else{
    //         i.style.backgroundColor = "initial";
    //     }
    })
})