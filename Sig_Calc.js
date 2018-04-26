// Author: MagicPower

var Penis = prompt("Multiplication, Division, Addition, or Subtraction?");
var Num1 = [];
var Num2 = []; 
var Sig_Total = 0;
var Res_Total = 0;

var self = 
{
  first: Num1,
  second: Num2
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

function Number_Type(i)
{
  var Natural_Number = false;
  for(var num = 1; num>0; num++)
  {
//  console.log(self.Num1[i]);
    if (self.Num1[i]>=num)
    {
      Natural_Number = true;
      return Natural_Number;
    }else if (self.Num1[i] != num){
      Natural_Number = false;
      return Natural_Number;
    }
  }
}

function I_like_This_Robust_Parser(Sig_Total)
{
  self.Zero_Count = 0;
  self.LONG_TRAIL = false;
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
    
    if (self.Num1[i]!='0'&&self.Num1[i]!='.'&&self.Dot_Detected===false&&self.No_trail===false)
    {
      self.No_trail = true;
      console.log('ETHERR TRACER: <No_Zero_Or_Dot. Ignoring flags...>' + Sig_Total);
    }else{self.No_trail = false;}
    
    if (self.Num1[i] == '0'&&self.Num1[i] != '.'&&self.Dot_Detected ===false&&self.No_trail === true)
    {
      self.No_trail = false;
      Sig_Total = Sig_Total - 1;
      console.log('ETHERR TRACER: <Saw_Trail_Zero. Removing sigs of Trail Zeroes...>' + Sig_Total);
    }
    
    if(Number_Type(i) === true||self.Num1[i] == '.')
    {
      console.log('ETHERR TRACER: <Number_Status. Char is natural number or "."...>' + Sig_Total);
      self.Zero_Count = 0;
    }else if (self.Num1[i] == '0'){
      self.Zero_Count++;
      console.log('ETHERR TRACER: <Number_Status. Char is zero or Real...>Zero_Count= ' + self.Zero_Count);
    }
    
    if (self.Zero_Count >= 2&&self.Dot_Detected ===false)
    {
      Sig_Total = Sig_Total - 1;
      self.LONG_TRAIL = true;
      console.log('ETHERR TRACER: <Saw_Trail_Zero_Long. Removing sig figure...>' + Sig_Total);
    }
    
    if (self.Num1[i] >=self.Num1.length)
    {
    }else{self.OnLoopFinish = false;}
    
  }
  if (self.LONG_TRAIL) {Sig_Total--;}
  console.log("FINAL ROBUST CALC = " + Sig_Total);
  //cleanup
  self.No_trail = false;
  self.Zero_Count = 0;
  self.LONG_TRAIL = false;
  self.Dot_Detected = false;
  self.carry = false;
  self.OnLoopFinish = true;
  return Sig_Total;
}

function I_like_This_Sexy_Parser(Sig_Total)
{
  self.Zero_Count = 0;
  self.LONG_TRAIL = false;
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
    
    if (self.Num2[i]!='0'&&self.Num2[i]!='.'&&self.Dot_Detected===false&&self.No_trail===false)
    {
      self.No_trail = true;
      console.log('ETHERR TRACER: <No_Zero_Or_Dot. Ignoring flags...>' + Sig_Total);
    }else{self.No_trail = false;}
    
    if (self.Num2[i] == '0'&&self.Num2[i] != '.'&&self.Dot_Detected ===false&&self.No_trail === true)
    {
      self.No_trail = false;
      Sig_Total = Sig_Total - 1;
      console.log('ETHERR TRACER: <Saw_Trail_Zero. Removing sigs of Trail Zeroes...>' + Sig_Total);
    }
    
    if(Number_Type(i) === true || self.Num2[i] == '.')
    {
      console.log('ETHERR TRACER: <Number_Status. Char is natural number or "."...>' + Sig_Total);
      self.Zero_Count = 0;
    }else if (self.Num2[i] == '0'){
      self.Zero_Count++;
      console.log('ETHERR TRACER: <Number_Status. Char is zero or Real...>Zero_Count= ' + self.Zero_Count);
    }
    
    if (self.Zero_Count >= 2&&self.Dot_Detected ===false)
    {
      Sig_Total = Sig_Total - 1;
      self.LONG_TRAIL = true;
      console.log('ETHERR TRACER: <Saw_Trail_Zero_Long. Removing sig figure...>' + Sig_Total);
    }
    
    if (self.Num2[i] >=self.Num2.length)
    {
    }else{self.OnLoopFinish = false;}
    
  }
  if (self.LONG_TRAIL) {Sig_Total--;}
  console.log("FINAL SEXY CALC = " + Sig_Total);
  //cleanup
  self.No_trail = false;
  self.Zero_Count = 0;
  self.LONG_TRAIL = false;
  self.Dot_Detected = false;
  self.carry = false;
  self.OnLoopFinish = true;
  return Sig_Total;
}

function Get_Smallest()
{
  self.Num1_S = I_like_This_Robust_Parser(0);
  self.Num2_S = I_like_This_Sexy_Parser(0);
  
  if (self.Num1_S > self.Num2_S)
  {
    return self.Num2_S;
  }else if (self.Num1_S < self.Num2_S){
    return self.Num1_S;
  }else if (self.Num1_S == self.Num2_S){
    return self.Num2_S;
  }else{
    return false;
  }
}

