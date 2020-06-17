var r1=document.getElementById("r1")
var r2=document.getElementById("r2")
var r3=document.getElementById("r3")

var r4=document.getElementById("r4")
var r5=document.getElementById("r5")
var r6=document.getElementById("r6")

var r7=document.getElementById("r7")
var r8=document.getElementById("r8")
var r9=document.getElementById("r9")
 var button=document.querySelector(".innerbutton");
 var outer=document.querySelector(".outer")
 var result=document.querySelector(".result")
 var rs=document.getElementById("rs")
 var cong=document.getElementById("cong")
 






let sign="x";


// console.log(zeroZero)
// console.log(oneOne)
// console.log(twoTwo)
  var elements=document.querySelectorAll(".box")
  elements.forEach(element=>{
      element.addEventListener("click",caller,{once :true})
  })
var checker1=false;
var checker2=false;
var checker3=false;
var checker4=false;
var checker5=false;
var checker6=false;
var checker7=false;
var checker8=false;




function caller()
{
    this.innerHTML=sign;
    if(this.id === "r1" || this.id === "r2" || this.id === "r3" )
    {
        checker1=true;
    }
    if(this.id === "r4" || this.id === "r5" || this.id === "r6" )
    {
        checker2=true;
    }
    if(this.id === "r7" || this.id === "r8" || this.id === "r9" )
    {
        checker3=true;
    }
    if(this.id === "r1" || this.id === "r4" || this.id === "r7" )
    {
        checker4=true;
    }
    if(this.id === "r2" || this.id === "r5" || this.id === "r8" )
    {
        checker5=true;
    }
    if(this.id === "r3" || this.id === "r6" || this.id === "r9" )
    {
        checker6=true;
    }
    if(this.id === "r1" || this.id === "r5" || this.id === "r9" )
    {
        checker7=true;
    }
    if(this.id === "r3" || this.id === "r5" || this.id === "r7" )
    {
        checker8=true;
    }
    // console.log(sign)
    // console.log(sign)
    check();
    
    // this.id=this.innerHTML;

    //for rows
    if(r1.innerHTML===r2.innerHTML && r2.innerHTML===r3.innerHTML && checker1===true){
    
        console.log(r1.innerHTML+" win")
        // console.log(r1.innerHTML)
        // console.log(r2.innerHTML)
        // console.log(r3.innerHTML)
        // adder(r1.innerHTML);
        rs.textContent=r1.innerHTML+" won";
        outer.classList.add('blur');
        result.classList.add('opaque');
        checker1=false;
    }
    else if(r4.innerHTML===r5.innerHTML && r5.innerHTML===r6.innerHTML && checker2===true){
    
        console.log(r4.innerHTML+" win")
        // console.log(r4.innerHTML)
        // console.log(r5.innerHTML)
        // console.log(r6.innerHTML)
        rs.textContent=r4.innerHTML+" won";

        // adder(r4.innerHTML);
        outer.classList.add('blur');
        result.classList.add('opaque');
        checker2=false;
    }
    else if(r7.innerHTML===r8.innerHTML && r8.innerHTML===r9.innerHTML && checker3===true){
    
        console.log(r7.innerHTML+" win")
        // console.log(r7.innerHTML)
        // console.log(r8.innerHTML)
        // console.log(r9.innerHTML)
        rs.textContent=r7.innerHTML+" won";

        // adder(r7.innerHTML);
        outer.classList.add('blur');
        result.classList.add('opaque');
        checker3=false;
    }

    //for columns
    else if(r1.innerHTML===r4.innerHTML && r4.innerHTML===r7.innerHTML && checker4===true){
    
        console.log(r1.innerHTML+" win")
        // console.log(r1.innerHTML)
        // console.log(r4.innerHTML)
        // console.log(r7.innerHTML)
        rs.textContent=r1.innerHTML+" won";

        // adder(r1.innerHTML);
        outer.classList.add('blur');
        result.classList.add('opaque');
        checker4=false;
    }

    else if(r2.innerHTML===r5.innerHTML && r5.innerHTML===r8.innerHTML && checker5===true){
    
        console.log(r2.innerHTML+" win")
        // console.log(r2.innerHTML)
        // console.log(r5.innerHTML)
        // console.log(r8.innerHTML)
        rs.textContent=r2.innerHTML+" won";

        // adder(r2.innerHTML);
        outer.classList.add('blur');
        result.classList.add('opaque');
        checker5=false;
    }

    else if(r3.innerHTML===r6.innerHTML && r6.innerHTML===r9.innerHTML && checker6===true){
    
        console.log(r3.innerHTML+" win")
        // console.log(r3.innerHTML)
        // console.log(r6.innerHTML)
        // console.log(r9.innerHTML)
        rs.textContent=r3.innerHTML+" won";

        // adder(r3.innerHTML);
        outer.classList.add('blur');
        result.classList.add('opaque');
        checker6=false;
    }
    else if(r1.innerHTML===r5.innerHTML && r5.innerHTML===r9.innerHTML && checker7===true){
    
        console.log(r1.innerHTML+" win")
        // console.log(r1.innerHTML)
        // console.log(r5.innerHTML)
        // console.log(r9.innerHTML)
        rs.textContent=r1.innerHTML+" won";

        // adder(r1.innerHTML);
        outer.classList.add('blur');
        result.classList.add('opaque');
        checker7=false;
    }
    else if(r3.innerHTML===r5.innerHTML && r5.innerHTML===r7.innerHTML && checker8===true){
    
        console.log(r3.innerHTML+" win")
        // console.log(r3.innerHTML)
        // console.log(r5.innerHTML)
        // console.log(r7.innerHTML)
        rs.textContent=r3.innerHTML+" won";

        // adder(r3.innerHTML);
        outer.classList.add('blur');
        result.classList.add('opaque');
        checker8=false;
    }
    else if(r1.innerHTML!="" && r2.innerHTML!="" && r3.innerHTML!="" && r4.innerHTML!="" && r5.innerHTML!="" && r6.innerHTML!="" && r7.innerHTML!="" && r8.innerHTML!="" && r9.innerHTML!="")
   {
       cong.textContent="";
      rs.textContent="Draw";
      outer.classList.add('blur');
      result.classList.add('opaque');
      console.log(cong.textContent)
      console.log(rs.textContent)
       
   }

   
  
}
    

 
   
    
   



function check()
{
    
     
    if(sign=="x")
    {
        sign="o";  
        

    }
    else{ 
       sign="x"
       

    }

}

button.addEventListener("click",function(e)
{
 
    location.reload();
    outer.classList.remove('blur')
    result.classList.remove('opaque')
  

})

var adder=(res)=>{
    result.insertAdjacentHTML("beforeend",
    `
    <div class="result flex">
    <h3>Congratulations</h3>
    <p>${res}</p>

    </div>
   

`
    )

}