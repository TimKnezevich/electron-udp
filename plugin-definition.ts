import { PluginListenerHandle } from '@capacitor/core';

export interface UDPPlugin {
  sendUDPMessage(options: { message: string, ip: string, port: number }): Promise<{ success: boolean }>;
}