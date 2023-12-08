const formatedTime = (timeInSecond) => {
    const minutes = Math.floor(timeInSecond / 60);
    const seconds = timeInSecond % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
};

export default formatedTime;