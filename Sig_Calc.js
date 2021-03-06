// Author: Kyryl(Etherr)
// Project Started: 4/10/18  
// viable project mult/div (4/23/18)

if ( typeof DEBUG === "undefined" ) var DEBUG = false; 

var Operation = prompt("Multiplication, Division, Addition, or Subtraction? Enter Expression.");
var Num1 = [];
var Num2 = []; 
var Sig_Total = 0;
var Sig_Value = 0;
var Operand_Count=1;
var multiply=1;
var divide=0;
var addition=0;
var subtraction=0;
// instruction pointer or EIP in x86 assembly.
var self = 
{
  first: Num1,
  second: Num2
};
self.buffer = [];
self.construct = [];
self.edi =0;

function main()
{

function Number_Type(i,Num)
{
  var Natural_Number = false;
  for(var num = 1; num>0; num++)
  {
    if (Num[i]>=num)
    {
      Natural_Number = true;
      return Natural_Number;
    }else if (Num[i] != num){
      Natural_Number = false;
      return Natural_Number;
    }
    }
  }

self.op_Len=0;  
self.index=0;
self.Verb = [];
function Parse_Input(Num1)
{
  DEBUG && console.log('----------------------------------------');
  DEBUG && console.log(Operation);
  for (var i=self.index; i<Operation.length; i++)
  {
    DEBUG && console.log('Element: '+Operation[i]);
    
    DEBUG && console.log('Operand = '+self.operand);
    if(Operation[i]=='-'||Operation[i]=='+')
    {
      if(self.operand!==true)
      {
      self.sign = true;
      DEBUG && console.log('ETHERR TRACER: <Parse_Input. Sign,passing...>'+Operation[i]);
      }
    }
    if(Number_Type(i,Operation)===true||Operation[i]=='0'||Operation[i]=='.'||self.sign===true)
    { 
      if(i==self.index+1){self.sign = false;}
      self.operand = true;
      self.op_Len++;
      DEBUG && console.log('ETHERR TRACER: <Parse_Input. Operand start...>'+Operation[i]);
      Num1 = Num1+Operation[i];
    }
    if(Operation[i]=='+'||Operation[i]=='-'||Operation[i]=='*'||Operation[i]=='/')
    {
      if(self.operand===true&&self.sign!==true)
      {
      self.op_End = true;
      self.operand = false;
      Operand_Count++;
      self.op_Len=0; 
      self.index=i+1;
      self.Verb = self.Verb + Operation[i];
      DEBUG && console.log('ETHERR TRACER: <Parse_Input. Operand end...>'+Operation[i]);
      break;
      }
    }else if(i==Operation.length-1&&self.op_End!==true) {throw new Error(['Ooops, no operation spec. How did that happen?'])}
  }
  return Num1;
}

function Parse_Sign()
{
  for(var i=0; i<self.Verb.length; i++)
  {
    if(self.Verb[i]=='/'||self.Verb[i]=='*')
    {
      self.Verb = self.Verb[i];
    }
  }
}

function I_like_This_Robust_Parser(Sig_Total,Num)
{
  self.Zero_Count = 0;
  self.LONG_TRAIL = false;
  self.Dot_Detected = false;
  var ebx = 0;
  for (var i=0; i<Num.length; i++) {
    DEBUG && console.log('----------------------------------------');
    DEBUG && console.log('Elements:');
    DEBUG && console.log(Num[i]);

    Sig_Total = Sig_Total + 1;
    DEBUG && console.log('Sigs:'+ Sig_Total);
    
    if (Num[i] == '.')
    {
      Sig_Total = Sig_Total - 1;
      DEBUG && console.log('i see dot tok to t eeee! Removing sigFigure... ' + Sig_Total);
      self.Dot_Detected = true;
      if (Number_Type(i-1,Num) === true)
      {
        DEBUG && console.log('ETHERR TRACER: <Real_Number_Before_Dot. Setting carry flag...>' + Sig_Total);
        self.carry = true;
      }
    } 
    
    if (Num[ebx] == '0'&&self.Dot_Detected !==true){
      Sig_Total = Sig_Total - 1;
      DEBUG && console.log('ETHERR TRACER: <No_init_Zero. Removing sigFigure...>' + Sig_Total);
    }else if (Num[i] == '-'){Sig_Total--;ebx++;DEBUG && console.log('ETHERR TRACER: <Negative_Number. Removing sigFigure...>' + Sig_Total);}
    
    if (Num[i] == '0'&&self.Dot_Detected ===true&&self.carry !== true){
      Sig_Total = Sig_Total - 1;
      DEBUG && console.log('ETHERR TRACER: <No_trail_Zero. Removing sigFigure...>' + Sig_Total);
      self.carry = false;
    }
    
    if (Num[i] != '0'&&Num[i] != '.'&&self.Dot_Detected ===true){
      self.carry = true;
      DEBUG && console.log('ETHERR TRACER: <No_After_Dot_Zero. Setting carry flag...>' + Sig_Total);
    }  
    
    if (Num[i]!='0'&&Num[i]!='.'&&self.Dot_Detected===false&&self.No_trail===false)
    {
      self.No_trail = true;
      DEBUG && console.log('ETHERR TRACER: <No_Zero_Or_Dot. Ignoring flags...>' + Sig_Total);
    }else{self.No_trail = false;}
    
    if (Num[i] == '0'&&Num[i] != '.'&&self.Dot_Detected ===false&&self.No_trail === true)
    {
      self.No_trail = false;
      Sig_Total = Sig_Total - 1;
      DEBUG && console.log('ETHERR TRACER: <Saw_Trail_Zero. Removing sigs of Trail Zeroes...>' + Sig_Total);
    }
    
    if(Number_Type(i,Num) === true||Num[i] == '.')
    {
      DEBUG && console.log('ETHERR TRACER: <Number_Status. Char is natural number or "."...>' + Sig_Total);
      self.Zero_Count = 0;
    }else if (Num[i] == '0'){
      self.Zero_Count++;
      DEBUG && console.log('ETHERR TRACER: <Number_Status. Char is zero or Real...>Zero_Count= ' + self.Zero_Count);
    }
    
    if (self.Zero_Count >= 2&&self.Dot_Detected !==true)
    {
      Sig_Total = Sig_Total - 1;
      self.LONG_TRAIL = true;
      DEBUG && console.log('ETHERR TRACER: <Saw_Trail_Zero_Long. Removing sig figure...>' + Sig_Total);
      if (Number_Type(i+1,Num) === true)
      {
        DEBUG && console.log("ETHERR TRACER: <Saw_Natural_Number_End. Restoring zero's sigs...>" + Sig_Total);
        Sig_Total = Sig_Total+self.Zero_Count;
      }
    }
    
    if (i==Num.length-1&&Number_Type(i,Num) === false&&self.Dot_Detected !==true&&self.Zero_Count < 2)
    {
      DEBUG && console.log("ETHERR TRACER: <Saw_End_Zero. Removing sig figure...>" + Sig_Total);
      Sig_Total = Sig_Total - 1;
    }
    
    if (Num[i] >=Num.length)
    {
    }else{self.OnLoopFinish = false;}
    
  }
  if (self.LONG_TRAIL) {Sig_Total--;}
  DEBUG && console.log("FINAL ROBUST CALC = " + Sig_Total);
  DEBUG && console.log("||------------------------------------------||");
  //cleanup
  self.No_trail = false;
  self.Zero_Count = 0;
  self.LONG_TRAIL = false;
  self.carry = false;
  self.OnLoopFinish = true;
  self.Num1 = self.Num1_Old;
  return Sig_Total;
}

function Silly_Sig_Switch(Sig_Total)
{ 
  if (self.Num2_S==self.Num1_S)
  {
      DEBUG && console.log('ETHERR TRACER: <Sig_Total_EQU_Num1. Sigs and length equalent...>' + Sig_Total);
      self.EQU1 = true;
  }else{  
      DEBUG && console.log('ETHERR TRACER: <Sig_Total_NOEQU_Num1. NOP...>' + Sig_Total);
      self.EQU1 = false;
  }  
  
  if (Sig_Total==self.Num2_S)
  {
      DEBUG && console.log('ETHERR TRACER: <Sig_Total_EQU_Num2. Sigs and length equalent...>' + Sig_Total);
      self.EQU2 = true;
  }else{  
      DEBUG && console.log('ETHERR TRACER: <Sig_Total_NOEQU_Num2. NOP...>' + Sig_Total);
      self.EQU2 = false;
  }  
  
//  if (self.Num1.length == self.Num2.length)
//  {
//    console.log('ETHERR TRACER: <Len_EQU_Len. length equalent...>' + self.Num1.length+"|||"+self.Num2.length);
//    self.Len_EQU = true;
//  }else{
//    console.log('ETHERR TRACER: <Len_NOEQU_Len. length NOP...>' + self.Num1.length+"|||"+self.Num2.length);
//    self.Len_EQU = false;
//  }
}

function expr (str) {
    var chars = str.split("");
    var n = [], op = [], index = 0, oplast = true; 
    
    DEBUG && console.log(chars);
    
    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }
    // Calculate the expression
    str = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        DEBUG && console.log(op[o]);
        DEBUG && console.log(o);
        if(op[o]=='+')
        {
          str = str + num;
          break;
        }else if(op[o]=='-')
        {
          str = str - num;
          break;
        }else if(op[o]=='*')
        {
          str = str * num;
          break;
        }else if(op[o]=='/')
        {
          str = str / num;
          break;
        }else{throw new Error(['Ooops, calculator cannot handle value: '+op[o]])}
    }
    return str;
}

