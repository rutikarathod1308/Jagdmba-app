	// =================================================Getting Lot Master Data Data============================================================


function getallLotMaster() {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.lot_stock_party_wise_1.lot_stock_party_wise_1.get_all',
        args: {
           
        },
        callback: function(data) {
            var rows = '';
			var qty = 0;
			var pieces = 0;
			var sale = 0;
			var pendinga = 0;
			var table_row = 0;
			
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + '<a href="lot-master/'+data.message[i].name+'">' + (d.name ? d.name : '') + '</a>'  
				+'</td><td>' + (d.date && d.date.length >= 10 ? 
					d.date.substring(8, 10) + "-" + 
					d.date.substring(5, 7) + "-" + 
					d.date.substring(0, 4) : '')
				+'</td><td>'  + (d.party_name ? d.party_name:'')
 				+ '</td><td>' + (d.chalan_no ? d.chalan_no : '') 
				+ '</td><td>' + (d.blend_weave ? d.blend_weave : '') 
				+'</td><td>' + (d.quality ? d.quality: '')
				+ '</td><td class="qty">' + (d.meter ? d.meter : 0)
				
				+ '</td><td class ="sale">' + (d.finished_mtr ? d.finished_mtr : 0) 
				+ '</td><td class="pendinga">' + (d.inwared_pending ? d.inwared_pending : 0) 
				+ '</td><td class="pieces">' + (d.pieces ? d.pieces : 0) + '</td></tr>';
            });
			
			
            $('#po-table tbody').html(rows);
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "TOTAL ISSUE METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#summary div').html(summaries);
			
			$('.pieces').each(function(){
				pieces += parseFloat($(this).text());
			});
			
			picess = ''
			picess += '<div>'+'<b>' + "Total PCS :" + '</b>'+ '&nbsp;&nbsp;' + (pieces) +'</div>'
			$('#pcs div').html(picess);
			
			$('.sale').each(function(){
				sale +=parseFloat($(this).text());

			});
			saless = ''
			saless += '<div>'+'<b>' + "TOTAL SALE METER/KGS :" + '</b>'+ '&nbsp;&nbsp;' + (sale) +'</div>'
			$('#sales div').html(saless);

			$('.pendinga').each(function(){
				pendinga += parseFloat($(this).text());
			});
			pendingsa = ''
			pendingsa ='<div>'+'<b>' + "TOTAL PENDINGS :" + '</b>'+ '&nbsp;&nbsp;' + (pendinga) +'</div>'
			$('#pendings div').html(pendingsa);
			// $('#summary-s div').html(summary);	

			table_row +=
					'<tr><td colspan="2" class="center">' + '<b>'+("Grand Total") + '</b>' 
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td><b>' + (qty.toFixed(2))
					+ '</b></td><td><b>' + (pieces.toFixed(2))
					+ '</b></td><td><b>' + (sale.toFixed(2))
					+ '</b></td><td><b>' + (pendinga.toFixed(2))
					+ '</b></td></tr>';
          
			$('#po-table tfoot').html(table_row);
			
        }
    });
}


