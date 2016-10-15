var turn=1; //turn=1 quiere decir que es turno de las X, turn=2 es turno de las O
var a1=0;
var a2=0;
var a3=0;
var a4=0;
var a5=0;
var a6=0;
var a7=0;
var a8=0;
var a9=0;
var marcaX=0;
var marcaO=0;
var jugados=0;


function reiniciar1(){ //esta funcion reinicia la tabla de juego
	this.turn=1;
	this.a1=0;
	this.a2=0;
	this.a3=0;
	this.a4=0;
	this.a5=0;
	this.a6=0;
	this.a7=0;
	this.a8=0;
	this.a9=0;
	document.getElementById("cuadro1").src = "";
	document.getElementById("cuadro2").src = "";
	document.getElementById("cuadro3").src = "";
	document.getElementById("cuadro4").src = "";
	document.getElementById("cuadro5").src = "";
	document.getElementById("cuadro6").src = "";
	document.getElementById("cuadro7").src = "";
	document.getElementById("cuadro8").src = "";
	document.getElementById("cuadro9").src = "";
	turno();

}
function ftabla(){
	if (a1!=0){
		if (a1==a2&&a2==a3){
			marcador(a1);
			a1=1,a2=2,a3=3,a4=4,a5=5,a6=6,a7=7,a8=8,a9=9;
		}
	}
	if (a4!=0){
		if (a4==a5&&a5==a6){
			marcador(a4);
			a1=1,a2=2,a3=3,a4=4,a5=5,a6=6,a7=7,a8=8,a9=9;
		}
	}
	if (a7!=0){
		if (a7==a8&&a8==a9){
			marcador(a7);
			a1=1,a2=2,a3=3,a4=4,a5=5,a6=6,a7=7,a8=8,a9=9;
		}
	}
	if (a1!=0){
		if (a1==a4&&a4==a7){
			marcador(a4);
			a1=1,a2=2,a3=3,a4=4,a5=5,a6=6,a7=7,a8=8,a9=9;
		}
	}
	if (a2!=0){
		if (a2==a5&&a5==a8){
			marcador(a5);
			a1=1,a2=2,a3=3,a4=4,a5=5,a6=6,a7=7,a8=8,a9=9;
		}
	}
	if (a3!=0){
		if (a3==a6&&a6==a9){
			marcador(a3);
			a1=1,a2=2,a3=3,a4=4,a5=5,a6=6,a7=7,a8=8,a9=9;
		}
	}
	if (a1!=0){
		if (a1==a5&&a5==a9){
			marcador(a1);
			a1=1,a2=2,a3=3,a4=4,a5=5,a6=6,a7=7,a8=8,a9=9;
		}
	}
	if (a3!=0){
		if (a3==a5&&a5==a7){
			marcador(a3);
			a1=1,a2=2,a3=3,a4=4,a5=5,a6=6,a7=7,a8=8,a9=9;
		}
	}
}
function jugada1() { /*cada funcion de jugada es para colocar X o O en cada cuadro
	primero chequea que el cuadro este vacio y luego chequea de quien es el turno*/
	if (a1==0){
		if (this.turn==1)
		{
			document.getElementById("cuadro1").src="img/X.png"
			this.turn=2;
			this.a1=1;
		}
		else
		{
			document.getElementById("cuadro1").src="img/O.png";
			this.turn=1;
			this.a1=2;
		}
	}
}
function jugada2() {
	if (a2==0){
		if (this.turn == 1)
		{
			document.getElementById("cuadro2").src="img/X.png"
			this.turn=2;
			this.a2=1;
		}
		else
		{
			document.getElementById("cuadro2").src="img/O.png";
			this.turn=1;
			this.a2=2;
		}
	}
}
function jugada3() {
	if (a3==0){
		if (this.turn == 1)
		{
			document.getElementById("cuadro3").src="img/X.png"
			this.turn =2;
			this.a3=1;
		}
		else
		{
			document.getElementById("cuadro3").src="img/O.png";
			this.turn =1;
			this.a3=2;
		}
	}
}
function jugada4() {
	if (a4==0){
		if (this.turn == 1)
		{
			document.getElementById("cuadro4").src="img/X.png"
			this.turn =2;
			this.a4=1;
		}
		else
		{
			document.getElementById("cuadro4").src="img/O.png";
			this.turn =1;
			this.a4=2;
		}
	}
}
function jugada5() {
	if (a5==0){
		if (this.turn == 1)
		{
			document.getElementById("cuadro5").src="img/X.png"
			this.turn =2;
			this.a5=1;
		}
		else
		{
			document.getElementById("cuadro5").src="img/O.png";
			this.turn =1;
			this.a5=2;
		}
	}
}
function jugada6() {
	if (a6==0){
		if (this.turn == 1)
		{
			document.getElementById("cuadro6").src="img/X.png"
			this.turn =2;
			this.a6=1;
		}
		else
		{
			document.getElementById("cuadro6").src="img/O.png";
			this.turn =1;
			this.a6=2;
		}
	}
}
function jugada7() {
	if (a7==0){
		if (this.turn == 1)
		{
			document.getElementById("cuadro7").src="img/X.png"
			this.turn =2;
			this.a7=1;
		}
		else
		{
			document.getElementById("cuadro7").src="img/O.png";
			this.turn =1;
			this.a7=2;
		}
	}
}
function jugada8() {
	if (a8==0){
		if (this.turn == 1)
		{
			document.getElementById("cuadro8").src="img/X.png"
			this.turn =2;
			this.a8=1;
		}
		else
		{
			document.getElementById("cuadro8").src="img/O.png";
			this.turn =1;
			this.a8=2;
		}
	}
}
function jugada9() {
	if (a9==0){
		if (this.turn == 1)
		{
			document.getElementById("cuadro9").src="img/X.png"
			this.turn =2;
			this.a9=1;
		}
		else
		{
			document.getElementById("cuadro9").src="img/O.png";
			this.turn =1;
			this.a9=2;
		}
	}
}
function turno(){
	if (this.turn==1){
		document.getElementById("cuadro10").src="img/X.png"
	}else
	document.getElementById("cuadro10").src="img/O.png"
}
function marcador(letra){ //funcion para llevar el marcador
	var i;
	var j;
	if (letra==1){
		this.marcaX++;
		this.jugados++;
		document.getElementById("X1").src="img/0.png";
		document.getElementById("X2").src="img/"+this.marcaX +".png";
		if (this.marcaX>9){
			document.getElementById("X1").src="img/1.png";
			i=this.marcaX%10;
			document.getElementById("X2").src="img/"+i+".png";
		}
		if (this.marcaX>19){
			document.getElementById("X1").src="img/2.png";
			i=this.marcaX%20;
			document.getElementById("X2").src="img/"+i+".png";
		}
	}
	if (letra==2){
		this.marcaO++;
		this.jugados++;
		document.getElementById("O1").src="img/0.png";
		document.getElementById("O2").src="img/"+this.marcaO+".png";
		if (this.marcaO>9){
			document.getElementById("O1").src="img/1.png";
			i=this.marcaO%10;
			document.getElementById("O2").src="img/"+i+".png";
		}
		if (this.marcaO>19){
			document.getElementById("O1").src="img/2.png";
			i=this.marcaO%20;
			document.getElementById("O2").src="img/"+i+".png";
		}
	}
	if(letra!=1&&letra!=2){
		this.jugados++;
	}
}
function brainiac(pos){
//Esta funcion llama a Ultron si se cumplen las condiciones
//1ro. Que la posicion(pos) que se marcó sea igual a el cuadro(aNº) y que el turno sea //de las O(2)
if (pos==1&&a1==1&&turn==2){
	ultron();
}
if (pos==2&&a2==1&&turn==2){
	ultron();
}
if (pos==3&&a3==1&&turn==2){
	ultron();
}
if (pos==4&&a4==1&&turn==2){
	ultron();
}
if (pos==5&&a5==1&&turn==2){
	ultron();
}
if (pos==5&&a5==1&&turn==2){
	ultron();
}
if (pos==5&&a5==1&&turn==2){
	ultron();
}
if (pos==6&&a6==1&&turn==2){
	ultron();
}
if (pos==7&&a7==1&&turn==2){
	ultron();
}
if (pos==8&&a8==1&&turn==2){
	ultron();
}
if (pos==9&&a9==1&&turn==2){
	ultron();
}
}
function ultron(){
//jugadas para que gane Ultron
//Horizontal 1
if (a1==2||a2==2){
	if (a1==a2){
		jugada3();
	}
	if (a1==a3){
		jugada2();
	}
	if (a2==a3){
		jugada1();
	}
}
ftabla();
//Horizontal 2
if (a4==2||a5==2){
	if (a4==a5){
		jugada6();
	}
	if (a4==a6){
		jugada5();
	}
	if (a5==a6){
		jugada4();
	}
}
ftabla();
//Horizontal 3
if (a7==2||a8==2){
	if (a7==a8){
		jugada9();
	}
	if (a7==a9){
		jugada8();
	}
	if (a8==a9){
		jugada7();
	}
}
ftabla();
//Vertical 1
if (a1==2||a4==2){
	if (a1==a4){
		jugada7();
	}
	if (a1==a7){
		jugada4();
	}
	if (a4==a7){
		jugada1();
	}
}
ftabla();
//Vertical 2
if (a2==2||a5==2){
	if (a2==a5){
		jugada8();
	}
	if (a2==a8){
		jugada5();
	}
	if (a5==a8){
		jugada2();
	}
}
ftabla();
//Vertical 3
if (a3==2||a6==2){
	if (a3==a6){
		jugada9();
	}
	if (a3==a9){
		jugada6();
	}
	if (a6==a9){
		jugada3();
	}
}
ftabla();
//Diagonal 1\
if (a1==2||a5==2){
	if (a1==a5){
		jugada9();
	}
	if (a1==a9){
		jugada5();
	}
	if (a5==a9){
		jugada1();
	}
}
ftabla();
//Diagonal 2/
if (a3==2||a5==2){
	if (a3==a5){
		jugada7();
	}
	if (a3==a7){
		jugada5();
	}
	if (a5==a7){
		jugada3();
	}
}
ftabla();

//jugadas para que Ultron bloquee las X
//Horizontal 1
if ((a1==1||a2==1)&&(this.turn==2)){
	if (a1==a2){
		jugada3();
	}
	if (a1==a3){
		jugada2();
	}
	if (a2==a3){
		jugada1();
	}
}
ftabla();
//Horizontal 2
if ((a4==1||a5==1)&&(this.turn==2)){
	if (a4==a5){
		jugada6();
	}
	if (a4==a6){
		jugada5();
	}
	if (a5==a6){
		jugada4();
	}
}
ftabla();
//Horizontal 3
if (a7==1||a8==1){
	if (a7==a8&&this.turn==2){
		jugada9();
	}
	if (a7==a9&&this.turn==2){
		jugada8();
	}
	if (a8==a9&&this.turn==2){
		jugada7();
	}
}
ftabla();
//Vertical 1
if ((a1==1||a4==1)&&(this.turn==2)){
	if (a1==a4){
		jugada7();
	}
	if (a1==a7){
		jugada4();
	}
	if (a4==a7){
		jugada1();
	}
}
ftabla();
//Vertical 2
if ((a2==1||a5==1)&&(this.turn==2)){
	if (a2==a5){
		jugada8();
	}
	if (a2==a8){
		jugada5();
	}
	if (a5==a8){
		jugada2();
	}
}
ftabla();
//Vertical 3
if ((a3==1||a6==1)&&(this.turn==2)){
	if (a3==a6){
		jugada9();
	}
	if (a3==a9){
		jugada6();
	}
	if (a6==a9){
		jugada3();
	}
}
ftabla();
//Diagonal 1\
if ((a1==1||a5==1)&&(this.turn==2)){
	if (a1==a5){
		jugada9();
	}
	if (a1==a9){
		jugada5();
	}
	if (a5==a9){
		jugada1();
	}
}
ftabla();
//Diagonal 2/
if ((a3==1||a5==1)&&(this.turn==2)){
	if (a3==a5){
		jugada7();
	}
	if (a3==a7){
		jugada5();
	}
	if (a5==a7){
		jugada3();
	}
}
ftabla();
//Bloquear combinacion de 3 y 7
if ((a3==1&&a7==1)&&(this.turn==2)){
	if (a2==0){
		jugada2();
	}
}
ftabla();
//Bloquear combinacion de 6 y 8
if ((a6==1&&a8==1)&&(this.turn==2)){
	if (a9==0){
		jugada9();
	}
}
ftabla();

//Bloquear combinacion de 5,9,3,7
if ((a5==1&&a9==1)&&(this.turn==2)){
	if (a3==0){
		jugada3();
	}
}
ftabla();

//Bloquear combinacion de 7,6,9,3
if ((a7==1&&a6==1)&&(this.turn==2)){
	if (a9==0){
		jugada9();
	}
}
ftabla();

//Bloquear combinacion de 8,1,7,4 y 1,8,7,4
if ((a8==1&&a1==1)&&(this.turn==2)){
	if (a7==0){
		jugada7();
	}
}
ftabla();

//Bloquear combinacion de 3,8,9,6 y 8,3,9,6
if ((a3==1&&a8==1)&&(this.turn==2)){
	if (a9==0){
		jugada9();
	}
}
ftabla();


//jugadas individuales
if (a5==0&&this.turn==2){
	jugada5();
}
if (a1==0&&this.turn==2){
	jugada1();
}
if (a2==0&&this.turn==2){
	jugada2();
}
if (a3==0&&this.turn==2){
	jugada3();
}
if (a4==0&&this.turn==2){
	jugada4();
}
if (a6==0&&this.turn==2){
	jugada6();
}
if (a7==0&&this.turn==2){
	jugada7();
}
if (a8==0&&this.turn==2){
	jugada8();
}
if (a9==0&&this.turn==2){
	jugada9();
}
ftabla();
}

