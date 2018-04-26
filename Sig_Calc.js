// Author: Kyryl(Etherr)
// Project Started: 4/10/18  
// viable project mult/div (4/23/18)

var Penis = prompt("Multiplication, Division, Addition, or Subtraction?");
var Num1 = [];
var Num2 = []; 
var Sig_Total = 0;

// instruction pointer or EIP in x86 assembly.
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
self.Num1_Old = self.Num1;
self.Num2_Old = self.Num2;

function Number_Type(i)
{
  var Natural_Number = false;
  for(var num = 1; num>0; num++)
  {
  if (self.Parser_ID == 1)
  {
    if (self.Num1[i]>=num)
    {
      Natural_Number = true;
      return Natural_Number;
    }else if (self.Num1[i] != num){
      Natural_Number = false;
      return Natural_Number;
    }
  }else{
    if (self.Num2[i]>=num)
    {
      Natural_Number = true;
      return Natural_Number;
    }else if (self.Num2[i] != num){
      Natural_Number = false;
      return Natural_Number;
    }
  }
  }
}

function I_like_This_Robust_Parser(Sig_Total)
{
  self.Zero_Count = 0;
  self.LONG_TRAIL = false;
  self.Dot_Detected = false;
  self.Parser_ID = 1;
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
      if (Number_Type(i-1) === true)
      {
        console.log('ETHERR TRACER: <Real_Number_Before_Dot. Setting carry flag...>' + Sig_Total);
        self.carry = true;
      }
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
    
    if (self.Zero_Count >= 2&&self.Dot_Detected !==true)
    {
      Sig_Total = Sig_Total - 1;
      self.LONG_TRAIL = true;
      console.log('ETHERR TRACER: <Saw_Trail_Zero_Long. Removing sig figure...>' + Sig_Total);
      if (Number_Type(i+1) === true)
      {
        console.log("ETHERR TRACER: <Saw_Natural_Number_End. Restoring zero's sigs...>" + Sig_Total);
        Sig_Total = Sig_Total+self.Zero_Count;
      }
    }
    
    if (i==self.Num1.length-1&&Number_Type(i) === false&&self.Dot_Detected !==true&&self.Zero_Count < 2)
    {
      console.log("ETHERR TRACER: <Saw_End_Zero. Removing sig figure...>" + Sig_Total);
      Sig_Total = Sig_Total - 1;
    }
    
   //  if (self.Num1.length==2&&self.Zero_Count==1)
   // {
   //   Sig_Total = Sig_Total - 1;
   //   console.log('ETHERR TRACER: <Saw_Trail_Zero_Len_2. Removing sig figure...>' + Sig_Total);
   // }
    
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
  self.carry = false;
  self.OnLoopFinish = true;
  self.Num1 = self.Num1_Old;
  return Sig_Total;
}

function I_like_This_Sexy_Parser(Sig_Total)
{
  self.Zero_Count = 0;
  self.LONG_TRAIL = false;
  self.Dot_Detected = false;
  self.Parser_ID = 2;
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
      if (Number_Type(i-1) === true)
      {
        console.log('ETHERR TRACER: <Real_Number_Before_Dot. Setting carry flag...>' + Sig_Total);
        self.carry = true;
      }
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
    
    if (self.Zero_Count >= 2&&self.Dot_Detected !==true)
    {
      Sig_Total = Sig_Total - 1;
      self.LONG_TRAIL = true;
      console.log('ETHERR TRACER: <Saw_Trail_Zero_Long. Removing sig figure...>' + Sig_Total);
      if (Number_Type(i+1) === true)
      {
        console.log("ETHERR TRACER: <Saw_Natural_Number_End. Restoring zero's sigs...>" + Sig_Total);
        Sig_Total = Sig_Total+self.Zero_Count;
      }
    }
    
    if (i==self.Num2.length-1&&Number_Type(i) === false&&self.Dot_Detected !==true&&self.Zero_Count < 2)
    {
      console.log("ETHERR TRACER: <Saw_End_Zero. Removing sig figure...>" + Sig_Total);
      Sig_Total = Sig_Total - 1;
    }
    
  //  if (self.Num2.length==2&&self.Zero_Count==1)
  //  {
   //   Sig_Total = Sig_Total - 1;
   //   console.log('ETHERR TRACER: <Saw_Trail_Zero_Len_2. Removing sig figure...>' + Sig_Total);
   // }
    
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
  self.carry = false;
  self.OnLoopFinish = true;
  self.Num2 = self.Num2_Old;
  return Sig_Total;
}

