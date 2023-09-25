import { getSiteConfig as getConfig } from "@itell/core/config";
import path from "path";
// const siteConfigPath = path.join(process.cwd(), "config/site.yaml");

export const getSiteConfig = async () => {
	// return getConfig(siteConfigPath);

	return {
		title: "Principles of Macroeconomics",
		description:
			"This textbook is adopted from Principles of Macroeconomics 2e available at OpenStax.  It was redesigned by a team comprised of subject matter expert, content and assessment developer, multimedia and web developer, and instructional designer from Georgia Tech.",
		footer:
			"A project by the Language and Educational Analytics Research (Lear)Lab",
		latex: true,
		favicon: "/images/avatars/favicon.png",
	};
};
