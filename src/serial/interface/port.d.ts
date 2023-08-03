import { Baudrate } from '../type/baudrate.d.ts'
import { DataBits } from '../type/data_bits.d.ts'
import { Parity } from '../type/parity.d.ts'
import { StopBits } from '../type/stop_bits.d.ts'

export interface Port {
    /**
     * Path/name to the port. (E.g. `/dev/ttyACM2`, `COM5`, ...)
     * 
     * @property
     */
    path : string,
    
    /**
     * The baudrate to use for the port.
     * 
     * @property
     */
    baudrate : Baudrate,

    /**
     * The parity to use for the port.
     * 
     * @property
     */
    parity? : Parity,

    /**
     * The data bits to use for the port.
     * 
     * @property
     */
    dataBits? : DataBits,

    /**
     * The stop bits to use for the port.
     * 
     * @property
     */
    stopBits? : StopBits
}
