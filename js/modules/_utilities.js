export const setElement = (element, value) => {
    document.querySelector(element).innerHTML = value;
}

export const setBackground = (element, value) => {
    document.querySelector(element).style.background = `url(${value}) no-repeat`;
}

export const setImgSrc = (element, value) => {
    document.querySelector(element).src = value;
}

export const getCurDate = () => {
    let curDate = new Date().toLocaleDateString('en-us', { weekday: "long", month: "long", day: "numeric" });
    document.querySelector('#cur-date').innerHTML = curDate;
}