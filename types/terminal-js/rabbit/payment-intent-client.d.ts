import IxStripeRestClient from '../network/ix-stripe-client';
import IxHttpClientService from '../network/ix-http-client.service';
import ConnectionTokenMgr from './connection-token-mgr';
import { NetworkMonitor } from '../monitor/network-monitor';
import { StripeApiModels } from '../ixmodel/app/model/com/goindex/proto/stripe.model';
export interface LoadPaymentIntentParams {
    client_secret: string;
}
export default class PaymentIntentClient extends IxStripeRestClient<StripeApiModels.PaymentIntent> {
    private connectionTokenMgr;
    static CLIENT_SECRET_REGEX: RegExp;
    constructor(httpClient: IxHttpClientService, connectionTokenMgr: ConnectionTokenMgr, networkMonitor: NetworkMonitor);
    getPaymentIntentIdFromClientSecret(clientSecret: string): string;
    loadPaymentIntentBySecret(clientSecret: string): Promise<StripeApiModels.PaymentIntent>;
}
