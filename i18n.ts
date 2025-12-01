import {getRequestConfig} from 'next-intl/server';
  
export default getRequestConfig(async (x) => {

  return {
    locale:x.locale ?? 'en',
    messages: (await import(`messages/${x.locale ?? 'en'}.json`)).default
  };
});