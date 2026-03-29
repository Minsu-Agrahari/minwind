// extract element
const element = document.querySelectorAll("*");

// extract classes startWith "min-"
const customClass = [];
element.forEach(el => {
    el.classList.forEach(cls => {

        if (!cls.includes("min-")) return;

        const parts = cls.split("-");
        const property = parts[1];
        const value = parts[2];
        
        // console.log(`--> ${property} - ${value}`)

        // background color
        switch (property) {
            case "text": // text color: min-text-red
                applyStyle(el, "color", parts[2]);
                break;
            case "bg": // background color: min-bg-red
                applyStyle(el, "background", parts[2]);
                break;
            case "fs": // font size: min-fs-50
                applyStyleUnit(el, "fontSize", parts[2]);
                break;
            case "fw": // font weight: min-fw-bold
                applyStyle(el, "fontWeight", parts[2]);
                break;
            case "p": // padding: min-p-2
                applyStyleUnit(el, "padding", parts[2]);
                break;
            case "m": // margin: min-m-2
                applyStyleUnit(el, "margin", parts[2]);
                break;
            case "border": // boarder: min-border-size
                applyStyleUnit(el, "border", parts[2]);
                break;
            case "rounded": // border-radius: min-rounded-5
                applyStyleUnit(el, "borderRadius", parts[2]);
                break;
            case "w": // width: min-w-50
                applyStyleUnit(el, "width", parts[2]);
                break;
            case "h": // height: min-h-50
                applyStyleUnit(el, "height", value);
                break;
            case "top": // top: min-top-5
                applyStyleUnit(el, "top", value);
                break;
            case "left": // left: min-left-5
                applyStyleUnit(el, "left", value);
                break;
            default:
                return "";
        }
    })
})

// -- Helper Function --
function applyStyle(el, property, value) {
    el.style[property] = value;
}
function applyStyleUnit(el, property, value) {
    el.style[property] = value + "px";
}

