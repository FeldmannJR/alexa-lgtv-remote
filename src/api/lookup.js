/* @flow */
'use strict';

const appDictionary = {
    'accessibility': 'com.webos.app.accessibility',
    'amazon': 'amazon.global',
    'prime': 'amazon.global',
    'cackle': 'cackle',
    'channelplus': 'channelplus.us',
    'deviceconnector': 'com.webos.app.connectionwizard',
    'fandango': 'com.mgo.mgowebos',
    'gallery': 'com.webos.app.igallery',
    'google': 'googleplaymovieswebos',
    'guide': 'com.webos.app.tvguide',
    'hulu': 'hulu',
    'spotify': 'spotify-beehive',
    'lgstore': 'com.webos.app.discovery',
    'live': 'com.webos.app.livetv',
    'music': 'com.webos.app.music',
    'netflix': 'netflix',
    'notifications': 'com.webos.app.notificationcenter',
    'photo': 'com.webos.app.photovideo',
    'plex': 'cdp-30',
    'screenshare': 'com.webos.app.miracast',
    'search': 'com.webos.app.voice',
    'sling': 'com.movenetworks.app.sling-tv-sling-production',
    'tv': 'com.webos.app.livetv',
    'tvscheduler': 'com.webos.app.scheduler',
    'userguide': 'com.webos.app.tvuserguide',
    'vudu': 'vudu',
    'webbrowser': 'com.webos.app.browser',
    'youtube': 'youtube.leanback.v4',

    // inputs
    'hdmi1': 'com.webos.app.hdmi1',
    'hdmi2': 'com.webos.app.hdmi2',
    'hdmi3': 'com.webos.app.hdmi3',
    'hdmi4': 'com.webos.app.hdmi4',

    // custom stuff
    'dvd': 'com.webos.app.hdmi1',
    'chromecast': 'com.webos.app.hdmi2',
    'playstation': 'com.webos.app.hdmi3',
    'ps4': 'com.webos.app.hdmi4',
};

class Lookup {

    static app(app: string): string {
        // Some sanity operations first.

        app = app.toLowerCase();
        app = app.replace(/[^a-z1-9]/gi, '');

        console.log('try to resolve app ' + app);

        const contains = Object.keys(appDictionary).filter(key => app.includes(key));

        if (contains.length == 1) {
            return appDictionary[contains[0]];
        }
        if (!appDictionary.hasOwnProperty(app))
            return false;

        return appDictionary[app];
    }
}

export default Lookup;
