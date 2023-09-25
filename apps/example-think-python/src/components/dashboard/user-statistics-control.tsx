"use client";

import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/client-components";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useTransition } from "react";
import { ReadingTimeChartLevel } from "@/types/reading-time";
import Spinner from "../spinner";

export const UserStatisticsControl = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			// @ts-ignore
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams],
	);

	let defaultValue: string;
	if (searchParams) {
		const level = searchParams.get("reading_time_level");
		if (level && level in ReadingTimeChartLevel) {
			defaultValue = level;
		} else {
			defaultValue = ReadingTimeChartLevel.week_1;
		}
	} else {
		defaultValue = ReadingTimeChartLevel.week_1;
	}

	return (
		<div className="flex items-center gap-4">
			<p className="text-sm font-semibold">Change time span</p>
			<Select
				defaultValue={defaultValue}
				onValueChange={(val) => {
					router.push(
						`${pathname}?${createQueryString("reading_time_level", val)}`,
					);
				}}
			>
				<SelectTrigger className="w-[200px]">
					<SelectValue placeholder="Select a time span" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value={ReadingTimeChartLevel.week_1}>
						Last week
					</SelectItem>
					<SelectItem value={ReadingTimeChartLevel.week_2}>
						Last two weeks
					</SelectItem>
					<SelectItem value={ReadingTimeChartLevel.month_1}>
						Last month
					</SelectItem>
					<SelectItem value={ReadingTimeChartLevel.month_2}>
						Last two months
					</SelectItem>
					<SelectItem value={ReadingTimeChartLevel.month_3}>
						Last three months
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};
