import {NightWatchOptions} from 'nightwatch';
import paths from './paths';

var seleniumServer = require('selenium-server');
var chromeDriver = require('chrome-driver-standalone');
var geckoDriver = require('geckodriver');

const settings: NightWatchOptions = {
	src_folders: [paths.tests],
	output_folder: paths.reports,
	page_objects_path: paths.pages,
	custom_commands_path: [paths.commands],
	custom_assertions_path: [paths.assertions],
	// globals_path: paths.globals,
	selenium: {
		server_path: seleniumServer.path,
		start_process: true,
		start_session: true,
		log_path: false,
		host: '127.0.0.1',
		port: 4444,
		cli_args: {
			'webdriver.chrome.driver': chromeDriver.path,
			'webdriver.gecko.driver': geckoDriver.path,
		},
	},
	test_settings: {
		default: {
			launch_url: 'http://localhost',
			selenium_host: '127.0.0.1',
			selenium_port: 4444,
			silent: true,
			output: true,
			disable_colors: false,
			screenshots: {
				enabled: true,
				path: paths.screenshots,
				on_failure: true,
				on_error: true,
			},
			desiredCapabilities: {
				browserName: 'chrome',
				chromeOptions: {
					args: ['window-size=1920,1280', '--disable-gpu' /*, 'headless'*/],
				},
				javascriptEnabled: true,
				acceptSslCerts: true,
			},
			globals: {},
			use_xpath: true,
			end_session_on_fail: false,
			skip_testcases_on_fail: false,
		},
		chrome: {
			desiredCapabilities: {
				browserName: 'chrome',
				javascriptEnabled: true,
				acceptSslCerts: true,
			},
		},
		firefox: {
			desiredCapabilities: {
				browserName: 'firefox',
				marionette: true,
				javascriptEnabled: true,
				acceptSslCerts: true,
			},
		},
	},
	test_workers: {
		enabled: true,
		workers: 'auto',
	},
};

export = settings;