//Note: this function cant convert floats.
function Str_To_Int(list)
{
  if(list === list.toString()){
   
  var dec = 0;
  var len = list.length;
  for(var i=0; i<len; i++)
  {
    dec = dec*10+(list[i]-'0');
  }
  return dec;
  }else{return list;}
}

//Note: this function unstable.
function Int_To_Str(x,str,d)
{
    var i = 0;
    //x is the input
    //str will hold the buffer or converted result
    //this function is unstable and will return a string as a whole
    //for whole numbers it returns the last digit
    //for floats it will return it as a string; trail zeros are discarded for unknown reason
    while (x)
    {
        str[i++] = (x%10);
        x = x/10;
        break;
    }
//  Will add zeroes at the end    
//  while (i < d)
//  str[i++] = '0';
    return i;
}

function Integer_State(int)
{
  if(int === int.toString()){
   int = Str_To_Int(int);
  }
  if(int & 1)
  {
      // ODD (1,3,5...)
      return true;
  }
  else if( int%2 === 0 )
  {
      // EVEN (2,4,6,8...)
      return false;
  }else{return null;}
}

function Get_Smallest(i,Num)
{
  self.len = Num.length;
  for(i=0; i<self.len; i++)
  {
    if(Num[i]==',')
    { self.end=true;
      self.edi=0;
    }
    DEBUG && console.log("Get_Smallest: EDI ="+self.edi);
    if(Integer_State(Num[i])!==null||Num[i]=='0')
    { 
      if(self.end){self.end=false;}
      self.CMP = Num[i];
      self.edi++;
      DEBUG && console.log("Get_Smallest: <INSIDE>"+self.edi);
      if(Integer_State(Num[i+self.edi])!==null||Num[i+self.edi]=='0')
      {
        for(var a=0; a<self.edi; a++)
        {self.CMP = Num[i]+Num[i+self.edi];i++;self.len++;}
      }
      }
    if(Num[i]!==',')
    {
      DEBUG && console.log("Get_Smallest: CMP="+self.CMP);
      DEBUG && console.log("Get_Smallest: NUM"+Num[i+2]);
    if (Str_To_Int(self.CMP) > Str_To_Int(Num[i+2]))
    {
      return Num[i+2];
    }else if (Str_To_Int(self.CMP) < Str_To_Int(Num[i+2])){
      return self.CMP;
    }else if (Str_To_Int(self.CMP) == Str_To_Int(Num[i+2])){
      return Num[i+2];
    }else{
      return false;
    }
    }
  }
}


