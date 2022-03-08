export const columns = [
	{
		title: "Property",
		dataIndex: "Property",
		key: "Property",
	},
	{
		title: "Description",
		dataIndex: "Description",
		key: "Description",
	},
	{
		title: "Type",
		dataIndex: "Type",
		key: "Type",
	},
	{
		title: "Default",
		dataIndex: "Default",
		key: "Default",
	},
	{
		title: "Version",
		dataIndex: "Version",
		key: "Version",
	},
]

export const dataSource = [
	{ Property: "bordered", Description: "Whether to show all table borders", Type: "boolean", Default: "false", Version: "", },
	{ Property: "columns", Description: "Columns of table", Type: "ColumnsType[]", Default: "-", Version: "", },
	{ Property: "components", Description: "Override default table elements", Type: "TableComponents", Default: "-", Version: "", },
	{ Property: "dataSource", Description: "Data record array to be displayed", Type: "object[]", Default: "-", Version: "", },
	{ Property: "expandable", Description: "Config expandable content", Type: "expandable", Default: "-", Version: "", },
	{ Property: "footer", Description: "Table footer renderer", Type: "function(currentPageData)", Default: "-", Version: "", },
	{ Property: "getPopupContainer", Description: "The render container of dropdowns in table", Type: "(triggerNode) => HTMLElement", Default: "() => TableHtmlElement", Version: "", },
	{ Property: "loading", Description: "Loading status of table", Type: "boolean | Spin Props", Default: "false", Version: "", },
	{ Property: "locale", Description: "The i18n text including filter, sort, empty text, etc", Type: "object", Default: "Default Value", Version: "", },
	{ Property: "pagination", Description: "Config of pagination. You can ref table pagination config or full pagination document, hide it by setting it to false", Type: "object", Default: "-", Version: "", },
	{ Property: "rowClassName", Description: "Row's className", Type: "function(record, index): string", Default: "-", Version: "", },
	{ Property: "rowKey", Description: "Row's unique key, could be a string or function that returns a string", Type: "string | function(record): string", Default: "key", Version: "", },
	{ Property: "rowSelection", Description: "Row selection config", Type: "object", Default: "-", Version: "", },
	{ Property: "scroll", Description: "Whether the table can be scrollable, config", Type: "object", Default: "-", Version: "", },
	{ Property: "showHeader", Description: "Whether to show table header", Type: "boolean", Default: "true", Version: "", },
	{ Property: "showSorterTooltip", Description: "The header show next sorter direction tooltip. It will be set as the property of Tooltip if its type is object", Type: "boolean | Tooltip props", Default: "true", Version: "", },
	{ Property: "size", Description: "Size of table", Type: "default | middle | small", Default: "default", Version: "", },
	{ Property: "sortDirections", Description: "Supported sort way, could be ascend, descend", Type: "Array", Default: "[ascend, descend]", Version: "", },
	{ Property: "sticky", Description: "Set sticky header and scroll bar", Type: "boolean | {offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}", Default: "-", Version: "4.6.0 (getContainer: 4.7.0)", },
	{ Property: "summary", Description: "Summary content", Type: "(currentData) => ReactNode", Default: "-", Version: "", },
	{ Property: "tableLayout", Description: "The table-layout attribute of table element", Type: "- | auto | fixed", Default: "-", },
	{ Property: "fixed when header/columns are fixed, or using column.ellipsis", Description: "", },
	{ Property: "title", Description: "Table title renderer", Type: "function(currentPageData)", Default: "-", Version: "", },
	{ Property: "onChange", Description: "Callback executed when pagination, filters or sorter is changed", Type: "function(pagination, filters, sorter, extra: { currentDataSource: [], action: paginate | sort | filter })", Default: "-", Version: "", },
	{ Property: "onHeaderRow", Description: "Set props on per header row", Type: "function(columns, index)", Default: "-", Version: "", },
	{ Property: "onRow", Description: "Set props on per row", Type: "function(record, index)", Default: "-", Version: "", },
]

