import { createAlpacaClient, getConfiguredAlpacaModes } from './src/tools/alpaca_client_factory';
const { defaultMode } = getConfiguredAlpacaModes();
const alpaca = createAlpacaClient(defaultMode);

alpaca.getAccountActivities({ activityTypes: ['TRANS'] })
  .then(res => console.log('TRANS Activities:', res))
  .catch(err => console.error('TRANS error:', err.message));
