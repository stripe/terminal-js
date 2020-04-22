import Terminal from './terminal';
import { TerminalProps } from './terminal-props';
/**
 * The {@code TerminalFactory} contains factory functions
 for creating Terminal objects
 *
 * @author evan@index.com
 */
export declare class TerminalFactory {
    /**
     * Creates a Terminal instance using the provded credentials
     * service and discovery service
     * @param props the config and callback functions needed by the Terminal
     */
    static create(props: TerminalProps): Terminal;
}
export declare function create(config: TerminalProps): Terminal;