function Get_Largest(i,Num)
{
  self.len = Num.length;
  for(i=0; i<self.len; i++)
  {
    if(Num[i]==',')
    { self.end=true;
      self.edi=0;
    }
    DEBUG && console.log("Get_Largest: EDI ="+self.edi);
    if(Integer_State(Num[i])!==null||Num[i]=='0')
    { 
      if(self.end){self.end=false;}
      self.CMP = Num[i];
      self.edi++;
      DEBUG && console.log("Get_Largest: <INSIDE>"+self.edi);
      if(Integer_State(Num[i+self.edi])!==null||Num[i+self.edi]=='0')
      {
        for(var a=0; a<self.edi; a++)
        {self.CMP = Num[i]+Num[i+self.edi];i++;self.len++;}
      }
      }
    if(Num[i]!==',')
    {
      DEBUG && console.log("Get_Largest: CMP="+self.CMP);
      DEBUG && console.log("Get_Largest: NUM"+Num[i+2]);
    if (Str_To_Int(self.CMP) < Str_To_Int(Num[i+2]))
    {
      return Num[i+2];
    }else if (Str_To_Int(self.CMP) > Str_To_Int(Num[i+2])){
      return self.CMP;
    }else if (Str_To_Int(self.CMP) == Str_To_Int(Num[i+2])){
      return Num[i+2];
    }else{
      return false;
    }
    }
  }
}

function Next_char()
{
  DEBUG && console.log('ETHERR TRACER: <NEXT_CHAR_START. OLD length equ...>' + self.result_Len);
   
  self.ecx=self.ecx+1;
  self.New_Length = self.result_Len;
  DEBUG && console.log('ETHERR TRACER: <NEXT_CHAR. NEW length equ...>' + self.New_Length);
  DEBUG && console.log('ETHERR TRACER: <NEXT_CHAR. ecx equ...>' + self.ecx);
  
  for (var i=self.transfer; i<=self.New_Length; i++) { 

    self.New_Length = self.result_Len-self.ecx;  
    
    self.i = self.result_S[i];
    DEBUG && console.log('ETHERR TRACER: <NEXT_CHAR. return value...>' + self.i);
    DEBUG && console.log('ETHERR TRACER: <NEXT_CHAR. index value...>' + i);
    
    // if i corresponds to the result value for that index --> break
    //The most beautiful code ever!!!
    self.transfer = i+1;
    if (i==self.ecx)
    {
      DEBUG && console.log('ETHERR TRACER: <NEXT_CHAR. Break...>' );
      break;
    }
  }
    DEBUG && console.log('ETHERR TRACER: <NEXT_CHAR_END. NEW length equ...>' + self.New_Length);
    return self.i;
  }  
  
