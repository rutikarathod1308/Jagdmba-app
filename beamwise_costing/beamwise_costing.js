
function getWithout_allLotMaster(Beamno, Lotno) {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.beamwise_costing.beamwise_costing.get_with_beam',
        args: {
            beam_no: Beamno,
			lot_no :Lotno
        },
        callback: function (data) {
            var rows = '';
            var grouped_data = {};
            var voucher_numbers = '';
			var table_row  = '';
			var qty_total = 0;
			var amount_total = 0;

            $.each(data.message, function (i, d) {
                if (d.name in grouped_data) {
                    grouped_data[d.name].push(d);					
                } else {
                    grouped_data[d.name] = [d];
                }
            });

            for (var voucher_no in grouped_data) {
                var qty = 0;
				var amount = 0; // initialize the quantity sum for this voucher
                rows += '<table class="voucher-table table"><tr><th class="th-name">Item Name</th><th class="th-name">Net Qty</th><th class="th-name">Rate</th><th class="th-name">Amount</th></tr>'; // added header row
                $.each(grouped_data[voucher_no], function (i, d) {
                    rows += '<tr><td>' + (d.item_name ? d.item_name : '')
                        + '</td><td class="qty">' + (d.qty ? d.qty : '')
                        + '</td><td>' + (d.basic_rate ? d.basic_rate : '')
                        + '</td><td class="amount">' + (d.amount ? d.amount : 0)
                        + '</td></tr>';
                    qty += parseFloat(d.qty);
					amount += parseFloat(d.amount); // add the quantity to the sum for this voucher
                });
				
                
				console.log(amount)
				rows +=
					'<tr><td  class="center">' + '<b>'+("Item Wise Total") + '</b>' 
					+ '</td><td>' + (qty.toFixed(2))
					+ '</td><td>' + ''
					+ '</td><td>' + (amount.toFixed(2))
					+ '</b></td></tr>';
					rows += '</table><hr>';
					qty_total += qty
					amount_total += amount
                voucher_numbers += '<div class ="row mt-5" ><div class="col-xs-3"><b class="b-name">Voucher No:</b> &nbsp; &nbsp; <a href="stock-entry/' + voucher_no + '">'  + voucher_no + '</a></div>\
                <div class="col-xs-3"><b class="b-name">Date:</b> ' + (grouped_data[voucher_no][0].posting_date ? moment(grouped_data[voucher_no][0].posting_date).format('DD-MM-YYYY') : '') + '</div><div class="col-xs-3"><b> ' + (grouped_data[voucher_no][0].operation_name ? grouped_data[voucher_no][0].operation_name : '') + '</b></div>\
                <div class="col-xs-3"> <b class="b-name"> Meters: &nbsp;&nbsp;</b>' + (grouped_data[voucher_no][0].meters ? grouped_data[voucher_no][0].meters : '') + '</div>\
               </div></div>	' + rows ;
                rows = '';
				
            }
			summaries =''
			summaries += '<div>'+'<b>' + "Total Lot Qty : "+'</b>'+'&nbsp;&nbsp;'+ (qty_total) +'</div>'
			$('#total_qty div').html(summaries);
			amounts =''
			amounts += '<div>'+'<b>' + "Total Lot Amount : "+'</b>'+'&nbsp;&nbsp;'+ (amount_total) +'</div>'
			$('#total_amount div').html(amounts);
            $('#voucher-numbers div').html(voucher_numbers);
        }
    });
}

