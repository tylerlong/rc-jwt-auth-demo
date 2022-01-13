import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  server: process.env.RINGCENTRAL_SERVER_URL,
});

const main = async () => {
  await rc.getToken({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: process.env.RINGCENTRAL_JWT_TOKEN,
  });
  const extInfo = await rc.restapi().account().extension().get();
  console.log(extInfo);
  await rc.revoke();
};

main();