function Round_Point_After()
{
  if (self.float ===true)
  {
  for (var i = self.result_Len-1; i>=0; i--)
  {
    self.count_A = self.count_A + 1;
    
    if (self.result_S[i] == '.')
    {
      self.count_A+1;
      DEBUG && console.log("ETHERR TRACER: <Dot_Detected_After. Counter...>"+self.count_A);
      break;
    }
  }
  }
  return; 
}

function Round_Point_Before()
{
  if (self.float ===true)
  {
  for (var i=0; i<self.result_Len; i++)
  {
    self.count_B = self.count_B + 1;
    
    if (self.result_S[i] == '.')
    {
      if(self.result_S[Str_To_Int(Sig_Total)+self.trash] == '.'){DEBUG && console.log('Round Float == false'); self.float = false;}
      DEBUG && console.log("ETHERR TRACER: <Dot_Detected_Before. Counter...>"+self.count_B);
      break;
    }
  }
  }
  return; 
}

function A_Check(Sig_Total)
{   

    DEBUG && console.log('A_Check: Sig_Total = '+Sig_Total);
    DEBUG && console.log('A_Check: Pointer at...'+self.result_S[Sig_Total]);

    if (self.R_Dot)
    {
    if (self.result_S[Sig_Total] >=self.al)
    {self.ebx=false;DEBUG && console.log('A_Check: <R_Dot> self.ebx = '+self.ebx);

    if (self.result_S[Str_To_Int(Sig_Total)] >=self.al)
    {self.edx = Sig_Total-1}
    DEBUG && console.log('A_Check: <R_Dot> self.edx = '+self.edx); 
    Sig_Total = Sig_Total.toString();
    return;}}
    
    DEBUG && console.log(self.result_S[Str_To_Int(Sig_Total)+1]);
    if (self.result_S[Str_To_Int(Sig_Total)+1] >=self.al&&self.R_Dot!==true)
    {self.ebx=false;DEBUG && console.log('A_Check: self.ebx = '+self.ebx);
    
    if (self.result_S[Str_To_Int(Sig_Total)+1] >=self.al)
    {self.edx = Sig_Total;}
      if (self.result_S[self.edx] =='.')
      {self.edx = Sig_Total;}
    DEBUG && console.log('A_Check: self.edx = '+self.edx);  
    }else if(self.result_S[Str_To_Int(Sig_Total)+1] === undefined)
    {self.ebx=false;DEBUG && console.log('A_Check: <Undefined last Char> self.ebx = '+self.ebx)}
    else{self.ebx=false;DEBUG && console.log('A_Check: <No Round> self.ebx = '+self.ebx)}
}

