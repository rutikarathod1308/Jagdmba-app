
function getallLotMaster(start_date, end_date, Jobtype, Fabrictype) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.invoice_date_wise_re.invoice_date_wise_re.get_invoice_master',
        args: {
			start_date:start_date,
			end_date: end_date,
			job_type : Jobtype,
			fabric_type : Fabrictype
        },
        callback: function(data) {
            var rows = '';
			var qty=0; 
			var value = 0;
			var dis = 0;
			var tax = 0;
			var sgst = 0;
			var cgst = 0;
			var igst = 0;
			var net = 0;
			var total_tcs =0;
			var amt = 0;
			var table_row = '';
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + (d.posting_date && d.posting_date.length >= 10 ? 
					d.posting_date.substring(8, 10) + "-" + 
					d.posting_date.substring(5, 7) + "-" + 
					d.posting_date.substring(0, 4) : '')
				+ '</td><td >' + (d.category ? d.category : '') 
				+'</td><td >'  + (d.customer ? d.customer:'')
 				+ '</td><td class="qty">' + (d.total_qty ? d.total_qty : 0) 
				+ '</td><td class="value">' + (d.total ? d.total : '') 
				+'</td><td class="dis">' + (d.base_discount_amount ? d.base_discount_amount: 0)
				+ '</td><td class="tax" >' + (d.net_total ? d.net_total : 0)
				+ '</td><td class="sgst" >' + (d.total_SGST ? d.total_SGST : 0)
				+ '</td><td class="cgst" >' + (d.total_CGST ? d.total_CGST : 0)
				+ '</td><td class="igst" >' + (d.total_IGST ? d.total_IGST : 0)
				+ '</td><td class="net" >' + (d.grand_total ? d.grand_total :0)
				+ '</td><td class="total_tcs" >' + (d.total_TCS ? d.total_TCS : 0)
				+ '</td><td class="amt" >' + (d.grand_total ? d.grand_total :0)
				// + '</td><td class="" >' + ('')
				+ '</td ></tr>';
            });
			$('#po-table tbody').html(rows);
			
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "Total Mtr/Kgs :  "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#total_mtr_kgs div').html(summaries);
			
			$('.value').each(function(){
				value += parseFloat($(this).text());
			})
			values = ''
			values +=  '<div>'+'<b>' + "Total Job Value :  "+'</b>'+'&nbsp;&nbsp;'+ (value) +'</div>'
			$('#total_job_value	 div').html(values);

			$('.dis').each(function(){
				dis += parseFloat($(this).text());
			})
			disc = ''
			disc +=  '<div>'+'<b>' + "Total Trade Discount:   "+'</b>'+'&nbsp;&nbsp;'+ (dis) +'</div>'
			$('#total_trade_discount div').html(disc);

			$('.tax').each(function(){
				tax += parseFloat($(this).text());

			})

			taxes = ''
			taxes +=  '<div>'+'<b>' + "Taxable Amt:  "+'</b>'+'&nbsp;&nbsp;'+ (tax) +'</div>'
			$('#taxable_amt div').html(taxes);

			$('.sgst').each(function(){
				sgst += parseFloat($(this).text());
			})
			sgsts = ''
			sgsts += '<div>'+'<b>' + "Total SGST :  "+'</b>'+'&nbsp;&nbsp;'+ (sgst) +'</div>'
			$('#total_sgst div').html(sgsts);

			$('.cgst').each(function(){
				cgst += parseFloat($(this).text());
			})
			cgsts = ''
			cgsts += '<div>'+'<b>' + "Total CGST :  "+'</b>'+'&nbsp;&nbsp;'+ (cgst) +'</div>'
			$('#total_cgst div').html(cgsts);

			$('.igst').each(function(){
				igst += parseFloat($(this).text());
			})
			igsts = ''
			igsts += '<div>'+'<b>' + "Total IGST :  "+'</b>'+'&nbsp;&nbsp;'+ (igst) +'</div>'
			$('#total_igst div').html(igsts);

			$('.net').each(function(){
				net += parseFloat($(this).text());
			})
			net_total = ''
			net_total += '<div>'+'<b>' + "Net Total  :  "+'</b>'+'&nbsp;&nbsp;'+ (net) +'</div>'
			$('#net_total div').html(net_total);

			$('.total_tcs').each(function(){
				total_tcs += parseFloat($(this).text());
			})
			total_tcss = ''
			total_tcss += '<div>'+'<b>' + "TCS 	 :  "+'</b>'+'&nbsp;&nbsp;'+ (total_tcs) +'</div>'
			$('#tcs div').html(total_tcss);

			$('.amt').each(function(){
				amt += parseFloat($(this).text());
			})
			gross_amount = ''
			gross_amount += '<div>'+'<b>' + "Gross Amount :  "+'</b>'+'&nbsp;&nbsp;'+ (amt) +'</div>'
			$('#gross_amt div').html(gross_amount);

			table_row +=
					'<tr><td colspan="2">' + '<b>'+("Grand Total") + '</b>' 
					
					+ '</td><td>' + ''
					+ '</td><td>' + (qty)
					+ '</td><td>' + (value)
					+ '</td><td>' + (dis)
					+ '</td><td>' + (tax)
					+ '</td><td>' + (sgst)
					+ '</td><td>' + (cgst)
					+ '</td><td>' + (igst)
					+ '</td><td>' + (net)
					+ '</td><td>' + (total_tcs)
					+ '</td><td>' + (amt)
					+ '</td></tr>';
          
			$('#po-table tfoot').html(table_row);
        }
    });
}
function getcustomerLotMaster(start_date, end_date, Jobtype, Fabrictype,Customer) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.invoice_date_wise_re.invoice_date_wise_re.get_customer_invoice_master',
        args: {
			start_date:start_date,
			end_date: end_date,
			job_type : Jobtype,
			fabric_type : Fabrictype,
			customer : Customer
        },
        callback: function(data) {
            var rows = '';
			var qty=0; 
			var value = 0;
			var dis = 0;
			var tax = 0;
			var sgst = 0;
			var cgst = 0;
			var igst = 0;
			var net = 0;
			var total_tcs =0;
			var amt = 0;
			var table_row = '';
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + (d.posting_date && d.posting_date.length >= 10 ? 
					d.posting_date.substring(8, 10) + "-" + 
					d.posting_date.substring(5, 7) + "-" + 
					d.posting_date.substring(0, 4) : '')
				+ '</td><td >' + (d.category ? d.category : '') 
				+'</td><td >'  + (d.customer ? d.customer:'')
 				+ '</td><td class="qty">' + (d.total_qty ? d.total_qty : 0) 
				+ '</td><td class="value">' + (d.total ? d.total : '') 
				+'</td><td class="dis">' + (d.base_discount_amount ? d.base_discount_amount: 0)
				+ '</td><td class="tax" >' + (d.net_total ? d.net_total : 0)
				+ '</td><td class="sgst" >' + (d.total_SGST ? d.total_SGST : 0)
				+ '</td><td class="cgst" >' + (d.total_CGST ? d.total_CGST : 0)
				+ '</td><td class="igst" >' + (d.total_IGST ? d.total_IGST : 0)
				+ '</td><td class="net" >' + (d.grand_total ? d.grand_total :0)
				+ '</td><td class="total_tcs" >' + (d.total_TCS ? d.total_TCS : 0)
				+ '</td><td class="amt" >' + (d.grand_total ? d.grand_total :0)
				// + '</td><td class="" >' + ('')
				+ '</td ></tr>';
            });
			$('#po-table tbody').html(rows);
			
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "Total Mtr/Kgs :  "+'</b>'+'&nbsp;&nbsp;'+ (qty.toFixed(2)) +'</div>'
			$('#total_mtr_kgs div').html(summaries);
			
			$('.value').each(function(){
				value += parseFloat($(this).text());
			})
			values = ''
			values +=  '<div>'+'<b>' + "Total Job Value :  "+'</b>'+'&nbsp;&nbsp;'+ (value.toFixed(2)) +'</div>'
			$('#total_job_value	 div').html(values);

			$('.dis').each(function(){
				dis += parseFloat($(this).text());
			})
			disc = ''
			disc +=  '<div>'+'<b>' + "Total Trade Discount:   "+'</b>'+'&nbsp;&nbsp;'+ (dis.toFixed(2)) +'</div>'
			$('#total_trade_discount div').html(disc);

			$('.tax').each(function(){
				tax += parseFloat($(this).text());

			})

			taxes = ''
			taxes +=  '<div>'+'<b>' + "Taxable Amt:  "+'</b>'+'&nbsp;&nbsp;'+ (tax.toFixed(2)) +'</div>'
			$('#taxable_amt div').html(taxes);

			$('.sgst').each(function(){
				sgst += parseFloat($(this).text());
			})
			sgsts = ''
			sgsts += '<div>'+'<b>' + "Total SGST :  "+'</b>'+'&nbsp;&nbsp;'+ (sgst.toFixed(2)) +'</div>'
			$('#total_sgst div').html(sgsts);

			$('.cgst').each(function(){
				cgst += parseFloat($(this).text());
			})
			cgsts = ''
			cgsts += '<div>'+'<b>' + "Total CGST :  "+'</b>'+'&nbsp;&nbsp;'+ (cgst.toFixed(2)) +'</div>'
			$('#total_cgst div').html(cgsts);

			$('.igst').each(function(){
				igst += parseFloat($(this).text());
			})
			igsts = ''
			igsts += '<div>'+'<b>' + "Total IGST :  "+'</b>'+'&nbsp;&nbsp;'+ (igst.toFixed(2)) +'</div>'
			$('#total_igst div').html(igsts);

			$('.net').each(function(){
				net += parseFloat($(this).text());
			})
			net_total = ''
			net_total += '<div>'+'<b>' + "Net Total  :  "+'</b>'+'&nbsp;&nbsp;'+ (net.toFixed(2)) +'</div>'
			$('#net_total div').html(net_total);

			$('.total_tcs').each(function(){
				total_tcs += parseFloat($(this).text());
			})
			total_tcss = ''
			total_tcss += '<div>'+'<b>' + "TCS 	 :  "+'</b>'+'&nbsp;&nbsp;'+ (total_tcs.toFixed(2)) +'</div>'
			$('#tcs div').html(total_tcss);

			$('.amt').each(function(){
				amt += parseFloat($(this).text());
			
			})
			gross_amount = ''
			gross_amount += '<div>'+'<b>' + "Gross Amount :  "+'</b>'+'&nbsp;&nbsp;'+ (amt.toFixed(2)) +'</div>'
			$('#gross_amt div').html(gross_amount);

			table_row +=
					'<tr><td colspan="2">' + '<b>'+("Grand Total") + '</b>' 
					
					+ '</td><td>' + ''
					+ '</td><td>' + (qty.toFixed(2))
					+ '</td><td>' + (value.toFixed(2))
					+ '</td><td>' + (dis.toFixed(2))
					+ '</td><td>' + (tax.toFixed(2))
					+ '</td><td>' + (sgst.toFixed(2))
					+ '</td><td>' + (cgst.toFixed(2))
					+ '</td><td>' + (igst.toFixed(2))
					+ '</td><td>' + (net.toFixed(2))
					+ '</td><td>' + (total_tcs)
					+ '</td><td>' + (amt.toFixed(2))
					+ '</td></tr>';
          
			$('#po-table tfoot').html(table_row);
        }
    });
}
function getcustomer_Master(Jobtype, Fabrictype,Customer) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.invoice_date_wise_re.invoice_date_wise_re.get_customer__master',
        args: {
			
			job_type : Jobtype,
			fabric_type : Fabrictype,
			customer : Customer
        },
        callback: function(data) {
            var rows = '';
			var qty=0; 
			var value = 0;
			var dis = 0;
			var tax = 0;
			var sgst = 0;
			var cgst = 0;
			var igst = 0;
			var net = 0;
			var total_tcs =0;
			var amt = 0;
			var table_row = '';
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + (d.posting_date && d.posting_date.length >= 10 ? 
					d.posting_date.substring(8, 10) + "-" + 
					d.posting_date.substring(5, 7) + "-" + 
					d.posting_date.substring(0, 4) : '')
				+ '</td><td >' + (d.category ? d.category : '') 
				+'</td><td >'  + (d.customer ? d.customer:'')
 				+ '</td><td class="qty">' + (d.total_qty ? d.total_qty : 0) 
				+ '</td><td class="value">' + (d.total ? d.total : '') 
				+'</td><td class="dis">' + (d.base_discount_amount ? d.base_discount_amount: 0)
				+ '</td><td class="tax" >' + (d.net_total ? d.net_total : 0)
				+ '</td><td class="sgst" >' + (d.total_SGST ? d.total_SGST : 0)
				+ '</td><td class="cgst" >' + (d.total_CGST ? d.total_CGST : 0)
				+ '</td><td class="igst" >' + (d.total_IGST ? d.total_IGST : 0)
				+ '</td><td class="net" >' + (d.grand_total ? d.grand_total :0)
				+ '</td><td class="total_tcs" >' + (d.total_TCS ? d.total_TCS : 0)
				+ '</td><td class="amt" >' + (d.grand_total ? d.grand_total :0)
				// + '</td><td class="" >' + ('')
				+ '</td ></tr>';
            });
			$('#po-table tbody').html(rows);
			
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "Total Mtr/Kgs :  "+'</b>'+'&nbsp;&nbsp;'+ (qty.toFixed(2)) +'</div>'
			$('#total_mtr_kgs div').html(summaries);
			
			$('.value').each(function(){
				value += parseFloat($(this).text());
			})
			values = ''
			values +=  '<div>'+'<b>' + "Total Job Value :  "+'</b>'+'&nbsp;&nbsp;'+ (value.toFixed(2)) +'</div>'
			$('#total_job_value	 div').html(values);

			$('.dis').each(function(){
				dis += parseFloat($(this).text());
			})
			disc = ''
			disc +=  '<div>'+'<b>' + "Total Trade Discount:   "+'</b>'+'&nbsp;&nbsp;'+ (dis.toFixed(2)) +'</div>'
			$('#total_trade_discount div').html(disc);

			$('.tax').each(function(){
				tax += parseFloat($(this).text());

			})

			taxes = ''
			taxes +=  '<div>'+'<b>' + "Taxable Amt:  "+'</b>'+'&nbsp;&nbsp;'+ (tax.toFixed(2)) +'</div>'
			$('#taxable_amt div').html(taxes);

			$('.sgst').each(function(){
				sgst += parseFloat($(this).text());
			})
			sgsts = ''
			sgsts += '<div>'+'<b>' + "Total SGST :  "+'</b>'+'&nbsp;&nbsp;'+ (sgst.toFixed(2)) +'</div>'
			$('#total_sgst div').html(sgsts);

			$('.cgst').each(function(){
				cgst += parseFloat($(this).text());
			})
			cgsts = ''
			cgsts += '<div>'+'<b>' + "Total CGST :  "+'</b>'+'&nbsp;&nbsp;'+ (cgst.toFixed(2)) +'</div>'
			$('#total_cgst div').html(cgsts);

			$('.igst').each(function(){
				igst += parseFloat($(this).text());
			})
			igsts = ''
			igsts += '<div>'+'<b>' + "Total IGST :  "+'</b>'+'&nbsp;&nbsp;'+ (igst.toFixed(2)) +'</div>'
			$('#total_igst div').html(igsts);

			$('.net').each(function(){
				net += parseFloat($(this).text());
			})
			net_total = ''
			net_total += '<div>'+'<b>' + "Net Total  :  "+'</b>'+'&nbsp;&nbsp;'+ (net.toFixed(2)) +'</div>'
			$('#net_total div').html(net_total);

			$('.total_tcs').each(function(){
				total_tcs += parseFloat($(this).text());
			})
			total_tcss = ''
			total_tcss += '<div>'+'<b>' + "TCS 	 :  "+'</b>'+'&nbsp;&nbsp;'+ (total_tcs.toFixed(2)) +'</div>'
			$('#tcs div').html(total_tcss);

			$('.amt').each(function(){
				amt += parseFloat($(this).text());
			
			})
			gross_amount = ''
			gross_amount += '<div>'+'<b>' + "Gross Amount :  "+'</b>'+'&nbsp;&nbsp;'+ (amt.toFixed(2)) +'</div>'
			$('#gross_amt div').html(gross_amount);

			table_row +=
					'<tr><td colspan="2">' + '<b>'+("Grand Total") + '</b>' 
					
					+ '</td><td>' + ''
					+ '</td><td>' + (qty.toFixed(2))
					+ '</td><td>' + (value.toFixed(2))
					+ '</td><td>' + (dis.toFixed(2))
					+ '</td><td>' + (tax.toFixed(2))
					+ '</td><td>' + (sgst.toFixed(2))
					+ '</td><td>' + (cgst.toFixed(2))
					+ '</td><td>' + (igst.toFixed(2))
					+ '</td><td>' + (net.toFixed(2))
					+ '</td><td>' + (total_tcs)
					+ '</td><td>' + (amt.toFixed(2))
					+ '</td></tr>';
          
			$('#po-table tfoot').html(table_row);
        }
    });
}

