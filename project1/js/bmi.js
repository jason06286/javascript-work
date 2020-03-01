// 指定DOM
var btn=document.querySelector('.addbtn');
var list=document.querySelector('.list');
var btnChange=document.querySelector('.btn-change')
var btnReset=document.querySelector('.btn-change a')
var data=JSON.parse(localStorage.getItem('bodyData')) || [];
// 渲染畫面
function render(data) {
    var listLen =data.length ;
    if (listLen === 0) {
        document.getElementById("test").style.display="";
    }else{ document.getElementById("test").style.display="none";
}}
function reset(){
    e.preventDefault();
   data=[];
    localStorage.setItem('bodyData',JSON.stringify(data));
    count(data);
    render(data);
}
// 監聽與更新
btn.addEventListener('click',addData);
list.addEventListener('click',toggleDone);
count(data)
render(data)
// 加入列表，並同步更新網頁與localstorage
function addData(e){
    e.preventDefault();
var height=document.querySelector('.height').value;
var weight=document.querySelector('.weight').value;
      if (height=='' || weight==''){
        alert('請輸入正確資料')
         return
     } 
     else if(height!==''&& weight!==''){
            var body={
            high:height,
            wigh:weight
        }
    } 
    data.push(body);
    localStorage.setItem('bodyData',JSON.stringify(data));
    count(data)
    render(data)
 };
 // 更新網頁內容
   function count(data){ 
    var str=''
     var btnStr=''
     var len=data.length
          for(var i=0;i<len;i++){
        var height=parseInt(data[i].high)/100 ;
        var weight=parseInt(data[i].wigh) ;
        var num=weight/Math.pow(height,2);
        var bmi=num.toFixed(2)
        var NowDate = new Date();
        var today= NowDate.toDateString();
　        if(bmi<18.5){
    btnStr='<div class="tooLight-btn"><h2>'+bmi+'</h2><p>BMI</p>  <a href="#"><img src="img/icons_loop.png"></a><span>過輕</span></div>'
            str+='<li class="tooLight"><table><tr> <td>過輕</td><td><span>BMI</span>'+ bmi+'</td><td><span>weight</span>'+ weight+'kg</td><td><span>height</span>'+ data[i].high+'cm</td><td><span>'+today+'</span></td><td><a href="#" data-index='+i+'>刪除</a></td></tr></table></li>'
        }else if(bmi>=18.5&& bmi<25){
            btnStr='<div class="ideal-btn"><h2>'+bmi+'</h2><p>BMI</p><a href="#"><img src="img/icons_loop.png"></a><span>理想</span></div>'
            str+='<li class="ideal"><table><tr> <td>理想</td><td><span>BMI</span>'+ bmi+'</td><td><span>weight</span>'+ weight+'kg</td><td><span>height</span>'+ data[i].high+'cm</td><td><span>'+today+'</span></td><td><a href="#" data-index='+i+'>刪除</a></td></tr></table></li>'
        }else if(bmi>=25&&bmi<30){
            btnStr='<div class="tooHeavy-btn"><h2>'+bmi+'</h2><p>BMI</p><a href="#"><img src="img/icons_loop.png"></a><span>過重</span></div>'
            str+='<li class="tooHeavy"><table><tr> <td>過重</td><td><span>BMI</span>'+ bmi+'</td><td><span>weight</span>'+ weight+'kg</td><td><span>height</span>'+ data[i].high+'cm</td><td><span>'+today+'</span></td><td><a href="#" data-index='+i+'>刪除</a></td></tr></table></li>'
        }else if(bmi>=30&&bmi<35){
            btnStr='<div class="mildObesity-btn"><h2>'+bmi+'</h2><p>BMI</p><a href="#"><img src="img/icons_loop.png"></a><span>輕度肥胖</span></div>'
            str+='<li class="mildObesity"><table><tr> <td>輕度肥胖</td><td><span>BMI</span>'+ bmi+'</td><td><span>weight</span>'+ weight+'kg</td><td><span>height</span>'+ data[i].high+'cm</td><td><span>'+today+'</span></td><td><a href="#" data-index='+i+'>刪除</a></td></tr></table></li>'
        }else if(bmi>=35&&bmi<40){
            btnStr='<div class="moderateObesity-btn"><h2>'+bmi+'</h2><p>BMI</p><a href="#"><img src="img/icons_loop.png"></a><span>中度肥胖</span></div>'
            str+='<li class="moderateObesity"><table><tr> <td>中度肥胖</td><td><span>BMI</span>'+ bmi+'</td><td><span>weight</span>'+ weight+'kg</td><td><span>height</span>'+ data[i].high+'cm</td><td><span>'+today+'</span></td><td><a href="#" data-index='+i+'>刪除</a></td></tr></table></li>'
        }
        else {
            btnStr='<div class="severObesity-btn"><h2>'+bmi+'</h2><p>BMI</p><a href="#"><img src="img/icons_loop.png"></a><span>重度肥胖</span></div>'
            str+='<li class="severeObesity"><table><tr> <td>重度肥胖</td><td><span>BMI</span>'+ bmi+'</td><td><span>weight</span>'+ weight+'kg</td><td><span>height</span>'+ data[i].high+'cm</td><td><span>'+today+'</span></td><td><a href="#" data-index='+i+'>刪除</a></td></tr></table></li>'
        } 
    }  
    btnChange.innerHTML=btnStr
     list.innerHTML=str  
 }
// 刪除代辦事項
function toggleDone(e){
    e.preventDefault();
    if(e.target.nodeName !=='A'){return};
    var index=e.target.dataset.index;
    data.splice(index,1);
    localStorage.setItem('bodyData',JSON.stringify(data));
    count(data);
    render(data);
}
   