//NOTES: 
//Check 5.5/345; no work (solved)
//543.34*0.34551 = 187.73
//555.5*55.55
//2.5 x 3.42. 
//.29208*.23486
//
function Round_Off(Sig_Total)
{
  
  //-1 because array numbering starts at 0 
  self.Zero_Count = Sig_Total-1;
  //  console.log(self.Zero_Count);
  for (var i=self.transfer; i<self.result_Len-self.Overflow; i++) { 
    
    self.eax = self.result_S[i];
    
    if (self.float!==true)
    {
      DEBUG && console.log(self.edx);
      self.bl = self.edx-1;
      if(self.edx<=0+self.trash&&i===self.edx&&self.consistance === true)
      {self.eax++;self.transfer++;DEBUG && console.log('ETHERR TRACER: <ROUND_UP.> Round at 0 index '+self.edx);return self.eax;}
      if (self.result_S[i+1] == '.')
      { if(self.result_S[i+2] >= self.al)
      {
        self.eax++;
        if (self.ebx === false){self.eax--;}
        if (i == self.bl)
        {self.eax++;
         DEBUG && console.log(self.eax);
         if(self.eax == 10&&self.ebx === false)
         {self.consistance = false;self.edx=self.edx-2;
          DEBUG && console.log('ETHERR TRACER: <ROUND_UP.> Inconsistance! Restart the loop> Exception At:'+self.result_R+' Index:'+i); 
         }      
        }
        if(self.eax >= 10){self.eax =0;}
        if(i>self.edx){self.eax=0;}
        self.result_R = self.eax;
        DEBUG && console.log('ETHERR TRACER: <ROUND_UP.> Whole answer, but float operands...>' + self.result_R);
        break;
      }
      }
    }
    
    //to test: -324*1234 = -400000
    //-0.7534*.87963 = -0.6627
    //273.2/5.5 = 50
    if (self.result_S[i+1] >=self.al
        &&self.Zero_Count == i&&self.float !==true&&self.ebx!==false)
    {
      
      self.eax++;
      
      if(self.eax >= 10){self.eax =0;}
      
      if(self.result_S[i-1] >=self.al&&i > self.Zero_Count){self.eax=0;}
      
      self.result_R = self.eax;
      
      DEBUG && console.log('ETHERR TRACER: <ROUND_UP1. Rounded...>' + self.result_R);
      self.transfer = i;
      break;
    }else{
      self.result_R = self.result_S[i];
      DEBUG && console.log('ETHERR TRACER: <ROUND_DOWN. NULL...>' + self.result_R);
    }
    
    if (self.result_S[i+1] >=self.al&&self.float ===true&&self.result_S[i]!='.')
    {
      self.Zero_Count = self.count_B-1;
      DEBUG && console.log('ETHERR TRACER: <Float_Zero_Count_FLOAT _A> = ' + self.Zero_Count);
      DEBUG && console.log('ETHERR TRACER: <Float_INDEX> = ' + i);
      if (i>=self.Zero_Count)
      {

        self.eax++;
        
        if (self.ebx === false){self.eax--;}
        
        //To test: 2.5555+0.0555
        if (i == self.edx)
        {self.eax++;
         DEBUG && console.log(self.eax);
         if(self.eax == 10&&self.ebx === false)
         {self.consistance = false;self.edx--;
          DEBUG && console.log('ETHERR TRACER: <ROUND_UP_FLOAT. Inconsistance! Restart the loop> Exception At:'+self.result_R+' Index:'+i); 
         }      
        }
        
        if(self.eax == 10){self.eax =0;}
        
      //  if(self.eax == 10&&self.result_S[i-1]=='.'){self.eax = 1;}
        
        if(i>self.edx){self.eax=0;}
        
        self.result_R = self.eax;
        
        DEBUG && console.log('ETHERR TRACER: <ROUND_UP_FLOAT. Rounded _A>' + self.result_R);
        self.transfer = i+1;
        break;
      }else{self.result_R = self.result_S[i];}
      
      self.Zero_Count = self.count_B-2;
      DEBUG && console.log('ETHERR TRACER: <Float_Zero_Count_FLOAT _B> = ' + self.Zero_Count);
      if (self.Zero_Count == i)
      {
        
        self.eax++;
        
        if (self.result_S[i+1] == '.')
        {
          if (self.result_S[i+2] >= self.al){self.eax++;}
        }
        
        if(self.eax == 10){self.eax =0;}
        
        if(self.result_S[i-1] >= self.al&&i > self.Zero_Count){self.eax=0;}
        
        self.result_R = self.eax;
        
        DEBUG && console.log('ETHERR TRACER: <ROUND_UP_FLOAT. Rounded _B>' + self.result_R);
        self.transfer = i+1;
        break;
      }else{self.result_R = self.result_S[i];}  
      
      self.Zero_Count = Sig_Total-1;
      if (self.Zero_Count == i)
      {
        
        self.eax++;
          
        if(self.eax >= 10){self.eax =0;}
          
        if(self.result_S[i-1] >= self.al&&i > self.Zero_Count){self.eax=0;}
          
        self.result_R = self.eax;
          
        DEBUG && console.log('ETHERR TRACER: <ROUND_UP2. Rounded...>' + self.result_R);
        self.transfer = i+1;
        break;
      }else{self.result_R = self.result_S[i];} 
    }
    
    // 0. answer round
    if (self.R_Dot&&self.float)
    {
      if(self.result_S[Sig_Total]>=self.al&& i == Sig_Total-1)
      {
        self.eax = self.result_S[Sig_Total-1];
        self.eax++;
        if(self.eax == 10){self.eax =0;}
        self.result_R = self.eax;
      }else{self.result_R = self.result_S[i];}
    }    
    self.result_R = self.result_S[i];
    if (self.ecx == i){self.transfer = i+1; break;}
    
  }
  DEBUG && console.log('ETHERR TRACER: <ROUND_RETURN. ...>' + self.result_R);
  DEBUG && console.log('-------------------------');
  self.ecx++;
  return self.result_R;
}

