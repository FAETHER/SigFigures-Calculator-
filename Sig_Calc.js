// Author: MagicPower

var Penis = prompt("Multiplication, Division, Addition, or Subtraction?");
var Num1 = [];
var Num2 = []; 
var Sig_Total = 0;
//var Sig1;
//var Sig2;

var self = 
{
  first: Num1,
  second: Num2
//  third: Sig1,
//  fourth: Sig2
};

self.Num1 = promptNum("First Number?");
self.Num2 = promptNum("Second Number?");
var multiply = self.Num1*self.Num2 ;
var divide = self.Num1/self.Num2 ;
var addition = self.Num1+self.Num2 ;
var subtraction = self.Num1-self.Num2 ;
self.Num1 = self.Num1.toString();
self.Num2 = self.Num2.toString();

function After_Dot()
{
  
}

function Skip(Sig_Total)
{
  
}

function No_trail_Zero(Sig_Total)
{
//  if (self.Dot_Detected) {return;}
  if (self.Num1[0] == '0'||self.Num1[2] == '0'){
    Sig_Total = Sig_Total - 2;
    console.log('ETHERR TRACER: <No_trail_Zero. Removing sigFigure...>' + Sig_Total);
    return;
  }else{
    return;
  }
}

function I_like_This_Robust_Parser(Sig_Total)
{
  for (var i=0; i<self.Num1.length; i++) {
    console.log('----------------------------------------');
    console.log('Elements:');
    console.log(self.Num1[i]);
    
    Sig_Total = Sig_Total + 1;
    console.log('Sigs:'+ Sig_Total);
    
    if (self.Num1[i] == '.')
    {
      Sig_Total = Sig_Total - 1;
      console.log('i see dot tok to t eeee! Removing sigFigure... ' + Sig_Total);
      self.Dot_Detected = true;
    } 
    
    if (self.Num1[0] == '0'&&self.Dot_Detected !==true){
      Sig_Total = Sig_Total - 1;
      console.log('ETHERR TRACER: <No_init_Zero. Removing sigFigure...>' + Sig_Total);
    }
    
    if (self.Num1[i] == '0'&&self.Dot_Detected ===true&&self.carry !== true){
      Sig_Total = Sig_Total - 1;
      console.log('ETHERR TRACER: <No_trail_Zero. Removing sigFigure...>' + Sig_Total);
      self.carry = false;
    }
    
    if (self.Num1[i] != '0'&&self.Num1[i] != '.'&&self.Dot_Detected ===true){
      self.carry = true;
      console.log('ETHERR TRACER: <No_After_Dot_Zero. Setting carry flag...>' + Sig_Total);
    }  
    
    if (self.Num1[i] >=self.Num1.length)
    {
      self.OnLoopFinish = true;
    }else{self.OnLoopFinish = false;}
    
  }
  console.log("FINAL ROBUST CALC = " + Sig_Total);
  return Sig_Total;
}

function I_like_This_Sexy_Parser(Sig_Total)
{
  for (var i=0; i<self.Num2.length; i++) {
    console.log('----------------------------------------');
    console.log('Elements:');
    console.log(self.Num2[i]);
    
    Sig_Total = Sig_Total + 1;
    console.log('Sigs:'+ Sig_Total);
    
    if (self.Num2[i] == '.')
    {
      Sig_Total = Sig_Total - 1;
      console.log('i see dot tok to t eeee! Removing sigFigure... ' + Sig_Total);
      self.Dot_Detected = true;
    } 
    
    if (self.Num2[0] == '0'&&self.Dot_Detected !==true){
      Sig_Total = Sig_Total - 1;
      console.log('ETHERR TRACER: <No_init_Zero. Removing sigFigure...>' + Sig_Total);
    }
    
    if (self.Num2[i] == '0'&&self.Dot_Detected ===true&&self.carry !== true){
      Sig_Total = Sig_Total - 1;
      console.log('ETHERR TRACER: <No_trail_Zero. Removing sigFigure...>' + Sig_Total);
      self.carry = false;
    }
    
    if (self.Num2[i] != '0'&&self.Num2[i] != '.'&&self.Dot_Detected ===true){
      self.carry = true;
      console.log('ETHERR TRACER: <No_After_Dot_Zero. Setting carry flag...>' + Sig_Total);
    }  
    
    if (self.Num2[i] >=self.Num2.length)
    {
      self.OnLoopFinish = true;
    }else{self.OnLoopFinish = false;}
    
  }
  console.log("FINAL SEXY CALC = " + Sig_Total);
  return Sig_Total;
}

function Get_Smallest()
{
  if (I_like_This_Robust_Parser(0) > I_like_This_Sexy_Parser(0))
  {
    return I_like_This_Sexy_Parser(0);
  }else if (I_like_This_Robust_Parser(0) < I_like_This_Sexy_Parser(0)){
    return I_like_This_Robust_Parser(0);
  }else if (I_like_This_Robust_Parser(0) == I_like_This_Sexy_Parser(0)){
    return I_like_This_Robust_Parser(0) || I_like_This_Sexy_Parser(0);
  }else{
    return false;
  }
}

Sig_Total = Get_Smallest();
console.log("----->FINAL SIG CALC = " + Sig_Total);

if (Penis=="m" && self.OnLoopFinish === true) {
  console.log ('-------------------------------------------------');
  console.log ('RESULT:');
  console.log(multiply);
  console.log ('FAKE MATH RESULT:');
}









