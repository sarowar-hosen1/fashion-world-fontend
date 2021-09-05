export const makeUniqueArray = (array) => {
    const uniqueArray = array.reduce((accumolator, currentValue) => {
        if (!accumolator.some(obj => obj.id === currentValue.id)) {
            accumolator.push(currentValue);
        }
        return accumolator;
    }, []);
    return uniqueArray
}
