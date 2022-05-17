var _ctx = document.getElementById("mychart").getContext("2d");
var mychart = new Chart(_ctx,{
  type:"bar",
  data:{
  	labels:['1','2','3','4','5','6'],
  	datasets:[{
    	label:'CANTIDAD ',
    	data:[_num1, 9, 15]
        }]
    }
});