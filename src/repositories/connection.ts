import { Pool } from 'pg';

export default new Pool ({
    connectionString: 'postgres://postgres:root@localhost:5432/yugioh',
    idleTimeoutMillis: 30000
});