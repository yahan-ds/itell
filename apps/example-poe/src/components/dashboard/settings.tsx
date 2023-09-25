import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@itell/ui/server";
import { Separator } from "@/components/client-components";
import { User } from "@prisma/client";
import { getTeacherWithClassId } from "@/lib/class";
import { ClassInfo } from "./settings/class-info";
import { Profile } from "./settings/profile";
import { ClassRequestModal } from "./settings/class-request-modal";

export const Settings = async ({ user }: { user: User }) => {
	const teacher = await getTeacherWithClassId(user.classId);

	return (
		<div>
			<Card>
				<CardHeader>
					<CardTitle>Edit your settings</CardTitle>
					<CardDescription>configure the textbook to your need</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Profile user={user} />
					<Separator />
					<ClassInfo teacher={teacher} />
				</CardContent>
			</Card>
			<ClassRequestModal user={user} />
		</div>
	);
};