function Get_Smallest()
{
  self.Num1_S = I_like_This_Robust_Parser(0);
  self.Num2_S = I_like_This_Sexy_Parser(0);
  
  if (self.Num1_S > self.Num2_S)
  {
    self.n = self.Num2.length - self.Num2_S;
    return self.Num2_S;
  }else if (self.Num1_S < self.Num2_S){
    self.n = self.Num1.length - self.Num1_S;
    return self.Num1_S;
  }else if (self.Num1_S == self.Num2_S){
    return self.Num2_S;
  }else{
    return false;
  }
}

function Get_Largest()
{
  self.Num1_S = I_like_This_Robust_Parser(0);
  self.Num2_S = I_like_This_Sexy_Parser(0);
  
  if (self.Num1_S < self.Num2_S)
  {
    self.n = self.Num2.length - self.Num2_S;
    return self.Num2_S;
  }else if (self.Num1_S > self.Num2_S){
    self.n = self.Num1.length - self.Num1_S;
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

function Str_To_Int(list)
{
  var dec = 0;
  var len = list.length;
  for(var i=0; i<len; i++)
  {
    dec = dec*10+(list[i]-'0');
  }
  return dec;
}

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
  else if( int & 1 === 0)
  {
      // EVEN (2,4,8...)
      return false;
  }else{return null;}
}

function Next_char()
{
  console.log('ETHERR TRACER: <NEXT_CHAR_START. OLD length equ...>' + self.result_Len);
   
  self.ecx=self.ecx+1;
  self.New_Length = self.result_Len;
  console.log('ETHERR TRACER: <NEXT_CHAR. NEW length equ...>' + self.New_Length);
  console.log('ETHERR TRACER: <NEXT_CHAR. ecx equ...>' + self.ecx);
  
  for (var i=self.transfer; i<=self.New_Length; i++) { 

    self.New_Length = self.result_Len-self.ecx;  
    
    self.i = self.result_S[i];
    console.log('ETHERR TRACER: <NEXT_CHAR. return value...>' + self.i);
    console.log('ETHERR TRACER: <NEXT_CHAR. index value...>' + i);
    
    // if i corresponds to the result value for that index --> break
    //The most beautiful code ever!!!
    self.transfer = i+1;
    if (i==self.ecx)
    {
      console.log('ETHERR TRACER: <NEXT_CHAR. Break...>' );
      break;
    }
  }
    console.log('ETHERR TRACER: <NEXT_CHAR_END. NEW length equ...>' + self.New_Length);
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
      console.log("ETHERR TRACER: <Dot_Detected_After. Counter...>"+self.count_A);
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
      if(self.result_S[Sig_Total] == '.'){console.log('Round Float == false'); self.float = false;}
      console.log("ETHERR TRACER: <Dot_Detected_Before. Counter...>"+self.count_B);
      break;
    }
  }
  }
  return; 
}

function A_Check()
{
    if (self.R_Dot){if (self.result_S[Sig_Total+1] >=5)
    {self.ebx=false;}if (self.result_S[Sig_Total-1] >=5)
    {self.edx = Sig_Total-2}return;}
    if (self.result_S[Sig_Total+1] >=5&&self.R_Dot!==true)
    {self.ebx=false;}if (self.result_S[Sig_Total] >=5)
    {self.edx = Sig_Total-1;}
}

