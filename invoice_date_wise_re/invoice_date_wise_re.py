import frappe

@frappe.whitelist()
def get_invoice_master(start_date, end_date, fabric_type,job_type):
    return frappe.db.sql("""
        SELECT  posting_date,
        category,
        customer,
        total_qty,
        si.total,
        base_discount_amount, 
        net_total,
        grand_total,
        SUM(IF(sed.description = "Output Tax SGST @ 9.0", sed.tax_amount, 0)) AS total_SGST,
        SUM(IF(sed.description = "Output Tax IGST @ 18.0", sed.tax_amount, 0)) AS total_IGST,
        SUM(IF(sed.description = "Output Tax CGST @ 9.0", sed.tax_amount, 0)) AS total_CGST,
        SUM(IF(sed.description = "TCS", sed.tax_amount, 0)) AS total_TCS
        FROM `tabSales Invoice` si
        inner join `tabSales Taxes and Charges` sed on si.name = sed.parent
        
        WHERE 
        
        status != "Cancelled" and
        posting_date BETWEEN %s  AND %s
        and
        type=%s
        and
        fabric_type = %s
       GROUP BY si.name
    """, (start_date, end_date, fabric_type,job_type), as_dict=True)  

@frappe.whitelist()
def get_customer_invoice_master(start_date, end_date, fabric_type,job_type,customer):
    return frappe.db.sql("""
        SELECT  posting_date,
        category,
        customer,
        total_qty,
        si.total,
        base_discount_amount, 
        net_total,
        grand_total,
        SUM(IF(sed.description = "Output Tax SGST @ 9.0", sed.tax_amount, 0)) AS total_SGST,
        SUM(IF(sed.description = "Output Tax IGST @ 18.0", sed.tax_amount, 0)) AS total_IGST,
        SUM(IF(sed.description = "Output Tax CGST @ 9.0", sed.tax_amount, 0)) AS total_CGST,
        SUM(IF(sed.description = "TCS", sed.tax_amount, 0)) AS total_TCS
        FROM `tabSales Invoice` si
        inner join `tabSales Taxes and Charges` sed on si.name = sed.parent
        
        WHERE 
        
        status != "Cancelled" and
        posting_date BETWEEN %s  AND %s
        and
        type=%s
        and
        fabric_type = %s
        and
        customer =%s
       GROUP BY si.name
    """, (start_date, end_date, fabric_type,job_type,customer), as_dict=True)  

@frappe.whitelist()	
def customer():
    return frappe.db.sql("""
     select name from `tabCustomer`
     """, as_dict=True)
    
@frappe.whitelist()
def get_customer__master(fabric_type,job_type,customer):
    return frappe.db.sql("""
        SELECT  posting_date,
        category,
        customer,
        total_qty,
        si.total,
        base_discount_amount, 
        net_total,
        grand_total,
        SUM(IF(sed.description = "Output Tax SGST @ 9.0", sed.tax_amount, 0)) AS total_SGST,
        SUM(IF(sed.description = "Output Tax IGST @ 18.0", sed.tax_amount, 0)) AS total_IGST,
        SUM(IF(sed.description = "Output Tax CGST @ 9.0", sed.tax_amount, 0)) AS total_CGST,
        SUM(IF(sed.description = "TCS", sed.tax_amount, 0)) AS total_TCS
        FROM `tabSales Invoice` si
        inner join `tabSales Taxes and Charges` sed on si.name = sed.parent
        
        WHERE 
        
        status != "Cancelled" and
       
        type=%s
        and
        fabric_type = %s
        and
        customer =%s
       GROUP BY si.name
    """, ( fabric_type,job_type,customer), as_dict=True)  

@frappe.whitelist()
def get_without_invoice_master():
    return frappe.db.sql("""
        SELECT  posting_date,
        category,
        customer,
        total_qty,
        si.total,
        base_discount_amount, 
        net_total,
        grand_total,
        SUM(IF(sed.description = "Output Tax SGST @ 9.0", sed.tax_amount, 0)) AS total_SGST,
        SUM(IF(sed.description = "Output Tax IGST @ 18.0", sed.tax_amount, 0)) AS total_IGST,
        SUM(IF(sed.description = "Output Tax CGST @ 9.0", sed.tax_amount, 0)) AS total_CGST,
        SUM(IF(sed.description = "TCS", sed.tax_amount, 0)) AS total_TCS
        FROM `tabSales Invoice` si
        inner join `tabSales Taxes and Charges` sed on si.name = sed.parent
        
        WHERE 
        
        status != "Cancelled" 
       
       GROUP BY si.name
    """, (), as_dict=True)  
    