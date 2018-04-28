// Author: Kyryl(Etherr)
// Project Started: 4/10/18  
// viable project mult/div (4/23/18)

var Operation = prompt("Multiplication, Division, Addition, or Subtraction?");
var Num1 = [];
var Num2 = []; 
var Sig_Total = 0;
var Sig_Value = 0;
// instruction pointer or EIP in x86 assembly.
var self = 
{
  first: Num1,
  second: Num2
};

self.Num1 = prompt("First Number?");
self.Num2 = prompt("Second Number?");
var multiply = Number(self.Num1)*Number(self.Num2) ;
var divide = Number(self.Num1)/Number(self.Num2) ;
var addition = Number(self.Num1)+Number(self.Num2) ;
var subtraction = Number(self.Num1)-Number(self.Num2) ;
//if(self.Num1||self.Num2===null){throw new Error(['Ooops, no input. How did that happen? :trollfaceXD'])}
self.Num1 = self.Num1.toString();
self.Num2 = self.Num2.toString();
self.Num1_Old = self.Num1;
self.Num2_Old = self.Num2;

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
  

function I_like_This_Robust_Parser(Sig_Total,Num)
{
  self.Zero_Count = 0;
  self.LONG_TRAIL = false;
  self.Dot_Detected = false;
  var ebx = 0;
  for (var i=0; i<Num.length; i++) {
    console.log('----------------------------------------');
    console.log('Elements:');
    console.log(Num[i]);

    Sig_Total = Sig_Total + 1;
    console.log('Sigs:'+ Sig_Total);
    
    if (Num[i] == '.')
    {
      Sig_Total = Sig_Total - 1;
      console.log('i see dot tok to t eeee! Removing sigFigure... ' + Sig_Total);
      self.Dot_Detected = true;
      if (Number_Type(i-1,Num) === true)
      {
        console.log('ETHERR TRACER: <Real_Number_Before_Dot. Setting carry flag...>' + Sig_Total);
        self.carry = true;
      }
    } 
    
    if (Num[ebx] == '0'&&self.Dot_Detected !==true){
      Sig_Total = Sig_Total - 1;
      console.log('ETHERR TRACER: <No_init_Zero. Removing sigFigure...>' + Sig_Total);
    }else if (Num[i] == '-'){Sig_Total--;ebx++;console.log('ETHERR TRACER: <Negative_Number. Removing sigFigure...>' + Sig_Total);}
    
    if (Num[i] == '0'&&self.Dot_Detected ===true&&self.carry !== true){
      Sig_Total = Sig_Total - 1;
      console.log('ETHERR TRACER: <No_trail_Zero. Removing sigFigure...>' + Sig_Total);
      self.carry = false;
    }
    
    if (Num[i] != '0'&&Num[i] != '.'&&self.Dot_Detected ===true){
      self.carry = true;
      console.log('ETHERR TRACER: <No_After_Dot_Zero. Setting carry flag...>' + Sig_Total);
    }  
    
    if (Num[i]!='0'&&Num[i]!='.'&&self.Dot_Detected===false&&self.No_trail===false)
    {
      self.No_trail = true;
      console.log('ETHERR TRACER: <No_Zero_Or_Dot. Ignoring flags...>' + Sig_Total);
    }else{self.No_trail = false;}
    
    if (Num[i] == '0'&&Num[i] != '.'&&self.Dot_Detected ===false&&self.No_trail === true)
    {
      self.No_trail = false;
      Sig_Total = Sig_Total - 1;
      console.log('ETHERR TRACER: <Saw_Trail_Zero. Removing sigs of Trail Zeroes...>' + Sig_Total);
    }
    
    if(Number_Type(i,Num) === true||Num[i] == '.')
    {
      console.log('ETHERR TRACER: <Number_Status. Char is natural number or "."...>' + Sig_Total);
      self.Zero_Count = 0;
    }else if (Num[i] == '0'){
      self.Zero_Count++;
      console.log('ETHERR TRACER: <Number_Status. Char is zero or Real...>Zero_Count= ' + self.Zero_Count);
    }
    
    if (self.Zero_Count >= 2&&self.Dot_Detected !==true)
    {
      Sig_Total = Sig_Total - 1;
      self.LONG_TRAIL = true;
      console.log('ETHERR TRACER: <Saw_Trail_Zero_Long. Removing sig figure...>' + Sig_Total);
      if (Number_Type(i+1,Num) === true)
      {
        console.log("ETHERR TRACER: <Saw_Natural_Number_End. Restoring zero's sigs...>" + Sig_Total);
        Sig_Total = Sig_Total+self.Zero_Count;
      }
    }
    
    if (i==Num.length-1&&Number_Type(i,Num) === false&&self.Dot_Detected !==true&&self.Zero_Count < 2)
    {
      console.log("ETHERR TRACER: <Saw_End_Zero. Removing sig figure...>" + Sig_Total);
      Sig_Total = Sig_Total - 1;
    }
    
    if (Num[i] >=Num.length)
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

self.Num1_S = I_like_This_Robust_Parser(0,self.Num1);
self.Num2_S = I_like_This_Robust_Parser(0,self.Num2);

function Get_Smallest(Num1,Num2)
{
  if(Num1===Num1.toString()||Num2===Num2.toString())
  {throw new Error(['Ooops, passed in a String. How did that happen?'])}
  
  if (Num1 > Num2)
  {
    self.n = self.Num2.length - self.Num2_S;
    return Num2;
  }else if (Num1 < Num2){
    self.n = self.Num1.length - self.Num1_S;
    return Num1;
  }else if (Num1 == Num2){
    return Num2;
  }else{
    return false;
  }
}

function Get_Largest(Num1,Num2)
{
  if(Num1===Num1.toString()||Num2===Num2.toString())
  {throw new Error(['Ooops, passed in a String. How did that happen?'])}
  
  if (Num1 < Num2)
  {
    self.n = self.Num2.length - self.Num2_S;
    return Num2;
  }else if (Num1 > Num2){
    self.n = self.Num1.length - self.Num1_S;
    return Num1;
  }else if (Num1 == Num2){
    return Num2;
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
    console.log('ETHERR TRACER: <Len_EQU_Len. length equalent...>' + self.Num1.length+"|||"+self.Num2.length);
    self.Len_EQU = true;
  }else{
    console.log('ETHERR TRACER: <Len_NOEQU_Len. length NOP...>' + self.Num1.length+"|||"+self.Num2.length);
    self.Len_EQU = false;
  }
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

function A_Check(Sig_Total)
{   
    //commented parts can be used for characters before the last one. If required. 
    console.log('A_Check: Sig_Total = '+Sig_Total);
    console.log('A_Check: Pointer at...'+self.result_S[Sig_Total]);

    if (self.R_Dot)
    {
    if (self.result_S[Sig_Total] >=self.al)
    {self.ebx=false;console.log('A_Check: <R_Dot> self.ebx = '+self.ebx);

    if (self.result_S[Str_To_Int(Sig_Total)] >=self.al)
    {self.edx = Sig_Total-1}//else{self.edx = Sig_Total-2}
    console.log('A_Check: <R_Dot> self.edx = '+self.edx); 
    Sig_Total = Sig_Total.toString();
    return;}}
    
    console.log(self.result_S[Str_To_Int(Sig_Total)+1]);
    if (self.result_S[Str_To_Int(Sig_Total)+1] >=self.al&&self.R_Dot!==true)
    {self.ebx=false;console.log('A_Check: self.ebx = '+self.ebx);
    
    if (self.result_S[Str_To_Int(Sig_Total)+1] >=self.al)
    {self.edx = Sig_Total;}
//    if (self.result_S[Str_To_Int(Sig_Total)-1] >=self.al)
//    {self.edx = Sig_Total-1;
      if (self.result_S[self.edx] =='.')
      {self.edx = Sig_Total;}
    console.log('A_Check: self.edx = '+self.edx);  
    }else if(self.result_S[Str_To_Int(Sig_Total)+1] === undefined)
    {self.ebx=false;console.log('A_Check: <Undefined last Char> self.ebx = '+self.ebx)}
    else{self.ebx=false;console.log('A_Check: <No Round> self.ebx = '+self.ebx)}
}

//NOTES: 
//Check 5.5/345; no work (solved)
//543.34*0.34551
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
      if (self.result_S[i+1] == '.')
      { if(self.result_S[i+2] >= self.al)
      {self.eax++;
      self.result_R = self.eax;
      console.log('ETHERR TRACER: <ROUND_UP. Whole answer, but float operands...>' + self.result_R);
      self.exit0 = true;
      break;
      }
      }
    }
    
    //to test: -324*1234 = -400000
    //-0.7534*.87963
    if (self.result_S[i+1] >=self.al
        &&self.Zero_Count == i&&self.float !==true&&self.ebx!==false)
    {
      
      self.eax++;
      
      if(self.eax >= 10){self.eax =0;}
      
      if(self.result_S[i-1] >=self.al&&i > self.Zero_Count){self.eax=0;}
      
      self.result_R = self.eax;
      
      console.log('ETHERR TRACER: <ROUND_UP1. Rounded...>' + self.result_R);
      self.transfer = i;
      break;
    }else{
      self.result_R = self.result_S[i];
      console.log('ETHERR TRACER: <ROUND_DOWN. NULL...>' + self.result_R);
    }
    
    if (self.result_S[i+1] >=self.al&&self.float ===true&&self.result_S[i]!='.')
    {
      self.Zero_Count = self.count_B-1;
      console.log('ETHERR TRACER: <Float_Zero_Count_FLOAT _A> = ' + self.Zero_Count);
      console.log('ETHERR TRACER: <Float_INDEX> = ' + i);
      if (i>=self.Zero_Count)
      {

        self.eax++;
        
        if (self.ebx === false){self.eax--;}
        
        //To test: 2.5555+0.0555
        if (i == self.edx)
        {self.eax++;
         console.log(self.eax);
         if(self.eax == 10&&self.ebx === false)
         {self.consistance = false;self.edx--;
          console.log('ETHERR TRACER: <ROUND_UP_FLOAT. Inconsistance! Restart the loop> Exception At:'+self.result_R+' Index:'+i); 
         }      
        }
        
        if(self.eax == 10){self.eax =0;}
        
      //  if(self.eax == 10&&self.result_S[i-1]=='.'){self.eax = 1;}
        
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
          if (self.result_S[i+2] >= self.al){self.eax++;}
        }
        
        if(self.eax == 10){self.eax =0;}
        
        if(self.result_S[i-1] >= self.al&&i > self.Zero_Count){self.eax=0;}
        
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
          
        if(self.result_S[i-1] >= self.al&&i > self.Zero_Count){self.eax=0;}
          
        self.result_R = self.eax;
          
        console.log('ETHERR TRACER: <ROUND_UP2. Rounded...>' + self.result_R);
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
  console.log('ETHERR TRACER: <ROUND_RETURN. ...>' + self.result_R);
  console.log('-------------------------');
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
      
      console.log('ETHERR TRACER: <ROUND_AFTER_DOT. Return sig +2...>'+Sig_Total);
      console.log('---------------------------------------------------');
    }
    
    self.eax = self.result_S[i];
    console.log('ETHERR TRACER: <ROUND_AFTER_DOT.> INDEX:'+i);
  //  console.log(Integer_State(self.eax));
    if (self.eax=='0'&&self.R_Dot===true&&i>=self.count_B)
    {
      self.result_Len++;
      Sig_Total++;
    }else if (Integer_State(self.eax)!==null&&self.eax!=='0')
    {
      console.log('ETHERR TRACER: <ROUND_AFTER_DOT. Float sig return...>'+Sig_Total);
      return Sig_Total;
    }    
  }
  return Sig_Total;
}