function Round_Off()
{
  
  //-1 because array numbering starts at 0 
  self.Zero_Count = Sig_Total-1;
  for (var i=self.transfer; i<self.result_S.length-self.Overflow; i++) { 
    
    self.eax = self.result_S[i];
    
    if (self.float!==true)
    {
      if (self.result_S[i+1] == '.')
      { if(self.result_S[i+2] >= 5)
      {self.eax++;
      self.result_R = self.eax;
      console.log('ETHERR TRACER: <ROUND_UP. Whole answer, but float operands...>' + self.result_R);
      self.exit0 = true;
      break;
      }
      }
    }
    
    if (self.result_S[i+1] >= 5&&self.Zero_Count == i&&self.float !==true)
    {
      
      self.eax++;
      
      if(self.eax >= 10){self.eax =0;}
      
      if(self.result_S[i-1] >= 5&&i > self.Zero_Count){self.eax=0;}
      
      self.result_R = self.eax;
      
      console.log('ETHERR TRACER: <ROUND_UP. Rounded...>' + self.result_R);
      self.transfer = i;
      break;
    }else{
      self.result_R = self.result_S[i];
      console.log('ETHERR TRACER: <ROUND_DOWN. NULL...>' + self.result_R);
    }
    
    if (self.result_S[i+1] >= 5&&self.float ===true&&self.result_S[i]!='.')
    {
      self.Zero_Count = self.count_B-1;
      console.log('ETHERR TRACER: <Float_Zero_Count_FLOAT _A> = ' + self.Zero_Count);
      console.log('ETHERR TRACER: <Float_INDEX> = ' + i);
      if (i>=self.Zero_Count)
      {

        self.eax++;
        
        if (self.ebx === false){self.eax--;}
        
        if (i == self.edx){self.eax++;}
        
        if(self.eax == 10){self.eax =0;}
        
        if(i>self.edx){self.eax=0;}
        
        self.result_R = self.eax;
        
        console.log('ETHERR TRACER: <ROUND_UP_FLOAT. Rounded _A>' + self.result_R);
        self.transfer = i+1;
        break;
      }else{self.result_R = self.result_S[i];}
      
      self.Zero_Count = self.count_B-2;
      console.log('ETHERR TRACER: <Float_Zero_Count_FLOAT _B> = ' + self.Zero_Count);
      if (self.Zero_Count == i)
      {
        
        self.eax++;
        
        if (self.result_S[i+1] == '.')
        {
          if (self.result_S[i+2] >= 5){self.eax++;}
        }
        
        if(self.eax == 10){self.eax =0;}
        
        if(self.result_S[i-1] >= 5&&i > self.Zero_Count){self.eax=0;}
        
        self.result_R = self.eax;
        
        console.log('ETHERR TRACER: <ROUND_UP_FLOAT. Rounded _B>' + self.result_R);
        self.transfer = i+1;
        break;
      }else{self.result_R = self.result_S[i];}  
      
      self.Zero_Count = Sig_Total-1;
      if (self.Zero_Count == i)
      {
        
        self.eax++;
          
        if(self.eax >= 10){self.eax =0;}
          
        if(self.result_S[i-1] >= 5&&i > self.Zero_Count){self.eax=0;}
          
        self.result_R = self.eax;
          
        console.log('ETHERR TRACER: <ROUND_UP. Rounded...>' + self.result_R);
        self.transfer = i+1;
        break;
      }else{self.result_R = self.result_S[i];} 
    }
    
    // 0. answer round
    if (self.R_Dot&&self.float)
    {
      if(self.result_S[Sig_Total]>=5&& i == Sig_Total-1)
      {
        self.eax = self.result_S[Sig_Total-1];
        self.eax++;
        if(self.eax == 10){self.eax =0;}
        self.result_R = self.eax;
      }else{self.result_R = self.result_S[i];}
    }    
    
    if (self.ecx == i){self.transfer = i+1; break;}
    
  }
  console.log('ETHERR TRACER: <ROUND_RETURN. ...>' + self.result_R);
  console.log('-------------------------');
  self.ecx++;
  return self.result_R;
}

function Sig_After_Dot(Sig_Total)
{
  for (var i=0; i<self.result_Len; i++) 
  {
    
    if(self.result_S[0]=='0'&&self.result_S[1]=='.'&&self.R_Dot !==true) 
    {
      //This part is hardcoded for 0. possibility as an answer. 
      //fucking string; i am too lazy to convert it to int so do it by increment 2 times.
      //have to increase length too, since got more sigs...
      Sig_Total++;
      Sig_Total++;
      self.result_Len = self.result_S.length + 2;
      self.R_Dot = true;
      
      console.log('ETHERR TRACER: <ROUND_AFTER_DOT. Return sig +2...>'+Sig_Total);
      console.log('---------------------------------------------------');
    }
    self.eax = self.result_S[i];
    if (self.eax=='0'&&self.R_Dot===true&&i>=2)
    {
      self.result_Len++;
      Sig_Total++;
    }else if (Integer_State(self.eax)!==null)
    {
      console.log('ETHERR TRACER: <ROUND_AFTER_DOT. Float sig return...>'+Sig_Total);
      return Sig_Total;
    }    
  }
  return Sig_Total;
}