function getWithout_allLotMaster() {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.invoice_date_wise_re.invoice_date_wise_re.get_without_invoice_master',
        args: {
			
        },
        callback: function(data) {
            var rows = '';
			var qty=0; 
			var value = 0;
			var dis = 0;
			var tax = 0;
			var sgst = 0;
			var cgst = 0;
			var igst = 0;
			var net = 0;
			var total_tcs =0;
			var amt = 0;
			var table_row = '';
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + (d.posting_date && d.posting_date.length >= 10 ? 
					d.posting_date.substring(8, 10) + "-" + 
					d.posting_date.substring(5, 7) + "-" + 
					d.posting_date.substring(0, 4) : '')
				+ '</td><td >' + (d.category ? d.category : '') 
				+'</td><td >'  + (d.customer ? d.customer:'')
 				+ '</td><td class="qty">' + (d.total_qty ? d.total_qty : 0) 
				+ '</td><td class="value">' + (d.total ? d.total : '') 
				+'</td><td class="dis">' + (d.base_discount_amount ? d.base_discount_amount: 0)
				+ '</td><td class="tax" >' + (d.net_total ? d.net_total : 0)
				+ '</td><td class="sgst" >' + (d.total_SGST ? d.total_SGST : 0)
				+ '</td><td class="cgst" >' + (d.total_CGST ? d.total_CGST : 0)
				+ '</td><td class="igst" >' + (d.total_IGST ? d.total_IGST : 0)
				+ '</td><td class="net" >' + (d.grand_total ? d.grand_total :0)
				+ '</td><td class="total_tcs" >' + (d.total_TCS ? d.total_TCS : 0)
				+ '</td><td class="amt" >' + (d.grand_total ? d.grand_total :0)
				// + '</td><td class="" >' + ('')
				+ '</td ></tr>';
            });
			$('#po-table tbody').html(rows);
			
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "Total Mtr/Kgs :  "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#total_mtr_kgs div').html(summaries);
			
			$('.value').each(function(){
				value += parseFloat($(this).text());
			})
			values = ''
			values +=  '<div>'+'<b>' + "Total Job Value :  "+'</b>'+'&nbsp;&nbsp;'+ (value) +'</div>'
			$('#total_job_value	 div').html(values);

			$('.dis').each(function(){
				dis += parseFloat($(this).text());
			})
			disc = ''
			disc +=  '<div>'+'<b>' + "Total Trade Discount:   "+'</b>'+'&nbsp;&nbsp;'+ (dis) +'</div>'
			$('#total_trade_discount div').html(disc);

			$('.tax').each(function(){
				tax += parseFloat($(this).text());

			})

			taxes = ''
			taxes +=  '<div>'+'<b>' + "Taxable Amt:  "+'</b>'+'&nbsp;&nbsp;'+ (tax) +'</div>'
			$('#taxable_amt div').html(taxes);

			$('.sgst').each(function(){
				sgst += parseFloat($(this).text());
			})
			sgsts = ''
			sgsts += '<div>'+'<b>' + "Total SGST :  "+'</b>'+'&nbsp;&nbsp;'+ (sgst) +'</div>'
			$('#total_sgst div').html(sgsts);

			$('.cgst').each(function(){
				cgst += parseFloat($(this).text());
			})
			cgsts = ''
			cgsts += '<div>'+'<b>' + "Total CGST :  "+'</b>'+'&nbsp;&nbsp;'+ (cgst) +'</div>'
			$('#total_cgst div').html(cgsts);

			$('.igst').each(function(){
				igst += parseFloat($(this).text());
			})
			igsts = ''
			igsts += '<div>'+'<b>' + "Total IGST :  "+'</b>'+'&nbsp;&nbsp;'+ (igst) +'</div>'
			$('#total_igst div').html(igsts);

			$('.net').each(function(){
				net += parseFloat($(this).text());
			})
			net_total = ''
			net_total += '<div>'+'<b>' + "Net Total  :  "+'</b>'+'&nbsp;&nbsp;'+ (net) +'</div>'
			$('#net_total div').html(net_total);

			$('.total_tcs').each(function(){
				total_tcs += parseFloat($(this).text());
			})
			total_tcss = ''
			total_tcss += '<div>'+'<b>' + "TCS 	 :  "+'</b>'+'&nbsp;&nbsp;'+ (total_tcs) +'</div>'
			$('#tcs div').html(total_tcss);

			$('.amt').each(function(){
				amt += parseFloat($(this).text());
			})
			gross_amount = ''
			gross_amount += '<div>'+'<b>' + "Gross Amount :  "+'</b>'+'&nbsp;&nbsp;'+ (amt) +'</div>'
			$('#gross_amt div').html(gross_amount);

			table_row +=
					'<tr><td colspan="2">' + '<b>'+("Grand Total") + '</b>' 
					
					+ '</td><td>' + ''
					+ '</td><td>' + (qty)
					+ '</td><td>' + (value)
					+ '</td><td>' + (dis)
					+ '</td><td>' + (tax)
					+ '</td><td>' + (sgst)
					+ '</td><td>' + (cgst)
					+ '</td><td>' + (igst)
					+ '</td><td>' + (net)
					+ '</td><td>' + (total_tcs)
					+ '</td><td>' + (amt)
					+ '</td></tr>';
          
			$('#po-table tfoot').html(table_row);
        }
    });
}

