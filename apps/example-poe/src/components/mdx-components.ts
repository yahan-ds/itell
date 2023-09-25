import {
	Info,
	Warning,
	Keyterm,
	Callout,
	Caption,
	Typography,
	Blockquote,
	Steps,
	Columns,
	Column,
	YoutubeVideo,
} from "@itell/ui/server";
import {
	Accordion,
	AccordionItem,
	Image,
} from "@/components/client-components";
import {
	Tabs,
	TabsHeader,
	Tab,
	TabPanel,
	TabsBody,
} from "@/components/ui/tabs";
import { TextOverImage } from "@/components/ui/text-over-image";

import QuestionInputProps from "./question-input";
import Scenario from "./scenario";
import Table from "./table";

export const MdxComponents = {
	YoutubeVideo,
	Image,
	Blockquote,
	Accordion,
	AccordionItem,
	TextOverImage,
	Info,
	Warning,
	Keyterm,
	Callout,
	Caption,
	Typography,
	Steps,
	Columns,
	Column,
	// tab related
	Tabs,
	TabsHeader,
	Tab,
	TabPanel,
	TabsBody,
    // math related
    QuestionInputProps,
    Scenario,
    Table,
};
