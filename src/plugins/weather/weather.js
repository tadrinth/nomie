/**
 * A hopeful plugin - but ive run into API issues
 */
import WeatherSettings from './settings.svelte';
import WeatherMainPage from './default.svelte';

export default {
	emoji: '⛅️',
	name: 'Weather',
	id: 'nomie-weather',
	pages: {
		settings: WeatherSettings,
		default: WeatherMainPage,
	},
	// tab: {
	// 	icon: 'sun',
	// 	label: 'Weather',
	// },
};