function getWith_all_LotMaster() {
    frappe.call({
        method: 'jagdamba_app.jagdamba.page.beamwise_costing.beamwise_costing.get_all',
        args: {
          
        },
        callback: function (data) {
			console.log(data)
            var rows = '';
            var grouped_data = {};
            var voucher_numbers = '';
			var table_row  = '';
			var qty_total = 0;
			var amount_total =0;

            $.each(data.message, function (i, d) {
                if (d.name in grouped_data) {
                    grouped_data[d.name].push(d);					
                } else {
                    grouped_data[d.name] = [d];
                }
            });

            for (var voucher_no in grouped_data) {
                var qty = 0;
				var amount = 0; // initialize the quantity sum for this voucher
                rows += '<table class="voucher-table table"><tr><th class="th-name">Item Name</th><th class="th-name">Net Qty</th><th class="th-name">Rate</th><th class="th-name">Amount</th></tr>'; // added header row
                $.each(grouped_data[voucher_no], function (i, d) {
                    rows += '<tr><td>' + (d.item_name ? d.item_name : '')
                        + '</td><td class="qty">' + (d.qty ? d.qty : '')
                        + '</td><td>' + (d.basic_rate ? d.basic_rate : '')
                        + '</td><td class="amount">' + (d.amount ? d.amount : 0)
                        + '</td></tr>';
                    qty += parseFloat(d.qty);
					amount += parseFloat(d.amount); // add the quantity to the sum for this voucher
                });
				
                
				console.log(amount)
				rows +=
					'<tr><td  class="center">' + '<b>'+("Item Wise Total") + '</b>' 
					+ '</td><td>' + (qty.toFixed(2))
					+ '</td><td>' + ''
					+ '</td><td>' + (amount.toFixed(2))
					+ '</b></td></tr>';
					rows += '</table><hr>';
					qty_total += qty
					amount_total += amount
                voucher_numbers += '<div class ="row mt-5" ><div class="col-xs-3"><b class="b-name">Voucher No:</b> &nbsp; &nbsp; <a href="stock-entry/' + voucher_no + '">'  + voucher_no + '</a></div>\
                <div class="col-xs-3"><b class="b-name">Date:</b> ' + (grouped_data[voucher_no][0].posting_date ? moment(grouped_data[voucher_no][0].posting_date).format('DD-MM-YYYY') : '') + '</div><div class="col-xs-3"><b> ' + (grouped_data[voucher_no][0].operation_name ? grouped_data[voucher_no][0].operation_name : '') + '</b></div>\
                <div class="col-xs-3"> <b class="b-name">Meters: &nbsp;&nbsp;</b>' + (grouped_data[voucher_no][0].meters ? grouped_data[voucher_no][0].meters : '') + '</div>\
               </div></div>	' + rows ;
                rows = '';
				
            }
			
			summaries =''
			summaries += '<div>'+'<b>' + "Total Lot Qty : "+'</b>'+'&nbsp;&nbsp;'+ (qty_total) +'</div>'
			$('#total_qty div').html(summaries);
			amounts =''
			amounts += '<div>'+'<b>' + "Total Lot Amount : "+'</b>'+'&nbsp;&nbsp;'+ (amount_total) +'</div>'
			$('#total_amount div').html(amounts);
            $('#voucher-numbers div').html(voucher_numbers);
        }
    });
}










frappe.pages['beamwise-costing'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		single_column: true
	});

	// var print = $('<div class="text-right"><input class="btn btn-primary" type="button" id="btn" value="Print" onclick="printDiv();"></div> ');
	var title = $('\
	<div><h3 id="title" class="title-head">Costing Report </h3></div>\
		<hr>\
    ');

	var filter = $('\
	<div><div class="row "><h4 style="color:#9E4784;" class="my-auto ml-3" id="beam_name"> Beam No: &nbsp;</h4><input list="beamid" id="beamno" ><datalist id="beamid" ></datalist>\<div id="beam" hidden></div>\
	<div class="br"></div>\
	<div class="row" style="margin-left:100px"><h4 style="color:#9E4784;" class="my-auto ml-3" id="lot_name"> Lot No: &nbsp;</h4><input list="lotid" id="lotno" ><datalist id="lotid" ></datalist>\<div id="lot" hidden></div>\
	<div class="br"></div>\</div>\
	');
	var summary = $('<div id="summary"><div id="total_qty"><div></div></div>\
	<div id="total_amount"><div></div></div></div>')
var lot_table = $('\
	<div id="mytable">\
	<div id="voucher-numbers" ><div></div>\
	<table class="table table-bordered" id="lot-table">\
        <tbody>\
        </tbody>\
		<tfoot></tfoot>\
    </table>\
	</div>')
page.main.append(title, filter, lot_table,summary);

	$('#beamno, #lotno' ).on('change', function() {
		var Beamno = $('#beamno').val();
		$("#beam").text(Beamno);
		var Lotno = $('#lotno').val();
		$("#lot").text(Lotno);

		if(Beamno == ""){
			getWith_all_LotMaster();
		}
		else{
			getWithout_allLotMaster(Beamno, Lotno);
		}
		
		
	})

	var Beamno = $('#beamno').val();
	{
		if(Beamno == ""){
			getWith_all_LotMaster();
		}
		
	}

	wrapper.page.set_primary_action('Print', function() {
   
		window.print();
	  });
	
}



$(document).ready(function () {
	frappe.call({
		method: 'jagdamba_app.jagdamba.page.beamwise_costing.beamwise_costing.beam',
		callback: function (data) {
			$.each(data.message, function (i, d) {
				$('<option>').val(d.name).text(d.name).appendTo('#beamid');
			});
			$('#option');
		}
	})
})
$(document).ready(function () {
	frappe.call({
		method: 'jagdamba_app.jagdamba.page.beamwise_costing.beamwise_costing.lot',
		callback: function (data) {
			$.each(data.message, function (i, d) {
				$('<option>').val(d.name).text(d.name).appendTo('#lotid');
			});
			$('#option');
		}
	})
})


