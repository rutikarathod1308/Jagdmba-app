function getRegisterMaster(startDate, endDate,customer,fabricType,jobType) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.lot_register_party_w.lot_register_party_w.get_register_master',
        args: {
            start_date: startDate,
            end_date: endDate,
			party_name:customer,
			fabric_type:fabricType,
			job_type:jobType
        },
        callback: function(data) {
            var rows = '';
			var qty = 0;
			var sale = 0;
			var pending = 0;
			var table_row
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + '<a href="lot-master/'+data.message[i].LOTNO+'">' + (d.LOTNO ? d.LOTNO : '') + '</a>' 			
				+'</td><td>' + (d.DATE && d.DATE.length >= 10 ? 
					d.DATE.substring(8, 10) + "-" + 
					d.DATE.substring(5, 7) + "-" + 
					d.DATE.substring(0, 4) : '')	
				+ '</td><td>' + (d.INVOICENO ? d.INVOICENO : '') 
				+'</td><td>' + (d.IDATE && d.IDATE.length >= 10 ? 
					d.IDATE.substring(8, 10) + "-" + 
					d.IDATE.substring(5, 7) + "-" + 
					d.IDATE.substring(0, 4) : '')	
				+'</td><td>' + (d.SUPPLIER ? d.SUPPLIER: '')
				+ '</td><td >' + (d.BLEND ? d.BLEND : '')
				
				+ '</td><td >' + (d.QUALITY ? d.QUALITY : '') 
				+ '</td><td class="qty">' + (d.LOTMTRKGS ? d.LOTMTRKGS : 0) 
				+ '</td><td class="sale">' + (d.SALEMTRKGS ? d.SALEMTRKGS : 0)
				+ '</td><td  class="pending">' + (d.PENDING ? d.PENDING : 0)
				+ '</td></tr>';
            });
			
		
            $('#po-table tbody').html(rows);
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "TOTAL Lot METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#meter div').html(summaries);
			
			$('.sale').each(function(){
					sale += parseFloat($(this).text());
			})

			sales = ''
			sales += '<div>'+'<b>' + "TOTAL SALE METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (sale) +'</div>'
			$('#salesi div').html(sales);

			$('.pending').each(function(){
				pending += parseFloat($(this).text());
			})

			pendingss =''
			pendingss += '<div>'+'<b>' + "TOTAL PENDING METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (pending) +'</div>'
			$('#pendings div').html(pendingss);

			table_row +=
					'<tr><td colspan="2" class="center">' + '<b>'+("Grand Total") + '</b>' 
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td><b>' + (qty.toFixed(2))
					+ '</b></td><td><b>' + (sale.toFixed(2))
					+ '</b></td><td><b>' + (pending.toFixed(2))
					+ '</b></td></tr>';
          
			$('#po-table tfoot').html(table_row);

        }
    });
}
function getRegisterMasterwithoutcustomer(startDate, endDate,fabricType,jobType) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.lot_register_party_w.lot_register_party_w.get_without_register_master',
        args: {
            start_date: startDate,
            end_date: endDate,
			fabric_type:fabricType,
			job_type:jobType
        },
        callback: function(data) {
            var rows = '';
			var qty = 0;
			var sale = 0;
			var pending = 0;
			var table_row
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + '<a href="lot-master/'+data.message[i].LOTNO+'">' + (d.LOTNO ? d.LOTNO : '') + '</a>' 		
				+'</td><td>' + (d.DATE && d.DATE.length >= 10 ? 
					d.DATE.substring(8, 10) + "-" + 
					d.DATE.substring(5, 7) + "-" + 
					d.DATE.substring(0, 4) : '')	
				
				+ '</td><td>' + (d.INVOICENO ? d.INVOICENO : '') 
				+'</td><td>' + (d.IDATE && d.IDATE.length >= 10 ? 
					d.IDATE.substring(8, 10) + "-" + 
					d.IDATE.substring(5, 7) + "-" + 
					d.IDATE.substring(0, 4) : '')	
				+'</td><td>' + (d.SUPPLIER ? d.SUPPLIER: '')
				+ '</td><td >' + (d.BLEND ? d.BLEND : '')
				
				+ '</td><td >' + (d.QUALITY ? d.QUALITY : '') 
				+ '</td><td class="qty">' + (d.LOTMTRKGS ? d.LOTMTRKGS : 0) 
				+ '</td><td class="sale">' + (d.SALEMTRKGS ? d.SALEMTRKGS : 0)
				+ '</td><td  class="pending">' + (d.PENDING ? d.PENDING : 0)
				+ '</td></tr>';
            });
			
		
            $('#po-table tbody').html(rows);
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "TOTAL Lot METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#meter div').html(summaries);
			
			$('.sale').each(function(){
					sale += parseFloat($(this).text());
			})

			sales = ''
			sales += '<div>'+'<b>' + "TOTAL SALE METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (sale) +'</div>'
			$('#salesi div').html(sales);

			$('.pending').each(function(){
				pending += parseFloat($(this).text());
			})

			pendingss =''
			pendingss += '<div>'+'<b>' + "TOTAL PENDING METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (pending) +'</div>'
			$('#pendings div').html(pendingss);

			table_row +=
					'<tr><td colspan="2" class="center">' + '<b>'+("Grand Total") + '</b>' 
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td><b>' + (qty.toFixed(2))
					+ '</b></td><td><b>' + (sale.toFixed(2))
					+ '</b></td><td><b>' + (pending.toFixed(2))
					+ '</b></td></tr>';
          
			$('#po-table tfoot').html(table_row);

        }
    });
}
function getCustomer_Master(customer,fabricType,jobType) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.lot_register_party_w.lot_register_party_w.get_customer_master',
        args: {
			party_name:customer,
			fabric_type:fabricType,
			job_type:jobType
        },
        callback: function(data) {
            var rows = '';
			var qty = 0;
			var sale = 0;
			var pending = 0;
			var table_row
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + '<a href="lot-master/'+data.message[i].LOTNO+'">' + (d.LOTNO ? d.LOTNO : '') + '</a>' 			
				+'</td><td>' + (d.DATE && d.DATE.length >= 10 ? 
					d.DATE.substring(8, 10) + "-" + 
					d.DATE.substring(5, 7) + "-" + 
					d.DATE.substring(0, 4) : '')	
				+ '</td><td>' + (d.INVOICENO ? d.INVOICENO : '') 
				+'</td><td>' + (d.IDATE && d.IDATE.length >= 10 ? 
					d.IDATE.substring(8, 10) + "-" + 
					d.IDATE.substring(5, 7) + "-" + 
					d.IDATE.substring(0, 4) : '')	
				+'</td><td>' + (d.SUPPLIER ? d.SUPPLIER: '')
				+ '</td><td >' + (d.BLEND ? d.BLEND : '')
				
				+ '</td><td >' + (d.QUALITY ? d.QUALITY : '') 
				+ '</td><td class="qty">' + (d.LOTMTRKGS ? d.LOTMTRKGS : 0) 
				+ '</td><td class="sale">' + (d.SALEMTRKGS ? d.SALEMTRKGS : 0)
				+ '</td><td  class="pending">' + (d.PENDING ? d.PENDING : 0)
				+ '</td></tr>';
            });
			
		
            $('#po-table tbody').html(rows);
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "TOTAL Lot METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#meter div').html(summaries);
			
			$('.sale').each(function(){
					sale += parseFloat($(this).text());
			})

			sales = ''
			sales += '<div>'+'<b>' + "TOTAL SALE METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (sale) +'</div>'
			$('#salesi div').html(sales);

			$('.pending').each(function(){
				pending += parseFloat($(this).text());
			})

			pendingss =''
			pendingss += '<div>'+'<b>' + "TOTAL PENDING METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (pending) +'</div>'
			$('#pendings div').html(pendingss);

			table_row +=
					'<tr><td colspan="2" class="center">' + '<b>'+("Grand Total") + '</b>' 
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td><b>' + (qty.toFixed(2))
					+ '</b></td><td><b>' + (sale.toFixed(2))
					+ '</b></td><td><b>' + (pending.toFixed(2))
					+ '</b></td></tr>';
          
			$('#po-table tfoot').html(table_row);

        }
    });
}

