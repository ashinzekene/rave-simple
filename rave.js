const RAVE_TEST_URL = 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js';
const RAVE_LIVE_URL = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';

const raveLoaded = () => typeof window.getpaidSetup === 'function';

let globalConfig = {};

export const setGlobalConfig = (config) => {
  globalConfig = { ...globalConfig, config };
};

const Rave = ({ test = false } = {}) => {
  let instanceConfig = { ...globalConfig };

  const init = ({ timeout = 10000 } = {}) => new Promise((resolve, reject) => {
    if (raveLoaded()) resolve();
    const rejectPromise = setTimeout(reject, timeout, new Error('Could not fetch rave script'));
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    document.body.appendChild(script);
    script.onload = () => {
      clearTimeout(rejectPromise);
      resolve();
    };
    script.src = test ? RAVE_TEST_URL : RAVE_LIVE_URL;
  });

  const addOptions = (config) => {
    instanceConfig = { ...instanceConfig, ...config };
  };

  let close = () => {};

  const pay = async () => {
    await init();
    const paymentInstance = window.getpaidSetup(instanceConfig);
    close = paymentInstance.close; // eslint-disable-line prefer-destructuring
    return paymentInstance;
  };

  return {
    init,
    addOptions,
    pay,
    close,
  };
};

export default Rave;
