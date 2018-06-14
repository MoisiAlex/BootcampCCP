

    connect.core.initCCP( document.getElementById("ccpDiv"), { 
        ccpUrl: "https://perficientdemo.awsapps.com/connect/ccp#", 
        loginPopup: true, 
        softphone: { allowFramedSoftphone : true } 
        });
    
    connect.contact(function(contact){ 
        contact.onConnecting(handleConnecting); 
        contact.onAccepted(handleAccepted); 
        contact.onConnected(handleConnected);
        contact.onEnded(handleEnded); });
    
    
    function bindGrid(dataItems){ 
    $("#attGrid").jsGrid({ 
        width: "100%", 
        inserting: false, 
        editing: false, 
        sorting: false, 
        paging: false, 
        data: dataItems, fields: [ { name: "key", type: "text", width: 150 }, { name: "val", type: "text", width: 150 } ] });
}


function handleConnecting(){
        console.log("------------------------------------");
      console.log(contact.getConnections()[1].getAddress().phoneNumber);
    
}



