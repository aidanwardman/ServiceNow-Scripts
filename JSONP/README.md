# JSONP Wrapper
This is useful for applications that want to make JSONP requests to ServiceNow from client side.

> I did not create this JSONP Wrapper, I sourced it off a ServiceNow community page, however I have lost the reference, will include if and when I find it again.

## Stream Deck ServiceNow Plugin
The JSONP Wrapper is required for the Stream Deck plugin to be able to work with your instance.

1. In your ServiceNow instance, create a new UI Page with the name **jsonp**
2. In the **HTML** field of the UI Page, paste the contents of the file **jsonp** (included in this repository)
3. In the application navigator filter of your instance, type **sys_public.list**
4. Click **New**
5. In the **sys_public** table, create a record with the following values
   - **Page** : jsonp 
   - **Active** : Ticked / Checked

Instructions on how to make a page public in your instance can also be found at [Making a Page Public](http://wiki.servicenow.com/index.php?title=Making_a_Page_Public)

[ServiceNow Stream Deck Preview](preview.png)