$(document).ready(function () {
	frappe.call({
		method: 'jagdamba_app.jagdamba.page.invoice_date_wise_re.invoice_date_wise_re.customer',
		callback: function (data) {
			$.each(data.message, function (i, d) {
				$('<option>').val(d.name).text(d.name).appendTo('#groupid');
			});
			$('#option');
		}
	})
})

frappe.pages['invoice-date-wise-re'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Shree  Jagdmba Private Limited',
		single_column: true
	});
	var po = $('<div style="margin-top:52px">\
	<div class="mt-5">\
	<div class="mt-5">\
	<h3 class="mt-5 text-center " id="title">Invoice Register Datewise</h3>\
	</div>\
	</div>\
	</div>')
	var filters = $('<div class="form-group row main-row" style="margin-top:50px;">\
	<div class="row ml-auto mr-auto justify-content-center align-items-center d-flex">\
		\
		<div class="from-col my-auto">\
			<input class="form-check-input ml-3" type="checkbox" id="allrecords">\
		</div>\
		\
		<div class="from-col my-auto ">\
			\<label class="my-auto">\
				<h5 class="my-auto ">Get All Records</h5>\
			</label>\
		</div>\
		\
		<div class="from-col my-auto">\
			<input class="form-check-input mx-3" type="checkbox" id="summarycheck">\
		</div>\
		\
		<div class="from-col my-auto">\
			<label class="my-auto" id="getSummaryLabel" for="defaultCheck1">\
				<h5 class="my-auto ">Get Summary &nbsp;\</h5>\
			</label>\
		</div>\
		\
		<div class="my-auto" id="select-types">\
			<label class="my-auto" id="select">\
				<h5 class="my-auto ml-3" id="job">Type &nbsp;</h5>\<div id="to" hidden></div>\<div id="joba" hidden></div>\
			</label>\
		</div>\
		\
		<div class="" id="typesss">\
			<select id="job-type" class="form-control text-center" style="width:120px;">\
				<option value="Job" selected>Job</option>\
				<option value="Self">Self</option>\
			</select>\
		</div>\
		\
		<div class="my-auto" id="select">\
			<label class="my-auto" id="" id="abc">\
				<h5 class="my-auto ml-3" id="abc">Fabric Type &nbsp;</h5>\<div id="ra" hidden></div>\
			</label>\
		</div>\
		\
		<div class="" id="fabric">\
			<select id="fabric-type" class="form-control text-center" style="width:120px;">\
				<option value="Woven" selected class="">Woven</option>\
				<option value="Knitt">Knitt</option>\
			</select>\
			<div id="fabrics" hidden></div>\
		</div>\
		\
	</div>\
	<div class="row ml-auto mr-auto mt-3" id="filterrow2">\
		<div class="from-col my-auto">\
			<label class="my-auto">\
				<h5 class="my-auto ml-3" id="placeholder">From Date &nbsp;</h5>\
			</label>\
		</div>\
		\
		<div class="">\
			<input type="date" class="my-auto form-control" id="start-date">\  <div id="from" hidden></div>\
			<div id="placeholder" hidden></div>\
		</div>\
		\
		<div class="from-col my-auto">\
			<label class="my-auto">\
				<h5 class="my-auto ml-3" id="from_dates">To Date &nbsp;</h5>\
			</label>\
		</div>\
		\
		<div class="">\
			<input type="date" class="my-auto form-control my-auto " id="end-date">\  <div id="to" hidden></div>\
			<div id="from_dates" hidden></div>\
		</div>\
		\
		\
		<div class="from-col my-auto">\
		<label class="my-auto" id="customer-label1"><h5 class="my-auto ml-3"  id="customer-label">Party Name &nbsp;</h5>\</label>\<div id="rb" hidden></div>\
		</div>\
		\
		<div class="my-auto">\
			<input class="form-control" list="groupid" id="customer" placeholder="Select Party Name..">\
			<div id="customerstore" hidden></div>\
			<datalist id="groupid" class=""></datalist>\
			\
		</div>\
		\
	</div>\
	</div>\
	</div>')


