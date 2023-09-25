import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const defaultNoteColorLight = "#75a7f8";
export const defaultNoteColorDark = "#a3bffa";
export const defaultHighlightColor = "yellow";

export const useNoteColor = () => {
	const { theme } = useTheme();
	const [noteColor, setNoteColor] = useState(defaultNoteColorLight);

	useEffect(() => {
		if (theme === "dark") {
			setNoteColor(defaultNoteColorDark);
		} else {
			setNoteColor(defaultNoteColorLight);
		}
	}, [theme]);

	return noteColor;
};