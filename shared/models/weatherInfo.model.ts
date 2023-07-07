export interface IWeatherInfo {
	lat: number;
	lon: number;
	tzinfo: {
		name: string;
		abbr: string
		dst: boolean;
		offset: number;
	};
	def_pressure_mm: number;
	def_pressure_pa: number;
	url: string;
}
