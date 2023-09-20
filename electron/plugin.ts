import { WebPlugin } from '@capacitor/core';
import { UDPPlugin } from '../plugin-definition';
const dgram = require('dgram');


export class UDPPluginElectron extends WebPlugin implements UDPPlugin {
  constructor() {
    super({
      name: 'UDPPlugin',
      platforms: ['electron']
    });
  }

  async sendUDPMessage(options: { message: string, ip: string, port: number }): Promise<{ success: boolean }> {
    return new Promise((resolve, reject) => {
      const client = dgram.createSocket('udp4');
      client.send(options.message, options.port, options.ip, (err: any) => {
        client.close();
        if (err) {
          reject({ success: false });
        } else {
          resolve({ success: true });
        }
      });
    });
  }
}

const UDPPlugin = new UDPPluginElectron();

export { UDPPlugin };
