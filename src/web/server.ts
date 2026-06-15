import '../env';
import { Elysia } from 'elysia';
import { getLogger } from '../logger';
import { cleanupOldJobs } from '../test_runner';
import { syncDepositsFromAlpaca } from './deposits';
import { authGuard } from './middleware/auth';
import { staticRoutes } from './routes/static';
import { dashboardRoutes } from './routes/dashboard';
import { chartDataRoutes } from './routes/chart-data';
import { promptRoutes } from './routes/prompts';
import { depositRoutes } from './routes/deposits';
import { sp500Routes } from './routes/sp500';
import { commitRoutes } from './routes/commits';
import { logRoutes } from './routes/logs';
import { portfolioRoutes } from './routes/portfolio';
import { authGoogleRoutes } from './routes/auth-google';
import { testJobRoutes } from './routes/test-jobs';

const logger = getLogger('web-server');
const PORT = process.env.PORT || 3000;

const app = new Elysia()
  .use(authGuard)
  .use(staticRoutes)
  .use(dashboardRoutes)
  .use(chartDataRoutes)
  .use(promptRoutes)
  .use(depositRoutes)
  .use(sp500Routes)
  .use(commitRoutes)
  .use(logRoutes)
  .use(portfolioRoutes)
  .use(authGoogleRoutes)
  .use(testJobRoutes)
  .listen(PORT);

logger.info({ port: PORT }, `Dashboard running at http://localhost:${PORT}`);

if (process.env.NODE_ENV !== 'test') {
  setInterval(syncDepositsFromAlpaca, 60 * 60 * 1000);
  syncDepositsFromAlpaca().catch(err => logger.warn({ err }, 'Initial deposit sync failed'));
  setInterval(() => cleanupOldJobs(), 10 * 60 * 1000);
}