function Sig_After_Dot(Sig_Total)
{
  for (var i=0; i<self.result_Len; i++) 
  {
    var ebx = 0;
    
    if (self.result_S[0]=='-'){ebx++;}
    
    if(self.result_S[ebx]=='0'&&self.result_S[ebx+1]=='.'&&self.R_Dot !==true) 
    {
      //This part is hardcoded for 0. possibility as an answer. 
      //fucking string; i am too lazy to convert it to int so do it by increment 2 times.
      //have to increase length too, since got more sigs...
      Sig_Total++;
      Sig_Total++;
      self.result_Len = self.result_S.length + 2;
      self.R_Dot = true;
      
      DEBUG && console.log('ETHERR TRACER: <ROUND_AFTER_DOT. Return sig +2...>'+Sig_Total);
      DEBUG && console.log('---------------------------------------------------');
    }
    
    self.eax = self.result_S[i];
    DEBUG && console.log('ETHERR TRACER: <ROUND_AFTER_DOT.> INDEX:'+i);
  //  console.log(Integer_State(self.eax));
    if (self.eax=='0'&&self.R_Dot===true&&i>=self.count_B)
    {
      self.result_Len++;
      Sig_Total++;
    }else if (Integer_State(self.eax)!==null&&self.eax!=='0')
    {
      DEBUG && console.log('ETHERR TRACER: <ROUND_AFTER_DOT. Float sig return...>'+Sig_Total);
      return Sig_Total;
    }    
  }
  return Sig_Total;
}

function Check_Float()
{
  for (var i=0; i<self.result_Len; i++) { 
    
    if(Integer_State(self.result_S[i])===null&&self.result_S[i]!=='0'&&self.result_S[i]!== '.')
    {DEBUG && console.log('Trash item:'+self.result_S[i]);self.trash++;}
    
    if (self.result_S[i]== '.')
    {
      self.float = true;
      DEBUG && console.log('Float == true');
      break;
    }else if (self.float !==true&&i+1==self.result_Len){
      DEBUG && console.log('Float == false');
      return false;
    }
  }
  return self.float;
}

function Float_Point(Sig_Total)
{
    if(Check_Float()===false){return}
    var Old_float = self.float;
    Round_Point_After();
    Round_Point_Before();
    Sig_Total = Str_To_Int(Sig_After_Dot(Sig_Total))+self.trash;

    //keep 1 more char to parse just in case result is a whole.  
    self.Overflow = self.result_Len - Sig_Total-1;
    
    self.vF = self.result_S.length - Sig_Total-self.count_A;
  //  if (self.div_whole){self.vF = self.result_S.length - Sig_Total-self.count_A-2;}
    
    DEBUG && console.log('ETHERR TRACER:<Trail zero inject ==>'+self.vF);
    
    if (self.R_Dot){self.vF = 0;}
    
    for (self.index = 0; self.index<self.vF; self.index++)
    {
      self.Zero = self.Zero+['0'];
      DEBUG && console.log(self.Zero);
      DEBUG && console.log('-------------------------');
    }
    
    A_Check(Sig_Total);
    
    for (var edx = 0; edx<self.result_Len-self.Overflow; edx++ )
    {
      self.n = Round_Off(Sig_Total);
      if(self.n===undefined){DEBUG && console.log('Undefined in expression <Round_Off> ! Stop.');break;}
      self.Round = self.Round + self.n;
      DEBUG && console.log("ROUND STATE:"+self.Round);
      DEBUG && console.log('-------------------------');
      if(self.consistance===false)
      {edx=0;self.Round = [];
       self.ecx = 0;self.transfer = 0;
       self.Overflow--;
       self.consistance=true;
      }
      if(self.exit0){break;}
    }
    self.result_S = self.Round;

    self.ecx = 0;
    
    self.transfer = 1;
    
    if (self.R_Dot){Sig_Total--;}
    
    DEBUG && console.log('ETHERR TRACER:<SigTotal to parse... ==>'+Sig_Total);
    
    for (var ebx=0; ebx<Sig_Total-1; ebx++)
    {
      self.n = Next_char();
      if(self.n===undefined){DEBUG && console.log('Undefined in expression <Next_char> ! Stop.');break;}
      self.result_Sig =self.result_Sig+self.n;
      DEBUG && console.log(self.result_Sig);
      if (self.result_Sig[ebx] == '.')
      {Sig_Total++;}
    }
    
    self.result_S = self.result_S[0]+[self.result_Sig]+[',']+[self.Zero];
    self.float = Old_float;
  return self.result_S;    
}

