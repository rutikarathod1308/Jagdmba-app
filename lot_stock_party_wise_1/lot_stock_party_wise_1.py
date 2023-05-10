import frappe

@frappe.whitelist()
def get_lot_master(start_date, end_date,party_name,fabric_type,job_type):
    return frappe.db.sql("""
        SELECT name,
        date,party_name, chalan_no, blend_weave, quality, meter,finished_mtr, sales_panding,party_name, panding_qty, pieces,inwared_pending
        FROM `tabLot Master`
        WHERE 
        
        docstatus1 = "Sold"
        and
        date BETWEEN %s  AND %s
        and 
        party_name = %s
        and
        fabric_type = %s          
        and 
        type = %s      
    """, (start_date, end_date,party_name,fabric_type, job_type), as_dict=True)  

@frappe.whitelist()
def get_customer_master(party_name,fabric_type,job_type):
    return frappe.db.sql("""
        SELECT name,
        date,party_name, chalan_no, blend_weave, quality, meter,finished_mtr, sales_panding,party_name, panding_qty, pieces,inwared_pending
        FROM `tabLot Master`
        WHERE 
        
        docstatus1 = "Sold"
        
        and 
        party_name = %s
        and
        fabric_type = %s          
        and 
        type = %s      
    """, (party_name,fabric_type, job_type), as_dict=True)  
    
@frappe.whitelist()
def get_all():
    return frappe.db.sql("""
        SELECT name, date, party_name, chalan_no, blend_weave, quality, meter,finished_mtr, sales_panding, panding_qty, pieces,inwared_pending
        FROM `tabLot Master`
        WHERE 
        
        docstatus1 = "Sold"
        
    """, as_dict=True)  

@frappe.whitelist()	
def customer():
    return frappe.db.sql("""
     select name from `tabCustomer`
     """, as_dict=True)

@frappe.whitelist()
def get_without_customer_lot_master(start_date, end_date, fabric_type,job_type):
    return frappe.db.sql("""
        SELECT name , date,party_name, chalan_no, blend_weave, quality, meter,finished_mtr, sales_panding,party_name, panding_qty, pieces,inwared_pending
        FROM `tabLot Master`
        WHERE 
        
        docstatus1 = "Sold"
        and
        date BETWEEN %s  AND %s
        and
        fabric_type = %s
        and
        type = %s
        
    """, (start_date, end_date, fabric_type,job_type), as_dict=True)  