function get_all_Master() {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.lot_register_party_w.lot_register_party_w.get_all',
        args: {
         
        },
        callback: function(data) {
            var rows = '';
			var qty = 0;
			var sale = 0;
			var pending = 0;
			var table_row = 0;
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + '<a href="lot-master/'+data.message[i].LOTNO+'">' + (d.LOTNO ? d.LOTNO : '') + '</a>' 		
				+'</td><td>' + (d.DATE && d.DATE.length >= 10 ? 
					d.DATE.substring(8, 10) + "-" + 
					d.DATE.substring(5, 7) + "-" + 
					d.DATE.substring(0, 4) : '')	
				+ '</td><td>' + (d.INVOICENO ? d.INVOICENO : '') 
				+'</td><td>' + (d.IDATE && d.IDATE.length >= 10 ? 
					d.IDATE.substring(8, 10) + "-" + 
					d.IDATE.substring(5, 7) + "-" + 
					d.IDATE.substring(0, 4) : '')	
				+'</td><td>' + (d.SUPPLIER ? d.SUPPLIER: '')
				+ '</td><td >' + (d.BLEND ? d.BLEND : '')
				
				+ '</td><td >' + (d.QUALITY ? d.QUALITY : '') 
				+ '</td><td class="qty">' + (d.LOTMTRKGS ? d.LOTMTRKGS : 0) 
				+ '</td><td class="sale">' + (d.SALEMTRKGS ? d.SALEMTRKGS : 0)
				+ '</td><td  class="pending">' + (d.PENDING ? d.PENDING : 0)
				+ '</td></tr>';
            });
			
		
            $('#po-table tbody').html(rows);
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "TOTAL Lot METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#meter div').html(summaries);
			
			$('.sale').each(function(){
					sale += parseFloat($(this).text());
			})

			sales = ''
			sales += '<div>'+'<b>' + "TOTAL SALE METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (sale) +'</div>'
			$('#salesi div').html(sales);

			$('.pending').each(function(){
				pending += parseFloat($(this).text());
			})

			pendingss =''
			pendingss += '<div>'+'<b>' + "TOTAL PENDING METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (pending) +'</div>'
			$('#pendings div').html(pendingss);

			table_row +=
					'<tr><td colspan="2" class="center">' + '<b>'+("Grand Total") + '</b>' 
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td><b>' + (qty.toFixed(2))
					+ '</b></td><td><b>' + (sale.toFixed(2))
					+ '</b></td><td><b>' + (pending.toFixed(2))
					+ '</b></td></tr>';
          
			$('#po-table tfoot').html(table_row);


        }
    });


	$(document).ready(function () {
		frappe.call({
			method: 'jagdamba_app.jagdamba.page.lot_register_party_w.lot_register_party_w.customer',
			callback: function (data) {
				$.each(data.message, function (i, d) {
					$('<option>').val(d.name).text(d.name).appendTo('#groupid');
				});
				$('#option');
			}
		})
	})
	

	
		
}



	
		