function getCustomerMaster(startDate, endDate, fabricType,jobType) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.lot_stock_party_wise_1.lot_stock_party_wise_1.get_without_customer_lot_master',
        args: {
            start_date: startDate,
            end_date: endDate,
			fabric_type:fabricType,
			job_type:jobType
        },
        callback: function(data) {
            var rows = '';
			var qty = 0;
			var pieces = 0;
			var sale = 0;
			var pendinga = 0;
			var table_row = 0;
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + '<a href="lot-master/'+data.message[i].name+'">' + (d.name ? d.name : '') + '</a>' 
				+'</td><td>' + (d.date && d.date.length >= 10 ? 
					d.date.substring(8, 10) + "-" + 
					d.date.substring(5, 7) + "-" + 
					d.date.substring(0, 4) : '')
				+'</td><td>'  + (d.party_name ? d.party_name:'')
				+ '</td><td>' + (d.chalan_no ? d.chalan_no : '') 
				+ '</td><td>' + (d.blend_weave ? d.blend_weave : '') 
				+'</td><td>' + (d.quality ? d.quality: '')
				+ '</td><td class="qty">' + (d.meter ? d.meter : 0)
				
				+ '</td><td class ="sale">' + (d.finished_mtr ? d.finished_mtr : 0) 
				+ '</td><td class="pendinga">' + (d.inwared_pending ? d.inwared_pending : 0) 
				+ '</td><td class="pieces">' + (d.pieces ? d.pieces : 0) + '</td></tr>';
            });
			
			
            $('#po-table tbody').html(rows);
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "TOTAL ISSUE METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#summary div').html(summaries);
			
			$('.pieces').each(function(){
				pieces += parseFloat($(this).text());
			});
			
			picess = ''
			picess += '<div>'+'<b>' + "Total PCS :" + '</b>'+ '&nbsp;&nbsp;' + (pieces) +'</div>'
			$('#pcs div').html(picess);
			
			$('.sale').each(function(){
				sale +=parseFloat($(this).text());

			});
			saless = ''
			saless += '<div>'+'<b>' + "TOTAL SALE METER/KGS :" + '</b>'+ '&nbsp;&nbsp;' + (sale) +'</div>'
			$('#sales div').html(saless);

			$('.pendinga').each(function(){
				pendinga += parseFloat($(this).text());
			});
			pendingsa = ''
			pendingsa ='<div>'+'<b>' + "TOTAL PENDINGS :" + '</b>'+ '&nbsp;&nbsp;' + (pendinga) +'</div>'
			$('#pendings div').html(pendingsa);
			// $('#summary-s div').html(summary);	

			table_row +=
					'<tr><td colspan="2" class="center">' + '<b>'+("Grand Total") + '</b>' 
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td><b>' + (qty.toFixed(2))
					+ '</b></td><td><b>' + (pieces.toFixed(2))
					+ '</b></td><td><b>' + (sale.toFixed(2))
					+ '</b></td><td><b>' + (pendinga.toFixed(2))
					+ '</b></td></tr>';
          
			$('#po-table tfoot').html(table_row);
			
        }
    });
}
function getCustomer_Master(customer,fabricType,jobType) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.lot_stock_party_wise_1.lot_stock_party_wise_1.get_customer_master',
        args: {
            party_name:customer,
			fabric_type:fabricType,
			job_type:jobType
        },
        callback: function(data) {
            var rows = '';
			var qty = 0;
			var pieces = 0;
			var sale = 0;
			var pendinga = 0;
			var table_row = 0;
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + '<a href="lot-master/'+data.message[i].name+'">' + (d.name ? d.name : '') + '</a>' 
				+'</td><td>' + (d.date && d.date.length >= 10 ? 
					d.date.substring(8, 10) + "-" + 
					d.date.substring(5, 7) + "-" + 
					d.date.substring(0, 4) : '')
				+'</td><td>'  + (d.party_name ? d.party_name:'')
				+ '</td><td>' + (d.chalan_no ? d.chalan_no : '') 
				+ '</td><td>' + (d.blend_weave ? d.blend_weave : '') 
				+'</td><td>' + (d.quality ? d.quality: '')
				+ '</td><td class="qty">' + (d.meter ? d.meter : 0)
				
				+ '</td><td class ="sale">' + (d.finished_mtr ? d.finished_mtr : 0) 
				+ '</td><td class="pendinga">' + (d.inwared_pending ? d.inwared_pending : 0) 
				+ '</td><td class="pieces">' + (d.pieces ? d.pieces : 0) + '</td></tr>';
            });
			
			
            $('#po-table tbody').html(rows);
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "TOTAL ISSUE METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#summary div').html(summaries);
			
			$('.pieces').each(function(){
				pieces += parseFloat($(this).text());
			});
			
			picess = ''
			picess += '<div>'+'<b>' + "Total PCS :" + '</b>'+ '&nbsp;&nbsp;' + (pieces) +'</div>'
			$('#pcs div').html(picess);
			
			$('.sale').each(function(){
				sale +=parseFloat($(this).text());

			});
			saless = ''
			saless += '<div>'+'<b>' + "TOTAL SALE METER/KGS :" + '</b>'+ '&nbsp;&nbsp;' + (sale) +'</div>'
			$('#sales div').html(saless);

			$('.pendinga').each(function(){
				pendinga += parseFloat($(this).text());
			});
			pendingsa = ''
			pendingsa ='<div>'+'<b>' + "TOTAL PENDINGS :" + '</b>'+ '&nbsp;&nbsp;' + (pendinga) +'</div>'
			$('#pendings div').html(pendingsa);
			// $('#summary-s div').html(summary);	

			table_row +=
					'<tr><td colspan="2" class="center">' + '<b>'+("Grand Total") + '</b>' 
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td><b>' + (qty.toFixed(2))
					+ '</b></td><td><b>' + (pieces.toFixed(2))
					+ '</b></td><td><b>' + (sale.toFixed(2))
					+ '</b></td><td><b>' + (pendinga.toFixed(2))
					+ '</b></td></tr>';
          
			$('#po-table tfoot').html(table_row);
			
        }
    });
}