function cambiarfondo() {
	var a = Math.floor((Math.random() * 11) + 1);
	document.getElementById("fondo").style.background="url(img/"+a+".jpg)";
	document.getElementById("fondo").style.backgroundSize="100% auto";
	document.getElementById("fondo").style.backgroundRepeat="no-repeat";
}

function dosjugadores(){
	//elimina las funciones para que juegue la pc
	document.getElementsByClassName("cuadritos")[0].setAttribute("onMousedown", "jugada1(), ftabla()");
	document.getElementsByClassName("cuadritos")[1].setAttribute("onMousedown", "jugada2(), ftabla()");
	document.getElementsByClassName("cuadritos")[2].setAttribute("onMousedown", "jugada3(), ftabla()");
	document.getElementsByClassName("cuadritos")[3].setAttribute("onMousedown", "jugada4(), ftabla()");
	document.getElementsByClassName("cuadritos")[4].setAttribute("onMousedown", "jugada5(), ftabla()");
	document.getElementsByClassName("cuadritos")[5].setAttribute("onMousedown", "jugada6(), ftabla()");
	document.getElementsByClassName("cuadritos")[6].setAttribute("onMousedown", "jugada7(), ftabla()");
	document.getElementsByClassName("cuadritos")[7].setAttribute("onMousedown", "jugada8(), ftabla()");
	document.getElementsByClassName("cuadritos")[8].setAttribute("onMousedown", "jugada9(), ftabla()");
	}