function Float_Point()
{
  for (var i=0; i<self.result_Len; i++) { 
    if (self.result_S[i]== '.')
    {
      self.float = true;
      console.log('Float == true');
      break;
    }else if (self.float !==true&&i+1==self.result_Len){
      console.log('Float == false');
      return;
    }
  }
    Round_Point_After();
    Round_Point_Before();
    Sig_Total = Sig_After_Dot(Sig_Total);
    
    //keep 1 more char to parse just in case result is a whole.  
    self.Overflow = self.result_Len - Sig_Total-1;
    
    self.vF = self.result_S.length - Sig_Total-self.count_A;
    if (self.div_whole){self.vF = self.result_S.length - Sig_Total-self.count_A-2;}
    
    console.log('ETHERR TRACER:<Trail zero inject ==>'+self.vF);
    
    if (self.R_Dot){self.vF = 0;}
    
    for (self.index = 0; self.index<self.vF; self.index++)
    {
      self.Zero = self.Zero+['0'];
      console.log(self.Zero);
      console.log('-------------------------');
    }
    
    A_Check();
    
    for (var edx = 0; edx<self.result_Len-self.Overflow; edx++ )
    {
      self.Round = self.Round + Round_Off();
      console.log("ROUND STATE:"+self.Round);
      console.log('-------------------------');
      if(self.exit0){break;}
    }
    self.result_S = self.Round;

    self.ecx = 0;
    
    //example of birwise xor in JS. Just for fun.
    self.transfer = self.transfer ^ self.transfer;
    
    if (self.R_Dot){Sig_Total--;}
    
    for (var ebx=0; ebx<Sig_Total-1; ebx++)
    {
      self.result_Sig =self.result_Sig+Next_char();
      console.log(self.result_Sig);
      if (self.result_Sig[ebx] == '.')
      {Sig_Total++;}
    }
    
    self.result_S = self.result_S[self.n]+[self.result_Sig]+[',']+[self.Zero];
  return self.result_S;    
}

function INIT_VAR()
{
    self.ecx = 0;
    self.count_A = 0;
    self.count_B = 0;
    self.transfer = 0;
    Sig_Total = Sig_Total.toString();
    self.result_S = multiply.toString();
    self.result_Len = self.result_S.length;
    self.v = self.result_S.length - Sig_Total; 
    self.N_Zeros = self.result_S.length - 1;
    self.index = 0;
    self.n = 0;
    self.Zero = [];
    self.Round = [];
    self.R_Dot = false;
    self.result_Sig = [];
  return;  
}

function mult(Sig_Total)
{

  if (Sig_Total >= 1)
  {
    
    INIT_VAR();
  //  Round_After_Dot();
    self.result_F = Float_Point(Sig_Total);
    if (self.float === true)
    {
      return self.result_F;
    }
    
    self.Num1 = self.result_S;
    if (Sig_Total == I_like_This_Robust_Parser(0))
    {
      return self.result_S;
    }
      
    for (self.index = 0; self.index<self.v; self.index++)
    {
    // My hand crafted substitute for .push API!
      self.Zero = self.Zero+['0'];
      console.log(self.Zero);
      console.log('-------------------------');
    }
    for (var ebx = 0; ebx<self.result_Len; ebx++ )
    {
      self.Round = self.Round + Round_Off();
      console.log("ROUND STATE:"+self.Round);
      console.log('-------------------------');
    }
    self.result_S = self.Round;
    //reset program counter
    self.ecx = 0;
    self.transfer = 1;
    //This one is extremely important and cool piece of code!
    for (var i=0; i<Sig_Total-1; i++)
    {
      self.result_Sig =self.result_Sig+Next_char();
      console.log("NEXT_CHAR STATE:"+self.result_Sig);
    }
    
   self.result_S = self.result_S[self.n]+[self.result_Sig]+[self.Zero];
    
    return self.result_S;
  }else{return false;}
  }
  