function Silly_Sig_Switch(Sig_Total)
{
  if (Sig_Total==self.Num1_S)
  {
      console.log('ETHERR TRACER: <Sig_Total_EQU_Num1. Sigs and length equalent...>' + Sig_Total);
      self.EQU1 = true;
  }else{  
      console.log('ETHERR TRACER: <Sig_Total_NOEQU_Num1. NOP...>' + Sig_Total);
      self.EQU1 = false;
  }  
  
  if (Sig_Total==self.Num2_S)
  {
      console.log('ETHERR TRACER: <Sig_Total_EQU_Num2. Sigs and length equalent...>' + Sig_Total);
      self.EQU2 = true;
  }else{  
      console.log('ETHERR TRACER: <Sig_Total_NOEQU_Num2. NOP...>' + Sig_Total);
      self.EQU2 = false;
  }  
  
  if (self.Num1.length == self.Num2.length)
  {
    console.log('ETHERR TRACER: <Len_EQU_Len. length equalent...>' + self.Num2.length);
    self.Len_EQU = true;
  }else{
    console.log('ETHERR TRACER: <Len_NOEQU_Len. length NOP...>' + self.Num2.length);
    self.Len_EQU = false;
  }
}

function Integer_State(int)
{
  if(int & 1)
  {
      // ODD (1,3,5...)
      return true;
  }
  else
  {
      // EVEN (2,4,8...)
      return false;
  }
}

function Next_char()
{
  console.log('ETHERR TRACER: <NEXT_CHAR. OLD length equ...>' + self.result_Len);
  self.ecx = Sig_Total - 5;
  self.ebx = Sig_Total - 3;
  for (var i=0; i<self.result_Len; i++) {
    if (self.New_Length > 1){
      self.result_Len = self.New_Length-Sig_Total; // for 3 sig 5-3 will point at 2nd char
    }else{
      self.result_Len = self.result_Len-Sig_Total;
    }
    self.i = self.result_S[i];
  }
    self.result_Len = self.result_S.length;
    if (Sig_Total>=4)
    {
    self.New_Length = self.result_Len + self.ecx; //note: base number = -1
    console.log(self.ecx);
    }
    if (Sig_Total<=2)
    {
    self.New_Length = self.result_Len + self.ecx;
    }
    if (Integer_State(Sig_Total)===true)
    {
      self.New_Length = self.result_Len-self.ebx; //note: sig num increase by 2 so decrement has to be -2.
    }
    
    console.log('ETHERR TRACER: <NEXT_CHAR. NEW length equ...>' + self.New_Length);
    return self.i;
  }  


function Silly_Sig_Calc(Sig_Total)
{
  if (Sig_Total >= 1)
  {
    self.New_Length =0;
    self.ecx = 0;
    Sig_Total = Sig_Total.toString();
    self.result_S = multiply.toString();
    self.result_Len = self.result_S.length;
//    self.result = [self.result_S];
    self.v = self.result_S.length - Sig_Total; //3
    self.n = self.Num1.length - Sig_Total;
    self.m = self.Num2.length - Sig_Total;
    self.N_Zeros = self.result_S.length - 1;
    self.Zero = [];
    self.index = 0;
    
    self.Num1 = self.result_S;
    if (Sig_Total == I_like_This_Robust_Parser(0))
    {
      return self.result_S;
    }
      
    for (self.index = self.index; self.index<self.v; self.index++)
    {
      appendItem(self.Zero, '0');
      console.log(self.Zero.length);
      console.log('-------------------------');
    }
    
      if (Sig_Total == 1)
      {
        self.result_S = self.result_S[self.n]+[self.Zero];
      }
      if (Sig_Total == 2)
      {
        self.result_S = self.result_S[self.n]+[Next_char()]+[self.Zero];
      }
      if (Sig_Total == 3)
      {
        self.result_S = self.result_S[self.n]+[Next_char()]+[Next_char()]+[self.Zero];
      }
      if (Sig_Total == 4)
      {
        self.result_S = self.result_S[self.n]+[Next_char()]+[Next_char()]+[Next_char()]+[self.Zero];
      }
      if (Sig_Total == 5)
      {
        self.result_S = self.result_S[self.n]+[Next_char()]+[Next_char()]+[Next_char()]+[Next_char()]+[self.Zero];
      }
      if (Sig_Total == 6)
      {
        self.result_S = self.result_S[self.n]+[Next_char()]+[Next_char()]+[Next_char()]+[Next_char()]+[Next_char()]+[self.Zero];
      }
     
//      self.result_S = self.result_S[self.n]+self.Zero; //1 sig return whatever in index
//      self.result.push(self.result_S);
//      console.log(self.n);

  //  self.result = [self.result_S];
    return self.result_S;
  }else{return false;}
}

Sig_Total = Get_Smallest();
console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
Silly_Sig_Switch(Sig_Total);
console.log("----------->SILLY MATH CALC START<---------------");
self.result = Silly_Sig_Calc(Sig_Total);

if (Penis=="m" && self.OnLoopFinish === true) {
  console.log ('<------------------------------------------------->');
  console.log ('RESULT:');
  console.log(multiply);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result);
  
}