export const dataSource2 = [
	{ Property: "align", Description: "The specify which way that column is aligned", Type: "left | right | center", Default: "left", Version: "", },
	{ Property: "className", Description: "The className of this column", Type: "string", Default: "-", Version: "", },
	{ Property: "colSpan", Description: "Span of this column's title", Type: "number", Default: "-", Version: "", },
	{ Property: "dataIndex", Description: "Display field of the data record, support nest path by string array", Type: "string | string[]", Default: "-", Version: "", },
	{ Property: "defaultFilteredValue", Description: "Default filtered values", Type: "string[]", Default: "-", Version: "", },
	{ Property: "defaultSortOrder", Description: "Default order of sorted values", Type: "ascend | descend", Default: "-", Version: "", },
	{ Property: "editable", Description: "Whether column can be edited", Type: "boolean", Default: "false", Version: "", },
	{ Property: "ellipsis", Description: "The ellipsis cell content, not working with sorter and filters for now.", },
	{ Property: "tableLayout would be fixed when ellipsis is true or { showTitle?: boolean }", Description: "boolean | {showTitle?: boolean }", Type: "false", Default: "showTitle: 4.3.0", },
	{ Property: "filterDropdown", Description: "Customized filter overlay", Type: "ReactNode | (props: FilterDropdownProps) => ReactNode", Default: "-", Version: "", },
	{ Property: "filterDropdownVisible", Description: "Whether filterDropdown is visible", Type: "boolean", Default: "-", Version: "", },
	{ Property: "filtered", Description: "Whether the dataSource is filtered", Type: "boolean", Default: "false", Version: "", },
	{ Property: "filteredValue", Description: "Controlled filtered value, filter icon will highlight", Type: "string[]", Default: "-", Version: "", },
	{ Property: "filterIcon", Description: "Customized filter icon", Type: "ReactNode | (filtered: boolean) => ReactNode", Default: "-", Version: "", },
	{ Property: "filterMultiple", Description: "Whether multiple filters can be selected", Type: "boolean", Default: "true", Version: "", },
	{ Property: "filterMode", Description: "To specify the filter interface", Type: "'menu' | 'tree'", Default: "'menu'", Version: "4.17.0", },
	{ Property: "filterSearch", Description: "Whether to be searchable for filter menu", Type: "Boolean", Default: "false", Version: "4.17.0", },
	{ Property: "filters", Description: "Filter menu config", Type: "object[]", Default: "-", Version: "", },
	{ Property: "fixed", Description: "(IE not support) Set column to be fixed: true(same as left) 'left' 'right'", Type: "boolean | string", Default: "false", Version: "", },
	{ Property: "key", Description: "Unique key of this column, you can ignore this prop if you've set a unique dataIndex", Type: "string", Default: "-", Version: "", },
	{ Property: "render", Description: "Renderer of the table cell. The return value should be a ReactNode", Type: "function(text, record, index) {}", Default: "-", Version: "", },
	{ Property: "responsive", Description: "The list of breakpoints at which to display this column. Always visible if not set.", Type: "Breakpoint[]", Default: "-", Version: "4.2.0", },
	{ Property: "shouldCellUpdate", Description: "Control cell render logic", Type: "(record, prevRecord) => boolean", Default: "-", Version: "4.3.0", },
	{ Property: "showSorterTooltip", Description: "If header show next sorter direction tooltip, override showSorterTooltip in table", Type: "boolean | Tooltip props", Default: "true", Version: "", },
	{ Property: "sortDirections", Description: "Supported sort way, override sortDirections in Table, could be ascend, descend", Type: "Array", Default: "[ascend, descend]", Version: "", },
	{ Property: "sorter", Description: "Sort function for local sort, see Array.sort's compareFunction. If you need sort buttons only, set to true", Type: "function | boolean", Default: "-", Version: "", },
	{ Property: "sortOrder", Description: "Order of sorted values: 'ascend' 'descend' false", Type: "boolean | string", Default: "-", Version: "", },
	{ Property: "title", Description: "Title of this column", Type: "ReactNode | ({ sortOrder, sortColumn, filters }) => ReactNode", Default: "-", Version: "", },
	{ Property: "width", Description: "Width of this column (width not working?)", Type: "string | number", Default: "-", Version: "", },
	{ Property: "onCell", Description: "Set props on per cell", Type: "function(record, rowIndex)", Default: "-", Version: "", },
	{ Property: "onFilter", Description: "Function that determines if the row is displayed when filtered", Type: "function(value, record) => boolean", Default: "-", Version: "", },
	{ Property: "onFilterDropdownVisibleChange", Description: "Callback executed when filterDropdownVisible is changed", Type: "function(visible) {}", Default: "-", Version: "", },
	{ Property: "onHeaderCell", Description: "Set props on per header cell", Type: "function(column)", Default: "-", },
]

export const dataSource3 = [
	{ Property: "title", Description: "Title of the column group", Type: "ReactNode", Default: "-", },
]

export const dataSource4 = [
	{ Property: "position", Description: "Specify the position of Pagination, could betopLeft | topCenter | topRight |bottomLeft | bottomCenter | bottomRight", Type: "Array", Default: "[bottomRight]", },
]

