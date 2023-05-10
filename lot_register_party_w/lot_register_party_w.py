import frappe

@frappe.whitelist()
def get_register_master(start_date, end_date,party_name,fabric_type,job_type):
    query = frappe.db.sql("""
        select
            lm.name as 'LOTNO',
                date(lm.creation) as 'DATE',
                GROUP_CONCAT(DISTINCT(si.name)) as 'INVOICENO',
                date(si.creation) as 'IDATE',
                party_name as 'SUPPLIER',
                blend_weave as 'BLEND',
                quality as "QUALITY",
                lm.meter as 'LOTMTRKGS',
                lm.finished_mtr as 'SALEMTRKGS',
                lm.inwared_pending as 'PENDING'

       from `tabLot Master` lm,
            `tabSales Invoice` si

            
       inner join `tabSales Invoice Item` sii on
            sii.parent=si.name 
        
        WHERE lm.name = sii.lot_no 
        and
        (
            
            DATE(lm.creation) between % s
                and % s )
        and party_name = %s
        and
        lm.fabric_type = %s    
        and
        lm.type = %s
        
        GROUP BY LOTNO
           
""", (start_date, end_date,party_name,fabric_type,job_type), as_dict=True)

    return query

@frappe.whitelist()
def get_customer_master(party_name,fabric_type,job_type):
    query = frappe.db.sql("""
        select
            lm.name as 'LOTNO',
                date(lm.creation) as 'DATE',
                GROUP_CONCAT(DISTINCT(si.name)) as 'INVOICENO',
                date(si.creation) as 'IDATE',
                party_name as 'SUPPLIER',
                blend_weave as 'BLEND',
                quality as "QUALITY",
                lm.meter as 'LOTMTRKGS',
                lm.finished_mtr as 'SALEMTRKGS',
                lm.inwared_pending as 'PENDING'

       from `tabLot Master` lm,
            `tabSales Invoice` si

            
       inner join `tabSales Invoice Item` sii on
            sii.parent=si.name 
        
        WHERE sii.lot_no=lm.name 
        and party_name = %s
        and
        lm.fabric_type = %s    
        and
        lm.type = %s
        GROUP BY LOTNO
""", (party_name,fabric_type,job_type), as_dict=True)

    return query


@frappe.whitelist()
def customer():
    return frappe.db.sql("""
     select name from `tabCustomer`
     """, as_dict=True)
    
    
@frappe.whitelist()
def get_without_register_master(start_date, end_date,fabric_type,job_type):
    query = frappe.db.sql("""
        select
            lm.name as 'LOTNO',
                date(lm.creation) as 'DATE',
                GROUP_CONCAT(DISTINCT(si.name)) as 'INVOICENO',
                date(si.creation) as 'IDATE',
                party_name as 'SUPPLIER',
                blend_weave as 'BLEND',
                quality as "QUALITY",
                lm.meter as 'LOTMTRKGS',
                lm.finished_mtr as 'SALEMTRKGS',
                lm.inwared_pending as 'PENDING'

       from `tabLot Master` lm,
            `tabSales Invoice` si

            
       inner join `tabSales Invoice Item` sii on
            sii.parent=si.name 
        
        WHERE sii.lot_no=lm.name 
        and
        (
            
            DATE(lm.creation) between % s
                and % s )
        and
        lm. fabric_type=%s
        and
        lm.type = %s
        GROUP BY LOTNO
           
""", (start_date, end_date,fabric_type,job_type), as_dict=True)

    return query


@frappe.whitelist()
def get_all():
    query = frappe.db.sql("""
        select
            lm.name as 'LOTNO',
                date(lm.creation) as 'DATE',
                GROUP_CONCAT(DISTINCT(si.name)) as 'INVOICENO',
                date(si.creation) as 'IDATE',
                party_name as 'SUPPLIER',
                blend_weave as 'BLEND',
                quality as "QUALITY",
                lm.meter as 'LOTMTRKGS',
                lm.finished_mtr as 'SALEMTRKGS',
                lm.inwared_pending as 'PENDING'

       from `tabLot Master` lm,
            `tabSales Invoice` si

            
       inner join `tabSales Invoice Item` sii on
            sii.parent=si.name 
        
        WHERE sii.lot_no=lm.name 
        GROUP BY LOTNO
           
""", (), as_dict=True)

    return query
      
        