var summary = $('<div class="row" id="summary-row">\
<div id ="summary" class="col" style="margin-top:50px"><b>Summary :- </b>\
<div id="total_mtr_kgs">\
<div></div>\</div>\
\
<div id="total_job_value">\
<div></div>\</div>\
\
<div id ="total_trade_discount">\
<div></div></div>\
\
<div id ="taxable_amt">\
<div></div></div>\
\
</div>\
<div class="col" id="summary_total" style="margin-top:60px">\
<div id="total_sgst"><div>\
</div></div>\
\
<div id="total_cgst"><div>\
</div></div>\
\
<div id="total_igst"><div>\
</div></div>\
</div>\
\
<div class="col" id = "summary_col_row" style="margin-top:60px">\
<div></div>\
<div id="net_total"><div>\
</div></div>\
\
<div id="tcs"><div>\
</div></div>\
<div id="gross_amt"><div>\
</div></div>\
</div></div>');
var print = $('<div class="text-right"><input class="btn btn-primary" type="button" id="btn" value="Print" onclick="printDiv();"></div> ');
	var po_table = $('<div id="mytable">\
	<table class="table table-bordered" id="po-table">\
        <thead>\
		<tr id="table_row">\
		<th class="">Date</th>\
		<th >Category</th>\
		<th >Customer</th>\
		<th >Mtr/Kgs</th>\
		<th >Amount</th>\
		<th >Trd.Dis</th>\
		<th >TaxbleAmt</th>\
		<th >SGST</th>\
		<th >CGST</th>\
		<th >IGST</th>\
		<th >Net Amt.</th>\
		<th >TCS</th>\
		<th >Gross Amt.</th>\
            </tr>\
        </thead>\
        <tbody>\
        </tbody>\
		<tfoot></tfoot>\
    </table>\
	</div>');
	page.main.append(print,po,filters,po_table,summary);
	$('#start-date, #end-date, #job-type, #fabric-type' ).on('input', function() {
		var startDate = $('#start-date').val();
		$("#from").text(startDate);
		var endDate = $('#end-date').val();
		var fabricType = $('#fabric-type').val()
		$("#ra").text(fabricType)
		var jobType = $('#job-type').val()
		$("#to").text(endDate);
		
		getallLotMaster(startDate, endDate,fabricType,jobType);
		
	})
	$('#start-date, #end-date, #job-type, #fabric-type,#customer' ).on('input', function() {
		var startDate = $('#start-date').val();
		$("#from").text(startDate);
		var endDate = $('#end-date').val();
		$("#to").text(endDate);
		var fabricType = $('#fabric-type').val()
		$("#ra").text(fabricType)
		var jobType = $('#job-type').val()
		$("#joba").text(jobType);
		var customer = $('#customer').val()
		$("#rb").text(customer)
		getcustomerLotMaster(startDate, endDate,fabricType,jobType,customer);
		if ($('#allrecords').removeAttr('checked')) {
		
			$("#start-date").css("display", "")
			$("#po-table").css("display", "")
			$("#end-date").css("display", "")
			$("#placeholder").css("display","")
			$("#from_dates").css("display","")
			$("#customer-label").css("display","")
			$("#customer").css("display","")
			$('#summary').css("display","")
			$('#summary_total').css("display","")
			$('#summary_col_row').css("display","")
			$('#pcs').css("display","")
			$('#sales').css("display","")
			$('#pendings').css("display","")
			$("#abc").css("display", "")
			$("#fabric-type").css("display", "")
			$("#job").css("display", "")
			$("#job-type").css("display", "")
	
	
	
			
		
		}
		
	
	})
		

	
	$('#allrecords').click(function () {
		getWithout_allLotMaster()
	
		if ($('#allrecords').is(":checked")) {
		
			$("#start-date").css("display", "none")
			$("#po-table").css("display", "")
			$("#end-date").css("display", "none")
			$("#placeholder").css("display","none")
			$("#from_dates").css("display","none")
			$("#customer-label").css("display","none")
			$("#customer").css("display","none")
			$('#summary').css("display","")
			$('#summary_total').css("display","")
			$('#summary_col_row').css("display","")
			$('#pcs').css("display","")
			$('#sales').css("display","")
			$('#pendings').css("display","")
			$("#abc").css("display", "none")
			$("#fabric-type").css("display", "none")
			$("#job").css("display", "none")
			$("#job-type").css("display", "none")
	
	
	
			
		
		}
		else {
			$("#po-table").css("display", "none")
			$('#summary').css("display","none")
			$("getallLotMaster").css("display","none")
			$("#start-date").css("display", "")
			$("#placeholder").css("display","")
			$("#from_dates").css("display","")
			$("#customer-label").css("display","")
			$("#end-date").css("display", "")
			$("#customer").css("display","")
			$('#summary').css("display","none")
			$('#summary_total').css("display","none")
			$('#summary_col_row').css("display","none")
			$('#pcs').css("display","none")
			$('#sales').css("display","")
			$('#pendings').css("display","")
			$("#abc").css("display", "")
			$("#fabric-type").css("display", "")
			$("#job").css("display", "")
			$("#job-type").css("display", "")
	
	
	
		}
	
	
	})

	$('#summarycheck').click(function () {
	
		if ($('#summarycheck').is(":checked")) {
			$("#po-table").css("display", "none")
			
		}
		else {
			$("#po-table").css("display", "")
		}
	});
	$('#job-type, #fabric-type,#customer' ).on('input', function() {
		
		var fabricType = $('#fabric-type').val()
		
		var jobType = $('#job-type').val()
	
		var customer = $('#customer').val()
		
		getcustomer_Master(fabricType,jobType,customer);
		
	})
		// wrapper.page.set_primary_action('Print', function() {
		// 	var style = document.createElement('style');
		// 	style.textContent = '@media print { div.container.page-body{ padding: 0; margin-left: 3.3rem;}}';
		// 	style.textContent += '@media print { div.form-group.row.mainNone-row { display: block; } }';
		// 	document.head.appendChild(style);
		// 	window.print();
		//   });





	
}	

