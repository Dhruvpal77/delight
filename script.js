let url = "https://davids-restaurant.herokuapp.com/menu_items.json"
let data= null;
$("document").ready(function () {
	 $.get(url,function(jsonObj,success){
        data = jsonObj.menu_items;
        console.log(data.length); 
    });
	var d=document.querySelector("#drop");
	d.addEventListener("click",createList);
	function createList(e) {
		//console.log(data);
		for(var i=0;i<data.length;i++)
		{
			var dl=document.querySelector("#drop");
			var op=document.createElement("option");
			op.value=i;
			op.text=data[i].name;
			dl.appendChild(op);
		}
		var sel=document.getElementById('drop');
			var opt=sel.options[sel.selectedIndex];
			var s=opt.value;	
			document.querySelector(".profile").innerHTML=`<div class="panel panel-default">
				<div class="panel-heading">
			<h3 class="panel-title center">`+data[s].name+`</h3>
				</div>
				<div class="panel-body">
				<div class="row">
				<div class="col-md-2">
				</div>
				<div class="col-md-8">
					<ul class="list-group">
						<li class="list-group-item"><b>Id number</b>: `+data[s].id+`</li>
						<li class="list-group-item"><b>Small name</b>: `+data[s].short_name+`</li>
						<li class="list-group-item"><b>Name of the Item</b>: `+data[s].name+`</li>
						<li class="list-group-item"><b>Item description</b>: `+data[s].description+`</li>
						<li class="list-group-item"><b>Price_Minimum</b>: `+data[s].price_small+`</li>
						<li class="list-group-item"><b>Price_Maximum</b>: `+data[s].price_large+`</li>
						<li class="list-group-item"><b>Small Portion Name</b>: `+data[s].small_portion_name+`</li>
						<li class="list-group-item"><b>Large Portion Name</b>:`+data[s].large_portion_name+` </li>
					</ul>
					
				</div>
				<div class="col-md-2">
				</div>
				</div>
				</div>
		</div>`;
	}
	
	//console.log(len);
 	

});