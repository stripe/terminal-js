import IxJackRabbitRpcService from '../rabbit/ix-jack-rabbit-rpc.service';
import JackRabbitConnectionMgr from '../rabbit/jack-rabbit-connection-mgr';
import IxJackRabbitService from '../rabbit/ix-jack-rabbit.service';
import ConnectionTokenMgr from '../rabbit/connection-token-mgr';
import { NetworkMonitor } from '../monitor/network-monitor';
export declare module RabbitTestUtils {
    const fakeIp = "192.168.5.107";
    const fakePosId = "pos-fakeId";
    const fakeRpcEndpoint: {
        url_path: string;
        port: number;
    };
    const fakeReader: {
        id: string;
        object: string;
        device_type: string;
        ip_address: string;
        serial_number: string;
    };
    const fakeActivationToken = "fake_activationtoken";
    function createTestNetworkMonitor(): NetworkMonitor;
    function createTestConnectionTokenMgr(): ConnectionTokenMgr;
    function createTestJackRabbitRpcService(endpoint?: string, networkMonitor?: NetworkMonitor): IxJackRabbitRpcService;
    function createTestJackRabbitConnectionMgr(rpcService?: IxJackRabbitRpcService, activationTokenMgr?: ConnectionTokenMgr): JackRabbitConnectionMgr;
    function createTestJackRabbitService(querySettleMs: number, connectionMgr?: JackRabbitConnectionMgr): IxJackRabbitService;
    function createTestContext(): {
        activationTokenMgr: ConnectionTokenMgr;
        rpcService: IxJackRabbitRpcService;
        connectionMgr: JackRabbitConnectionMgr;
        jackRabbitService: IxJackRabbitService;
    };
}