function Whole_Num(Sig_Total)
{
    self.Overflow = self.result_Len - Sig_Total-1; //I cannot include this in Init_Var because previous functions modify Sig_Total.
    
    for (self.index = 0; self.index<self.v; self.index++)
    {
    // My hand crafted substitute for .push API!
      self.Zero = self.Zero+['0'];
      DEBUG && console.log(self.Zero);
      DEBUG && console.log('-------------------------');
    }
    for (var ebx = 0; ebx<self.result_Len-self.Overflow; ebx++ )
    {
      self.n = Round_Off(Sig_Total);
      if(self.n===undefined){DEBUG && console.log('Undefined in expression <Round_Off> ! Stop.');break;}
      self.Round = self.Round + self.n;
      DEBUG && console.log("ROUND STATE:"+self.Round);
      DEBUG && console.log('-------------------------');
    }
    self.result_S = self.Round;
    //reset program counter
    self.ecx = 0;
    self.transfer = 1;
    //This one is extremely important and cool piece of code!
    for (var i=0; i<Sig_Total-1; i++)
    {
      self.n = Next_char();
      if(self.n===undefined){DEBUG && console.log('Undefined in expression <Next_char> ! Stop.');break;}
      self.result_Sig =self.result_Sig+self.n;
      DEBUG && console.log("NEXT_CHAR STATE:"+self.result_Sig);
    }
    return;
}

function INIT_VAR(arg,Round_Min)
{
    self.ecx = 0;
    self.count_A = 0;
    self.count_B = 0;
    self.transfer = 0;
    Sig_Total = Sig_Total.toString();
    self.result_S = arg.toString();
    self.result_Len = self.result_S.length;
    self.v = self.result_S.length - Sig_Total; 
    self.N_Zeros = self.result_S.length - 1;
    self.index = 0;
    self.n = 0;
    self.Zero = [];
    self.Round = [];
    self.R_Dot = false;
    self.result_Sig = [];
    self.al = Round_Min; //this varible controls when to round UP or Down.
    self.trash = 0;
    
  return;  
}

function mult(Sig_Total)
{

  if (Sig_Total >= 1)
  {
    
    INIT_VAR(multiply,5);
  
    self.result_F = Float_Point(Sig_Total);
    if (self.float === true)
    {
      return self.result_F;
    }

    if (Sig_Total == I_like_This_Robust_Parser(0,self.result_S))
    {
      return self.result_S;
    }
     
     Whole_Num(Sig_Total);
     
     self.result_S = self.result_S[0]+[self.result_Sig]+[',']+[self.Zero];
    return self.result_S;
  }else{return false;}
  }
  
function div(Sig_Total)
{

  if (Sig_Total >= 1)
  {
    
    INIT_VAR(divide,5);
    
    self.result_F = Float_Point(Sig_Total);
    if (self.float === true)
    {
      return self.result_F;
    }
    
    if (Sig_Total == I_like_This_Robust_Parser(0,self.result_S)||self.EQU1)
    {
      return self.result_S;
    }
    
     Whole_Num(Sig_Total);
    
     self.result_S = self.result_S[0]+[self.result_Sig]+[',']+[self.Zero];
    
    return self.result_S;
  }else{return false;}
  } 
//test function
function Cmp_Float(Num1,Num2)
{
  Num1 = Num1.toString();
  Num1 = Num2.toString();
  Num1 = Num1.length;
  Num2 = Num2.length;
  if (Num1 > Num2)
  {
    return Num2;
  }else if (Num1 < Num2){
    return Num1;
  }else if (Num1 == Num2){return Num2;
  }else{return false;}
}


function Sig_Value_Check(Sig_Value)
{
  if(self.result_S[0]=='0'&&self.result_S[1]=='.'){return Sig_Total;} 
  if(self.Len_EQU)
  { if(Check_Float()){Sig_Total = Sig_Value+1;}
    Sig_Total = Sig_Value;
  }else if(self.Len_EQU===false)
  { DEBUG && console.log(Number(self.Num1_Old),Number(self.Num2_Old));
    if(Check_Float())
    {
      if(Cmp_Float(self.Num1_Old,self.Num2_Old)==self.Num1_Old.length)
      {Sig_Total=self.Num1_Old.length}else
      if(Cmp_Float(self.Num1_Old,self.Num2_Old)==self.Num2_Old.length)
      {Sig_Total=self.Num2_Old.length}
      return Sig_Total;
    }else{Sig_Total=Sig_Value}
    
      //In Progress...
      //But works for the most part...
  }
  return Sig_Total;
}


//Check 23.34+435.234

function add(Sig_Total,Sig_Value)
{

  if (Sig_Total >= 1)
  {
    
    INIT_VAR(addition,6);
    
    Sig_Total = Sig_Value_Check(Sig_Value);
    DEBUG && console.log(Sig_Total);
    
    self.result_F = Float_Point(Sig_Total);
    if (self.float === true)
    {
      return self.result_F;
    }
    
    if (Sig_Total == I_like_This_Robust_Parser(0,self.result_S))
    {
      return self.result_S;
    }
    
    Whole_Num(Sig_Total);
    
    self.result_S = self.result_S[0]+[self.result_Sig]+[',']+[self.Zero];    

    return self.result_S;
  }else{return false;}
  }
  
