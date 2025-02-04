import { useEffect, useRef, useState } from 'react';

/*todo componente renderiza novamente quando um item muda,
o setstate dentro do use effect pode causar um loop
um objeto quando é criado ele sempre referencia em lugar diferente da memória

 */

const isObjectEqual = (objectA, objectB) => {
  return JSON.stringify(objectA) === JSON.stringify(objectB);
};

export const useFetch = (url, options) => {
  //passo 1 -> ter um estado dentro da fetch
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  //passando referencia
  //use ref não causa necessidade de dependencia, assim ja não precisaremos passar mais dependencias para o use effect
  const urlRef = useRef(url);
  const optionRef = useRef(options);
  //passo 2 -> passar info da url e options
  useEffect(() => {
    let changed = false;
    if (!isObjectEqual(url, urlRef.current)) {
      urlRef.current = url;
      changed = true;
    }
    if (!isObjectEqual(options, optionRef.current)) {
      optionRef.current = options;
      changed = true;
    }
    if (changed) {
      setShouldLoad((prevShould) => !prevShould);
    }
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));
      // eslint-disable-next-line no-useless-catch
      try {
        const response = await fetch(urlRef.current, {
          signal,
          ...optionRef.current,
        });
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) {
          setLoading(false);
        }
        throw e;
      }
    };

    fetchData();
    return () => {
      wait = true;
      //controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};
