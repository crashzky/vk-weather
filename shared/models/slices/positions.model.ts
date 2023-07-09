export interface IState {
	initialPosition: IPosition | null;
	otherPositions: IPosition[];
}

export interface IPosition {
	name: string;
	lat: number;
	lon: number;
}

export interface IUpdatePosition {
	id: number;
	position: IPosition;
}