function Check_Float()
{
  for (var i=0; i<self.result_Len; i++) { 
    
    if(Integer_State(self.result_S[i])===null&&self.result_S[i]!==0&&self.result_S[i]!== '.')
    {console.log('Trash item:'+self.result_S[i]);self.trash++;}
    
    if (self.result_S[i]== '.')
    {
      self.float = true;
      console.log('Float == true');
      break;
    }else if (self.float !==true&&i+1==self.result_Len){
      console.log('Float == false');
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
    Sig_Total = Sig_After_Dot(Sig_Total)+self.trash;

    //keep 1 more char to parse just in case result is a whole.  
    self.Overflow = self.result_Len - Sig_Total-1;
    
    self.vF = self.result_S.length - Sig_Total-self.count_A;
  //  if (self.div_whole){self.vF = self.result_S.length - Sig_Total-self.count_A-2;}
    
    console.log('ETHERR TRACER:<Trail zero inject ==>'+self.vF);
    
    if (self.R_Dot){self.vF = 0;}
    
    for (self.index = 0; self.index<self.vF; self.index++)
    {
      self.Zero = self.Zero+['0'];
      console.log(self.Zero);
      console.log('-------------------------');
    }
    
    A_Check(Sig_Total);
    
    for (var edx = 0; edx<self.result_Len-self.Overflow; edx++ )
    {
      self.Round = self.Round + Round_Off(Sig_Total);
      console.log("ROUND STATE:"+self.Round);
      console.log('-------------------------');
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
    
    for (var ebx=0; ebx<Sig_Total; ebx++)
    {
      self.result_Sig =self.result_Sig+Next_char();
      console.log(self.result_Sig);
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
      console.log(self.Zero);
      console.log('-------------------------');
    }
    for (var ebx = 0; ebx<self.result_Len-self.Overflow; ebx++ )
    {
      self.Round = self.Round + Round_Off(Sig_Total);
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
    
    if (Sig_Total == I_like_This_Robust_Parser(0,self.result_S))
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
  { console.log(Number(self.Num1_Old),Number(self.Num2_Old));
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
    console.log(Sig_Total);
    
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
    console.log(Sig_Total);
    
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

Sig_Total = Get_Smallest(self.Num1_S,self.Num2_S);
Sig_Value = Get_Largest(self.Num1_S,self.Num2_S);

if (Operation=="m" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
  Silly_Sig_Switch(Sig_Total);
  console.log("----------->SILLY MATH CALC START<---------------");
  self.result = mult(Sig_Total);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+self.Num1 + "*" + self.Num2);
  console.log ('RESULT:');
  console.log(multiply);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer. (Numbers after , are not significant!)");
  
}

else if (Operation=="d" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
  Silly_Sig_Switch(Sig_Total);
  console.log("----------->SILLY MATH CALC START<---------------");
  self.result = div(Sig_Total);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+self.Num1 + "/" + self.Num2);
  console.log ('RESULT:');
  console.log(divide);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer. (Numbers after , are not significant!)");
  
}

else if (Operation=="a" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
  Silly_Sig_Switch(Sig_Total);
  console.log("----------->SILLY MATH CALC START<---------------");
  self.result = add(Sig_Total,Sig_Value);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+self.Num1 + "+" + self.Num2);
  console.log ('RESULT:');
  console.log(addition);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer. (Numbers after , are not significant!)");
  
}

else if (Operation=="s" && self.OnLoopFinish === true) {
  console.log("----------->FINAL SIG CALC = "+Sig_Total+"<---------------");
  Silly_Sig_Switch(Sig_Total);
  console.log("----------->SILLY MATH CALC START<---------------");
  self.result = sub(Sig_Total,Sig_Value);
  console.log ('<------------------------------------------------->');
  console.log("Operands:"+self.Num1 + "-" + self.Num2);
  console.log ('RESULT:');
  console.log(subtraction);
  console.log ('SIGFIGURES OR FAKE MATH RESULT:');
  console.log(self.result+"   --->Rounded answer. (Numbers after , are not significant!)");
  
}








