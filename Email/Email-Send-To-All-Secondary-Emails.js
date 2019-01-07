(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var emails = current.recipients.split(",");
	var newemails = current.recipients.split(",");
	var count = 0;
	for(var i=0;i<emails.length;i++){
		var gr = new GlideRecord("sys_user");
		gr.addQuery("email",emails[i]);
		gr.query();
		while(gr.next()){
			var gr2 = new GlideRecord("cmn_notif_device");
			gr2.addQuery("user",gr.sys_id);
			gr2.addQuery("type","Email");
			gr2.addQuery("primary_email","false");
			gr2.query();
			while(gr2.next()){
				gs.log("Run "+count+": "+gr2.email_address);
				newemails.push(gr2.email_address.toString());
				count++;
			}
		}
	}
	current.recipients = newemails.join();
	
})(current, previous);
