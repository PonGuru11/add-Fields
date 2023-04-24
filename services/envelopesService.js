const axios = require('axios');
const EnvelopeDAO = require('../dao/envelopeDAO');

exports.createEnvelope = async (returnUrl,envelopeId) => {
  
  const payload = {
   returnUrl,
   envelopeId
  };

  // Send the request to DocuSign API
  const envelopeResponse = await axios.post(
    EnvelopeDAO.getEnvelopeApiUrl(),
    payload,
    { headers: EnvelopeDAO.getEnvelopeApiHeaders() }
  );

  return envelopeResponse.data;
};