function printDiv() {

	// var company = document.getElementById('companyname');
	// var reportname = document.getElementById('reportname');

	var company = document.getElementById('title');
	var fromdate = document.getElementById('from');
	var datefrom = document.getElementById('placeholder');
	var todate = document.getElementById('to');
	var dateto = document.getElementById('from_dates')
	var table = document.getElementById('po-table');
	var customer = document.getElementById('customer-label');
	var customerSelect = document.getElementById('rb');
	var fabricSelect = document.getElementById('abc');
	var fabric = document.getElementById('ra');
	var jobSelect = document.getElementById('job');
	var jobs = document.getElementById('joba');
	// var customer = document.getElementById('customer-label');
	// var customerSelect = document.getElementById()
	var summary = document.getElementById('summary-row');
	var summary_row = document.getElementById('summary');
	var summary_total_rows = document.getElementById('summary_total');
	var summarry_total = document.getElementById('summary_col_row')
	
	var newWin = window.open('', 'Print-Window');
	newWin.document.open();

	newWin.document.write('<html>');

	// var table_style = document.getElementById("table_style");

	newWin.document.write('<head>');
	newWin.document.write('<style type="text/css">');
	newWin.document.write('.table-bordered { border: 1px solid #000; border-collapse: collapse; }');
	newWin.document.write('.table-bordered td, .table-bordered th { border: 1px solid #000; font-size:12px}');
	newWin.document.write('</style>');
	newWin.document.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">')
	newWin.document.write('</head>');
	newWin.document.write('<body onload="window.print()">');
	newWin.document.write('<center><h3>');
	newWin.document.write(company.innerHTML);
	newWin.document.write('</h3></center>');
	// newWin.document.write(reportname.innerHTML);
	newWin.document.write('<br><div><b>');
	newWin.document.write(datefrom.innerHTML);
	newWin.document.write(': &nbsp;</b>');
	newWin.document.write(fromdate.innerHTML);
	newWin.document.write('</div><div><b>');
	newWin.document.write(dateto.innerHTML);
	newWin.document.write(': &nbsp;</b>');
	newWin.document.write(todate.innerHTML);
	newWin.document.write('</div><div><b>');
	newWin.document.write(customer.innerHTML);
	newWin.document.write(': &nbsp;</b>');
	newWin.document.write(customerSelect.innerHTML);
	newWin.document.write('</div><div><b>')
	newWin.document.write(fabricSelect.innerHTML);
	newWin.document.write(':&nbsp;</b>')
	newWin.document.write(fabric.innerHTML)
	newWin.document.write('</div><div><b>')
	newWin.document.write(jobSelect.innerHTML);
	newWin.document.write(':&nbsp;</b>')
	newWin.document.write(jobs.innerHTML)
	newWin.document.write('</div>');
	// newWin.document.write(customer.innerHTML);
	newWin.document.write('</div><table class="table-bordered" style="margin-top:50px;width:900px">');
	newWin.document.write(table.innerHTML);
	newWin.document.write('</table><div style="margin-top:50px">');
	// newWin.document.write(summary.innerHTML);
	newWin.document.write('</div><div class="row" style="margin-top:50px; margin-left:10px"><div class="col-xs-4"  >');
	newWin.document.write(summary_row.innerHTML);
	newWin.document.write('</div><div class="col-xs-4" style=" margin-left:50px;"><br>');
	newWin.document.write(summary_total_rows.innerHTML);
	newWin.document.write('</div><div class="col-xs-4" style=" margin-left:50px"><br>');
	newWin.document.write(summarry_total.innerHTML);
	newWin.document.write('</div></div></body></html>');

	newWin.document.close();

	setTimeout(function () { newWin.close(); }, 10);
}
	