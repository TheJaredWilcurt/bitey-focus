const fs = require('fs');
const path = require('path');
const settingsLocation = path.join(nw.App.dataPath, 'settings.json');

const APP_TITLE = 'WuhdAppusDat';
const DEFAULT_TEXT_COLOR = '#FFEB3B';
const DEFAULT_TEXT_SHADOW = 'black';

function loadSettings () {
  const settings = {}
  if (!fs.existsSync(settingsLocation)) {
    return settings;
  }
  try {
    let contents = JSON.parse(fs.readFileSync(settingsLocation));
    return contents;
  } catch (err) {
    console.log('Error loading settings', err);
    return settings;
  }
}

function saveSettings (settings) {
  const data = JSON.stringify(settings, null, 2);
  try {
    fs.writeFileSync(settingsLocation, data);
  } catch (err) {
    console.log('Error saving settings', err);
  }
  global.parentWindow.refresh();
}

