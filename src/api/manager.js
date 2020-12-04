/* @flow */
'use strict';

import Remote from './remote';
import Connector from './connector';
import LGTV from 'lgtv2';
const fs = require('fs');


const path = require('path');
const appDir = path.dirname(require.main.filename);
const configLocation = appDir + '/../config.key';


// Somehow the internal file storage was trying to read an directory as a folder and crashed, probably WSL related stuff
let key = '';
if(fs.existsSync(configLocation)){
    key = fs.readFileSync(configLocation, { encoding: 'utf-8' });
}
const internalConfig: LGTV.Config = {
    reconnect: false,
    timout: 3000,
    saveKey: (key) => {
        fs.writeFileSync(configLocation, key, { encoding: 'utf-8' });
    },
    clientKey: key,
};


class Manager {
    connector: Connector;
    remote: Remote;

    constructor(config: Object) {
        config = this.mergeConfig(config);

        this.connector = new Connector(config);
        this.remote = new Remote(this.connector);

        // Try to connect.
        this.connector.connect()
            .then(() => {
                if (this.config.debug) { console.log('Connected to TV'); }
                console.log('Config in connect.constructor: %o', this.config);
                this.connector.connected = true;
            }, (err) => {
                if (this.config.debug) { console.log('Manager.contructor error: ' + err); }
                this.connector.connected = false;
            });
    }

    isConnected(): bool {
        return this.connector.connected;
    }

    mergeConfig(config: Object): Object {
        return Object.assign({}, config, internalConfig);
    }
}

export default Manager;
