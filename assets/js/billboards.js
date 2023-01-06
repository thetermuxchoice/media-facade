window.addEventListener("DOMContentLoaded", ()=>{
    const btnMoreInfo = document.querySelectorAll(".actions .btn")
    const btnBack = document.querySelectorAll(".more-info .btn-back")
    const moreInfo = document.querySelectorAll(".more-info")
    for (let index = 0; index < btnMoreInfo.length; index++) {
        btnMoreInfo[index].addEventListener("click", ()=>{
            moreInfo[index].classList.add("more-info-open")
            btnBack[index].addEventListener("click", ()=>{
                moreInfo[index].classList.remove("more-info-open")
            })
        })
    }
})