$(document).ready(function () {
	frappe.call({
		method: 'jagdamba_app.jagdamba.page.lot_register_party_w.lot_register_party_w.customer',
		callback: function (data) {
			$.each(data.message, function (i, d) {
				$('<option>').val(d.name).text(d.name).appendTo('#groupid');
			});
			$('#option');
		}
	})
})





frappe.pages['lot-register-party-w'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title:'Shree Jagdmba Private Limited',
		single_column: true
	});
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
			<datalist id="groupid"></datalist>\
			\
		</div>\
		\
	</div>\
	</div>\
	</div>')


	var print = $('<div class="text-right"><input class="btn btn-primary" type="button" id="btn" value="Print" onclick="printDiv();"></div> ');

var po = $('<div class="mt-5" id="title">\
<h3 class="mt-5 text-center " style="margin-top:50px;">Lot Register PartyWise</h3>\
</div>')	
	var po_table = $('<div id="mytable">\
	<table class="table table-bordered" id="po-table" style="margin-top:50px;">\
        <thead>\
		<tr>\
		<th>LOT NO</th>\
		<th>LOT DATE</th>\
		<th>Invoice No</th>\
		<th>Invoice Date</th>\
		<th>Party Name</th>\
		<th>Blend</th>\
		<th>Quality</th>\
		<th>Lot.mtr/ kgs</th>\
		<th>Sale MTR/KGS</th>\
		<th>Pending</th>\
            </tr>\
        </thead>\
        <tbody>\
        </tbody>\
		<tfoot></tfoot>\
    </table>\
	</div>');


