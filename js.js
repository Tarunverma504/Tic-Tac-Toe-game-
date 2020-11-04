var player1='player1';
var player2='player2';
function fun()
{

	setTimeout(function(){
        window.location.href = 'firstpage.html';
    }, 6000);
}


function fun2()
{
	player1=document.getElementById("play1").value.trim();
    player2=document.getElementById("play2").value.trim();
           localStorage.setItem('player1',player1);
           localStorage.setItem('player2',player2);
		if(player1.length<1||player2.length<1 )
	{
		alert("fill all the fields");
	}
	else
	{
		console.log(player1);
		console.log(player2);
		console.log('new page');
		window.location.href = 'game.html';
	}

}
var count=0;
var ccount=0;
var Tarun=1;
var player1=localStorage.getItem("player1");
var player2=localStorage.getItem("player2");
function om()
{
	
	document.getElementById('first').value=player1+":"+count;
	document.getElementById('second').value=player1+" turn";
	document.getElementById('third').value=player2+":"+ccount;
}
function func3(a)
{
	console.log(document.getElementById('dog').children);












	if(Tarun%2==0)
	{
		document.getElementById('second').value=player1 +" turn";
		document.getElementById(a).innerHTML='0';
		document.getElementById(a).style.color='white';
		document.getElementById(a).style.fontSize="25px";
		document.getElementById(a).disabled=true;
	}
	else{
		document.getElementById('second').value=player2 +" turn";
		document.getElementById(a).innerHTML='X';
		document.getElementById(a).style.color='white';
		document.getElementById(a).style.fontSize="25px";
		document.getElementById(a).disabled=true;
	}
	Tarun++;
	console.log(a);
}