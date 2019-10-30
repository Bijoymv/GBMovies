const FindTestValue = (component,value) => {
    const container = component.find(`[data-test='${value}']`);
    return container;
};

export default FindTestValue;