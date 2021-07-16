function show()
{
    var x= document.getElementsByClassName("hid");
    var y;
    for(y=0;y<x.length;y++)
    {
        x[y].style.display="inline-block";
    }
    document.getElementById("select").style.display="none";
    document.getElementById("select1").style.display="block";

}
function show1()
{
    var x=document.getElementsByClassName("hid1");
    var y;
    if(document.getElementById("select1").value=="Show more")
    {
        for(y=0;y<x.length;y++)
        {
            x[y].style.display="inline-block";
        }
        
        document.getElementById("select1").value="Show less";
    }
    else
    {
        for(y=0;y<x.length;y++)
        {
         x[y].style.display="none";
        }
        document.getElementById("select1").style.display="none";
        document.getElementById("select").style.display="block";
        document.getElementById("select1").value="Show more";
        var q= document.getElementsByClassName("hid");
        var p;
        for(p=0;p<q.length;p++)
        {
            q[p].style.display="none";
        }
        var top = document.getElementById("certification").offsetTop;
        window.scrollTo(0, top); 
    }
}