function unjugador(){
	//agrega las funciones para que juegue la pc
	document.getElementsByClassName("cuadritos")[0].setAttribute("onMousedown", "jugada1(), ftabla(), brainiac(1)");
	document.getElementsByClassName("cuadritos")[1].setAttribute("onMousedown", "jugada2(), ftabla(), brainiac(2)");
	document.getElementsByClassName("cuadritos")[2].setAttribute("onMousedown", "jugada3(), ftabla(), brainiac(3)");
	document.getElementsByClassName("cuadritos")[3].setAttribute("onMousedown", "jugada4(), ftabla(), brainiac(4)");
	document.getElementsByClassName("cuadritos")[4].setAttribute("onMousedown", "jugada5(), ftabla(), brainiac(5)");
	document.getElementsByClassName("cuadritos")[5].setAttribute("onMousedown", "jugada6(), ftabla(), brainiac(6)");
	document.getElementsByClassName("cuadritos")[6].setAttribute("onMousedown", "jugada7(), ftabla(), brainiac(7)");
	document.getElementsByClassName("cuadritos")[7].setAttribute("onMousedown", "jugada8(), ftabla(), brainiac(8)");
	document.getElementsByClassName("cuadritos")[8].setAttribute("onMousedown", "jugada9(), ftabla(), brainiac(9)");
	}