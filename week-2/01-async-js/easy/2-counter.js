let count = 0;

const timer = () => {
    console.log("Count : "+count);
    count++;
    setTimeout(timer, 1000);
}

timer();