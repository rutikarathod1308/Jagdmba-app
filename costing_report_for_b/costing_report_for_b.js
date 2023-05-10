frappe.pages['costing-report-for-b'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Costing Report For Beam No.',
		single_column: true
	});
}