var summary =$('<div id="summary" class="mt-5" style="margin-top:50px;">\
		<b>Summary:</b>\
</div>')



var meter = $('<div class="summary"  id="meter">\
				<div></div>\
				</div>\ ')

var salesi = $('<div class="summary"  id="salesi">\
				<div></div>\
				</div>\ ')

var pendings = $('<div class="summary"  id="pendings">\
				<div></div>\
				</div>\ ')

page.main.append(print,po,filters,po_table,summary,meter,salesi,pendings);


$('#start-date, #end-date, #customer, #fabric-type, #job-type').on('change', function() {
	var startDate = $('#start-date').val();
	$("#from").text(startDate);
	var endDate = $('#end-date').val();
	$("#to").text(endDate);
	var customer = $('#customer').val()
	$("#rb").text(customer);
	var fabricType = $('#fabric-type').val()
	$("#ra").text(fabricType);
	var jobType = $('#job-type').val()
	$("#joba").text(jobType);
	

	getRegisterMaster(startDate, endDate,customer,fabricType,jobType);
	
	
	if ($('#summarycheck').is(":checked")) {
		$("#po-table").css("display", "none")
	}
	else {
		$("#po-table").css("display", "")
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
$('#allrecords').click(function () {
	get_all_Master()

	if ($('#allrecords').is(":checked")) {
	
		$("#start-date").css("display", "none")
		$("#po-table").css("display", "")
		$("#end-date").css("display", "none")
		$("#placeholder").css("display","none")
		$("#from_dates").css("display","none")
		$("#customer-label").css("display","none")
		$("#customer").css("display","none")
		$('#summary').css("display","")
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
		$('#summary').css("display","")
		$('#salesi').css("display","none")
		$('#meter').css("display","none")
		$('#pendings').css("display","none")
		$("#abc").css("display", "")
		$("#fabric-type").css("display", "")
		$("#job").css("display", "")
		$("#job-type").css("display", "")



	}


})

$('#start-date, #end-date, #fabric-type, #job-type').on('change', function() {
	var startDate = $('#start-date').val();
	var endDate = $('#end-date').val();
	var fabricType = $('#fabric-type').val();
	var jobType = $('#job-type').val();
	getRegisterMasterwithoutcustomer(startDate, endDate,fabricType, jobType);
	
	
})
$('#customer, #fabric-type,#job-type' ).on('change', function() {
	var customer = $('#customer').val();
	var fabricType = $(' #fabric-type').val();
	var jobType = $('#job-type').val();
	getCustomer_Master(customer, fabricType, jobType);

	if ($('#summarycheck').is(":checked")) {
		$("#po-table").css("display", "none")
		
	}
	else {
		$("#po-table").css("display", "")
	}
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
	var check = document.getElementById('allrecords')
	var company = document.getElementById('title');
	// var reportname = document.getElementById('reportname');
	var fromdate = document.getElementById('from');
	var datefrom = document.getElementById('placeholder');
	var todate = document.getElementById('to');
	var dateto = document.getElementById('from_dates')
	var table = document.getElementById('po-table');
	var customer = document.getElementById('customer-label');
	var customerSelect = document.getElementById('rb');
	var summary = document.getElementById('summary');
	var meter = document.getElementById('meter');
	var salesi = document.getElementById('salesi');
	var pendings = document.getElementById('pendings');
	var fabricSelect = document.getElementById('abc');
	var fabric = document.getElementById('ra');
	var typeselect = document.getElementById('job');
	var types = document.getElementById('joba')

	var newWin = window.open('', 'Print-Window');
	if (check.checked) {
		newWin.document.open();
	
		newWin.document.write('<html>');
	
		// var table_style = document.getElementById("table_style");
	
		newWin.document.write('<head>');
		newWin.document.write('<style type="text/css">');
		newWin.document.write('.table-bordered { border: 1px solid #000; border-collapse: collapse; }');
		newWin.document.write('.table-bordered td, .table-bordered th { border: 1px solid #000; font-size:12px}');
		newWin.document.write('</style>');
		newWin.document.write('</head>');
		newWin.document.write('<body onload="window.print()">');
		newWin.document.write('<center><h3>');
		newWin.document.write(company.innerHTML);
		newWin.document.write('</h3></center>');
		// newWin.document.write(reportname.innerHTML);
		newWin.document.write('<br><div>');
			// newWin.document.write(datefrom.innerHTML);
			// newWin.document.write(': &nbsp;');
			// newWin.document.write(fromdate.innerHTML);
			// newWin.document.write('</div><div>');
			// newWin.document.write(dateto.innerHTML);
			// newWin.document.write(': &nbsp;');
			// newWin.document.write(todate.innerHTML);
			// newWin.document.write('</div><div>');
			// newWin.document.write(customer.innerHTML);
			// newWin.document.write(': &nbsp;');
			// newWin.document.write(customerSelect.innerHTML);
			// newWin.document.write('</div><div>')
			// newWin.document.write(fabricSelect.innerHTML);
			// newWin.document.write(':&nbsp;')
			// newWin.document.write(fabric.innerHTML)
			// newWin.document.write('</div>');
		newWin.document.write('<div><div style="margin-top:50px;"><table class="table-bordered " >');
		newWin.document.write('<div><div style="margin-top:50px;"><table class="table-bordered" >');
		newWin.document.write(table.innerHTML);
		newWin.document.write('</table></div>');
		newWin.document.write('</div><div style="margin-top:50px">');
		newWin.document.write(summary.innerHTML);
		newWin.document.write('</div><div>');
		newWin.document.write(meter.innerHTML);
		
		newWin.document.write('</div><div>');
		newWin.document.write(salesi.innerHTML);
		newWin.document.write('</div><div>');
		newWin.document.write(pendings.innerHTML);
		
		// newWin.document.write(summary.innerHTML);
		newWin.document.write('</div></body></html>');
	
		newWin.document.close();
	
		setTimeout(function () { newWin.close(); }, 10);
		}
		else{
	newWin.document.open();

	newWin.document.write('<html>');

	// var table_style = document.getElementById("table_style");

	newWin.document.write('<head>');
	newWin.document.write('<style type="text/css">');
	newWin.document.write('.table-bordered { border: 1px solid #000; border-collapse: collapse; }');
	newWin.document.write('.table-bordered td, .table-bordered th { border: 1px solid #000; font-size:12px}');
	newWin.document.write('</style>');
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
	newWin.document.write(typeselect.innerHTML);
	newWin.document.write(':&nbsp;</b>')
	newWin.document.write(types.innerHTML)
	newWin.document.write('</div>');
	newWin.document.write('<div><div style="margin-top:50px;"><table class="table-bordered" >');
	newWin.document.write(table.innerHTML);
	newWin.document.write('</table></div>');
	newWin.document.write('</div><div style="margin-top:50px">');
	newWin.document.write(summary.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(meter.innerHTML);
	
	newWin.document.write('</div><div>');
	newWin.document.write(salesi.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(pendings.innerHTML);

	newWin.document.write('</div><div>');
	
	// newWin.document.write(summary.innerHTML);
	newWin.document.write('</div></body></html>');

	newWin.document.close();

	setTimeout(function () { newWin.close(); }, 10);}
}