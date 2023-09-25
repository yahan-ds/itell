import { ChapterCombobox } from "@/components/dashboard/chapter-combobox";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import SummaryCreateButton from "@/components/dashboard/summary-create-button";
import { SummaryItem } from "@/components/dashboard/summary-item";
import { DashboardShell } from "@/components/shell";
import { Skeleton } from "@itell/ui/server";

export default function DashboardLoading() {
	return (
		<DashboardShell>
			<DashboardHeader heading="Summary" text="Create and manage summaries">
				<SummaryCreateButton />
			</DashboardHeader>
			<div className="flex items-center flex-col sm:flex-row gap-4 p-2">
				<Skeleton className="h-12 w-[300px]" />
				<Skeleton className="h-12 w-[150px]" />
			</div>
			<div className="divide-border-200 divide-y rounded-md border">
				<SummaryItem.Skeleton />
				<SummaryItem.Skeleton />
				<SummaryItem.Skeleton />
				<SummaryItem.Skeleton />
				<SummaryItem.Skeleton />
			</div>
		</DashboardShell>
	);
}