function getLotMaster(startDate, endDate,customer,fabricType,jobType) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.lot_stock_party_wise_1.lot_stock_party_wise_1.get_lot_master',
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
			var pieces = 0;
			var sale = 0;
			var pendinga = 0;
			var table_row = 0;
			
			
            $.each(data.message, function(i, d) {
                rows += '<tr><td>' + '<a href="lot-master/'+data.message[i].name+'">' + (d.name ? d.name : '') + '</a>' 
				+'</td><td>' + (d.date && d.date.length >= 10 ? 
					d.date.substring(8, 10) + "-" + 
					d.date.substring(5, 7) + "-" + 
					d.date.substring(0, 4) : '')
				+'</td><td>'  + (d.party_name ? d.party_name:'')
				+ '</td><td>' + (d.chalan_no ? d.chalan_no : '') 
				+ '</td><td>' + (d.blend_weave ? d.blend_weave : '') 
				+'</td><td>' + (d.quality ? d.quality: '')
				+ '</td><td class="qty">' + (d.meter ? d.meter : 0)
				
				+ '</td><td class ="sale">' + (d.finished_mtr ? d.finished_mtr : 0) 
				+ '</td><td class="pendinga">' + (d.inwared_pending ? d.inwared_pending : 0) 
				+ '</td><td class="pieces">' + (d.pieces ? d.pieces : 0) + '</td></tr>';
            });
			
			
            $('#po-table tbody').html(rows);
			$('.qty').each(function () {
				qty += parseFloat($(this).text());
				
			}); 
			summaries =''
			summaries += '<div>'+'<b>' + "TOTAL ISSUE METER/KGS : "+'</b>'+'&nbsp;&nbsp;'+ (qty) +'</div>'
			$('#summary div').html(summaries);
			
			$('.pieces').each(function(){
				pieces += parseFloat($(this).text());
			});
			
			picess = ''
			picess += '<div>'+'<b>' + "Total PCS :" + '</b>'+ '&nbsp;&nbsp;' + (pieces) +'</div>'
			$('#pcs div').html(picess);
			
			$('.sale').each(function(){
				sale +=parseFloat($(this).text());

			});
			saless = ''
			saless += '<div>'+'<b>' + "TOTAL SALE METER/KGS :" + '</b>'+ '&nbsp;&nbsp;' + (sale) +'</div>'
			$('#sales div').html(saless);

			$('.pendinga').each(function(){
				pendinga += parseFloat($(this).text());
			});
			pendingsa = ''
			pendingsa ='<div>'+'<b>' + "TOTAL PENDINGS :" + '</b>'+ '&nbsp;&nbsp;' + (pendinga) +'</div>'
			$('#pendings div').html(pendingsa);
			// $('#summary-s div').html(summary);	

			table_row +=
					'<tr><td colspan="2" class="center">' + '<b>'+("Grand Total") + '</b>' 
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td>' + ''
					+ '</td><td><b>' + (qty.toFixed(2))
					+ '</b></td><td><b>' + (pieces.toFixed(2))
					+ '</b></td><td><b>' + (sale.toFixed(2))
					+ '</b></td><td><b>' + (pendinga.toFixed(2))
					+ '</b></td></tr>';
          
			$('#po-table tfoot').html(table_row);
        }
    });

	
}


	
$(document).ready(function () {
	frappe.call({
		method: 'jagdamba_app.jagdamba.page.lot_stock_party_wise_1.lot_stock_party_wise_1.customer',
		callback: function (data) {
			$.each(data.message, function (i, d) {
				$('<option>').val(d.name).text(d.name).appendTo('#groupid').trigger('change');
			});
			$('#option');
		}
	})
})
// =================================================Getting Lot Master Data Data============================================================



frappe.pages['lot-stock-party-wise-1'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title:'Shree Jagdmba Private Limited',
		single_column: true
	});