export const dataSource5 = [
	{ Property: "childrenColumnName", Description: "The column contains children to display", Type: "string", Default: "children", Version: "", },
	{ Property: "columnWidth", Description: "Set the width of the expand column", Type: "string | number", Default: "-", Version: "", },
	{ Property: "defaultExpandAllRows", Description: "Expand all rows initially", Type: "boolean", Default: "FALSE", Version: "", },
	{ Property: "defaultExpandedRowKeys", Description: "Initial expanded row keys", Type: "string[]", Default: "-", Version: "", },
	{ Property: "expandedRowClassName", Description: "Expanded row's className", Type: "function(record, index, indent): string", Default: "-", Version: "", },
	{ Property: "expandedRowKeys", Description: "Current expanded row keys", Type: "string[]", Default: "-", Version: "", },
	{ Property: "expandedRowRender", Description: "Expanded container render for each row", Type: "function(record, index, indent, expanded): ReactNode", Default: "-", Version: "", },
	{ Property: "expandIcon", Description: "Customize row expand Icon. Ref example", Type: "function(props): ReactNode", Default: "-", Version: "", },
	{ Property: "expandRowByClick", Description: "Whether to expand row by clicking anywhere in the whole row", Type: "boolean", Default: "FALSE", Version: "", },
	{ Property: "fixed", Description: "Whether the expansion icon is fixed. Optional true left right", Type: "boolean | string", Default: "FALSE", Version: "4.16.0", },
	{ Property: "indentSize", Description: "Indent size in pixels of tree data", Type: "number", Default: "15", Version: "", },
	{ Property: "rowExpandable", Description: "Enable row can be expandable", Type: "(record) => boolean", Default: "-", Version: "", },
	{ Property: "showExpandColumn", Description: "Show expand column", Type: "boolean", Default: "TRUE", Version: "4.18.0", },
	{ Property: "onExpand", Description: "Callback executed when the row expand icon is clicked", Type: "function(expanded, record)", Default: "-", Version: "", },
	{ Property: "onExpandedRowsChange", Description: "Callback executed when the expanded rows change", Type: "function(expandedRows)", Default: "-", Version: "", },
]
export const dataSource6 = [
	{ Property: "checkStrictly", Description: "Check table row precisely; parent row and children rows are not associated", Type: "boolean", Default: "TRUE", Version: "4.4.0", },
	{ Property: "columnTitle", Description: "Set the title of the selection column", Type: "ReactNode", Default: "-", Version: "", },
	{ Property: "columnWidth", Description: "Set the width of the selection column", Type: "string | number", Default: "32px", Version: "", },
	{ Property: "fixed", Description: "Fixed selection column on the left", Type: "boolean", Default: "-", Version: "", },
	{ Property: "getCheckboxProps", Description: "Get Checkbox or Radio props", Type: "function(record)", Default: "-", Version: "", },
	{ Property: "hideSelectAll", Description: "Hide the selectAll checkbox and custom selection", Type: "boolean", Default: "FALSE", Version: "4.3.0", },
	{ Property: "preserveSelectedRowKeys", Description: "Keep selection key even when it removed from dataSource", Type: "boolean", Default: "-", Version: "4.4.0", },
	{ Property: "renderCell", Description: "Renderer of the table cell. Same as render in column", Type: "function(checked, record, index, originNode) {}", Default: "-", Version: "4.1.0", },
	{ Property: "selectedRowKeys", Description: "Controlled selected row keys", Type: "string[] | number[]", Default: "[]", Version: "", },
	{ Property: "selections", Description: "Custom selection config, only displays default selections when set to true", Type: "object[] | boolean", Default: "-", Version: "", },
	{ Property: "type", Description: "checkbox or radio", Type: "checkbox | radio", Default: "checkbox", Version: "", },
	{ Property: "onChange", Description: "Callback executed when selected rows change", Type: "function(selectedRowKeys, selectedRows)", Default: "-", Version: "", },
	{ Property: "onSelect", Description: "Callback executed when select/deselect one row", Type: "function(record, selected, selectedRows, nativeEvent)", Default: "-", Version: "", },
	{ Property: "onSelectAll", Description: "Callback executed when select/deselect all rows", Type: "function(selected, selectedRows, changeRows)", Default: "-", Version: "", },
	{ Property: "onSelectInvert", Description: "Callback executed when row selection is inverted", Type: "function(selectedRowKeys)", Default: "-", Version: "", },
	{ Property: "onSelectNone", Description: "Callback executed when row selection is cleared", Type: "function()", Default: "-", Version: "", },
]

export const dataSource7 = [
	{ Property: "scrollToFirstRowOnChange", Description: "Whether to scroll to the top of the table when paging, sorting, filtering changes", Type: "boolean", Default: "-", },
	{ Property: "x", Description: "Set horizontal scrolling, can also be used to specify the width of the scroll area, could be number, percent value, true and 'max-content'", Type: "string | number | true", Default: "-", },
	{ Property: "y", Description: "Set vertical scrolling, can also be used to specify the height of the scroll area, could be string or number", Type: "string | number", Default: "-", },
]

export const dataSource8 = [
	{ Property: "key", Description: "Unique key of this selection", Type: "string", Default: "-", },
	{ Property: "text", Description: "Display text of this selection", Type: "ReactNode", Default: "-", },
	{ Property: "onSelect", Description: "Callback executed when this selection is clicked", Type: "function(changeableRowKeys)", Default: "-", },
]
