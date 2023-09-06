import { useEffect, useRef, useState } from 'react';

function App() {
  const refContainer = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const sendDataTestB2CDA = async () => {
      setTimeout(async () => {
        if (loaded && refContainer.current ) {
          const payload = {
            token : 
            "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImxnYXJjaWFAbHVtc3Rvbi5jb20iLCJpZCI6ImIwMjZhMjQyLWFlNjItNGNlYy05M2U1LWIzYmU5Njc3NjM0OCIsImZpcnN0TmFtZSI6IkxhdXJhIiwibGFzdE5hbWUiOiJHYXJjaWEgR2FyY2lhIiwiZ2VuZXJhdGVkS2V5IjoiaURmQWNSVSRoPG4zcjVidTU9d0tMdTdWNDFJYVd2dGN1b0VDIiwiaXNzIjoibGlkZXJseSIsImlhdCI6MTY5MzU5NTcyMCwiZXhwIjoxNjkzNjgyMTIwLCJzdWIiOiJzc28ifQ.lCKTLbNktyJj-Kav03IObEviC1Z3qW_008G0uHHGV3I"
          }
          //refContainer.current.contentWindow?.postMessage(payload, "https://digital-academy-391817.web.app");
          //refContainer.current.contentWindow?.postMessage(payload, "https://digital-academy-qa.web.app");
          refContainer.current.contentWindow?.postMessage(payload, "http://localhost:5174");
        }
      }, 1000);
    };
    sendDataTestB2CDA();
  }, [loaded]);

  return (
    <>
    <h3> Iframe sso</h3>


      <iframe
        id='digital_academy'
        onLoad={() => setLoaded(true)}
        //src={`https://digital-academy-391817.web.app`}
        //src={`https://digital-academy-qa.web.app`}
        src={`http://localhost:5174`}
        allow='clipboard-read; clipboard-write'
        style={{ overflow: 'hidden' }}
        width={1900}
        height={900}
        ref={refContainer}
      />

    </>
  )
}

export default App
