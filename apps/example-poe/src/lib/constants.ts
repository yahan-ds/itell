export enum ScoreType {
	content = "content",
	wording = "wording",
	similarity = "topic similarity",
	containment = "topic borrowing",
}

export const ScoreThreshold: Record<ScoreType, number> = {
	[ScoreType.content]: 0,
	[ScoreType.wording]: -1,
	[ScoreType.similarity]: 0.5,
	[ScoreType.containment]: 0.6,
};

export const FOCUS_TIME_COUNT_INTERVAL = 1000;
export const TEXTBOOK_NAME = "macroeconomics-2e";
