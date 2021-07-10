function getGroceryList(){

    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200){
            var obj= JSON.parse(this.responseText);
            var result="";
            result="        <table> "+
            "<thead>" +
             "  <td>Sl.No</td> "+
             "    <td>Name</td>  "+
             " <td>Department</td>  "+
             " <td>Unit</td>  "+
             "  <td>Quantity</td>  "+
             "  <td>Notes</td>  "+             
             "</thead>  ";

 
            for (var i=0 ;i< obj.length;i++)
            {

                result +="<td>" +  obj[i].SlNo +"</td>";
                result +="<td>" +  obj[i].name +"</td>";
                result +="<td>" +  obj[i].Department +"</td>";
                result +="<td>" +  obj[i].unit +"</td>";
                result +="<td>" +  obj[i].quantity +"</td>";
                result +="<td>" +  obj[i].notes +"</td>";
                result +=  "</tr> ";
            }

            result +=  "<table> ";
            
            document.getElementById("grocery").innerHTML= result;

        }
    }
    
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
    }