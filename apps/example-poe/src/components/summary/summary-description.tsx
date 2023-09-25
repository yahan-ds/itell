import { Site, allSites } from "contentlayer/generated";
import { MainMdx } from "../mdx";

const description = allSites.find(
	(doc) => doc.slug === "summary-description",
) as Site;

export default function SummaryDescription() {
	return <MainMdx code={description.body.code} />;
}
