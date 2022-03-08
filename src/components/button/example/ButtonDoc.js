export const dataSource = [
	{Property : "block",Description : "Option to fit button width to its parent width",Type : "boolean",Default : "FALSE",Version : "",},
	{Property : "danger",Description : "Set the danger status of button",Type : "boolean",Default : "FALSE",Version : "",},
	{Property : "disabled",Description : "Disabled state of button",Type : "boolean",Default : "FALSE",Version : "",},
	{Property : "ghost",Description : "Make background transparent and invert text and border colors",Type : "boolean",Default : "FALSE",Version : "",},
	{Property : "href",Description : "Redirect url of link button",Type : "string",Default : "-",Version : "",},
	{Property : "htmlType",Description : "Set the original html type of button, see: MDN",Type : "string",Default : "button",Version : "",},
	{Property : "icon",Description : "Set the icon component of button",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "loading",Description : "Set the loading status of button",Type : "boolean | { delay: number }",Default : "FALSE",Version : "",},
	{Property : "shape",Description : "Can be set button shape",Type : "default | circle | round",Default : "'default'",Version : "",},
	{Property : "size",Description : "Set the size of button",Type : "large | middle | small",Default : "middle",Version : "",},
	{Property : "target",Description : "Same as target attribute of a, works when href is specified",Type : "string",Default : "-",Version : "",},
	{Property : "type",Description : "Can be set to primary ghost dashed link text default",Type : "string",Default : "default",Version : "",},
	{Property : "onClick",Description : "Set the handler to handle click event",Type : "(event) => void",Default : "-",Version : "",},
]

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