// ==========================================================filter html code================================================================
// var filters = $('<div class="form-group row main-row"">\
// <div class="row ml-auto mr-auto justify-content-center align-items-center d-flex">\
// <div class="from-col my-auto\
// 			<label class="my-auto"><h5 class="my-auto ml-3" id="placeholder"> From Date: &nbsp;</h5></label>\
//             </div>\
// 		<div class="col">\
// 			<input type="date"  class="form-control"  id="start-date">\<div id="from" hidden>\
// 			</div>\</div>\
// 			 <div class="from-col my-auto">\
// 			<label class="my-auto"><h5 class="my-auto ml-3" id="from_dates">To Date:  &nbsp;</h5></label>\
// 		</div>\
// 		\
// 		<div class="">\
// 			<input type="date" class="my-auto form-control my-auto " id="end-date">\<div id="to" hidden>\
// 			</div>\
// 		</div>\
// 			<div class="from-col my-auto">\
// 			<label class="my-auto" ><h5 class="my-auto ml-3" id="customer-label">Customer &nbsp;</h5>\</label>\<div id ="rb" hidden>\
// 			</div>\</div>\
// 			\
// 			<div class="my-auto">\<div>\
// 			<input class="form-control" list="groupid" id="customer" placeholder="Type to search...">\
// 						<datalist id="groupid" class=""></datalist>\
// 						</div>\
// 			</div>\
// 			<div class="my-auto">\
//                 <label class="control-label col my-auto text-center" id="select"><b style="font-size:15px" id="abc">Fabric Type</b></label>\<div id ="ra" hidden	>\
//             </div>\</div>\
//             \
//             <div class=" ">\
//                 <select id="fabric-type" class=" form-control">\
//                     <option>Woven</option>\
//                     <option>Knitt</option>\
//                 </select>\
//             </div>\
//             \
//             \
// 			<div class ="col">\
// 			<input type ="checkbox"  id ="summarycheck">Summary\
// 			</div>\
// 			<div class ="col">\
// 			<input type ="checkbox"  id ="allrecords">Get All Records\
// 			</div>\
// 			</div>\
// 			<div class="row">\
// 			<div class="my-auto">\
// 			<label><b style="font-size:15px;margin-left:20px" id="job">Type:</b> &nbsp;	</lable>\<div id ="joba" hidden	>\
// 			</div>\</div>\
// 			<div class="my-auto">\
// 			<select id="job-type" class=" form-control">\
//                     <option>Job </option>\
//                     <option>self</option>\
//                 </select>\
// 			</div>\
// </div> ');	


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
		<div class="mx-auto" id="select-types">\
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
			<input type="date" class="my-auto form-control" id="start-date" >\  <div id="from" hidden></div>\
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
		<div class="mx-auto">\
  <input class="form-control" list="groupid" id="customer" placeholder="Select Party Name.."	 autocomplete="list">\
  <div id="customerstore" hidden></div>\
  <datalist id="groupid"></datalist>\
</div>\
		\
	</div>\
	</div>\
	</div>')

// =======================================================Lot Master  Table =====================================================================
	
var po = $('<div style="margin-top:52px">\
<div class="mt-5">\
<div class="mt-5">\
<h3 class="mt-5 text-center " id="title">LOT STOCK PARTY WISE</h3>\
</div>\
</div>\
</div>')
var sumamry = $('<div class="summary"  id="summary" >\
				<div></div>\
	</div >\ ')
var summarys = $('<p id="summary-s" id="summarya" style="margin-top:30px;"><b>Summary:-</b> </p>\
<div></div>')
var pcs = $('<div class="summary"  id="pcs">\
				<div></div>\
				</div>\ ')
var sales = $('<div class="summary"  id="sales">\
				<div></div>\
				</div>\ ')
var pendings = $('<div class="summary"  id="pendings">\
				<div></div>\
				</div>\ ')
var print = $('<div class="text-right"><input class="btn btn-primary" type="button" id="btn" value="Print" onclick="printDiv();"></div> ');
var po_table = $('<table class="table table-bordered" style="margin-top:50px;" id="po-table">\
        <thead>\
		<tr>\
		<th>LOT NO</th>\
		<th>LOT DATE</th>\
		<th>Party Name</th>\
		<th>CHALAN</th>\
		<th>BLEND</th>\
		<th>QUALITY</th>\
		<th style="width:10px">ISSUE METER/KGS</th>\
		<th style="width:10px">SALE QTY</th>\
		<th style="width:10px">PENDING QTY</th>\
		<th>PCS</th>\
            </tr>\
        </thead>\
        <tbody>\
        </tbody>\
		<tfoot></tfoot>\
    </table>');
