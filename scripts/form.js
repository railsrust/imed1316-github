// A $( document ).ready() block.
$(document).ready(function () {
  //console.log( "ready!" );
  //alert('test');
  
  $(document).on("change", "#t-shirt", chkTshirt);
  
  //begin chkTshirt functon
  function chkTshirt() {
    var tshirt = $("#t-shirt").val();
    //alert(tshirt);
    
    //begin if
    if (tshirt == "CUSTOM") {
      //alert ("works")
      $("#custom").removeAttr("disabled"); //remove disable
    }//end if tshirt   
    
    else {
      $("#custom").attr("disabled", true); //disabled again
      $("#custom").val(""); //set value to empty
      $("#custom").removeAttr("required"); //remove required
    }
  }// end of chkTshirt function
});