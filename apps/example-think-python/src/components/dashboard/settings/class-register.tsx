import { JoinClass } from "./join-class";

export const ClassRegister = async () => {
	return (
		<div className="space-y-4" id="enroll">
			<h3 className="mb-4 text-lg font-medium">Class Registration</h3>
			<JoinClass />
		</div>
	);
};