//Only positive numbers only so far...  
function sub(Sig_Total)
{

  if (Sig_Total >= 1)
  {
    
    INIT_VAR(subtraction,6);
    
    Sig_Total = Sig_Value_Check(Sig_Value);
    DEBUG && console.log(Sig_Total);
    
    self.result_F = Float_Point(Sig_Total);
    if (self.float === true)
    {
      return self.result_F;
    }
    
    if (Sig_Total == I_like_This_Robust_Parser(0,self.result_S)||self.EQU1)
    {
      return self.result_S;
    }
    
    Whole_Num(Sig_Total);
    
    self.result_S = self.result_S[0]+[self.result_Sig]+[',']+[self.Zero];    

    return self.result_S;
  }else{return false;}
  }  

function KERNEL()
{
var first_sign;
for(var l=0; l<Operand_Count; l++)
{
  var eax = Number(Parse_Input([]));
  var ebx;
  var ebp;
  var verb=0;
//  var last_OP=0;
//  var construct_Old;

  DEBUG && console.log("VERB "+self.Verb);
  
  if(Integer_State(l)===true&&l!==0)
  { ebx = eax;self.con=true;DEBUG && console.log("self.con=true");
    self.Num = I_like_This_Robust_Parser(0,ebx.toString());
  }else
  {
    ebp = eax;
    self.Num = I_like_This_Robust_Parser(0,eax.toString());
  }
  
  self.buffer = self.buffer +[','] + self.Num;

  if(Integer_State(l)===true)
  {
    first_sign = self.Verb[l-2];    
    if(first_sign===undefined)
    {first_sign = [];}
    DEBUG && console.log('ADRESS OF first_sign = '+l-2);

    self.construct =  first_sign + ebp + self.Verb[l-1] + ebx;
    verb = expr(self.construct);
  }
  
  if(l==Operand_Count-1&&Integer_State(Operand_Count)===true)
  {
    first_sign = self.Verb[l-1];
    if(first_sign=='*'||first_sign=='/')
    {first_sign = []}
    self.construct = first_sign + eax;
    verb = expr(self.construct);
  }
    
  DEBUG && console.log('EBP= '+ebp);
  DEBUG && console.log('EAX= '+eax);
  DEBUG && console.log('EBX= '+ebx);
  DEBUG && console.log("KERNEL CORE: <BUFFER MEM=>"+self.buffer);
  DEBUG && console.log("KERNEL CORE: <CONSTRUCT MEM=>"+self.construct+" verb = "+verb);
  
  addition = addition+verb;
  subtraction = subtraction+verb; 
  if(verb!==0) //because we cannot multiply by 0 in updater
  {
    multiply = multiply*verb;
    divide =  divide/eax;
  }
  
  DEBUG && console.log("KERNEL CORE: <addition=>"+addition);
  DEBUG && console.log("KERNEL CORE: <multiply=>"+multiply);
  DEBUG && console.log("KERNEL CORE: <divide=>"+divide);
  DEBUG && console.log("KERNEL CORE: <subtraction=>"+subtraction);
  
}
}
  
KERNEL();  
Sig_Total = Get_Smallest(0,self.buffer);
DEBUG && console.log("SIGTOTAL "+Sig_Total);
Sig_Value = Get_Largest(0,self.buffer);

if (self.Verb=="*" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
//  Silly_Sig_Switch(Sig_Total);
  DEBUG && console.log("----------->SILLY MATH CALC START<---------------");
  self.result = mult(Sig_Total);
  console.log ("<------------------------------------------------->");
  console.log("Operands:"+Operation);
  console.log ('RESULT:');
  console.log(multiply);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer. (Numbers after , are not significant!)");
  
}

else if (self.Verb=="/" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
//  Silly_Sig_Switch(Sig_Total);
  DEBUG && console.log("----------->SILLY MATH CALC START<---------------");
  self.result = div(Sig_Total);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+Operation);
  console.log ('RESULT:');
  console.log(divide);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer. (Numbers after , are not significant!)");
  
}

else if (self.Verb=="+" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
//  Silly_Sig_Switch(Sig_Total);
  DEBUG && console.log("----------->SILLY MATH CALC START<---------------");
  self.result = add(Sig_Total,Sig_Value);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+Operation);
  console.log ('RESULT:');
  console.log(addition);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer. (Numbers after , are not significant!)");
  
}

else if (self.Verb=="-" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
//  Silly_Sig_Switch(Sig_Total);
  DEBUG && console.log("----------->SILLY MATH CALC START<---------------");
  self.result = sub(Sig_Total,Sig_Value);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+Operation);
  console.log ('RESULT:');
  console.log(subtraction);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer. (Numbers after , are not significant!)");
  
}

}


var start = new Date().getTime();
main();
var end = new Date().getTime();
var time = end - start;
console.log ('<------------------------------------------------->');
console.log('Script execution time: ' + time+" ms. or "+time/1000+" s.");






