import checkPropTypes from "check-prop-types";

export const FindTestValue = (component, value) => {
  const container = component.find(`[data-test='${value}']`);
  return container;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
