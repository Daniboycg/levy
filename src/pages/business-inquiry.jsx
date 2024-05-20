import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import Header from '../components/Header';

const BusinessInquiry = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        "theme": "dark",
        "styles": {
          "branding": {
            "brandColor": "#000000"
          }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1F1F1F] to-[#010F23] text-white">
      <Header bgColor="bg-[#1F1F1F]" />
      <div className="flex flex-col lg:flex-row items-center justify-center p-6">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4">
          <img src="/images/cognitiveds.png" alt="Cognitive DS" className="mb-6 w-full max-w-md rounded-3xl" style={{borderRadius: '45px'}} />
        </div>
        <div className="w-full lg:w-1/2 bg-[#1F1F1F] p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">¡LO QUIERO EN MI NEGOCIO!</h1>
          <Cal 
            calLink="danielcarreong/consultoria"
            style={{width: "100%", height: "550px", overflow: "scroll"}}
            config={{layout: 'month_view'}}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInquiry;
