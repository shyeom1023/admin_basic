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
	{Property : "addonAfter",Description : "The label text displayed after (on the right side of) the input field",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "addonBefore",Description : "The label text displayed before (on the left side of) the input field",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "allowClear",Description : "If allow to remove input content with clear icon",Type : "boolean",Default : "false",Version : "",},
	{Property : "bordered",Description : "Whether has border style",Type : "boolean",Default : "true",Version : "4.5.0",},
	{Property : "defaultValue",Description : "The initial input content",Type : "string",Default : "-",Version : "",},
	{Property : "disabled",Description : "Whether the input is disabled",Type : "boolean",Default : "false",Version : "",},
	{Property : "id",Description : "The ID for input",Type : "string",Default : "-",Version : "",},
	{Property : "maxLength",Description : "The max length",Type : "number",Default : "-",Version : "",},
	{Property : "showCount",Description : "Whether show text count",Type : "boolean | { formatter: ({ count: number, maxLength?: number }) => ReactNode }",Default : "false",Version : "4.18.0",},
	{Property : "prefix",Description : "The prefix icon for the Input",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "size",Description : "The size of the input box. Note: in the context of a form, the large size is used",Type : "large | middle | small",Default : "-",Version : "",},
	{Property : "suffix",Description : "The suffix icon for the Input",Type : "ReactNode",Default : "-",Version : "",},
	{Property : "type",Description : "The type of input, see: MDN( use Input.TextArea instead of type='textarea')",Type : "string",Default : "text",Version : "",},
	{Property : "value",Description : "The input content value",Type : "string",Default : "-",Version : "",},
	{Property : "onChange",Description : "Callback when user input",Type : "function(e)",Default : "-",Version : "",},
	{Property : "onPressEnter",Description : "The callback function that is triggered when Enter key is pressed",Type : "function(e)",Default : "-",Version : "",},
]

export const dataSource2 = [
	{Property : "allowClear",Description : "If allow to remove input content with clear icon",Type : "boolean",Default : "false",Version : "",},
	{Property : "autoSize",Description : "Height autosize feature, can be set to true | false or an object { minRows: 2, maxRows: 6 }",Type : "boolean | object",Default : "false",Version : "",},
	{Property : "bordered",Description : "Whether has border style",Type : "boolean",Default : "true",Version : "4.5.0",},
	{Property : "defaultValue",Description : "The initial input content",Type : "string",Default : "-",Version : "",},
	{Property : "maxLength",Description : "The max length",Type : "number",Default : "-",Version : "4.7.0",},
	{Property : "showCount",Description : "Whether show text count",Type : "boolean | { formatter: ({ count: number, maxLength?: number }) => string }",Default : "false",Version : "4.7.0 (formatter: 4.10.0)",},
	{Property : "value",Description : "The input content value",Type : "string",Default : "-",Version : "",},
	{Property : "onPressEnter",Description : "The callback function that is triggered when Enter key is pressed",Type : "function(e)",Default : "-",Version : "",},
	{Property : "onResize",Description : "The callback function that is triggered when resize",Type : "function({ width, height })",Default : "-",Version : "",},
]

export const dataSource3 = [
	{Property : "enterButton",Description : "Whether to show an enter button after input. This property conflicts with the addonAfter property",Type : "boolean | ReactNode",Default : "false",},
	{Property : "loading",Description : "Search box with loading",Type : "boolean",Default : "false",},
	{Property : "onSearch",Description : "The callback function triggered when you click on the search-icon, the clear-icon or press the Enter key",Type : "function(value, event)",Default : "-",},
]

export const dataSource4 = [
	{Property : "compact",Description : "Whether use compact style",Type : "boolean",Default : "false",},
	{Property : "size",Description : "The size of Input.Group specifies the size of the included Input fields. Available: large default small",Type : "string",Default : "default",},
]

export const dataSource5 = [
	{Property : "iconRender",Description : "Custom toggle button",Type : "(visible) => ReactNode",Default : "(visible) => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)",Version : "4.3.0",},
	{Property : "visibilityToggle",Description : "Whether show toggle button",Type : "boolean",Default : "true",Version : "",},
]

export const dataSource6 = [
	{Property : "blur",Description : "Remove focus",Type : "-",Version : "",},
	{Property : "focus",Description : "Get focus",Type : "(option?: { preventScroll?: boolean, cursor?: 'start' | 'end' | 'all' })",Version : "option - 4.10.0",},
]
