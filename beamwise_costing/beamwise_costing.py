import frappe



@frappe.whitelist()
def get_with_beam(beam_no,lot_no):
    query = frappe.db.sql("""
        select
        se.name,
        se.operation_name,
        ld.meters,
        ld.beam_no,
        ld.lot_no,  
        se.posting_date,
        sle.item_name,
        sle.qty,
        sle.basic_rate,
        sle.amount

       from `tabStock Entry` se inner join `tabStock Entry Detail` sle on se.name = sle.parent
       inner join `tabLot Details` ld
on ld.parent=se.name
    where
    ld.beam_no = %s and
    ld.lot_no = %s
           
""", (beam_no,lot_no), as_dict=True)

    return query

@frappe.whitelist()
def get_all():
    query = frappe.db.sql("""
        SELECT
            se.name,
            se.operation_name,
            ld.meters,
            ld.beam_no,
            se.posting_date,
            sle.item_name,
            sle.qty,
            sle.basic_rate,
            sle.amount
        FROM
            `tabStock Entry` se
            INNER JOIN `tabStock Entry Detail` sle ON se.name = sle.parent
            INNER JOIN `tabLot Details` ld ON ld.parent = se.name
    """, as_dict=True)

    return query
      
        


@frappe.whitelist()
def beam():
    return frappe.db.sql("""
     select name from `tabBeam Detail Back`
     """, as_dict=True)
    
@frappe.whitelist()
def lot():
    return frappe.db.sql("""
     select name from `tabLot Master` 
     where docstatus = 1
     """, as_dict=True)