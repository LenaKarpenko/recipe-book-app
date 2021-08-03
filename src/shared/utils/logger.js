const DISABLE_LOGS = process.env.REACT_APP_DISABLE_LOGS;

export const log = (...args) => {
  if (DISABLE_LOGS) { return; }
  console.log(...args);
}