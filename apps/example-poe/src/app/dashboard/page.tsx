import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StudentClassCount } from "@/components/dashboard/student/student-class-count";
import { UserStatistics } from "@/components/dashboard/user-statistics";
import { DashboardShell } from "@/components/shell";
import Spinner from "@/components/spinner";
import { getCurrentUser } from "@/lib/auth";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getUser } from "@/lib/user";
import { Progress } from "@/components/client-components";
import { allSectionsSorted } from "@/lib/sections";
import { UserProgress } from "@/components/dashboard/user/user-progress";

const title = "Learning Statistics";
const description = "Understand your learning journey";

export const metadata: Metadata = {
	title,
	description,
};

export default async function () {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return redirect("/auth");
	}

	const user = await getUser(currentUser.id);

	if (!user) {
		return redirect("/auth");
	}

	return (
		<DashboardShell>
			<DashboardHeader heading={title} text={description} />

			<div className="space-y-4">
				<div className="px-2">
					<UserProgress user={user} />
				</div>
				{user.classId ? (
					<p className="p-2 text-muted-foreground">
						You are enrolled in a class with{" "}
						<Suspense fallback={<Spinner className="inline" />}>
							<StudentClassCount classId={user.classId} />
						</Suspense>{" "}
						other students
					</p>
				) : (
					<p className="p-2 text-muted-foreground">
						You are not enrolled in any class. Enter your class code in{" "}
						<Link href="/dashboard/settings#enroll" className="underline">
							Settings
						</Link>{" "}
						to enroll in a class
					</p>
				)}

				<UserStatistics user={user} />
			</div>
		</DashboardShell>
	);
}
