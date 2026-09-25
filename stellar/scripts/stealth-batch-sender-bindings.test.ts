import { Account, Networks } from '@stellar/stellar-sdk';
import { describe, expect, it, vi } from 'vitest';
import { Client } from '../bindings/typescript/stealth-batch-sender/src/index.js';

describe('stealth-batch-sender generated client', () => {
  it('assembles a typed max_batch_size call', async () => {
    const server = { getAccount: vi.fn().mockResolvedValue(new Account('GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF', '1')) };
    const client = new Client({ contractId: 'CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSC4', networkPassphrase: Networks.TESTNET, rpcUrl: 'http://localhost:8000', server: server as never });
    const transaction = await client.max_batch_size({ simulate: false });

    expect(server.getAccount).toHaveBeenCalledOnce();
    expect(transaction.options.method).toBe('max_batch_size');
  });
});