function div(Sig_Total)
{

  if (Sig_Total >= 1)
  {
    
    INIT_VAR();
    self.result_S = divide.toString();
    
    self.div_whole = true;
    
    self.result_F = Float_Point(Sig_Total);
    if (self.float === true)
    {
      return self.result_F;
    }
    
    self.Num1 = self.result_S;
    if (Sig_Total == I_like_This_Robust_Parser(0))
    {
      return self.result_S;
    }
      
    for (self.index = 0; self.index<self.v; self.index++)
    {
    // My hand crafted substitute for .push API!
      self.Zero = self.Zero+['0'];
      console.log(self.Zero);
      console.log('-------------------------');
    }
    for (var ebx = 0; ebx<self.result_Len; ebx++ )
    {
      self.Round = self.Round + Round_Off();
      console.log("ROUND STATE:"+self.Round);
      console.log('-------------------------');
    }
    self.result_S = self.Round;
    //reset program counter
    self.ecx = 0;
    
    //This one is extremely important and cool piece of code!
    for (var i=0; i<Sig_Total-1; i++)
    {
      self.result_Sig =self.result_Sig+Next_char();
      console.log("NEXT_CHAR STATE:"+self.result_Sig);
    }
    
   self.result_S = self.result_S[self.n]+[self.result_Sig]/*+[',']*/+[self.Zero];
    
    return self.result_S;
  }else{return false;}
  } 

function add(Sig_Total)
{

  if (Sig_Total >= 1)
  {
    
    INIT_VAR();
    
    self.Num1 = self.result_S;
    if (Sig_Total == I_like_This_Robust_Parser(0))
    {
      return self.result_S;
    }
      
    for (self.index = self.index; self.index<self.v; self.index++)
    {
      self.Zero.push('0');
      self.Zero.join("");
      console.log(self.Zero.join(""));
      console.log(self.Zero.length);
      console.log('-------------------------');
    }
      

    
    return self.result_S;
  }else{return false;}
  }
  
function sub(Sig_Total)
{

  if (Sig_Total >= 1)
  {
    
    INIT_VAR();
    
    self.Num1 = self.result_S;
    if (Sig_Total == I_like_This_Robust_Parser(0))
    {
      return self.result_S;
    }
      
    for (self.index = self.index; self.index<self.v; self.index++)
    {
      self.Zero.push('0');
      self.Zero.join("");
      console.log(self.Zero.join(""));
      console.log(self.Zero.length);
      console.log('-------------------------');
    }
      

    
    return self.result_S;
  }else{return false;}
  }  

Sig_Total = Get_Smallest();

if (Penis=="m" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
  Silly_Sig_Switch(Sig_Total);
  console.log("----------->SILLY MATH CALC START<---------------");
  self.result = mult(Sig_Total);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+self.Num1 + "*" + self.Num2);
  console.log ('RESULT:');
  console.log(multiply);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer");
  
}

else if (Penis=="d" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
  Silly_Sig_Switch(Sig_Total);
  console.log("----------->SILLY MATH CALC START<---------------");
  self.result = div(Sig_Total);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+self.Num1 + "/" + self.Num2);
  console.log ('RESULT:');
  console.log(divide);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer");
  
}

else if (Penis=="a" && self.OnLoopFinish === true) {
  Sig_Total = Get_Largest();
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
  Silly_Sig_Switch(Sig_Total);
  console.log("----------->SILLY MATH CALC START<---------------");
  self.result = add(Sig_Total);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+self.Num1 + "+" + self.Num2);
  console.log ('RESULT:');
  console.log(addition);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer");
  
}

else if (Penis=="s" && self.OnLoopFinish === true) {
  Sig_Total = Get_Largest();
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
  Silly_Sig_Switch(Sig_Total);
  console.log("----------->SILLY MATH CALC START<---------------");
  self.result = sub(Sig_Total);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+self.Num1 + "-" + self.Num2);
  console.log ('RESULT:');
  console.log(subtraction);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer");
  
}