// ===================================================Adding tables to page================================================================
		
		
page.main.append(print,po,filters,po_table, summarys, pcs,sumamry,sales,pendings);
//======================================================= Filtering Dates==================================================================
	
	// Update data when date inputs change
	$('#start-date, #end-date, #customer, #fabric-type, #job-type' ).on('change', function() {
		var startDate = $('#start-date').val();
		$("#from").text(startDate);
		var endDate = $('#end-date').val();
		$("#to").text(endDate)
		var customer = $('#customer').val()
		$("#rb").text(customer)
		var fabricType = $('#fabric-type').val()
		$("#ra").text(fabricType)
		var jobType = $('#job-type').val()
		$('#joba').text(jobType)
		document.cookie = "startDate=; "
		getLotMaster(startDate, endDate,customer,fabricType,jobType	);

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
		getallLotMaster()

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
			$('#pcs').css("display","none")
			$('#sales').css("display","none")
			$('#pendings').css("display","none")
			$("#abc").css("display", "")
			$("#fabric-type").css("display", "")
			$("#job").css("display", "")
			$("#job-type").css("display", "")



		}

	})
	$('#start-date, #end-date, #fabric-type,#job-type' ).on('change', function() {
		
		var startDate = $('#start-date').val();
		var endDate = $('#end-date').val();
		var fabricType = $(' #fabric-type').val();
		var jobType = $('#job-type').val();
		getCustomerMaster(startDate, endDate, fabricType, jobType);

		if ($('#summarycheck').is(":checked")) {
			$("#po-table").css("display", "none")
			
		}
		else {
			$("#po-table").css("display", "")
		}
	})
	$('#customer, #fabric-type,#job-type' ).on('change', function() {
		var startDate = $('#start-date').val();
		var endDate = $('#end-date').val();
		var customer = $('#customer').val();	
		var fabricType = $(' #fabric-type').val();
		var jobType = $('#job-type').val();
		
		document.cookie = "customer=; "
		getCustomer_Master(customer, fabricType, jobType);
		if(customer == ""){
			getCustomerMaster(startDate, endDate, fabricType, jobType);
		}
		if ($('#summarycheck').is(":checked")) {
			$("#po-table").css("display", "none")
			
		}
		else {
			$("#po-table").css("display", "")
		}
	})

}
function printDiv() {
	var check = document.getElementById('allrecords')
	var summarychecks = document.getElementById('summarycheck')
	var company = document.getElementById('title');
	// var reportname = document.getElementById('reportname');
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
	var issue = document.getElementById('summary');
	var summary = document.getElementById('summary-s');
	var meter = document.getElementById('pcs');
	var salesi = document.getElementById('sales');
	var pendings = document.getElementById('pendings');


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
	newWin.document.write(table.innerHTML);
	newWin.document.write('</table></div>');
	newWin.document.write('</div><div>');
	newWin.document.write(summary.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(meter.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(issue   .innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(salesi.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(pendings.innerHTML);

	newWin.document.write('</div><div>');
	
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
	newWin.document.write(jobSelect.innerHTML);
	newWin.document.write(':&nbsp;</b>')
	newWin.document.write(jobs.innerHTML)
	newWin.document.write('</div>');
	newWin.document.write('</div>');
	newWin.document.write('<div><div style="margin-top:50px;"><table class="table-bordered " >');
	newWin.document.write(table.innerHTML);
	newWin.document.write('</table></div>');
	newWin.document.write('</div><div style="margin-top:50px">');
	newWin.document.write(summary.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(meter.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(issue   .innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(salesi.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(pendings.innerHTML);

	newWin.document.write('</div><div>');
	
	newWin.document.write(summary.innerHTML);
	newWin.document.write('</div></body></html>');

	newWin.document.close();

	setTimeout(function () { newWin.close(); }, 10);		
	}
	if(!check.checked){
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
		
		newWin.document.write('</div></body></html>');
	
		newWin.document.close();
	
		setTimeout(function () { newWin.close(); }, 10);	
	}
	var a = $('#start-date').val()
	if(a){
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
	newWin.document.write(jobSelect.innerHTML);
	newWin.document.write(':&nbsp;</b>')
	newWin.document.write(jobs.innerHTML)
	newWin.document.write('</div>');
	newWin.document.write('</div>');
	newWin.document.write('<div><div style="margin-top:50px;"><table class="table-bordered " >');
	newWin.document.write(table.innerHTML);
	newWin.document.write('</table></div>');
	newWin.document.write('</div><div style="margin-top:50px">');
	newWin.document.write(summary.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(meter.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(issue   .innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(salesi.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(pendings.innerHTML);

	newWin.document.write('</div><div>');
	
	newWin.document.write(summary.innerHTML);
	newWin.document.write('</div></body></html>');

	newWin.document.close();

	setTimeout(function () { newWin.close(); }, 10);	
	}
	if(summarychecks.checked){
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
	
	newWin.document.write('</div><div style="margin-top:50px">');
	newWin.document.write(summary.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(meter.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(issue   .innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(salesi.innerHTML);
	newWin.document.write('</div><div>');
	newWin.document.write(pendings.innerHTML);

	newWin.document.write('</div><div>');
	
	// newWin.document.write(summary.innerHTML);
	newWin.document.write('</div></body></html>');

	newWin.document.close();

	setTimeout(function () { newWin.close(); }, 10);	
	}
}