export const columns = [
	{
		title : "Property", 
		dataIndex : "Property", 
		key : "Property",
	},
	{
		title : "Description", 
		dataIndex : "Description", 
		key : "Description",
	},
	{
		title : "Type", 
		dataIndex : "Type", 
		key : "Type",
	},
	{
		title : "Default", 
		dataIndex : "Default", 
		key : "Default",
	},
	{
		title : "Version", 
		dataIndex : "Version", 
		key : "Version",
	},
]

export const dataSource = [
	{Property : "actions",Description : "The action list, shows at the bottom of the Card",Type : "Array<ReactNode>",Default : "-",Version : "",},
	{Property : "activeTabKey",Description : "Current TabPane's key",Type : "string",Default : "-",Version : "",},
	{Property : "bodyStyle",Description : "Inline style to apply to the card content",Type : "CSSProperties",Default : "-",Version : "",},
	{Property : "bordered",Description : "Toggles rendering of the border around the card",Type : "boolean",Default : "true",Version : "",},
	{Property : "cover",Description : "Card cover",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "defaultActiveTabKey",Description : "Initial active TabPane's key, if activeTabKey is not set",Type : "string",Default : "-",Version : "",},
	{Property : "extra",Description : "Content to render in the top-right corner of the card",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "headStyle",Description : "Inline style to apply to the card head",Type : "CSSProperties",Default : "-",Version : "",},
	{Property : "hoverable",Description : "Lift up when hovering card",Type : "boolean",Default : "false",Version : "",},
	{Property : "loading",Description : "Shows a loading indicator while the contents of the card are being fetched",Type : "boolean",Default : "false",Version : "",},
	{Property : "size",Description : "Size of card",Type : "default | small",Default : "default",Version : "",},
	{Property : "tabBarExtraContent",Description : "Extra content in tab bar",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "tabList",Description : "List of TabPane's head",Type : "Array<{key: string, tab: ReactNode}>",Default : "-",Version : "",},
	{Property : "tabProps",Description : "Tabs",Type : "-",Default : "-",Version : "",},
	{Property : "title",Description : "Card title",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "type",Description : "Card style type, can be set to inner or not set",Type : "string",Default : "-",Version : "",},
	{Property : "onTabChange",Description : "Callback when tab is switched",Type : "(key) => void",Default : "-",Version : "",},
]

export const dataSource2 = [
	{Property : "className",Description : "The className of container",Type : "string",Default : "-",Version : "",},
	{Property : "hoverable",Description : "Lift up when hovering card grid",Type : "boolean",Default : "true",Version : "",},
	{Property : "style",Description : "The style object of container",Type : "CSSProperties",Default : "-",Version : "",},
]

export const dataSource3 = [
	{Property : "avatar",Description : "Avatar or icon",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "className",Description : "The className of container",Type : "string",Default : "-",Version : "",},
	{Property : "description",Description : "Description content",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "style",Description : "The style object of container",Type : "CSSProperties",Default : "-",Version : "",},
	{Property : "title",Description : "Title content",Type : "ReactNode",Default : "-",Version : "",},
]