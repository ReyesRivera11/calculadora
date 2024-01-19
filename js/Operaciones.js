const screen = document.getElementById("show-result");

const show = (n) =>{
    if(screen.value === "Error"){
        return screen.value = "Error";
    }
    screen.value += n
}

const deleteAll = () => screen.value = "";

const deleteByOne = () => {
    const value = screen.value;
    if (value === "Error") {
        screen.value = "";
    }
    screen.value = screen.value.slice(0, -1);
}


const result = () => {
    const value = parseFloat(screen.value);
    if (isNaN(value) || value === Infinity) {
        return screen.value = "Error";
    }
    screen.value = eval(screen.value);
}

const porcentage = () => {
    const value = parseFloat(screen.value);
    if (isNaN(value) || value === Infinity) {
        return screen.value = "Error";
    }
    screen.value = screen.value / 100;
}

const negativePositive = () => {
    const currentValue = screen.value;
    if (!isNaN(currentValue) && currentValue !== "") {
        const newValue = parseFloat(currentValue) * -1;
        screen.value = newValue.toString();
    }
};

const reverse = () => {
    const value = parseFloat(screen.value);
    if (isNaN(value) || value === Infinity) {
        return screen.value = "Error";
    } else if (value === 0) {
        return screen.value = "No puedes dividir entre 0";
    } else {
        screen.value = 1 / value;
    }

};

const square = () => {
    const value = parseFloat(screen.value);
    if (isNaN(value) || value === Infinity) {
        return screen.value = "Error";
    }
    screen.value = screen.value * screen.value;
}

const squareRoot = () => {
    const value = parseFloat(screen.value);
    if (isNaN(value) || value === Infinity) {
        return screen.value = "Error";
    }
    screen.value = eval(`Math.sqrt(${screen.value})`)
}


export { show, deleteAll, result, deleteByOne, porcentage, negativePositive, reverse, square, squareRoot }


